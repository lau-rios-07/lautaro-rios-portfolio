# Lautaro Ríos — Data Analyst Portfolio

Recruiter-focused portfolio built with Next.js (App Router), React, TypeScript, and Tailwind CSS v4.

## Getting started

Requires Node.js 20.9+ (22 LTS recommended — see `.nvmrc`).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts: `npm run build`, `npm run start`, `npm run lint`, `npm run typecheck`.

## Status

Being built incrementally, in the order defined by the UX & Design Specification.

**Implemented:**
- Project scaffolding, design tokens, global styles, font loading
- Navigation (sticky, scroll-aware, accessible mobile menu, active-section highlighting)
- Hero section
- Tech Belt
- Results Strip
- Featured Projects (single-column, alternating-image cards)
- Individual `/projects/[slug]` case study pages (full 8-part depth layer)
- About
- Analytics Workflow
- Certifications & Current Learning
- Contact & Footer (global, persistent across every route)
- SEO: per-page metadata, dynamic sitemap (including all 4 project routes), robots.txt, Person JSON-LD structured data
- Art Direction & Visual Polish pass: bolder display type scale, a numbered editorial "kicker" system tying Featured Projects/About/Analytics Workflow together, a sitewide film-grain texture (pure CSS/SVG, no image asset), an inverted dark Footer as a closing bookend to the light Hero, and a full case-study page restructure — wider canvas, the dashboard promoted to a large centerpiece near the top, the outcome headline given a pull-quote treatment, paired two-column layouts for Business Problem/Dataset Overview and Key Insights/Recommendations, with a narrower reading column reserved for the actual sequential prose.
- **Real dashboard screenshots are now integrated** — all 12 uploaded images are placed (`public/images/projects/`), referenced from `src/data/projects.ts`, and rendered via `next/image`. Every project card and case-study page shows real Power BI screenshots, not placeholders. Image container uses `aspect-[9/5]` with `object-contain` on a cream fill — chosen deliberately over `object-cover` because these are information-dense dashboards (KPI numbers and chart labels reach close to every edge); the real images range 1.76–1.92:1, close enough to 1.8 that the letterboxing this produces is a sliver, not a visible gap. E-Commerce, Marketing, and Telco each have a primary card image plus a case-study gallery of the remaining pages (2–4 more screenshots apiece, with real captions); Northwind has its one available dashboard image only.
- **Featured Projects reordered**: Telco now leads (its 15x contract-type churn gap is the sharpest single stat across all four projects, and its Executive Overview screenshot visually proves that exact claim via the Churn Rate by Contract Type chart — narrative and visual strength pointing the same direction). E-Commerce is second (richest visual variety — treemap and line chart, not just bars — plus the largest absolute figure, $21.78M). Marketing third. Northwind stays last, consistent with its "pending-enrichment" status. Implemented via a `displayOrder` field on each project rather than physically reordering the array in `projects.ts`, so re-sequencing again later never risks moving large blocks of case-study content around.
- **Grain refined**: opacity dropped from 3.5% to 0.8% (`src/components/layout/GrainOverlay.tsx`) — "almost imperceptible, visible only on close inspection," not a texture.
- **Footer mark added**: `public/images/bear-mark.png` (`src/components/ui/BearMark.tsx`) — the user's own provided asset, used as-is: background removed via alpha threshold, cropped to its bounding box, recolored pixel-for-pixel to the exact `--color-gold` token. No vectorization tool is available in this environment, so it's a processed transparent PNG rather than true SVG — a faithful raster extraction of the exact provided shape, not a redraw. Two earlier uploaded assets in this same conversation were **not** used: the first was the actual Dropout Bear character from *The College Dropout*, the second was a recolored but structurally near-identical derivative of the same character's proportions and expression — both are someone else's copyrighted IP and weren't appropriate for a public professional portfolio regardless of size or framing. This third asset is a meaningfully different design (asymmetric ears, a single simple eye, no distinct muzzle patch, no shared distinctive expression) and was judged on those merits, not waved through by pattern or fatigue.
- **Grain rebuilt as a real SVG element, not a CSS background-image**: the previous implementation was a data-URI-encoded SVG set via `background-image`, with no explicit width/height on its root element — technically valid, but with a real risk of silently rendering nothing if the browser fell back oddly on intrinsic sizing, which would explain the reported "still invisible" regardless of opacity value. `src/components/ui/GrainTexture.tsx` now renders actual SVG markup directly (no encoding step), used in all 5 places grain appears (global + 4 beige-scoped instances), each with a required unique `id` prop — SVG filter IDs collide silently if reused, and this component makes that impossible to get wrong by making `id` a required prop rather than a hardcoded value. The old `.grain-overlay` CSS class was removed entirely once nothing referenced it.
- **Bear icon size forced via explicit CSS class, not just props**: `BearMark.tsx` now sets `h-[29px] w-[31px]` directly on the rendered `<Image>`'s className. Next.js Image's `width`/`height` props alone set HTML attributes, and Tailwind's Preflight reset includes `img { height: auto }` — a real, common cascade conflict where that CSS rule can override an attribute-implied size. The explicit class has actual CSS specificity and can't be silently overridden the same way.
- **Important honesty note**: none of this was verified in an actual rendered browser — this sandbox has no network access, so `npm install`/`npm run dev` aren't possible here. Both fixes above target specific, real, well-known failure classes that match the symptoms reported (props/opacity changed, nothing visually changed), but they're a diagnosis and remediation based on static analysis, not a confirmed fix. Please verify locally after a full reinstall (see below) and report back with specifics if either is still off.

## If you're still not seeing the changes

Before assuming the code is still wrong, rule out stale build artifacts — this is the most common reason edited source doesn't show up:

```bash
rm -rf .next node_modules
npm install
npm run dev
```

Then hard-refresh the browser (not a normal refresh — clear cache, since browsers aggressively cache both images and CSS by default).

**Not yet implemented / open items:**
- A standalone "Skills Demonstrated" section was deliberately *not* built — this was an explicit earlier decision (skills are folded into project tags + case studies instead). Flag if you want it reinstated.
- Northwind's case study is real content, but honestly incomplete by design — see the "pending-enrichment" badge on that card and the placeholder note in its Business Questions section. Don't treat its current text as final; it's waiting on the repo itself being enriched. One thing worth noting: its dashboard image visibly shows "Total Revenue $402,792" — a real, precise figure that isn't yet stated anywhere in the case-study prose (only percentages and Ernst Handel's specific dollar amount are). Worth folding in whenever that repo gets enriched.

## Before deploying

- Replace the placeholder domain (`https://lautarorios.dev`) in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` with the real deployed URL.
- The tagline in `src/data/site-config.ts` is flagged in Design Brief v3 as generic — revisit before launch.
- The About section bio is a starting draft built only from facts already established in this project — personalize it with real background before launch.
- Northwind's case study content is blocked pending that repo's enrichment (real hypotheses + KPIs surfaced in its README) — see Design Brief v3, Section 15.

## Fixed: résumé 404 in production

The "Download Résumé" links pointed to `/resume.pdf` from the first implementation turn, but the actual file was never added — the code was correct throughout, there was just nothing at that path. A production deploy without the file returns a 404, and because the links use the `download` attribute, the browser saves that 404 response as a file (hence "downloads a file called 404"). The real file is now at `public/resume.pdf` (verified: valid single-page PDF, not corrupted). Redeploy and it resolves.

## Architecture

- `src/app` — routes (including `/projects/[slug]`), root layout, global styles (Next.js App Router)
- `src/components/sections` — one component per homepage section
- `src/components/layout` — Navigation, Footer, GrainOverlay (all global, rendered in the root layout)
- `src/components/ui` — small reusable primitives (Button, Pill, ProjectCard, AnimatedNumber, DashboardPlaceholder, SectionKicker)
- `src/components/animation` — the shared FadeIn scroll-reveal wrapper
- `src/data` — all editable content (name, links, tech stack, stats, projects). Update these files, not the components, when content changes.
- `src/lib/hooks` — IntersectionObserver, reduced-motion, and active-section hooks shared site-wide
- `src/types` — shared TypeScript interfaces

Server Components by default. Only what genuinely needs interactivity is a Client Component: `Navigation` (scroll state + mobile menu + active-section tracking), `FadeIn` (IntersectionObserver), and `AnimatedNumber` (count-up). Every section, the case study page, and every card render with zero client-side JS of their own.

## Design system

Colors, type scale, shadows, radius, and easing are defined once in `src/app/globals.css` under Tailwind v4's `@theme` block, and consumed everywhere as Tailwind utilities (`bg-charcoal`, `text-gold-dark`, `rounded-card`, `shadow-hover`, `ease-signature`). No one-off hex values or magic numbers in component files — if a new value is genuinely needed, it gets added to the theme, not inlined.
