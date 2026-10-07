/* Looks up photos by path (e.g. "/src/assets/images/hero-repair.jpg").
   Every image under src/assets/images/ is known at build time, so a path in
   site.ts or a blog post's frontmatter either resolves to an optimisable
   image or returns undefined (and a placeholder is shown instead). */
import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/**/*.{jpg,jpeg,png,webp,avif,gif,svg,JPG,JPEG,PNG,WEBP}",
  { eager: true },
);

export function findImage(path: string | undefined): ImageMetadata | undefined {
  if (!path) return undefined;
  const key = path.startsWith("/") ? path : `/${path}`;
  return images[key]?.default;
}
