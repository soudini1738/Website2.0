import { BrowserRouter, Route, Routes } from "react-router-dom"

import { I18nProvider } from "@/i18n/I18nProvider"
import { RootLayout } from "@/layouts/RootLayout"
import { SERVICE_PAGES } from "@/lib/services"
import { Home } from "@/pages/Home"
import { About } from "@/pages/About"
import { Contact } from "@/pages/Contact"
import { ServiceDetail } from "@/pages/ServiceDetail"

export function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {SERVICE_PAGES.map((page) => (
              <Route
                key={page.slug}
                path={`/services/${page.slug}`}
                element={<ServiceDetail serviceKey={page.key} />}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  )
}

export default App
