# CLAUDE.md

Static marketing site for a local computer/tech repair business (service-area
business, no storefront). Goal: explain services, look local and trustworthy,
make calling/messaging effortless, load fast, and host repair write-ups.
No backend, forms, ecommerce, auth, analytics or tracking.

**Read narrowly.** Use the maps below to open only the files a task needs.
Don't re-explore the whole repo for small changes.

## Stack and commands

Astro 7 (static output) + TypeScript (strict) + plain CSS + ~1 KB vanilla JS.
Dependencies: `astro`, `@astrojs/sitemap`; dev: `@astrojs/check`, `typescript`.
Node >= 22.12.

- `npm run dev`: dev server on :4321 (drafts visible)
- `npx astro check`: fastest meaningful check (types + templates)
- `npm run build`: `astro check && astro build` to `dist/`. Must pass before work is considered done.
- `npm run preview`: serve `dist/`

## Map

```
astro.config.ts           site URL (imported from site.ts), sitemap, trailingSlash "always"
src/data/site.ts          ALL homepage copy, contact info, services, image paths, SEO defaults
src/styles/global.css     design tokens (:root), base styles, .container/.section/.button, .prose (blog)
src/layouts/BaseLayout.astro   <head> (title/meta/canonical/OG/JSON-LD), header, footer, mobile bar, adds html.js class
src/layouts/BlogLayout.astro   single article page (title, dates, cover, .prose body, BlogPosting JSON-LD)
src/components/
  Header.astro            logo (or name text) + Blog link + ContactButtons
  Hero.astro              text + photo; text first on mobile, photo left at >=46rem
  ServicesShowcase.astro  tabs + one visible panel; contains the only client script
  FinalCTA.astro          dark green call/message band
  Footer.astro            name, contact, social, blog link, copyright
  MobileCallBar.astro     fixed Call/Text bar at <=40rem; sets --mobile-bar-height
  ContactButtons.astro    the Call + Message button pair (single source for tel:/message links)
  Photo.astro             image-or-placeholder renderer (astro:assets <Image>, fixed aspect ratio)
src/lib/images.ts         findImage(path): import.meta.glob of src/assets/images/**
src/lib/posts.ts          getPosts() (drafts only in DEV), formatDate()
src/content.config.ts     blog collection schema (glob loader, pattern "[^_]*.md")
src/content/blog/         one .md per article; _README.md = how-to; example-repair.md = draft template
src/pages/index.astro     homepage section order only
src/pages/blog/index.astro      list + empty state
src/pages/blog/[...slug].astro  article routes (id = file name)
src/pages/robots.txt.ts   robots.txt using site URL
src/assets/images/        ALL photos (optimized at build). README.md lists expected files
public/                   favicon.svg only (served as-is)
```

## Common tasks → files

| Task | Files |
| --- | --- |
| Phone, message link, email, social, business name | `src/data/site.ts` |
| Any homepage/blog-page wording, CTA labels | `src/data/site.ts` |
| Add/remove/reorder/edit a service | `src/data/site.ts` (`services`) |
| Swap a photo | drop file in `src/assets/images/` matching path in `site.ts` |
| Colors, spacing, radius, widths, timing | `src/styles/global.css` `:root` |
| Button styles | `src/styles/global.css` (section 3) |
| Blog article typography | `src/styles/global.css` (`.prose`) |
| Hero/services/CTA layout | the matching component only |
| Head/SEO/meta/JSON-LD | `src/layouts/BaseLayout.astro` (+ `site.seo`) |
| New blog post | copy `src/content/blog/example-repair.md` |
| New frontmatter field | `src/content.config.ts` + `BlogLayout.astro` |

Usually no need to reread: `astro.config.ts`, `tsconfig.json`, `src/lib/*`,
`Photo.astro`, `ContactButtons.astro`, `robots.txt.ts`, `package-lock.json`,
`.astro/`, `dist/`, `node_modules/`.

## Content rules

- `src/data/site.ts` is the single source of truth. Never hardcode marketing
  copy, phone numbers or links in components. Add a field to `site.ts` instead.
- Placeholders are marked `TODO` in `site.ts`. Never invent facts: no prices,
  warranties, turnaround times, certifications, years in business, addresses,
  hours, reviews, ratings, stats or testimonials. Structured data uses only
  `site.ts` fields.
- Copy tone: plain, human, local. No buzzwords or hype.
- Blog articles never go in `site.ts`.

## Images

- Never generate, download or embed AI/stock images. The owner supplies real photos.
- Paths in `site.ts`/frontmatter are root-relative to the repo, e.g.
  `"/src/assets/images/hero-repair.jpg"` (matches `import.meta.glob` keys).
- `Photo.astro` renders `<Image>` (WebP srcset 480–1600w) if the file exists,
  else a dashed, hatched "Photo needed" box showing the expected path.
  Both use the same `aspect-ratio`, so there's no CLS.
- Hero image is `loading="eager"` + `fetchpriority="high"`; everything else lazy.
- Inline images in Markdown use relative paths
  (`../../assets/images/blog/<post>/x.jpg`). A missing file fails the build, so
  the example draft keeps its image lines inside HTML comments.

## Service selector (ServicesShowcase.astro)

- All panels are server-rendered. `BaseLayout` adds `class="js"` to `<html>`
  with a tiny inline head script before paint.
- `html:not(.js)`: tablist hidden, all services listed (no-JS fallback).
- `html.js`: panels share one grid cell (`grid-area: 1/1`), so height = tallest
  and switching never shifts the page. Inactive panels are `visibility: hidden`.
- Script: click/ArrowLeft/ArrowRight/Home/End, roving tabindex, `aria-selected`.
  Fade = toggle `.is-fading` on the panels wrapper, swap after `--duration-fade`
  (read from CSS), fade back in. `prefers-reduced-motion` swaps instantly.
- Tabs scroll horizontally on narrow screens (never shrink them).

## Blog

- Content collection `blog` (glob loader). Files starting with `_` are ignored.
- URL = file name: `foo.md` → `/blog/foo/`.
- `draft: true` → visible only in `npm run dev` (`getPosts()` in `src/lib/posts.ts`);
  excluded from build and sitemap.
- Empty state text: `site.blog.emptyMessage`.

## Design rules

- Green palette via tokens (`--color-green-950…50`, `--color-background`,
  `--color-surface`, `--color-text`, `--color-muted`, `--color-border`).
  No raw hex values in components.
- **NO EYEBROW HEADINGS.** Never put small/uppercase label text above a heading
  ("OUR SERVICES" over "Laptop Repair"). A section gets just its real heading.
- Avoid: gradients (beyond the placeholder hatch), glassmorphism, glows, blobs,
  pill overload, heavy shadows, big rounded cards, card grids, decorative icons,
  oversized type, over-animation. Icons only where functional (phone/message).
- Structure with borders, spacing, type, color. Radius `--radius` (6px).
- System font stack only. No web fonts.
- One `<h1>` per page; logical heading order; visible `:focus-visible`;
  tap targets >= 44–48px; `aria-current` on the active nav link.

## Responsive expectations

Check 320, 375, 430, 768, 1024, 1440, 1920. No horizontal overflow, clipped
text or tiny tap targets. Use grid/flex/clamp(); breakpoints in use: 30rem
(full-width buttons), 40rem (mobile header + call bar), 46rem (two-column
hero/services), 60rem (phone number in header button, CTA side-by-side).
Mobile hero = text first, then photo.

## Performance and dependencies

- Static only. No client frameworks (React/Vue/etc.), Tailwind, UI kits,
  animation libs, analytics, trackers or third-party embeds.
- Don't add a dependency without a strong reason. Prefer CSS over JS. Keep
  client JS to the services tab script.
- Small stylesheets are inlined (`build.inlineStylesheets: "auto"`).

## Deploy

Static `dist/` to Cloudflare Pages / Netlify / Vercel (build `npm run build`,
output `dist`). `site.url` in `site.ts` must be the real domain (canonical,
sitemap, robots). Trailing-slash URLs (`/blog/`) everywhere.

## Verification

Smallest check first (`npx astro check`), then `npm run build` before
finishing. For layout changes, check the widths above with no horizontal scroll.
