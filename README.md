# IT Vidya — Version 1

**Understand Yourself. Understand Life. Think Integrally.**

IT Vidya (ITVidya.com) is a lifelong learning commons for inner transformation, integral thinking and whole-life learning. This repository contains Version 1: a fully static, content-driven website.

> **IT = Inner Transformation · Integral Thinking.** *Vidyā* is Sanskrit for knowledge that illuminates. IT Vidya is not an information-technology education site.

## What's included

| Area | Route(s) |
| --- | --- |
| Homepage | `/` |
| Explore Knowledge (integral map, search, domain & tag filters) | `/explore` |
| Eight domain pages | `/domains/{self,relationships,nature,philosophy,learning,society,work,community}` |
| Learning journeys | `/journeys`, `/journeys/[slug]` (3 journeys × 5 steps) |
| Knowledge resources | `/knowledge` (A–Z index), `/knowledge/[slug]` (24 resources) |
| About, Contribute, Principles, Contact | `/about`, `/contribute`, `/principles`, `/contact` |
| SEO | `/sitemap.xml`, `/robots.txt`, Open Graph images, JSON-LD |
| Search index (lazy-loaded) | `/search-index.json` |

## Stack

- [Next.js 16](https://nextjs.org) App Router (Turbopack), React 19, TypeScript
- Tailwind CSS 4 (design tokens in `src/app/globals.css`)
- Self-hosted open-licence fonts via Fontsource: Fraunces, Source Serif 4, Source Sans 3 (SIL Open Font License)
- All illustrations are original inline SVG — no external images or hotlinked assets
- No database, CMS, accounts, analytics or backend of its own; the Contact Us form is a hosted Notion Form

ShadCN UI was not added: native `<details>`, buttons and links covered every interaction with less JavaScript.

## Local development

Requires Node.js ≥ 20.9.

```bash
npm install
npm run dev          # http://localhost:3000
```

Quality checks:

```bash
npm run lint         # ESLint (next/core-web-vitals + TypeScript rules)
npm run typecheck    # Generates route types, then tsc --noEmit
npm run build        # Production build; also validates all content cross-references

# With a production server running (npm run start), crawl every internal link and #anchor:
npm run check:links                         # defaults to http://localhost:3000
BASE_URL=http://localhost:3100 npm run check:links
```

## Configuration

Copy `.env.example` to `.env.local` and adjust:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for canonical URLs, Open Graph, sitemap and robots. Defaults to `https://itvidya.com`. |
| `NEXT_PUBLIC_NOTION_FORM_URL` | Public share link of the **Contact Us** Notion Form. When set, `/contact` embeds the form (with an "open in a new tab" fallback). When unset, a clearly labelled "being set up" notice is shown. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | A real, monitored address. **Leave unset until one exists.** When unset, the Contact page and Contribute form show a clearly labelled placeholder and never claim anything was sent. When set, the proposal form offers "Open in email app". |

Both are read at build time, so rebuild after changing them.

## Contact Us form (Notion)

The Contact Us form is a native **Notion Form**. Submissions arrive as rows in the Notion database **"IT Vidya — Contact Us"** (properties: Name, Email, Topic, Message, Related page, Consent, Status, Received), which also has an **Inbox** board grouped by Status.

To publish it:

1. In Notion, open the database → **Contact Us form** view.
2. Add the questions for Email, Topic, Message, Related page and Consent (Name is already there). Mark Name, Email, Message and Consent as required.
3. **Share form** → set access to **Anyone with the link** → copy the link.
4. Set `NEXT_PUBLIC_NOTION_FORM_URL` to that link and rebuild/redeploy.

If Notion refuses to load inside an iframe in some browsers, visitors can still use the "Open the contact form in a new tab" link under the embed.

## Deployment

**Option A — any Node host or Vercel** (recommended):

```bash
npm run build && npm run start
```

On Vercel, import the repository; no extra configuration is needed. Set the environment variables above in the project settings.

**Option B — pure static hosting** (Netlify, Cloudflare Pages, GitHub Pages, S3, nginx…):

```bash
npm run build:static   # writes a fully static site to ./out
```

Notes for static hosting:

- Pages are emitted as `about.html`, `knowledge/<slug>.html`, etc. Configure the host to serve `/<path>` from `/<path>.html` (most static hosts do this automatically; for nginx use `try_files $uri $uri.html $uri/ =404;`).
- Open Graph images are emitted as extension-less files named `opengraph-image`. Configure the host to serve them as `image/png` if it does not detect the type.
- `404.html` is the not-found page.

## Content model

All content lives in typed local files under `src/content/`:

```
src/content/
  schema.ts            # Types for domains, resources, journeys, epistemic labels, licences
  site.ts              # Site name, URLs, navigation, contact config, default licence
  domains.ts           # The eight learning domains
  resources/*.ts       # Knowledge resources, one file per domain (3 each)
  journeys.ts          # Three five-step learning journeys
  principles.ts        # Knowledge Commons Principles
```

Key ideas in the schema:

- **Epistemic labels.** Each resource section may declare a `kind` — `evidence`, `interpretation`, `perspective`, `plural`, `hypothesis` or `practice` — rendered as a visible label so readers can tell established evidence from interpretation, philosophical perspective, open question and reflective exercise.
- **Editorial metadata.** Every resource has an author/attribution, `status`, `review.stage` (`editorial-draft` → `editor-reviewed` → `peer-reviewed`), dates, an optional AI-assistance disclosure, an optional care note (for health/psychology/finance topics) and an optional licence override.
- **Reading time** is computed from the text, not hand-entered.
- **Validation.** `src/lib/content.ts` checks slugs, related-resource links, domain relations and journey references when the build loads content. A broken reference fails the build.

### Adding a resource

1. Add an object to the relevant `src/content/resources/<domain>.ts` file (copy an existing one).
2. Use a unique kebab-case `slug`; list 2–3 `related` slugs.
3. Label sections with an appropriate `kind`. Never invent quotations, studies or citations; `references` are "further reading", not proof.
4. Set `review.stage` honestly and keep or remove `aiAssistance` as appropriate.
5. Run `npm run build` — it fails if any reference is broken. The new page, sitemap entry, search index entry and OG image are generated automatically.

## Project structure

```
src/app/                # Routes (App Router), sitemap, robots, OG images, search index
src/components/         # Header, footer, cards, integral map, glyphs, explore browser,
                        # journey stepper, proposal form, shared UI
src/lib/content.ts      # Content accessors, validation, labels, search index
src/lib/seo.ts          # Per-page metadata helper (canonical, Open Graph, Twitter)
src/lib/og.tsx          # Open Graph image template
scripts/check-links.mjs # Internal link and anchor crawler
docs/                   # Implementation and verification report
```

## Licensing

- **Code:** no licence has been chosen yet; add one before inviting outside code contributions.
- **Content:** © IT Vidya, all rights reserved, with an open licence under consideration. No Creative Commons designation is claimed until contributor permissions support it. See `/principles#licensing`.
- **Fonts:** SIL Open Font License 1.1 (Fraunces, Source Serif 4, Source Sans 3).

## Editorial status

The 24 initial resources and three journeys were drafted with AI assistance for the Version 1 launch. They are labelled on-site as an initial edition awaiting human editorial and subject-matter review. Further-reading entries list well-known works by title, author and year; editors should verify bibliographic details during review.
