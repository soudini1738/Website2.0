import { Link, useLocation } from "react-router-dom"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { CALENDLY_URL } from "@/lib/constants"
import type { ServiceKey } from "@/lib/services"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"
import { Section } from "@/components/Section"
import { useLoadReveal } from "@/hooks/useRevealOnScroll"
import { usePageMeta } from "@/hooks/usePageMeta"
import { useI18n } from "@/i18n/useI18n"

// One reusable service detail page, driven entirely by i18n via `serviceKey`.
// Structure: hero + pitch → "Recognize this?" → "What we do" → "Our approach"
// (stepwise) → CTA whose button points at the same booking link as the navbar
// "Book your call". Routes are wired in App.tsx from SERVICE_PAGES.
export function ServiceDetail({ serviceKey }: { serviceKey: ServiceKey }) {
  const { t } = useI18n()
  const revealed = useLoadReveal()
  const location = useLocation()

  const meta = t.meta.services[serviceKey]
  const details = t.serviceDetails
  const s = details.items[serviceKey]

  // Only when this page was reached by clicking a Services card on the
  // homepage does "back to home" return to the Services section; any other
  // way of arriving here (direct link, refresh, another page) goes to the top.
  const cameFromServices = Boolean(
    (location.state as { fromServices?: boolean } | null)?.fromServices
  )
  const backTo = cameFromServices ? "/#services" : "/"

  usePageMeta(meta.title, meta.description)

  return (
    <>
      {/* Hero: back link, service label, name and one-line pitch */}
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-16">
        <Link
          to={backTo}
          className={cn(
            "reveal inline-flex items-center gap-1.5 text-sm font-medium text-bronze underline-offset-4 hover:underline",
            revealed && "is-revealed"
          )}
          style={{ transitionDelay: "0.05s" }}
        >
          <ArrowLeft className="size-3.5" />
          {t.nav.backToHome}
        </Link>
        <p
          className={cn("kicker reveal mt-10", revealed && "is-revealed")}
          style={{ transitionDelay: "0.1s" }}
        >
          {s.label}
        </p>
        <h1
          className={cn(
            "font-display reveal mt-5 max-w-3xl text-4xl font-bold text-balance md:text-5xl lg:text-6xl lg:leading-[1.05]",
            revealed && "is-revealed"
          )}
          style={{ transitionDelay: "0.2s" }}
        >
          {s.title}
        </h1>
        <p
          className={cn(
            "reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground",
            revealed && "is-revealed"
          )}
          style={{ transitionDelay: "0.3s" }}
        >
          {s.pitch}
        </p>
      </section>

      {/* Recognize this? — the problem, as recognizable situations */}
      <Section kicker={details.recognizeKicker} title={s.recognize.title}>
        <div className="grid gap-4 md:grid-cols-2">
          {s.recognize.items.map((item, i) => (
            <Reveal
              key={item}
              stagger={i + 1}
              className="rounded-lg border border-line bg-card p-6 leading-relaxed text-muted-foreground"
            >
              {item}
            </Reveal>
          ))}
        </div>
      </Section>

      {/* What we do — the solution */}
      <Section kicker={details.solutionKicker} title={s.solution.title}>
        <div className="max-w-3xl space-y-6">
          {s.solution.paragraphs.map((paragraph, i) => (
            <Reveal key={paragraph} stagger={i + 1}>
              <p className="text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Our approach — the working method, step by step */}
      <Section kicker={details.approachKicker} title={s.approach.title}>
        <ol className="grid gap-12 md:grid-cols-3 md:gap-8">
          {s.approach.steps.map((step, i) => (
            <li key={step.title}>
              <Reveal stagger={i + 1} className="border-t border-gold pt-6">
                <p className="kicker tnum">0{i + 1}</p>
                <h3 className="font-display mt-3 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* CTA — the button uses the same booking link as the navbar "Book your call" */}
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
                {s.cta.title}
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{s.cta.body}</p>
              <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
                <Button
                  render={<a href={CALENDLY_URL} target="_blank" rel="noreferrer" />}
                  size="lg"
                  className="h-11 rounded-full px-6"
                >
                  {t.nav.cta}
                  <ArrowRight data-icon="inline-end" />
                </Button>
                <Link
                  to="/contact"
                  className="text-sm font-medium text-bronze underline-offset-4 hover:underline"
                >
                  {t.nav.contact}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
