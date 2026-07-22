import { useEffect, useLayoutEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { useI18n } from "@/i18n/useI18n"
import { useMediaQuery } from "@/hooks/useMediaQuery"

// Hero visual: recurring tasks orbiting one automated core.
// The ring draws itself on load; a satellite dot keeps circulating.
const RING_RADIUS = 170
const RING_CIRCUMFERENCE = Math.round(2 * Math.PI * RING_RADIUS)

// Five chips evenly spaced on the orbit, starting at the top.
const CHIP_ANGLES = [-90, -18, 54, 126, 198]

// Same cap the expanded panel is allowed to grow to, shared between the real
// panel and the hidden measurer that computes each panel's natural size.
const PANEL_MAX_WIDTH = "min(320px, calc(100vw - 3rem))"
const FALLBACK_PANEL_SIZE = { width: 320, height: 336 }

// A paragraph that opens with a single word immediately followed by ":" (e.g.
// "Probleem:", "Problem:", "Oplossing:") gets that label bolded/uppercased.
// Matched structurally (not against a hardcoded word list) so it keeps working
// as the copy gets translated across locales without needing code changes.
const LABEL_PATTERN = /^(\p{L}+):\s*/u

function renderDescription(text: string) {
  return text.split("\n").map((paragraph, i) => {
    const match = paragraph.match(LABEL_PATTERN)
    return (
      <p key={i} className={i > 0 ? "mt-2" : undefined}>
        {match ? (
          <>
            <strong className="uppercase">{match[1]}:</strong>{" "}
            {paragraph.slice(match[0].length)}
          </>
        ) : (
          paragraph
        )}
      </p>
    )
  })
}

function PanelContent({ task, description }: { task: string; description: string }) {
  return (
    <>
      <span className="font-display text-center text-sm font-semibold text-ink">{task}</span>
      <div className="mt-1.5 text-left text-sm leading-snug text-stone">
        {renderDescription(description)}
      </div>
    </>
  )
}

export function OrbitDiagram() {
  const { t } = useI18n()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const canHover = useMediaQuery("(hover: hover) and (pointer: fine)")
  const rootRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<number | undefined>(undefined)
  const measurerRefs = useRef<(HTMLDivElement | null)[]>([])
  const [panelSizes, setPanelSizes] = useState<{ width: number; height: number }[]>(() =>
    t.home.hero.diagramTasks.map(() => FALLBACK_PANEL_SIZE)
  )

  function cancelClose() {
    window.clearTimeout(closeTimer.current)
  }

  function scheduleClose() {
    cancelClose()
    closeTimer.current = window.setTimeout(() => setActiveIndex(null), 150)
  }

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null)
    }
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setActiveIndex(null)
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener("pointerdown", onPointerDown)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("pointerdown", onPointerDown)
    }
  }, [activeIndex])

  useEffect(() => cancelClose, [])

  // Each panel's expanded size is its own text's natural size, not one shared
  // constant — measured off-screen (see the hidden block below) since CSS can't
  // transition to/from `auto`, and re-measured on resize because the width cap
  // itself depends on viewport width.
  useLayoutEffect(() => {
    function measure() {
      setPanelSizes(
        measurerRefs.current.map((el) =>
          el ? { width: el.offsetWidth, height: el.offsetHeight } : FALLBACK_PANEL_SIZE
        )
      )
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [t.home.hero.diagramTasks, t.home.hero.diagramDescriptions])

  return (
    <div ref={rootRef} className="relative mx-auto aspect-square w-full max-w-[26rem]">
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
        const isActive = activeIndex === i

        return (
          <button
            key={task}
            type="button"
            aria-expanded={isActive}
            onMouseEnter={
              canHover
                ? () => {
                    cancelClose()
                    setActiveIndex(i)
                  }
                : undefined
            }
            onMouseLeave={canHover ? scheduleClose : undefined}
            onFocus={
              canHover
                ? () => {
                    cancelClose()
                    setActiveIndex(i)
                  }
                : undefined
            }
            onBlur={canHover ? scheduleClose : undefined}
            onClick={
              canHover ? undefined : () => setActiveIndex((cur) => (cur === i ? null : i))
            }
            className={cn(
              // Anchored by its top edge (see `top` below), not vertically centered, so
              // growing taller on expand folds the panel downward instead of both ways.
              // Width/min-height are explicit on both states (never `auto`) so they're
              // real animatable endpoints instead of snapping instantly — on the active
              // state they come from the per-node measured size (`panelSizes`) via the
              // inline style below, not a shared constant.
              "absolute -translate-x-1/2 overflow-hidden border bg-card shadow-xs",
              "focus-visible:z-20 focus-visible:ring-2 focus-visible:ring-bronze focus-visible:outline-none",
              isActive
                ? "z-20 rounded-3xl border-bronze shadow-md"
                : "w-40 min-h-7 rounded-[0.875rem] border-line hover:z-10 hover:scale-110 hover:shadow-md"
            )}
            style={{
              left: `${x}%`,
              // 0.875rem = half the collapsed pill's height (min-h-7), so the top edge
              // lands in the same place as the old centered pill did.
              top: `calc(${y}% - 0.875rem)`,
              width: isActive ? `${panelSizes[i].width}px` : undefined,
              minHeight: isActive ? `${panelSizes[i].height}px` : undefined,
              transitionProperty: "width, min-height, border-radius, border-color, box-shadow",
              transitionDuration: "0.38s",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Always absolutely positioned (never `block`) so neither layer ever drives
                the button's own layout/size — they only cross-fade on top of a box whose
                size animates independently, which is what keeps the whole thing feeling
                like one continuous motion instead of a content reflow snap. */}
            <span
              aria-hidden={isActive}
              className={cn(
                "absolute inset-0 flex items-center justify-center px-3 font-mono text-xs whitespace-nowrap transition-opacity ease-out",
                isActive
                  ? "pointer-events-none opacity-0 duration-150"
                  : "opacity-100 delay-75 duration-300"
              )}
            >
              {task}
            </span>
            <span
              aria-hidden={!isActive}
              className={cn(
                // Fixed width (not inset-0) so line-wrapping is computed once at the
                // panel's final size, not re-wrapped on every frame of the width
                // transition — the button's `overflow-hidden` reveals it as it grows.
                // `left-1/2 -translate-x-1/2` mirrors the button's own centering, which
                // keeps this content's center pinned to the button's (animation-stable)
                // center point throughout.
                "absolute top-0 left-1/2 -translate-x-1/2 flex flex-col px-5 py-4 transition-opacity ease-out",
                isActive
                  ? "opacity-100 delay-75 duration-300"
                  : "pointer-events-none opacity-0 duration-150"
              )}
              style={{ width: `${panelSizes[i].width}px` }}
            >
              <PanelContent task={task} description={t.home.hero.diagramDescriptions[i]} />
            </span>
          </button>
        )
      })}

      {/* Hidden off-screen clones, one per node, used only to measure each panel's
          natural content size (see the layout effect above) — same markup/classes as
          the real expanded panel, but `w-fit` up to the same cap instead of being
          pinned to the button's box, so `offsetWidth`/`offsetHeight` give the real
          per-node target size. */}
      <div
        aria-hidden
        className="invisible pointer-events-none fixed"
        style={{ top: -9999, left: -9999 }}
      >
        {t.home.hero.diagramTasks.map((task, i) => (
          <div
            key={task}
            ref={(el) => {
              measurerRefs.current[i] = el
            }}
            // `border` (not just padding) matches the real button's box-sizing:border-box
            // exactly, so the measured size doesn't come up short by the border width.
            className="flex w-fit flex-col border border-transparent px-5 py-4"
            style={{ maxWidth: PANEL_MAX_WIDTH }}
          >
            <PanelContent task={task} description={t.home.hero.diagramDescriptions[i]} />
          </div>
        ))}
      </div>
    </div>
  )
}
