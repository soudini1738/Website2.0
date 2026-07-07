import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LangMenu } from "@/components/LangMenu"
import { LangSwitch } from "@/components/LangSwitch"
import { useI18n } from "@/i18n/useI18n"
import { CALENDLY_URL } from "@/lib/constants"
import { useScrollDirection } from "@/hooks/useScrollDirection"

export function Navbar() {
  const { t } = useI18n()
  const { scrolled } = useScrollDirection()
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  // Scrolled (or with the mobile menu open) the bar morphs into a floating pill.
  const pill = scrolled || menuOpen

  const links = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.about, to: "/about" },
    { label: t.nav.contact, to: "/contact" },
  ]

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main"
        className={cn(
          "relative z-50 flex items-center justify-between border transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
          pill
            ? "mx-3 mt-3 h-14 max-w-4xl rounded-full border-line bg-paper/70 px-5 shadow-lg shadow-ink/5 backdrop-blur-xl sm:mx-auto"
            : "mx-auto mt-0 h-16 max-w-6xl rounded-none border-transparent bg-transparent px-6"
        )}
      >
        {/* Keyed on pathname so the logo + wordmark animations replay on every navigation */}
        <Link key={pathname} to="/" className="flex shrink-0 items-center gap-2">
          {/* The logo file has generous padding around the mark — crop it via scale */}
          <span className="logo-pop flex size-10 items-center justify-center overflow-hidden">
            <img src="/pics/Logo.png" alt="ORBYTH logo" className="size-full scale-[2.2] object-contain" />
          </span>
          <span className="wordmark-reveal text-lg font-light tracking-[0.25em] text-bronze">ORBYTH</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavItem key={link.to} {...link} active={pathname === link.to} />
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <LangMenu />
          <Button
            render={<a href={CALENDLY_URL} target="_blank" rel="noreferrer" />}
            size="sm"
            className="rounded-full px-4"
          >
            {t.nav.cta}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          className="p-2 md:hidden"
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col gap-7 overflow-y-auto bg-paper px-6 pt-28 pb-10 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              aria-current={pathname === link.to ? "page" : undefined}
              className={cn(
                "font-display text-3xl font-semibold",
                pathname === link.to ? "text-bronze" : "text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-auto flex items-center justify-between gap-4">
            <LangSwitch />
            <Button
              render={
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                />
              }
              className="rounded-full px-5"
            >
              {t.nav.cta}
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

function NavItem({ label, to, active }: { label: string; to: string; active: boolean }) {
  return (
    <Link
      to={to}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative text-[15px] font-medium transition-colors",
        active ? "text-ink" : "text-stone hover:text-ink"
      )}
    >
      {label}
      {active && (
        <span
          aria-hidden="true"
          className="absolute -bottom-2 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-bronze"
        />
      )}
    </Link>
  )
}