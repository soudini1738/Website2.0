import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { LANGS, getLangFromPathname, localizePath, stripLangPrefix } from "@/i18n/langPath"

const SITE_URL = "https://orbyth.com"

function upsertLink(rel: string, hreflang: string | null, href: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", rel)
    if (hreflang) el.setAttribute("hreflang", hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

// Sets the document title, meta description, canonical URL and hreflang
// alternates per route, localized.
export function usePageMeta(title: string, description: string) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = title
    document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute("content", description)
    document
      .querySelector<HTMLMetaElement>('meta[property="og:title"]')
      ?.setAttribute("content", title)
    document
      .querySelector<HTMLMetaElement>('meta[property="og:description"]')
      ?.setAttribute("content", description)
    document
      .querySelector<HTMLMetaElement>('meta[name="twitter:title"]')
      ?.setAttribute("content", title)
    document
      .querySelector<HTMLMetaElement>('meta[name="twitter:description"]')
      ?.setAttribute("content", description)
  }, [title, description])

  useEffect(() => {
    const path = stripLangPrefix(pathname)
    const canonicalHref = `${SITE_URL}${localizePath(getLangFromPathname(pathname), path)}`
    upsertLink("canonical", null, canonicalHref)
    document
      .querySelector<HTMLMetaElement>('meta[property="og:url"]')
      ?.setAttribute("content", canonicalHref)

    for (const lang of LANGS) {
      upsertLink("alternate", lang, `${SITE_URL}${localizePath(lang, path)}`)
    }
    upsertLink("alternate", "x-default", `${SITE_URL}${localizePath("en", path)}`)
  }, [pathname])
}
