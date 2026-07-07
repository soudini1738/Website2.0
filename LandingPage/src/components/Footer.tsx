import { Link } from "react-router-dom"

import { LangSwitch } from "@/components/LangSwitch"
import { useI18n } from "@/i18n/useI18n"
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL, LINKEDIN_URL } from "@/lib/constants"

export function Footer() {
  const { t } = useI18n()

  const links = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.about, to: "/about" },
    { label: t.nav.contact, to: "/contact" },
  ]

  return (
    <footer>
      {/* Orbit arc as the closing divider */}
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true" className="h-10 w-full">
        <path d="M0,80 Q720,0 1440,80" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
      </svg>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="font-mono text-sm font-medium tracking-[0.3em]">ORBYTH</p>
          <p className="mt-3 max-w-52 text-sm leading-relaxed text-muted-foreground">
            {t.footer.tagline}
          </p>
        </div>

        <nav aria-label={t.footer.navigate}>
          <p className="kicker">{t.footer.navigate}</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="kicker">{t.footer.contact}</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={CONTACT_PHONE_TEL}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {CONTACT_PHONE}
              </a>
            </li>
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
            </li>
            <li className="text-muted-foreground">{t.contact.channels.location}</li>
          </ul>
        </div>

        <div>
          <p className="kicker">{t.footer.language}</p>
          <LangSwitch className="mt-4" />
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-6 py-5 font-mono text-xs text-stone">
          © {new Date().getFullYear()} ORBYTH — {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
