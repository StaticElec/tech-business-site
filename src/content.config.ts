/* Blog collection — defines which fields a repair article can have.
   Articles are Markdown files in src/content/blog/ (files starting with "_"
   are ignored). Routes: /blog (list) and /blog/<file-name> (article). */
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "[^_]*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Path to the cover photo, e.g. "/src/assets/images/blog/my-post/cover.jpg".
    // If the file doesn't exist yet, a labelled placeholder is shown.
    coverImage: z.string().optional(),
    coverImageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Drafts are visible with `npm run dev` but never published.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
