import { localizePath } from "./langPath"
import { useI18n } from "./useI18n"

// Prefixes an internal path with the current language, e.g. "/about" -> "/nl/about".
export function useLocalizedPath() {
  const { lang } = useI18n()
  return (path: string) => localizePath(lang, path)
}
