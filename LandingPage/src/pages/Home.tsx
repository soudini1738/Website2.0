import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ArrowDown, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CtaBand } from "@/components/CtaBand"
import { Marquee } from "@/components/Marquee"
import { OrbitDiagram } from "@/components/OrbitDiagram"
import { ProcessSteps } from "@/components/ProcessSteps"
import { Reveal } from "@/components/Reveal"
import { Section } from "@/components/Section"
import { ServiceModal } from "@/components/ServiceModal"
import { useLoadReveal } from "@/hooks/useRevealOnScroll"
import { usePageMeta } from "@/hooks/usePageMeta"
import { useI18n } from "@/i18n/useI18n"
import { useLocalizedPath } from "@/i18n/useLocalizedPath"
import { servicePageForCard, type ServiceKey } from "@/lib/services"

// Simple Icons doesn't carry Microsoft or Workato (trademark / not listed), and the
// local PNGs for those two are white-on-transparent (made for the old dark design) —
// so those two render as styled text instead of an icon, in --ink like the rest.
const PARTNERS: { name: string; iconSrc?: string; fontFamily?: string }[] = [
  { name: "n8n", iconSrc: "https://cdn.simpleicons.org/n8n/17140E" },
  { name: "Microsoft", fontFamily: "'Segoe UI', sans-serif" },
  { name: "Google Cloud", iconSrc: "https://cdn.simpleicons.org/googlecloud/17140E" },
  { name: "Workato", fontFamily: "sans-serif" },
  { name: "Salesforce", iconSrc: "/pics/salesforceLogo-removebg-preview.png" },
  { name: "Okta", iconSrc: "https://cdn.simpleicons.org/okta/17140E" },
  { name: "GitHub", iconSrc: "https://cdn.simpleicons.org/github/17140E" },
  { name: "SAP", iconSrc: "https://cdn.simpleicons.org/sap/17140E" },
]

export function Home() {
  const { t } = useI18n()
  const localize = useLocalizedPath()
  const location = useLocation()
  const heroRevealed = useLoadReveal()
  const [openFaqItems, setOpenFaqItems] = useState<string[]>([])
  const [openService, setOpenService] = useState<ServiceKey | null>(null)

  usePageMeta(t.meta.home.title, t.meta.home.description)

  useEffect(() => {
    if (!location.hash) return
    document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" })
  }, [location.hash])

  return (
    <>
      {/* 1 — Hero: what we do, for whom, and the one action to take */}
      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-6 pt-28 pb-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h1
            className={cn(
              "font-display reveal mt-6 text-4xl font-bold text-balance md:text-5xl lg:text-6xl lg:leading-[1.05]",
              heroRevealed && "is-revealed"
            )}
            style={{ transitionDelay: "0.1s" }}
          >
            {t.home.hero.title}
          </h1>
          <p
            className={cn(
              "reveal mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
              heroRevealed && "is-revealed"
            )}
            style={{ transitionDelay: "0.2s" }}
          >
            {t.home.hero.subline}
          </p>
          <div
            className={cn(
              "reveal mt-9 flex flex-col gap-5 sm:flex-row sm:items-center",
              heroRevealed && "is-revealed"
            )}
            style={{ transitionDelay: "0.3s" }}
          >
            <Button render={<Link to={localize("/contact")} />} size="lg" className="h-11 rounded-full px-6">
              {t.home.hero.ctaPrimary}
              <ArrowRight data-icon="inline-end" />
            </Button>
            <a
              href="#process"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-bronze underline-offset-4 hover:underline"
            >
              {t.home.hero.ctaSecondary}
              <ArrowDown className="size-3.5" />
            </a>
          </div>
        </div>

        <div
          className={cn("reveal relative z-30 lg:col-span-5", heroRevealed && "is-revealed")}
          style={{ transitionDelay: "0.35s" }}
        >
          <OrbitDiagram />
        </div>
      </section>

      {/* 2 — Proof strip: platforms */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <Reveal>
            <p className="kicker text-center">{t.home.proof.builtOn}</p>
            <Marquee className="mt-6">
              {PARTNERS.map((partner) => (
                <div key={partner.name} className="flex shrink-0 items-center gap-2.5 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0">
                  {partner.iconSrc && (
                    <img src={partner.iconSrc} alt="" className="h-6 w-auto" />
                  )}
                  <span
                    className="font-display text-lg font-semibold whitespace-nowrap text-ink"
                    style={partner.fontFamily ? { fontFamily: partner.fontFamily } : undefined}
                  >
                    {partner.name}
                  </span>
                </div>
              ))}
            </Marquee>
          </Reveal>
        </div>
      </section>

      {/* 3 — Problem */}
      <Section
        kicker={t.home.problem.kicker}
        title={t.home.problem.title}
        standfirst={t.home.problem.standfirst}
      >
        <ul>
          {t.home.problem.items.map((item, i) => (
            <li key={item.title} className="border-t border-line">
              <Reveal
                stagger={i + 1}
                className="grid gap-3 py-8 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-10"
              >
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="leading-relaxed text-muted-foreground md:max-w-xl">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* 4 — Services */}
      <Section
        id="services"
        kicker={t.home.services.kicker}
        title={t.home.services.title}
        standfirst={t.home.services.standfirst}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {t.home.services.items.map((service, i) => {
            const page = servicePageForCard(i)
            const cardClass =
              "group flex h-full flex-col rounded-lg border border-line border-t-2 border-t-transparent bg-card p-8 text-left transition-colors hover:border-t-gold"
            const cardBody = (
              <>
                <p className="kicker">{service.label}</p>
                <h3 className="font-display mt-4 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{service.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.examples.map((example) => (
                    <li
                      key={example}
                      className="rounded-full border border-line px-3 py-1 font-mono text-xs text-stone"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
                {page && (
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-bronze">
                    {t.home.services.readMore}
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </>
            )

            return (
              <Reveal key={service.title} stagger={i + 1} className="h-full">
                {page ? (
                  <button
                    type="button"
                    onClick={() => setOpenService(page.key)}
                    className={cardClass}
                  >
                    {cardBody}
                  </button>
                ) : (
                  <div className={cardClass}>{cardBody}</div>
                )}
              </Reveal>
            )
          })}
        </div>
      </Section>

      <ServiceModal
        serviceKey={openService}
        onOpenChange={(open) => !open && setOpenService(null)}
      />

      {/* 5 — Process: the four steps on one orbit arc, scrubbed by scroll on lg */}
      <ProcessSteps
        id="process"
        kicker={t.home.process.kicker}
        title={t.home.process.title}
        standfirst={t.home.process.standfirst}
        steps={t.home.process.steps}
      />

      {/* 6 — Outcomes */}
      <Section kicker={t.home.outcomes.kicker} title={t.home.outcomes.title}>
        <Reveal>
          <figure className="max-w-3xl">
            <blockquote className="font-display text-2xl font-semibold text-balance md:text-3xl">
              “{t.home.outcomes.quote}”
            </blockquote>
            <figcaption className="kicker mt-5">{t.home.outcomes.quoteAttribution}</figcaption>
          </figure>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {t.home.outcomes.items.map((item, i) => (
            <Reveal key={item.title} stagger={i + 1} className="border-t border-gold pt-6">
              <h3 className="font-mono text-sm font-medium tracking-widest uppercase">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7 — FAQ */}
      <Section kicker={t.home.faq.kicker} title={t.home.faq.title}>
        <Reveal className="max-w-3xl">
          <Accordion value={openFaqItems} onValueChange={setOpenFaqItems}>
            {t.home.faq.items.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="font-display py-5 text-base font-semibold md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Section>

      {/* 8 — Closing CTA */}
      <CtaBand />
    </>
  )
}
