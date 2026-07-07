import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll"

// One-shot scroll reveal wrapper; `stagger` (1-based) delays in 90ms steps.
export function Reveal({
  children,
  className,
  stagger,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  const { ref, isRevealed } = useRevealOnScroll<HTMLDivElement>(stagger)

  return (
    <div ref={ref} className={cn("reveal", isRevealed && "is-revealed", className)}>
      {children}
    </div>
  )
}
