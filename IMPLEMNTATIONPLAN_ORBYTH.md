# Implementatieplan ORBYTH-website

Bevindingen uit de site-review van 13-07-2026, op volgorde van belangrijkheid. De basis zit goed: nette structuur, drietalig met typecheck-bewaking, toegankelijkheid verzorgd, sitemap en robots.txt aanwezig, contactformulier met honeypot en foutafhandeling. Onderstaande punten springen er nog uit.

## 1. ~~Inhoudelijke tegenstrijdigheid op de About-pagina~~ — correctie: dit was geen fout

**Update 13-07-2026:** de daadwerkelijke doelgroep is **kmo's in de transport- en logistieksector**, niet "alle kmo's, elke sector" zoals eerder aangenomen. De logistiek-specifieke copy op About (`LandingPage/src/i18n/translations/en.ts:214-215`, idem nl.ts/fr.ts) en het FAQ-antwoord over supply chain (`en.ts:181`, `nl.ts:183`) zijn dus **correct** en hoeven niet aangepast te worden.

Het omgekeerde probleem geldt nu: de generieke, sector-neutrale copy elders op de site (hero-titel/subline, meta-descriptions, `CLAUDE.md` Target Audience) sluit niet aan bij deze scherpere positionering. Actie: hero, meta-tags en overige pagina's herzien zodat ze consistent transport/logistiek als doelgroep aanspreken — in alle drie de taalbestanden.

## 2. Cijfers en quote zonder bewijs

De stats (12+ uur/week, 92% resolution rate) en de quote zijn nergens onderbouwd — de quote is aan "The ORBYTH principle" toegeschreven, dus aan onszelf. Voor een premium B2B-positionering is dit de zwakste plek van de site: **er staat geen enkele klantcase, testimonial of logo van een echte klant op**.

Actie: minstens één concrete mini-case toevoegen ("bij bedrijf X automatiseerden we Y, dat scheelde Z uur/week"). Dat overtuigt meer dan alle huidige claims samen.

## 3. Juridisch ontbreekt (verplicht in België)

- Geen privacyverklaring.
- Geen cookie-/gegevensvermelding bij het contactformulier.
- Geen ondernemingsnummer (BTW) in de footer.

Voor een Belgische onderneming die zelf "GDPR-compliant" als verkoopargument gebruikt, valt dit op. Minimum: een privacy-pagina + ondernemingsgegevens in de footer.

## 4. Social-share previews (Open Graph)

De `og:image` verwijst naar `Logo.png` — volgens een opmerking in de code zelf zijn die PNG's **wit-op-transparant**, dus onzichtbaar in link-previews op een witte achtergrond (LinkedIn, WhatsApp). Bovendien staat `twitter:card` op "summary" (klein blokje).

Actie: een echte OG-afbeelding van 1200×630 maken met het logo op de papier-achtergrond, en `twitter:card` op "summary_large_image" zetten. Belangrijk als leads via LinkedIn binnenkomen.

## 5. Overbodige/zware bestanden gaan mee live

In `LandingPage/public/pics` staan bestanden die nergens gebruikt worden maar wel gedeployed worden:

- `AIFoto.png` (2,4 MB)
- `LinkedIn.png` (1,3 MB)
- `Schermafbeelding 2026-01-16 232045.png` (240 KB)
- `Minimalist Logo Concepts for ORBYTH.png`
- `Untitled-design-3.png`

Actie: opruimen — kost niets en houdt de deploy schoon.

## 6. ~~Geen analytics~~ — geïmplementeerd, met kanttekening

**Update:** Google Analytics (GA4, `gtag.js`) is toegevoegd in `LandingPage/index.html`, direct na `<head>`. Dit is een bewuste keuze van de klant, niet het oorspronkelijk geadviseerde privacyvriendelijke alternatief (Plausible/Fathom/Netlify Analytics).

**Kanttekening:** GA4 plaatst cookies en verwerkt persoonsgegevens (IP, gedrag), in tegenstelling tot cookieloze opties. Dat botst met punt 3 hierboven (juridisch ontbreekt) en met de eigen positionering van ORBYTH als "GDPR-compliant" — zonder cookiebanner/consent-mechanisme en privacyverklaring is deze GA-implementatie momenteel niet compliant. Punt 3 (privacyverklaring, cookievermelding) wordt hierdoor dringender.

## Kleinere punten

- ~~**Meertaligheid en Google**~~ — opgelost: elke taal heeft nu een eigen crawlbare URL (Engels zonder prefix, `/nl/...` en `/fr/...`). `I18nProvider` leidt de taal af uit de URL (`src/i18n/langPath.ts`) in plaats van uit localStorage; `setLang` navigeert nu naar het gelokaliseerde pad. Elke pagina krijgt via `usePageMeta` een correcte `canonical` + `hreflang`-alternates (en/nl/fr/x-default), interne links lopen via `useLocalizedPath()` zodat navigatie binnen de huidige taal blijft, en `public/sitemap.xml` bevat alle pagina's × 3 talen met wederzijdse hreflang-annotaties. Kanttekening: de site blijft een pure client-side SPA (geen SSR/prerendering), dus de hreflang-tags in de `<head>` worden pas na JS-rendering gezet — Google rendert JS doorgaans wel, maar de sitemap-hreflang is het robuustere kanaal. Een volledige SSR/prerender-oplossing was buiten scope van deze fix.
- ~~**FAQ opent bij hover**~~ — opgelost: FAQ opent/sluit nu enkel bij klik (`LandingPage/src/pages/Home.tsx`), hover-handlers verwijderd.
- **Sitemap** (`LandingPage/public/sitemap.xml`) mist `<lastmod>`-datums (klein SEO-plusje).
- **Platformnamen** in de proof-strip (Microsoft, Salesforce, AWS…) staan als tekst — prima als tussenoplossing, maar echte (grijze) logo-SVG's ogen sterker; de code merkt zelf al op dat dit wacht op bruikbare assets (`LandingPage/src/pages/Home.tsx:23-25`).

## Aanbevolen top-3 om eerst aan te pakken

1. Generieke copy (hero, meta-tags, CLAUDE.md) consistent maken met de transport/logistiek-positionering (punt 1)
2. Privacy-pagina + ondernemingsgegevens toevoegen (punt 4)
3. Echte OG-afbeelding maken (punt 5)