# Computer Repair Business Website

A fast, static website for a local computer repair business, built with
[Astro](https://astro.build). There's no server, database or contact form.
Visitors call or message you directly.

## Quick start

Requires Node.js 22.12 or newer.

```sh
npm install      # once
npm run dev      # local preview at http://localhost:4321 (reloads as you edit)
npm run build    # type-check + build the finished site into dist/
npm run preview  # serve the built dist/ folder locally
```

## Everyday edits

| I want to…                                | Edit                                      |
| ----------------------------------------- | ----------------------------------------- |
| Change any homepage text, phone, links    | `src/data/site.ts`                        |
| Add, remove or reorder a service          | `src/data/site.ts` → `services`           |
| Add or replace a photo                    | `src/assets/images/` (see its README.md)  |
| Write a repair article                    | `src/content/blog/` (see `_README.md`)    |
| Change colors, fonts, spacing             | `src/styles/global.css` (top section)     |
| Replace the browser-tab icon              | `public/favicon.svg`                      |

Search `src/data/site.ts` for **TODO** to find every placeholder.

### Photos

Photos go in `src/assets/images/` with the file names listed in `site.ts`
(e.g. `hero-repair.jpg`). Until a photo exists, a labelled "Photo needed" box
is shown. Astro automatically resizes and converts photos to WebP at build
time, so you can drop in full-size camera images.

### Adding a service

In `src/data/site.ts`, copy one `{ ... }` block inside `services`, paste it,
and change every value (`id` must be unique). Add its photo to
`src/assets/images/`. The new tab appears automatically.

### Writing a repair article

1. Copy `src/content/blog/example-repair.md` to e.g. `src/content/blog/dell-screen-replacement.md`.
2. Edit the title, description, date and text. Keep `draft: true` while writing.
3. Put its photos in `src/assets/images/blog/dell-screen-replacement/`.
4. Set `draft: false` to publish. It appears at `/blog/dell-screen-replacement/`.

Drafts are visible with `npm run dev` but are never included in the built site.
Full instructions: `src/content/blog/_README.md`.

## Deploying

The build output is the static `dist/` folder. Before your first deploy, set
`url` in `src/data/site.ts` to your real domain (used for canonical links,
the sitemap and `robots.txt`).

| Host             | Build command   | Output directory |
| ---------------- | --------------- | ---------------- |
| Cloudflare Pages | `npm run build` | `dist`           |
| Netlify          | `npm run build` | `dist`           |
| Vercel           | `npm run build` | `dist`           |

All three detect Astro automatically. Set Node.js to version 22.12 or newer if
the host asks.

## What's included

- Homepage: header, hero, tabbed services section, call-to-action, footer
- Phone-sized screens get a small Call / Text bar fixed to the bottom
  (turn off with `mobileBar.enabled` in `site.ts`)
- `/blog` repair write-ups from Markdown files, with drafts and an empty state
- SEO basics: titles, descriptions, canonical URLs, Open Graph, sitemap,
  `robots.txt`, and LocalBusiness structured data built only from `site.ts`
- About 1 KB of JavaScript in total (only for the service tabs). No tracking or analytics.
