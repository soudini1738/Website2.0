import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { I18nProvider } from "@/i18n/I18nProvider"
import { RootLayout } from "@/layouts/RootLayout"
import { Home } from "@/pages/Home"
import { About } from "@/pages/About"
import { Contact } from "@/pages/Contact"
import { PrivacyPolicy } from "@/pages/PrivacyPolicy"

// Each language gets its own URL prefix (English has none, it's the default)
// so every language version is independently crawlable and indexable.
const LANG_PREFIXES = ["", "/nl", "/fr"]

function localizedRoutes(prefix: string) {
  const path = (segment: string) => (segment === "" ? prefix || "/" : `${prefix}/${segment}`)

  return (
    <Fragment key={prefix || "en"}>
      <Route path={path("")} element={<Home />} />
      <Route path={path("about")} element={<About />} />
      <Route path={path("contact")} element={<Contact />} />
      <Route path={path("privacy-policy")} element={<PrivacyPolicy />} />
    </Fragment>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <Routes>
          <Route element={<RootLayout />}>
            {LANG_PREFIXES.map((prefix) => localizedRoutes(prefix))}
          </Route>
        </Routes>
      </I18nProvider>
    </BrowserRouter>
  )
}

export default App
