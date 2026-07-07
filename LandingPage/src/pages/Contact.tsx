import { useState, type FormEvent } from "react"
import { ArrowRight, ArrowUpRight, Calendar, Check, Mail, MapPin, Phone } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import { Reveal } from "@/components/Reveal"
import { useLoadReveal } from "@/hooks/useRevealOnScroll"
import { usePageMeta } from "@/hooks/usePageMeta"
import { useI18n } from "@/i18n/useI18n"
import {
  CALENDLY_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  LINKEDIN_URL,
  WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_ENDPOINT,
} from "@/lib/constants"

type Status = "idle" | "submitting" | "success" | "error"

export function Contact() {
  const { t } = useI18n()
  const revealed = useLoadReveal()
  const [status, setStatus] = useState<Status>("idle")

  usePageMeta(t.meta.contact.title, t.meta.contact.description)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: new FormData(event.currentTarget),
      })
      setStatus(response.ok ? "success" : "error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-16 px-6 pt-36 pb-24 lg:grid-cols-2 lg:gap-20">
        {/* Left: promise + channels + Calendly */}
        <div>
          <p className={cn("kicker reveal", revealed && "is-revealed")}>{t.contact.kicker}</p>
          <h1
            className={cn(
              "font-display reveal mt-6 text-4xl font-bold text-balance md:text-5xl",
              revealed && "is-revealed"
            )}
            style={{ transitionDelay: "0.1s" }}
          >
            {t.contact.title}
          </h1>
          <p
            className={cn("reveal mt-5 text-lg text-muted-foreground", revealed && "is-revealed")}
            style={{ transitionDelay: "0.2s" }}
          >
            {t.contact.promise}
          </p>

          <ul
            className={cn("reveal mt-10 space-y-4", revealed && "is-revealed")}
            style={{ transitionDelay: "0.3s" }}
          >
            <li className="flex items-center gap-3 text-sm">
              <Mail aria-hidden="true" className="size-4 text-bronze" />
              <span className="font-mono text-xs tracking-widest text-stone uppercase">
                {t.contact.channels.emailLabel}
              </span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium underline-offset-4 hover:underline">
                {t.contact.channels.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Phone aria-hidden="true" className="size-4 text-bronze" />
              <span className="font-mono text-xs tracking-widest text-stone uppercase">
                {t.contact.channels.phoneLabel}
              </span>
              <a href={CONTACT_PHONE_TEL} className="font-medium underline-offset-4 hover:underline">
                {CONTACT_PHONE}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <ArrowUpRight aria-hidden="true" className="size-4 text-bronze" />
              <span className="font-mono text-xs tracking-widest text-stone uppercase">
                {t.contact.channels.linkedinLabel}
              </span>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="font-medium underline-offset-4 hover:underline"
              >
                ORBYTH
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <MapPin aria-hidden="true" className="size-4 text-bronze" />
              <span className="font-mono text-xs tracking-widest text-stone uppercase">
                {t.contact.channels.locationLabel}
              </span>
              <span className="font-medium">{t.contact.channels.location}</span>
            </li>
          </ul>

          {/* Calendly card, framed by the orbit */}
          <div
            className={cn(
              "reveal relative mt-12 overflow-hidden rounded-xl border border-gold bg-gold/10 p-8",
              revealed && "is-revealed"
            )}
            style={{ transitionDelay: "0.4s" }}
          >
            <svg
              viewBox="0 0 300 300"
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -bottom-16 size-56 opacity-50"
            >
              <circle cx="150" cy="150" r="110" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
              <circle cx="260" cy="150" r="4.5" fill="var(--bronze)" />
            </svg>
            <div className="relative">
              <h2 className="font-display text-2xl font-semibold">{t.contact.calendly.title}</h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {t.contact.calendly.body}
              </p>
              <Button
                render={<a href={CALENDLY_URL} target="_blank" rel="noreferrer" />}
                className="mt-6 rounded-full px-5"
              >
                <Calendar data-icon="inline-start" />
                {t.contact.calendly.button}
              </Button>
            </div>
          </div>
        </div>

        {/* Right: the form */}
        <div
          className={cn(
            "reveal rounded-xl border border-line bg-card p-8 md:p-10",
            revealed && "is-revealed"
          )}
          style={{ transitionDelay: "0.25s" }}
        >
          {status === "success" ? (
            <div className="flex h-full flex-col items-start justify-center py-10">
              <span className="flex size-12 items-center justify-center rounded-full bg-gold/25">
                <Check aria-hidden="true" className="size-6 text-bronze" />
              </span>
              <h2 className="font-display mt-6 text-2xl font-semibold">
                {t.contact.form.successTitle}
              </h2>
              <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">
                {t.contact.form.successBody}
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-bronze underline-offset-4 hover:underline"
              >
                {t.contact.form.successCta}
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="font-display text-2xl font-semibold">{t.contact.form.title}</h2>

              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value={t.contact.form.subject} />
              {/* Honeypot — hidden from real visitors */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">{t.contact.form.name}</Label>
                  <Input id="contact-name" name="name" autoComplete="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-company">{t.contact.form.company}</Label>
                  <Input id="contact-company" name="company" autoComplete="organization" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">{t.contact.form.email}</Label>
                <Input id="contact-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">{t.contact.form.message}</Label>
                <Textarea id="contact-message" name="message" rows={5} required />
              </div>

              {status === "error" && (
                <p role="alert" className="text-sm text-destructive">
                  {t.contact.form.error}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="h-11 w-full rounded-full"
              >
                {status === "submitting" ? (
                  <>
                    <Spinner data-icon="inline-start" />
                    {t.contact.form.submitting}
                  </>
                ) : (
                  <>
                    {t.contact.form.submit}
                    <ArrowRight data-icon="inline-end" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Reassurance row */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-3">
          {t.contact.reassurance.map((item, i) => (
            <Reveal key={item.title} stagger={i + 1}>
              <h2 className="font-mono text-sm font-medium tracking-widest uppercase">
                {item.title}
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
