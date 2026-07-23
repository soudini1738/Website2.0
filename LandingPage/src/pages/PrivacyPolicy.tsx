import { cn } from "@/lib/utils"
import { linkifyContact } from "@/lib/linkify"
import { Reveal } from "@/components/Reveal"
import { useLoadReveal } from "@/hooks/useRevealOnScroll"
import { usePageMeta } from "@/hooks/usePageMeta"
import { useI18n } from "@/i18n/useI18n"

// Long-form legal content: plain prose layout, no marketing choreography.
// Each numbered section reveals on its own scroll position rather than a
// staggered group, since sections stack vertically one at a time.
export function PrivacyPolicy() {
  const { t } = useI18n()
  const p = t.privacyPolicy
  const revealed = useLoadReveal()

  usePageMeta(t.meta.privacyPolicy.title, t.meta.privacyPolicy.description)

  return (
    <article className="mx-auto max-w-3xl px-6 pt-32 pb-24 md:pt-40">
      <h1
        className={cn(
          "font-display reveal text-4xl font-bold text-balance md:text-5xl",
          revealed && "is-revealed"
        )}
      >
        {p.title}
      </h1>
      <p
        className={cn("reveal mt-6 text-lg leading-relaxed text-muted-foreground", revealed && "is-revealed")}
        style={{ transitionDelay: "0.1s" }}
      >
        {p.intro}
      </p>

      <div className="mt-14 space-y-10">
        {p.sections.map((section) => (
          <Reveal key={section.title} className="border-t border-line pt-8">
            <h2 className="font-display text-2xl font-semibold">{section.title}</h2>
            {section.body && (
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {linkifyContact(section.body)}
              </p>
            )}
            {section.items.length > 0 && (
              <div className="mt-4 space-y-4">
                {section.items.map((item, i) => (
                  <div key={`${section.title}-${i}`}>
                    {item.label && <p className="font-medium text-foreground">{item.label}</p>}
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      {linkifyContact(item.body)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </article>
  )
}
