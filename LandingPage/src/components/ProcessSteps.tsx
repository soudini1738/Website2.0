import { cn } from "@/lib/utils"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "@/components/Section"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { useScrollProgress } from "@/hooks/useScrollProgress"

export interface ProcessStep {
  title: string
  body: string
  deliverable: string
}

// Node positions on the arc "M0,120 Q600,-30 1200,120" at t = .125/.375/.625/.875,
// aligned with the centers of the four grid columns below.
const NODES: Array<[number, number]> = [
  [150, 87],
  [450, 50],
  [750, 50],
  [1050, 87],
]

// With pathLength=1 the nodes sit at fractions 0.125..0.875 along the path.
const NODE_START = 0.125
const NODE_SPAN = 0.75

// Each step's rise takes STEP_ENTER of total progress; step starts are spread so
// step 01 enters as soon as the pin begins and step 04 lands exactly at the end.
const STEP_ENTER = 0.3

// Blur resolves early in the rise: hazy on entry, fully sharp at 60% of the way up.
const BLUR_RESOLVE = 0.6

// Owns its full section shell: on lg (motion allowed) the panel pins while the
// scroll position scrubs the steps in; elsewhere it renders the one-shot layout.
export function ProcessSteps({
  id,
  kicker,
  title,
  standfirst,
  steps,
}: {
  id?: string
  kicker: string
  title: string
  standfirst?: string
  steps: ProcessStep[]
}) {
  const isLg = useMediaQuery("(min-width: 64rem)")
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)")
  const scrollDriven = isLg && !reducedMotion
  const { ref, progress } = useScrollProgress<HTMLDivElement>(scrollDriven)

  // All steps rise from below the viewport in order: step 01 as soon as the pin
  // starts scrolling, step 04 landing exactly when the pin releases.
  const stepStart = (i: number) => (i * (1 - STEP_ENTER)) / (steps.length - 1)
  const stepProgress = (i: number) =>
    !scrollDriven ? 1 : Math.min(1, Math.max(0, (progress - stepStart(i)) / STEP_ENTER))

  // The gold line reaches node i exactly when step i finishes its rise.
  const arcProgress = Math.max(
    0,
    NODE_START + (NODE_SPAN * (progress - STEP_ENTER)) / (1 - STEP_ENTER)
  )

  return (
    <section id={id} className="scroll-mt-20 border-t border-line">
      <div
        ref={ref}
        className={cn("mx-auto max-w-6xl px-6", scrollDriven ? "h-[300vh]" : "py-24 md:py-32")}
      >
        <Reveal
          className={cn(scrollDriven && "sticky top-0 flex h-screen flex-col justify-center")}
        >
          <SectionHeading
            kicker={kicker}
            title={title}
            standfirst={standfirst}
            className={scrollDriven ? "mb-12" : "mb-14 md:mb-20"}
          />

          <svg
            viewBox="0 0 1200 140"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="hidden h-[140px] w-full lg:block"
          >
            <path
              d="M0,120 Q600,-30 1200,120"
              fill="none"
              stroke="var(--line)"
              strokeWidth="1.5"
            />
            <path
              d="M0,120 Q600,-30 1200,120"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1.5"
              pathLength={1}
              className={scrollDriven ? undefined : "orbit-path"}
              style={
                scrollDriven
                  ? { strokeDasharray: 1, strokeDashoffset: 1 - arcProgress }
                  : undefined
              }
            />
            {NODES.map(([x, y], i) => (
              <circle
                key={x}
                cx={x}
                cy={y}
                r="7"
                stroke="var(--bronze)"
                strokeWidth="1.5"
                className={scrollDriven ? undefined : "orbit-node"}
                style={
                  scrollDriven
                    ? {
                        fill: stepProgress(i) > 0.5 ? "var(--bronze)" : "var(--paper)",
                        transition: "fill 0.3s ease",
                      }
                    : { transitionDelay: `${0.5 + i * 0.35}s` }
                }
              />
            ))}
          </svg>

          <ol className="mt-6 grid gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative border-l border-line pl-6 lg:border-l-0 lg:pl-0"
                style={
                  scrollDriven
                    ? {
                        transform: `translateY(${(1 - stepProgress(i)) * 100}vh)`,
                        opacity: Math.min(1, stepProgress(i) / 0.5),
                        filter: `blur(${Math.max(0, 1 - stepProgress(i) / BLUR_RESOLVE) * 10}px)`,
                      }
                    : undefined
                }
              >
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[5.5px] size-2.5 rounded-full bg-bronze lg:hidden"
                />
                <p className="kicker tnum">0{i + 1}</p>
                <h3 className="font-display mt-3 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                <p className="mt-4 font-mono text-xs leading-relaxed text-bronze">
                  {step.deliverable}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
