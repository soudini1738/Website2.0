import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react"

import { I18nContext } from "./context"
import { en } from "./translations/en"
import { fr } from "./translations/fr"
import { nl } from "./translations/nl"
import type { Lang, Messages } from "./types"

const STORAGE_KEY = "orbyth-lang"
const DICTIONARIES: Record<Lang, Messages> = { en, nl, fr }

// Stored preference wins; every first visit starts in English.
function detectLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === "nl" || stored === "en" || stored === "fr") return stored
  } catch {
    // localStorage unavailable (privacy mode) — fall through to the default
  }
  return "en"
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // persistence is best-effort
    }
    setLangState(next)
  }, [])

  const value = useMemo(() => ({ lang, setLang, t: DICTIONARIES[lang] }), [lang, setLang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
