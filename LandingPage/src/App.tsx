import { BrowserRouter, Route, Routes } from "react-router-dom"

import { I18nProvider } from "@/i18n/I18nProvider"
import { RootLayout } from "@/layouts/RootLayout"
import { Home } from "@/pages/Home"
import { About } from "@/pages/About"
import { Contact } from "@/pages/Contact"

export function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  )
}

export default App
