import { createContext } from "react"

import type { Lang, Messages } from "./types"

export interface I18nValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Messages
}

export const I18nContext = createContext<I18nValue | null>(null)
