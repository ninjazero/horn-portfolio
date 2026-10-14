# anthonyhorn.com

Personal portfolio for Anthony Horn. Static Astro + TypeScript site deployed to Netlify.

## Requirements

- Node 24 (see `.nvmrc`; Astro 7 requires ≥ 22.12)

## Commands

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm install`     | Install dependencies                           |
| `npm run dev`     | Local dev server at http://localhost:4321      |
| `npm run check`   | Type-check `.astro` and `.ts` files            |
| `npm run build`   | Type-check, then build static site to `dist/`  |
| `npm run preview` | Serve the built `dist/` locally                |

## Structure

```
src/
  components/      Reusable UI (SiteNav, Hero, ProjectCard, AboutTeaser, Icon, PeakIllustration)
  content/work/    Case studies (Markdown + typed frontmatter)
  content.config.ts  Case-study schema
  data/site.ts     Name, tagline, nav items
  layouts/         BaseLayout: <head>, metadata, skip link, app shell
  pages/           File-based routes
  styles/          tokens.css (design tokens) and global.css
```

## Authoring case studies

Add a Markdown file to `src/content/work/`. The filename becomes the URL slug
(`/work/<slug>/`). Frontmatter is validated against `src/content.config.ts`.

- `status: draft` (default) renders a visible **Draft · unverified** label.
  Switch to `published` only after every fact has been confirmed.
- `outcomes[].evidence` is `verified`, `unverified`, or `in-progress`.
- `featuredOrder` puts an entry on the homepage (lowest first, max 4).
- `todo` lists facts or assets still needed.

## Deployment

Netlify builds from GitHub using `netlify.toml` (`npm run build` → `dist/`,
Node 24). No server, database, or environment secrets are required.

DNS and production publishing need explicit approval.
