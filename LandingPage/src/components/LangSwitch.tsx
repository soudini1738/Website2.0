import { cn } from "@/lib/utils"
import { useI18n } from "@/i18n/useI18n"
import type { Lang } from "@/i18n/types"

const LANGS: Lang[] = ["en", "nl", "fr"]

// Segmented EN | NL | FR control (footer + mobile menu); the active language is pressed.
export function LangSwitch({ className }: { className?: string }) {
  const { lang, setLang, t } = useI18n()

  return (
    <div
      role="group"
      aria-label={t.footer.language}
      className={cn("inline-flex items-center rounded-full border border-line p-0.5", className)}
    >
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className={cn(
            "rounded-full px-2.5 py-1 font-mono text-xs tracking-widest uppercase transition-colors",
            lang === code ? "bg-ink text-paper" : "text-stone hover:text-ink"
          )}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
