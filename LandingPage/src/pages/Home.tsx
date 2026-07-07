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
import { OrbitDiagram } from "@/components/OrbitDiagram"
import { ProcessSteps } from "@/components/ProcessSteps"
import { Reveal } from "@/components/Reveal"
import { Section } from "@/components/Section"
import { Stat } from "@/components/Stat"
import { useLoadReveal } from "@/hooks/useRevealOnScroll"
import { usePageMeta } from "@/hooks/usePageMeta"
import { useI18n } from "@/i18n/useI18n"

// Wordmarks instead of image logos: the existing PNG assets are white-on-transparent
// (made for the old dark design) and unusable on paper. Swap in SVGs when available.
const PLATFORMS = ["Microsoft", "Salesforce", "AWS", "Workato", "n8n"]

export function Home() {
  const { t } = useI18n()
  const location = useLocation()
  const heroRevealed = useLoadReveal()
  const [openFaqItems, setOpenFaqItems] = useState<string[]>([])

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
            <Button render={<Link to="/contact" />} size="lg" className="h-11 rounded-full px-6">
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
          className={cn("reveal lg:col-span-5", heroRevealed && "is-revealed")}
          style={{ transitionDelay: "0.35s" }}
        >
          <OrbitDiagram />
        </div>
      </section>

      {/* 2 — Proof strip: platforms + quantified outcomes */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="kicker">{t.home.proof.builtOn}</p>
            <ul className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
              {PLATFORMS.map((platform) => (
                <li key={platform} className="font-display text-lg font-semibold text-stone/80">
                  {platform}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {t.home.proof.stats.map((stat, i) => (
              <Stat key={stat.label} {...stat} stagger={i + 1} />
            ))}
          </div>
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
          {t.home.services.items.map((service, i) => (
            <Reveal
              key={service.title}
              stagger={i + 1}
              className="group rounded-lg border border-line border-t-2 border-t-transparent bg-card p-8 transition-colors hover:border-t-gold"
            >
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
            </Reveal>
          ))}
        </div>
      </Section>

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
              <AccordionItem
                key={item.question}
                value={item.question}
                onMouseEnter={() => setOpenFaqItems([item.question])}
                onMouseLeave={() =>
                  setOpenFaqItems((items) => items.filter((q) => q !== item.question))
                }
              >
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
