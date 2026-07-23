// Cookie consent + Google Consent Mode v2 wiring.
//
// index.html sets every consent type to "denied" by default and does NOT load
// gtag.js. Nothing is measured until the visitor consents. When analytics
// consent is granted we push a consent update, inject gtag.js and register the
// GA4 config, so Google Analytics only ever runs after explicit opt-in.

export const GA_MEASUREMENT_ID = "G-BSWHMSYH2H"

const STORAGE_KEY = "orbyth_cookie_consent"
// Bump when the set of cookies/categories changes so visitors are asked again.
const CONSENT_VERSION = 1

// Custom event the footer link dispatches to reopen the preferences panel.
export const OPEN_COOKIE_SETTINGS_EVENT = "orbyth:open-cookie-settings"

export interface ConsentPreferences {
  /** Necessary cookies are always on; only analytics is optional. */
  analytics: boolean
}

interface StoredConsent extends ConsentPreferences {
  version: number
  updatedAt: string
}

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

// Reuse the exact gtag() shim defined in index.html so commands are queued the
// way Google Consent Mode expects. Falls back to a dataLayer push if absent.
function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return
  if (typeof window.gtag === "function") {
    window.gtag(...args)
    return
  }
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(args)
}

let gaRequested = false

function loadGoogleAnalytics() {
  if (typeof document === "undefined" || gaRequested) return
  gaRequested = true

  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  // Queued now, processed by gtag.js once it loads — after the consent update
  // above, so the first page_view is sent with analytics_storage granted.
  gtag("config", GA_MEASUREMENT_ID)
}

/** Read the stored choice, or null if the visitor hasn't decided yet. */
export function readConsent(): ConsentPreferences | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as StoredConsent
    if (parsed.version !== CONSENT_VERSION) return null
    return { analytics: Boolean(parsed.analytics) }
  } catch {
    return null
  }
}

/** Push the choice to Google Consent Mode and load GA if analytics is granted. */
export function applyConsent(prefs: ConsentPreferences) {
  gtag("consent", "update", {
    analytics_storage: prefs.analytics ? "granted" : "denied",
  })
  if (prefs.analytics) loadGoogleAnalytics()
}

/** Persist the choice and apply it immediately. */
export function saveConsent(prefs: ConsentPreferences) {
  if (typeof window !== "undefined") {
    const record: StoredConsent = {
      ...prefs,
      version: CONSENT_VERSION,
      updatedAt: new Date().toISOString(),
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record))
    } catch {
      // Storage unavailable (private mode / blocked) — still apply for this session.
    }
  }
  applyConsent(prefs)
}
