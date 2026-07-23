import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import { CALENDLY_URL } from "@/lib/constants"
import type { ServiceKey } from "@/lib/services"
import { Button } from "@/components/ui/button"
import { Dialog, DialogPopup, DialogTitle } from "@/components/ui/dialog"
import { useI18n } from "@/i18n/useI18n"
import { useLocalizedPath } from "@/i18n/useLocalizedPath"

// Same content as the former per-service pages (recognize/solution/approach/cta,
// from t.serviceDetails), now shown in a modal on top of the homepage instead of
// a separate route.
export function ServiceModal({
  serviceKey,
  onOpenChange,
}: {
  serviceKey: ServiceKey | null
  onOpenChange: (open: boolean) => void
}) {
  const { t } = useI18n()
  const localize = useLocalizedPath()
  const details = t.serviceDetails
  const s = serviceKey ? details.items[serviceKey] : null

  return (
    <Dialog open={serviceKey !== null} onOpenChange={onOpenChange}>
      <DialogPopup>
        {s && (
          <div className="px-6 py-12 md:px-12 md:py-14">
            <p className="kicker pr-12">{s.label}</p>
            <DialogTitle className="mt-3 max-w-xl pr-12 text-3xl font-bold md:text-4xl">
              {s.title}
            </DialogTitle>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{s.pitch}</p>

            <div className="mt-12 border-t border-line pt-8">
              <p className="kicker mb-3">{details.recognizeKicker}</p>
              <h3 className="font-display text-xl font-semibold">{s.recognize.title}</h3>
              <ul className="mt-5 space-y-3">
                {s.recognize.items.map((item) => (
                  <li
                    key={item}
                    className="relative pl-5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute top-2 left-0 size-1.5 rounded-full bg-bronze"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 border-t border-line pt-8">
              <p className="kicker mb-3">{details.solutionKicker}</p>
              <h3 className="font-display text-xl font-semibold">{s.solution.title}</h3>
              <div className="mt-5 space-y-4">
                {s.solution.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-12 border-t border-line pt-8">
              <p className="kicker mb-3">{details.approachKicker}</p>
              <h3 className="font-display text-xl font-semibold">{s.approach.title}</h3>
              <ol className="mt-5 grid gap-8 sm:grid-cols-3">
                {s.approach.steps.map((step, i) => (
                  <li key={step.title}>
                    <p className="kicker tnum">0{i + 1}</p>
                    <h4 className="font-display mt-2 text-base font-semibold">{step.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-12 rounded-xl bg-gold/15 p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold text-balance md:text-2xl">
                {s.cta.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.cta.body}</p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  render={<a href={CALENDLY_URL} target="_blank" rel="noreferrer" />}
                  className="h-11 rounded-full px-6"
                >
                  {t.nav.cta}
                  <ArrowRight data-icon="inline-end" />
                </Button>
                <Link
                  to={localize("/contact")}
                  className="text-sm font-medium text-bronze underline-offset-4 hover:underline"
                >
                  {t.nav.contact}
                </Link>
              </div>
            </div>
          </div>
        )}
      </DialogPopup>
    </Dialog>
  )
}
