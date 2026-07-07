import { useEffect, useRef, useState } from "react"

const STAGGER_STEP_MS = 90

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// One-shot scroll reveal: unobserves after the first reveal so content never
// re-hides on scroll-up. `stagger` (1-based) delays the reveal in 90ms steps.
export function useRevealOnScroll<T extends HTMLElement = HTMLDivElement>(stagger?: number) {
  const ref = useRef<T>(null)
  // Reduced-motion users get the content revealed from the first render.
  const [isRevealed, setIsRevealed] = useState(prefersReducedMotion)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return

    const delay = stagger ? (stagger - 1) * STAGGER_STEP_MS : 0
    let timeoutId: ReturnType<typeof setTimeout>

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        timeoutId = setTimeout(() => setIsRevealed(true), delay)
        observer.unobserve(el)
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimeout(timeoutId)
    }
  }, [stagger])

  return { ref, isRevealed }
}

// Reveal shortly after mount, for above-the-fold hero orchestration.
export function useLoadReveal(delayMs = 100) {
  const [isRevealed, setIsRevealed] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const timeoutId = setTimeout(() => setIsRevealed(true), delayMs)
    return () => clearTimeout(timeoutId)
  }, [delayMs])

  return isRevealed
}
