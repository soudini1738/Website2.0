import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useI18n } from "@/i18n/useI18n"
import { cn } from "@/lib/utils"
import { OPEN_COOKIE_SETTINGS_EVENT, applyConsent, readConsent, saveConsent } from "@/lib/consent"

export function CookieConsent() {
  const { t } = useI18n()
  const c = t.cookies
  // First-time visitors (no stored choice) see the banner immediately.
  const [open, setOpen] = useState(() => readConsent() === null)
  const [expanded, setExpanded] = useState(false)

  // On mount: re-apply a stored choice to Google Consent Mode (external system).
  useEffect(() => {
    const stored = readConsent()
    if (stored) applyConsent(stored)
  }, [])

  // Footer "change cookie preferences" link reopens the banner with the full
  // explanation already visible, so a returning visitor sees the detail first.
  useEffect(() => {
    function reopen() {
      setExpanded(true)
      setOpen(true)
    }
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen)
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen)
  }, [])

  function decide(prefs: { analytics: boolean }) {
    saveConsent(prefs)
    setOpen(false)
    setExpanded(false)
  }

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={c.ariaLabel}
      className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4"
    >
      <div className="mx-auto max-w-xl rounded-xl border border-line bg-card p-4 shadow-lg shadow-ink/10">
        <p className="text-xs leading-relaxed text-muted-foreground">
          {c.shortBody}{" "}
          <button
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-0.5 font-medium text-bronze underline underline-offset-2 hover:text-ink"
          >
            {expanded ? c.lessInfo : c.moreInfo}
            <ChevronDown className={cn("size-3 transition-transform", expanded && "rotate-180")} />
          </button>
        </p>

        {expanded && (
          <div className="mt-3 space-y-2.5 border-t border-line pt-3">
            <p className="text-xs leading-relaxed text-muted-foreground">{c.body}</p>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg border border-line bg-background p-2.5">
                <p className="text-xs font-medium text-foreground">{c.necessary.title}</p>
                <p className="mt-0.5 text-[0.7rem] leading-relaxed text-muted-foreground">
                  {c.necessary.body}
                </p>
              </div>
              <div className="rounded-lg border border-line bg-background p-2.5">
                <p className="text-xs font-medium text-foreground">{c.analytics.title}</p>
                <p className="mt-0.5 text-[0.7rem] leading-relaxed text-muted-foreground">
                  {c.analytics.body}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Accept and reject carry equal visual weight (solid fill, same size) — required for informed, unpressured consent. */}
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <Button size="sm" variant="secondary" onClick={() => decide({ analytics: false })}>
            {c.reject}
          </Button>
          <Button size="sm" variant="outline" onClick={() => decide({ analytics: false })}>
            {c.necessaryOnly}
          </Button>
          <Button size="sm" onClick={() => decide({ analytics: true })}>
            {c.accept}
          </Button>
        </div>
      </div>
    </div>
  )
}
