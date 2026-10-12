# Checklist ORBYTH-website (uit IMPLEMENTATIEPLAN_ORBYTH.md)

Stap voor stap. Aangevinkt = klaar. Bij afronding van een heel punt: hele blok verwijderen.

## 1. Generieke copy consistent maken met transport/logistiek-positionering
- [x] Hero-titel/subline herzien richting transport/logistiek
- [x] Meta-descriptions herzien richting transport/logistiek (volgt nog — jij doet dit zelf)
- [x] CLAUDE.md Target Audience-sectie bijwerken
- [x] Check in en.ts
- [x] Check in nl.ts
- [x] Check in fr.ts

## 2. Cijfers en quote zonder bewijs
- [ ] Minstens één concrete mini-case toevoegen (bedrijf X, resultaat Y, Z uur/week)
- [x] Stats (12+ uur/week, 92% resolution rate) onderbouwen of vervangen (opgelost door de cijfers volledig te verwijderen uit de copy)
- [ ] Quote-toeschrijving herzien ("The ORBYTH principle")

## 3. Juridisch ontbreekt (verplicht in België)
- [x] Privacyverklaring-pagina toevoegen
- [ ] Cookie-/gegevensvermelding bij contactformulier
- [ ] Ondernemingsnummer (BTW) in footer

## 4. Social-share previews (Open Graph)
- [ ] Nieuwe OG-afbeelding maken (1200×630, logo op papier-achtergrond, niet wit-op-transparant)
- [ ] `og:image` laten verwijzen naar nieuwe afbeelding
- [ ] `twitter:card` van "summary" naar "summary_large_image" zetten

## 5. Overbodige/zware bestanden opruimen
- [ ] `AIFoto.png` verwijderen
- [ ] `LinkedIn.png` verwijderen
- [ ] `Schermafbeelding 2026-01-16 232045.png` verwijderen
- [ ] `Minimalist Logo Concepts for ORBYTH.png` verwijderen
- [ ] `Untitled-design-3.png` verwijderen

## 6. Geen analytics
- [x] Analytics-optie gekozen: Google Analytics (GA4, meetings-ID G-BSWHMSYH2H) — afwijking van het oorspronkelijke advies (Plausible/Fathom/Netlify Analytics), zie kanttekening in IMPLEMNTATIONPLAN_ORBYTH.md
- [x] Implementeren op site (gtag.js in `LandingPage/index.html`, direct na `<head>`)

## Kleinere punten
- [x] Meertaligheid: per-taal-URL's (`/nl/...`) + hreflang overwegen/implementeren
- [x] FAQ: klik-om-te-openen i.p.v. hover
- [x] Sitemap: `<lastmod>`-datums toevoegen (meegenomen bij de sitemap-herbouw voor meertaligheid)
- [ ] Proof-strip: platformnamen vervangen door echte logo-SVG's (6/8 gedaan — n8n, Google Cloud, Salesforce, Okta, GitHub, SAP hebben nu een echt logo; Microsoft en Workato staan nog als tekst, wacht op bruikbare assets)
