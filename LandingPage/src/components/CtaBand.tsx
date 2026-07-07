import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"
import { useI18n } from "@/i18n/useI18n"
import { CALENDLY_URL } from "@/lib/constants"

// Shared closing CTA band: gold-tinted panel with an orbit ring in the corner.
export function CtaBand() {
  const { t } = useI18n()

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="relative overflow-hidden rounded-xl bg-gold/15 px-8 py-16 md:px-16 md:py-20">
          <svg
            viewBox="0 0 400 400"
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 size-96 opacity-60"
          >
            <circle cx="200" cy="200" r="150" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="105" fill="none" stroke="var(--gold)" strokeWidth="1" />
            <circle cx="350" cy="200" r="5" fill="var(--bronze)" />
          </svg>

          <div className="relative">
            <h2 className="font-display max-w-2xl text-3xl font-semibold text-balance md:text-4xl">
              {t.cta.title}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{t.cta.body}</p>
            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Button
                render={<Link to="/contact" />}
                size="lg"
                className="h-11 rounded-full px-6"
              >
                {t.cta.button}
                <ArrowRight data-icon="inline-end" />
              </Button>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-bronze underline-offset-4 hover:underline"
              >
                {t.cta.secondary}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
