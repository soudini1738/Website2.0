import { useEffect, useRef, useState } from "react"

// 0..1 progress of scrolling through the referenced element:
// 0 = element top reaches the viewport top, 1 = element bottom reaches the viewport bottom.
// rAF-throttled passive listener; inert (stays at 0) while `enabled` is false.
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>(enabled: boolean) {
  const ref = useRef<T>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!enabled || !el) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      setProgress(scrollable <= 0 ? 1 : Math.min(1, Math.max(0, -rect.top / scrollable)))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
    }
  }, [enabled])

  return { ref, progress }
}
