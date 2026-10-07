/* Blog helpers shared by /blog and /blog/[...slug].
   Drafts (draft: true) appear while running `npm run dev` but are left out of
   the production build entirely. */
import { getCollection, type CollectionEntry } from "astro:content";
import { site } from "../data/site";

export type Post = CollectionEntry<"blog">;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf());
}

const dateFormat = new Intl.DateTimeFormat(site.locale, { dateStyle: "long", timeZone: "UTC" });

export function formatDate(date: Date): string {
  return dateFormat.format(date);
}
