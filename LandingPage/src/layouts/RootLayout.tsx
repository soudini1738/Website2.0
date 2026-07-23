import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { BackToTop } from "@/components/BackToTop"
import { CookieConsent } from "@/components/CookieConsent"
import { useI18n } from "@/i18n/useI18n"

export function RootLayout() {
  const { pathname, hash } = useLocation()
  const { t } = useI18n()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname, hash])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        {t.nav.skipToContent}
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <CookieConsent />
    </>
  )
}
