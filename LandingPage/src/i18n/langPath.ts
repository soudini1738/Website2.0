import type { Lang } from "./types"

// English has no URL prefix (it's the default); nl/fr live under /nl and /fr
// so each language gets its own crawlable, indexable URL.
export const LANGS: Lang[] = ["en", "nl", "fr"]
const PREFIXED_LANGS: Lang[] = ["nl", "fr"]

// "/nl/about" -> "nl"; "/about" -> "en"
export function getLangFromPathname(pathname: string): Lang {
  const first = pathname.split("/")[1]
  return PREFIXED_LANGS.includes(first as Lang) ? (first as Lang) : "en"
}

// "/nl/about" -> "/about"; "/nl" -> "/"; "/about" -> "/about"
export function stripLangPrefix(pathname: string): string {
  const segments = pathname.split("/")
  const first = segments[1]
  if (!PREFIXED_LANGS.includes(first as Lang)) return pathname
  const rest = `/${segments.slice(2).join("/")}`
  return rest === "/" ? "/" : rest
}

// ("nl", "/about") -> "/nl/about"; ("en", "/about") -> "/about"; ("nl", "/") -> "/nl"
export function localizePath(lang: Lang, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`
  if (lang === "en") return clean
  return clean === "/" ? `/${lang}` : `/${lang}${clean}`
}
