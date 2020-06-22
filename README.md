**pommedeterresautee blog (AstroPaper theme)**

- Framework: Astro (static site)
- Hosting: GitHub Pages
- Content: Markdown under `src/content/blog`

Quick start

- Dev: `npm run dev` then open http://localhost:4321
- Build: `npm run build` (outputs to `dist/`)

Writing posts

- Location: place posts under `src/content/blog/` (nested year/slug folders supported). URLs are under `/posts/<year>/<slug>/`.
- Images: keep images next to your `index.md` and reference them relatively (e.g. `![Alt](image.png)`); Astro copies them on build.
- Frontmatter required: `title`, `description`, `pubDate` (ISO or `YYYY-MM-DD`). Optional: `updatedDate`, `draft`, `authors`, `categories`, `tags`.
