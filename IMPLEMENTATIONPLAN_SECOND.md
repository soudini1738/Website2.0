# Implementatieplan ORBYTH-website — vervolg

Analyse van 21-07-2026, op volgorde van belangrijkheid. Dit bouwt voort op
`IMPLEMNTATIONPLAN_ORBYTH.md` (13-07-2026): van die 11 punten is er in de
tussentijd vrijwel niets in code opgelost (enkel CLAUDE.md bijgewerkt, en het
Salesforce-logo is nu een echte afbeelding). Die punten staan hieronder
opnieuw, aangevuld met nieuwe bevindingen uit een bredere sweep.

## 1. ~~Franse hover-teksten staan nog in het Nederlands~~ — opgelost (21-07-2026)

`src/i18n/translations/fr.ts` had voor FR-bezoekers letterlijk
`"PLACEHOLDER: tekst over facturen komt hier"` enz. — Nederlandse
placeholder-tekst, niet Frans. Alle 5 `diagramDescriptions` zijn nu vertaald
naar formeel Frans met dezelfde `Problème:`/`Solution:`/`Résultat:`-structuur
als EN/NL, geverifieerd via headless-browsertest (labels renderen
bold+uppercase, geen clipping op desktop/mobiel).

## 2. Canonical/OG/Twitter-tags kloppen niet buiten de homepage (nieuw)

`src/hooks/usePageMeta.ts` update enkel `document.title` en de
meta-description bij routewissel; `index.html` hardcodet
`<link rel="canonical" href="https://orbyth.com/">` plus `og:url`/`og:image`
voor de homepage, en die worden nooit per route bijgewerkt. Op `/about` en
`/contact` claimt de site dus nog steeds de homepage als canonical URL en
deelt homepage-OG-data — een duplicate-content/SEO-fout, los van het
al bekende OG-afbeelding-probleem (zie punt 5). Actie: `usePageMeta` (of een
vergelijkbaar mechanisme) uitbreiden zodat canonical/og:url/og:title per
route kloppen.

## 3. Geen SPA-rewrite-regel en geen security headers (nieuw)

Er bestaat geen `netlify.toml` of `public/_redirects`. De site gebruikt
`BrowserRouter` (history-mode routing via react-router), dus een directe
load of refresh op `/about` of `/contact` op Netlify riskeert een 404 tenzij
Netlify's automatische SPA-detectie het toevallig opvangt — dit hoort een
expliciete `/* /index.html 200`-regel te zijn, niet aan toeval overgelaten.
Dezelfde ontbrekende config betekent ook geen CSP, `X-Frame-Options`,
`X-Content-Type-Options`, `Referrer-Policy` of HSTS voor de live site.
Actie: `netlify.toml` toevoegen met een SPA-rewrite en een basisset security
headers. (Zie ook eerdere memory over een publish-pad-bug in de Netlify
config — dit bestand bestaat dus nog niet en is nooit aangemaakt.)

## 4. Geen 404-pagina (nieuw)

`src/App.tsx` definieert enkel `/`, `/about`, `/contact` — geen
`path="*"`-route. Een verkeerd getypte of verouderde URL toont een lege
pagina binnen de layout in plaats van een nette 404. Actie: een simpele
NotFound-pagina + wildcard-route toevoegen.

## 5. Hero-titel en subline zeggen twee keer hetzelfde (nog open)

`en.ts` titel en subline herhalen elkaar bijna woordelijk ("solve problems
for businesses" / "creating leverage" komt in beide voor). De titel zou het
concrete voordeel moeten claimen (uren terug, fouten weg); de subline legt
dan uit hoe. De meta-description in `index.html` is nog steeds een zwakkere
variant van wat al in `en.ts` (`meta.home.description`) staat.

## 6. Geen klantbewijs (nog open)

De stats en de quote ("The ORBYTH principle") zijn nergens onderbouwd en aan
onszelf toegeschreven — nog steeds geen enkele klantcase, testimonial of
klantlogo op de site. Voor een premium B2B-positionering blijft dit de
zwakste plek.

## 7. Juridisch ontbreekt (nog open, verplicht in België)

Nog steeds geen privacyverklaring, geen cookie-/gegevensvermelding bij het
contactformulier, geen ondernemingsnummer (BTW) in de footer.

## 8. Social-share previews (OG-afbeelding) (nog open)

`og:image` verwijst nog naar `Logo.png` (wit-op-transparant, onzichtbaar op
witte achtergrond); `twitter:card` staat nog op `"summary"` i.p.v.
`"summary_large_image"`. Geen 1200×630-afbeelding aangemaakt.

## 9. Zware, ongebruikte bestanden gaan mee live (nog open, groter dan gedacht)

In `public/pics`, bevestigd via grep dat ze nergens in `src/` gebruikt worden:

- `AIFoto.png` — **2,47 MB**, bijna 20× groter dan elk ander asset
- `LinkedIn.png` — **1,28 MB**
- `Schermafbeelding 2026-01-16 232045.png` — 245 KB
- `Minimalist Logo Concepts for ORBYTH.png` — 15,8 KB
- `Untitled-design-3.png` — 7,5 KB

Daarnaast zijn `AWS-removebg-preview.png` en `microsoft.png` wél aangemaakt
maar nog niet gekoppeld (zie punt 12). Actie: de vijf écht ongebruikte
bestanden verwijderen.

## 10. Geen analytics (nog open)

Geen enkele meting — geen zicht op bezoekersaantallen, afhaakpunten, of
gebruik van formulier/Calendly.

## 11. Meertaligheid is puur client-side (nog open)

Zelfde URL voor EN/NL/FR (`localStorage`-gedreven via `I18nProvider`), geen
`hreflang`-tags, dus Google indexeert enkel de Engelse versie. Vlaamse kmo's
die in het Nederlands zoeken, vinden de site niet via Google.

## 12. Proof-strip: logo's half doorgevoerd (nog open)

Salesforce is nu een echte afbeelding, maar Microsoft rendert nog als
gestylede tekst terwijl `public/pics/microsoft.png` al bestaat en ongebruikt
is; `AWS-removebg-preview.png` bestaat ook maar staat helemaal niet in de
`PARTNERS`-array. Actie: beide logo's alsnog koppelen.

## 13. Performance: geen beeldoptimalisatie of lazy loading (nieuw)

Alle afbeeldingen (Navbar-logo, OrbitDiagram-logo, proof-strip) zijn ruwe
PNG's zonder `width`/`height`-attributen (risico op layout shift), zonder
`loading="lazy"` voor content onder de vouw, en zonder webp/avif-varianten.
Ook geen route-level code-splitting (`React.lazy`) — met 3 routes nu nog
weinig impact, maar wel een gat als de site groeit.

## 14. Contactformulier: generieke foutafhandeling (nieuw)

`src/pages/Contact.tsx` toont bij elke fetch-fout (netwerk, CORS, rate
limit, DNS) dezelfde generieke foutmelding — geen onderscheid tussen
validatiefout en netwerkfout, geen retry-hulp buiten het hele formulier
opnieuw versturen.

## Kleinere punten

- **FAQ opent bij hover** i.p.v. klik — verdwijnt zodra de muis onderweg is
  naar het antwoord (nog open, `Home.tsx`).
- **Sitemap** mist `<lastmod>`-datums (nog open).
- **Code-duplicatie**: het `Section`/lijst-item-patroon (`<ul><li
  className="border-t border-line"><Reveal .../>`) staat drie keer
  hand-uitgerold in `Home.tsx` (Problem/Services/Outcomes) en nogmaals in
  `About.tsx` (Principles) — kandidaat voor een gedeeld `<FeatureList>`-
  component, geen bug maar wel onderhoudslast.
- **`LinkedIn.png` (1,28 MB)** — check of dit ergens op die resolutie nodig
  is; anders comprimeren of naar SVG.

## Aanbevolen top-3 om eerst aan te pakken

1. Franse placeholder-tekst vervangen door echte FR-copy (punt 1) — meest
   zichtbare bug, laagste moeite.
2. `netlify.toml` toevoegen met SPA-rewrite + security headers, plus een
   404-route (punten 3 en 4) — voorkomt kapotte deep links/refreshes in
   productie.
3. Ongebruikte zware bestanden opruimen (punt 9) — kost niets, ruim 4 MB
   minder deploy-gewicht.
