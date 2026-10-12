import { useCallback, useEffect, useMemo, type ReactNode } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { I18nContext } from "./context"
import { getLangFromPathname, localizePath, stripLangPrefix } from "./langPath"
import { en } from "./translations/en"
import { fr } from "./translations/fr"
import { nl } from "./translations/nl"
import type { Lang, Messages } from "./types"

const DICTIONARIES: Record<Lang, Messages> = { en, nl, fr }

const CHOICE_KEY = "orbyth-lang-choice"

function hasExplicitChoice(): boolean {
  try {
    return window.localStorage.getItem(CHOICE_KEY) !== null
  } catch {
    return false
  }
}

function rememberChoice(lang: Lang) {
  try {
    window.localStorage.setItem(CHOICE_KEY, lang)
  } catch {
    // storage unavailable: the choice just won't persist
  }
}

// Language is derived entirely from the URL (no prefix = English, /nl or /fr
// otherwise) so each language has its own crawlable, indexable address.
// Visitors who haven't picked a language yet are sent to Dutch first.
export function I18nProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const lang = getLangFromPathname(location.pathname)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    if (lang !== "en" || hasExplicitChoice()) return
    const path = stripLangPrefix(location.pathname)
    navigate(`${localizePath("nl", path)}${location.search}${location.hash}`, { replace: true })
    // Only on first load; later navigation within English means it was chosen.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setLang = useCallback(
    (next: Lang) => {
      rememberChoice(next)
      if (next === lang) return
      const path = stripLangPrefix(location.pathname)
      navigate(`${localizePath(next, path)}${location.search}${location.hash}`)
    },
    [lang, location.pathname, location.search, location.hash, navigate]
  )

  const value = useMemo(() => ({ lang, setLang, t: DICTIONARIES[lang] }), [lang, setLang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
