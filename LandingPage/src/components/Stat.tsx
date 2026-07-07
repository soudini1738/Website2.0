import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll"

// Count-up metric tile; animates once when scrolled into view.
export function Stat({
  value,
  prefix,
  suffix,
  unit,
  label,
  stagger,
}: {
  value: number
  prefix: string
  suffix: string
  unit: string
  label: string
  stagger?: number
}) {
  const { ref, isRevealed } = useRevealOnScroll<HTMLDivElement>(stagger)
  // Reduced-motion users see the final value immediately, no count-up.
  const [display, setDisplay] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? value : 0
  )

  useEffect(() => {
    if (!isRevealed) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const duration = 1200
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isRevealed, value])

  return (
    <div ref={ref} className={cn("reveal", isRevealed && "is-revealed")}>
      <p className="font-display tnum text-4xl font-semibold md:text-5xl">
        {prefix}
        {display}
        {suffix}
        {unit && (
          <span className="ml-2 font-mono text-sm font-normal whitespace-nowrap text-bronze">
            {unit}
          </span>
        )}
      </p>
      <p className="mt-2 max-w-52 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}
