import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { useI18n } from "@/i18n/useI18n"
import type { Lang } from "@/i18n/types"

const LANG_LABELS: Record<Lang, { short: string; full: string }> = {
  en: { short: "ENG", full: "English" },
  nl: { short: "NL", full: "Nederlands" },
  fr: { short: "FR", full: "Français" },
}

const LANGS: Lang[] = ["en", "nl", "fr"]

// Language dropdown for the navbar: opens on hover (with a small close delay so
// the pointer can travel to the panel) and on click/focus for touch and keyboard.
export function LangMenu({ className }: { className?: string }) {
  const { lang, setLang, t } = useI18n()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<number | undefined>(undefined)

  const options = LANGS.filter((code) => code !== lang)

  function cancelClose() {
    window.clearTimeout(closeTimer.current)
  }

  function scheduleClose() {
    cancelClose()
    closeTimer.current = window.setTimeout(() => setOpen(false), 150)
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener("pointerdown", onPointerDown)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("pointerdown", onPointerDown)
    }
  }, [open])

  useEffect(() => cancelClose, [])

  return (
    <div
      ref={rootRef}
      className={cn("relative", className)}
      onMouseEnter={() => {
        cancelClose()
        setOpen(true)
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t.nav.langLabel}
        onClick={() => setOpen((o) => !o)}
        onFocus={() => setOpen(true)}
        className="flex items-center gap-1 px-1 py-1.5 text-[15px] font-medium text-stone transition-colors hover:text-ink"
      >
        {LANG_LABELS[lang].short}
        <ChevronDown
          aria-hidden="true"
          className={cn("size-3.5 transition-transform duration-300", open && "rotate-180")}
        />
      </button>

      <div
        role="menu"
        aria-label={t.nav.langLabel}
        className={cn(
          "absolute top-full right-0 z-50 mt-2 min-w-24 overflow-hidden rounded-lg border border-line bg-paper py-1 shadow-lg shadow-ink/10 transition-all duration-200",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
        )}
      >
        {options.map((code) => (
          <button
            key={code}
            type="button"
            role="menuitem"
            aria-label={LANG_LABELS[code].full}
            onClick={() => {
              setLang(code)
              setOpen(false)
            }}
            className="block w-full px-4 py-2 text-left text-sm font-medium text-stone transition-colors hover:bg-gold/15 hover:text-ink"
          >
            {LANG_LABELS[code].short}
          </button>
        ))}
      </div>
    </div>
  )
}