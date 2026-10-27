# IT Vidya Version 1 — Implementation & Verification Report

Date: 27 October 2026

## 1. Starting point

The repository was empty (no commits, no files), so the site was built from a fresh Next.js 16 scaffold. There was no existing work to preserve.

## 2. What was built

**Routes (all statically generated — 74 build outputs):**

- `/` homepage with all ten requested sections (header, hero, introduction, eight learning worlds, featured journeys, featured knowledge, learning cycle, knowledge commons, contribution invitation, footer)
- `/explore` with an interactive integral map, domain cards, and a client-side library browser (full-text search, domain filter, tag filter, URL-synced state, live result count, empty state)
- `/domains/[slug]` × 8 from one reusable template: title, purpose, introduction, why it matters, areas of inquiry, key questions, featured and connected resources, practical reflection, related journeys, related domains, contribution invitation
- `/journeys` and `/journeys/[slug]` × 3: objective, outcomes, audience, duration, five steps (summary, resource links, reflection prompts, exercise, takeaway), completion guidance, step navigator with hash deep links and optional browser-only progress
- `/knowledge` (A–Z index) and `/knowledge/[slug]` × 24
- `/about`, `/contribute`, `/principles`, `/contact`, custom 404
- `/sitemap.xml`, `/robots.txt`, `/search-index.json`, site and per-resource Open Graph images

**Content (~24,000 words, all in typed local files):** 8 domains, 24 resources (3 per domain), 3 journeys × 5 steps, 10 Knowledge Commons Principles.

Every resource has: title, slug, summary, domain (+ secondary domains), tags, computed reading time, editorial attribution, publication and review status, AI-assistance disclosure, licence, key ideas, labelled content sections, reflection questions, suggested application, related resources and (where appropriate) further reading.

**Design system:** warm paper neutrals, deep forest-teal accents, restrained turmeric and clay highlights; Fraunces (display), Source Serif 4 (long-form reading), Source Sans 3 (UI). Original SVG illustration throughout: the integral map, eight domain glyphs (including a diya and a charkha wheel), the IT Vidya mark and the learning-cycle diagram. No stock photography, carousels or gradients-for-decoration.

## 3. Editorial integrity measures

- **Epistemic labels** on sections: Established understanding, Interpretation, Philosophical perspective, Multiple perspectives, Open question, Reflective practice — with a legend on each resource and on `/principles`.
- Contested topics (justice, technology and well-being, growth mindset, regeneration, the self, economics) present several perspectives side by side.
- Philosophical and spiritual frameworks — including Universal Human Values / Madhyasth Darśan, Advaita, Buddhist and Indigenous views — are labelled as perspectives, never as scientific fact.
- Care notes on psychology-, relationship- and finance-related resources and journeys; journeys are described as exploratory, not clinical or certified.
- No invented quotations, statistics, testimonials, partnerships, social links or contact details. Further reading lists only well-known works, framed as starting points, not citations for every claim.
- Licence: "© IT Vidya — all rights reserved (open licence under consideration)". No Creative Commons claim.
- **AI disclosure:** each resource states it was drafted with AI assistance and awaits human editorial and subject-matter review (`review.stage = "editorial-draft"`).

## 4. Verification performed

| Check | Result |
| --- | --- |
| `npm run lint` (ESLint, Next core-web-vitals + TS) | Pass, 0 warnings |
| `npm run typecheck` (`next typegen && tsc --noEmit`) | Pass |
| `npm run build` | Pass — 74 static outputs |
| `npm run build:static` (`output: "export"`) | Pass — complete `out/` directory |
| Content validation at build (slugs, relations, journey refs, 5 steps each) | Pass |
| `scripts/check-links.mjs` crawl (every internal link + every `#anchor`, sitemap URLs) | 46 URLs, 43 HTML pages, 0 problems |
| Unknown route returns 404 page | Pass |
| Browser tests (Playwright, 39 checks): search incl. diacritic-insensitive full text, URL sync, empty state + reset, domain filter, tag links, journey next/prev, hash deep links, progress persistence, resource→journey step links, form validation & prefill, honest "nothing sent" state, mobile menu open/Escape/close-on-navigate, skip link first in tab order, no console errors | 39/39 pass |
| Horizontal overflow at 390 px on 12 page types | None |
| axe-core (WCAG 2 A/AA + best practice) at 1280 px and 390 px on 12 pages | Two issues found (decorative numeral contrast; duplicate landmark name on 404) — both fixed |
| Metadata review | Unique title, description and canonical on every page; Open Graph + Twitter cards (per-resource OG images for articles); JSON-LD: WebSite, Organization (name/URL/logo only), BreadcrumbList, Article |

Visual review was done from full-page screenshots at desktop and mobile widths for the homepage, Explore, a domain page, a resource page and a journey page.

## 5. Accessibility & performance notes

- Semantic landmarks, one `h1` per page, labelled navigation regions, breadcrumbs with `aria-current`.
- Visible turmeric focus ring on all interactive elements, including SVG map nodes.
- Mobile menu: `aria-expanded`/`aria-controls`, Escape to close, focus returns to the toggle.
- Filters use `aria-pressed` toggle buttons inside fieldsets; result counts announced via `role="status"`.
- Accordions use native `<details>`.
- `prefers-reduced-motion` disables the hero's slow rotation and all transitions.
- Client JavaScript is limited to: header menu, Explore browser, journey stepper and proposal form. Full-text search data is fetched lazily only when the search box is used.

## 6. Limitations and follow-ups

1. **Contact channel not configured.** No real address was supplied, so a clearly labelled placeholder is shown. Set `NEXT_PUBLIC_CONTACT_EMAIL` and rebuild to enable it.
2. **Content needs human review.** All initial content is AI-assisted and labelled as such; reviewers should verify claims and further-reading bibliographic details, then update `review.stage`.
3. **Contributor agreements and an open content licence** are still to be decided; the principles page states the current position.
4. **Code licence** has not been chosen.
5. **Static hosting:** extension-less OG image files may need a `Content-Type: image/png` rule on some hosts (see README).
6. **Without JavaScript**, the journey page shows only step 1 (other steps remain in the HTML for search engines); all other pages work fully without JavaScript.
7. Light theme only in Version 1.
