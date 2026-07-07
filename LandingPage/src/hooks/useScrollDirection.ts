import { useEffect, useState } from "react"

// Tracks whether the page is scrolled past the top — the navbar morphs
// from a full-width bar into a floating pill once this flips.
export function useScrollDirection() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return { scrolled }
}