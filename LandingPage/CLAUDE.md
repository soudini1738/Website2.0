# Claude.md - ORBYTH Website Development

## Project Overview
- **Company Name:** ORBYTH
- **Core Business:** AI automation for SMEs — we design, build and run automations that take over repetitive tasks (fewer hours lost, fewer errors).
- **Target Audience:** All SMEs (kmo's), every sector. B2B, premium positioning.
- **Tone & Style:** Premium, direct, authoritative. Sentence case, active voice, no exclamation marks. Dutch copy uses formal "u" and Flemish vocabulary ("kmo's").

## Tech Stack & Architecture
- **Architecture:** React 19 SPA (Vite 6 + React Router 7), no backend/database logic.
- **Component system:** shadcn/ui (`base-nova` preset on @base-ui/react), TypeScript, Tailwind CSS v4 (theme via `@theme inline` in `src/index.css`).
- **Icons:** `lucide-react`. **Fonts:** self-hosted via Fontsource (imported in `src/main.tsx`).
- **Package manager:** npm. **Deployment:** GitHub & Netlify (`netlify.toml` at repo root: build from `LandingPage/`, publish `LandingPage/dist`, SPA redirect).
- **Contact:** Web3Forms (endpoint + access key in `src/lib/constants.ts`) and Calendly.

## Design System — "The Orbit System"
- **Theme:** light, warm paper `#FCFBF8` with logo gold `#D1C4A9`; bronze `#7A6B47` for accessible accents (links, kickers, focus). Tokens live in `src/index.css` (`--paper`, `--ink`, `--stone`, `--gold`, `--bronze`, `--line`). No dark mode.
- **Typography:** all sans — Geist for display (`.font-display`, -0.02em tracking) and body (incl. nav links), Geist Mono for `.kicker` and labels. The ORBYTH wordmark in the navbar is Geist light, bronze, `tracking-[0.25em]`, with an expand-in animation on every page load (`.wordmark-reveal`, from the old orbyth.com site).
- **Signature motif:** the orbit — a hairline gold ring with a satellite dot. It recurs as the hero diagram (`OrbitDiagram`), process arc (`ProcessSteps`), Calendly card frame, and footer divider. No small ring glyphs next to kickers or list titles (removed on request). Keep new sections on this motif; gold is spent on the orbit and CTAs only, never on small text.
- **Motion:** one-shot scroll reveals (`Reveal` / `useRevealOnScroll`, 700ms), orchestrated hero load reveal, count-up stats (`Stat`). Exception: the process section (`ProcessSteps`) is scroll-scrubbed on lg — it pins (`sticky` in a 300vh wrapper) and all four steps rise in with a blur-to-sharp entrance, following the scroll position via `useScrollProgress`; on mobile and reduced motion it falls back to the one-shot layout. Always respect `prefers-reduced-motion` (handled globally in `index.css`).
- **Navbar:** transparent full-width bar at the top of the page; on scroll it morphs (1.2s) into a centered floating pill (`bg-paper/70` + blur + shadow). It never hides on scroll. Nav links are body sans (15px medium), not mono.
- **CTAs:** every primary CTA uses the Button `default` variant — gold pill, ink text; on hover it inverts to ink background with gold text. Defined once in `src/components/ui/button.tsx`; never restyle a CTA's colors per instance.

## Internationalization (EN/NL/FR)
- Custom typed i18n in `src/i18n/` — no library. `translations/en.ts` is the source of truth; `translations/nl.ts` and `translations/fr.ts` must mirror its shape (`satisfies Messages`, enforced by `npm run typecheck`).
- **Rule: every copy change goes into ALL THREE dictionaries.** Components consume copy via `useI18n()` (`t.home.hero.title`) — never hardcode UI strings.
- Language: stored choice (localStorage `orbyth-lang`) wins; otherwise the site always opens in English (no browser detection). Switchers: `LangMenu` (navbar dropdown, hover + click) and `LangSwitch` (footer + mobile menu).
- Registers: NL formal "u" + Flemish "kmo's"; FR formal "vous" + "PME".

## Development Rules
- Design guidance lives in `LandingPage/frontEndSkill.md` (frontend-design skill) — follow it for any visual work.
- Reuse existing `src/components/ui/*` primitives before writing new custom markup; run `npx shadcn@latest add` for any new primitive rather than hand-rolling one.
- Semantic HTML and accessibility are part of the quality floor: one `h1` per page, landmarks, labels, visible focus, `aria-hidden` on decorative SVGs.
- Page meta (localized title/description) via `usePageMeta`; JSON-LD Organization schema lives in `index.html`.
- Verify with `npm run typecheck`, `npm run lint`, `npm run build`.
