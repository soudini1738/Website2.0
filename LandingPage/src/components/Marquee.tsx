import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

// Infinite horizontal loop: the track is rendered twice back-to-back and
// scrolled by exactly -50%, so the seam between the two copies is invisible
// and the animation never visibly "restarts". Duplication lives here, once,
// instead of being hand-copied at each call site.
export function Marquee({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper to-transparent" />

      <div className="animate-marquee flex w-fit group-hover:[animation-play-state:paused]">
        <div className="flex shrink-0 items-center gap-16 pr-16">{children}</div>
        <div className="flex shrink-0 items-center gap-16 pr-16" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}