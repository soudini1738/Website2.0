import { cn } from "@/lib/utils"
import { CtaBand } from "@/components/CtaBand"
import { ProcessSteps } from "@/components/ProcessSteps"
import { Reveal } from "@/components/Reveal"
import { Section } from "@/components/Section"
import { useLoadReveal } from "@/hooks/useRevealOnScroll"
import { usePageMeta } from "@/hooks/usePageMeta"
import { useI18n } from "@/i18n/useI18n"

export function About() {
  const { t } = useI18n()
  const revealed = useLoadReveal()

  usePageMeta(t.meta.about.title, t.meta.about.description)

  return (
    <>
      {/* Mission statement, revealed line by line */}
      <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 pt-28 pb-16">
        <p className={cn("kicker reveal", revealed && "is-revealed")}>{t.about.mission.kicker}</p>
        <h1 className="font-display mt-8 text-4xl font-bold md:text-6xl lg:text-7xl lg:leading-[1.02]">
          {t.about.mission.lines.map((line, i) => (
            <span
              key={line}
              className={cn("reveal block", revealed && "is-revealed")}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              {line}
            </span>
          ))}
        </h1>
      </section>

      {/* Positioning */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:py-32 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-balance md:text-4xl">
              {t.about.positioning.title}
            </h2>
          </Reveal>
          <div className="space-y-6">
            {t.about.positioning.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph} stagger={i + 1}>
                <p className="text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <Section kicker={t.about.principles.kicker} title={t.about.principles.title}>
        <ul>
          {t.about.principles.items.map((item, i) => (
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

      {/* Engagement: the same four steps, on the same orbit */}
      <ProcessSteps
        kicker={t.about.engage.kicker}
        title={t.about.engage.title}
        standfirst={t.about.engage.standfirst}
        steps={t.home.process.steps}
      />

      <CtaBand />
    </>
  )
}
