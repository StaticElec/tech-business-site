# Adding a repair write-up

Each article is one Markdown (`.md`) file in this folder. Files whose names
start with `_` (like this one) are ignored.

1. Copy `example-repair.md` and rename the copy. The file name becomes the
   web address: `screen-replacement-dell.md` → `/blog/screen-replacement-dell`.
   Use lowercase letters, numbers and dashes only.
2. Edit the block between the `---` lines at the top:
   - `title`, `description` (one or two sentences — also used by search engines)
   - `publishedDate` as `YYYY-MM-DD`; optional `updatedDate`
   - `coverImage` / `coverImageAlt` (optional — delete both lines for no cover)
   - `tags` (optional list)
   - `draft: true` while you're writing. Drafts show up with `npm run dev`
     but are never published. Change to `draft: false` to publish.
3. Put the article's photos in `src/assets/images/blog/<file-name>/`
   (e.g. `cover.jpg`, `before.jpg`, `after.jpg`).
   - Cover image path: `"/src/assets/images/blog/<file-name>/cover.jpg"`
   - Photo inside the text:
     `![What the photo shows](../../assets/images/blog/<file-name>/before.jpg)`
4. Write the article with normal Markdown: `## Heading`, `- list item`,
   `1. step`, `[link text](https://...)`, and code blocks in triple backticks.
5. Run `npm run dev` to preview at http://localhost:4321/blog, then
   `npm run build` to check everything before publishing.

The allowed frontmatter fields are defined in `src/content.config.ts`.
