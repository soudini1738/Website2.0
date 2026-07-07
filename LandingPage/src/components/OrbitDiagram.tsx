import { useI18n } from "@/i18n/useI18n"

// Hero visual: recurring tasks orbiting one automated core.
// The ring draws itself on load; a satellite dot keeps circulating.
const RING_RADIUS = 170
const RING_CIRCUMFERENCE = Math.round(2 * Math.PI * RING_RADIUS)

// Five chips evenly spaced on the orbit, starting at the top.
const CHIP_ANGLES = [-90, -18, 54, 126, 198]

export function OrbitDiagram() {
  const { t } = useI18n()

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
      <p className="sr-only">{t.home.hero.diagramLabel}</p>
      <svg viewBox="0 0 400 400" aria-hidden="true" className="absolute inset-0 size-full">
        <circle
          cx="200"
          cy="200"
          r={RING_RADIUS}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeDasharray={RING_CIRCUMFERENCE}
          className="orbit-draw"
          style={{ "--orbit-circumference": `${RING_CIRCUMFERENCE}` } as React.CSSProperties}
        />
        <circle
          cx="200"
          cy="200"
          r="118"
          fill="none"
          stroke="var(--line)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
        <g className="orbit-travel">
          <circle cx="200" cy="30" r="5" fill="var(--bronze)" />
        </g>
      </svg>

      {/* The logo file has generous padding around the mark — crop it via scale */}
      <div className="absolute top-1/2 left-1/2 flex size-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden">
        <img src="/pics/Logo.png" alt="" className="size-full scale-[2] object-contain" />
      </div>

      {t.home.hero.diagramTasks.map((task, i) => {
        const angle = (CHIP_ANGLES[i] * Math.PI) / 180
        const x = 50 + 42.5 * Math.cos(angle)
        const y = 50 + 42.5 * Math.sin(angle)
        return (
          <a
            key={task}
            href="#services"
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-line bg-card px-3 py-1.5 font-mono text-xs whitespace-nowrap shadow-xs transition hover:z-10 hover:scale-110 hover:shadow-md focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-bronze focus-visible:outline-none"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            {task}
          </a>
        )
      })}
    </div>
  )
}
