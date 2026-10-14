# Claude Code Handoff — Anthony Horn Portfolio

## Mission
Scaffold a fast, accessible, polished personal portfolio for Anthony Horn, a senior web/UX professional positioning for web development management, technical lead, web architecture, and digital experience leadership roles. This should feel like a **lightweight, well-designed web app for getting to know a person**, not a corporate brochure, crowded dashboard, or nature magazine.

## Working style
1. Inspect the existing repository and summarize what is already present before modifying anything. Preserve useful existing content/assets and avoid destructive changes.
2. Propose a short implementation plan, then scaffold the MVP. Ask only about genuine blockers (e.g. whether to replace an existing app).
3. Use realistic **clearly labeled placeholder** content where facts or assets are missing. Never fabricate achievements, metrics, testimonials, job titles, deployment status, or photos.
4. Prefer clean, maintainable architecture and small dependencies over framework novelty.
5. At completion, run build/type checks and report what works, what remains, and how to develop/deploy.

## Tech stack
- Astro with TypeScript, using **static output** by default.
- Vue 3 islands only for meaningful interactive UI; no blanket SPA hydration, no Vue Router by default.
- Astro file-based routing, content collections for projects/speaking, Markdown or MDX as appropriate.
- Astro `ClientRouter` may be used for polished transitions **if** accessibility, focus restoration, navigation, and component lifecycle are handled; progressive enhancement and ordinary links must work.
- Custom CSS with design tokens (CSS variables), preferably without a utility framework unless justified.
- Netlify deployment, GitHub-connected build. No database, CMS, authentication, or SSR for MVP.
- Favor lightweight icons (e.g. Lucide), system or appropriately licensed web fonts, responsive images, and minimal JavaScript.

## Product and UX direction
**Core positioning:** “I help organizations create better digital experiences.” Supporting themes: development, design, research, leadership, systems thinking, process improvement, and cross-functional collaboration. Avoid repeatedly using the exact label “Web Technology Leader.” Avoid implying verified direct-report management experience.

**Tone:** confident, thoughtful, technical, approachable, established. Show leadership through work and decisions rather than repeated buzzwords.

**Visual design:**
- Minimal, modern software-product feel with spacious composition and clear hierarchy.
- A compact persistent-feeling navigation rail on desktop; accessible compact navigation on mobile.
- Light/off-white surfaces, navy/charcoal typography, restrained cobalt/blue accents, optional muted evergreen.
- Soft cards, subtle borders and shadows, modest rounding; no dense dashboard grids or overwhelming homepage.
- Pacific Northwest personality **sparingly**: a single restrained mountain/evergreen illustration or subtle topographic detail. Nature must be an accent, not the site's subject. Avoid flannel textures and decorative wildlife overload.
- Typography should be professional and legible. User has previously considered Play for headings and Source Sans 3 for body; use those if licensing/performance work, otherwise sensible alternatives.
- Motion should be subtle, honor `prefers-reduced-motion`, and never obstruct navigation.

**Homepage information density:** Keep it simple: (1) concise introduction and primary CTA, (2) a curated featured-work area, (3) a brief About/contact prompt. Move speaking, detailed skills, and full background to dedicated pages.

## Suggested information architecture
- `/` — concise intro, 3–4 featured case studies, brief personal/professional introduction, clear CTAs.
- `/work/` — project index, with optional simple client-side filtering only if useful.
- `/work/[slug]/` — accessible case-study template driven by content collections; static `getStaticPaths()`.
- `/about/` — approach, background, leadership style, values, skills.
- `/speaking/` — talks, workshops, community contributions.
- `/contact/` — clear email/contact link and relevant professional profiles; do not invent addresses.
- Resume download/link only once a verified current resume asset exists.

## Initial case-study placeholders
Create structured, clearly marked draft content and TODOs for:
1. **UC Davis flagship website / design system** — campus-scale work, architecture, collaboration. User contributed to work associated with the 2022 Webby People's Voice Award; do not claim sole authorship.
2. **Mondavi Center website** — planning, project leadership, design/theming/development; confirm specifics and outcomes before publishing.
3. **AggieService UX improvement process** — approximately year-long research and process work, stakeholder interviews, surveys, synthesis, prototypes, usability testing, and proposed roadmap. Crucial: recommendations' implementation status is unknown; do not claim they shipped.
4. **UCLA Fractal v2 → comparative Storybook v2 migration** — AI-assisted design-system migration, currently in progress; do not claim production deployment or validated performance outcomes.

Case-study schema should support: title, slug, organization, timeframe (optional), role (optional), summary, responsibilities, challenge, approach, decisions, outcomes (with evidence/uncertainty), technologies, cover image (optional), gallery (optional), featured order, and draft/published status. Ensure incomplete drafts aren't accidentally presented as verified final content.

## Speaking placeholders
- *Building a User Experience Improvement Process for Higher Education* — UC Tech San Diego: https://mediaspace.ucsd.edu/media/Building+a+User+Experience+Improvement+Process+for+Higher+Education/1_2gffxu1e/259921302
- *You Gonna Build a Process for That Process?* — https://www.youtube.com/watch?v=EFNdohOx6q0
Verify event names, dates, and precise roles before publishing. Drupal community contributions can be included later after review.

## Implementation priorities
1. Build a cohesive responsive app shell and design token system.
2. Create clean routes, page templates, and typed content collections.
3. Implement homepage, project index, case study, About, Speaking, Contact.
4. Add optional minimal Vue interaction (e.g. project filters) only where it materially improves usability.
5. Add accessible navigation states, focus handling, reduced motion, metadata, Open Graph placeholders, sitemap, and robots settings.
6. Optimize images and avoid layout shift; provide placeholder art only when appropriately licensed/owned.
7. Set up Netlify configuration, documentation, and useful npm scripts.

## Performance, quality, and accessibility
- Aim for excellent Core Web Vitals and Lighthouse performance/accessibility, but don't promise scores without testing.
- Semantic landmarks/headings, skip link, keyboard support, visible focus, adequate contrast, descriptive links and alt text.
- Functional navigation with JS disabled wherever practical; avoid unnecessary client-side JS.
- Test narrow mobile, tablet, and desktop layouts.
- No server secrets or analytics tracking by default. No unnecessary cookies or third-party trackers.

## Deployment
Create `netlify.toml` with build command `npm run build` and publish directory `dist`. Verify compatible Node version from the Astro version installed and pin it via `.nvmrc` or equivalent. Include README with setup, development, content authoring, build, preview, and deployment instructions. Do not alter DNS or publish to production without explicit approval.

## Deliverables
- Working Astro + TypeScript site with focused Vue islands if warranted.
- Clear reusable components, typed content models, and sample draft case studies.
- Responsive, accessible design faithful to the restrained tech-first Pacific Northwest direction.
- README, Netlify config, and a concise TODO list of facts/assets Anthony needs to provide.
- Report of commands executed, checks passed/failed, and any limitations.

## Acceptance criteria
- `npm install` and `npm run build` succeed.
- Every specified route resolves, including at least one generated project detail route.
- Main navigation works directly, on refresh, and with browser back/forward.
- Mobile navigation is usable by keyboard and touch.
- Home is uncluttered and reads as a polished software interface, not a wildlife publication.
- All unverified claims are clearly labeled draft/TODO rather than presented as fact.
- Static site can deploy to Netlify without a running Node server.

## Suggested first instruction to Claude Code
“Read this handoff and inspect the current repo. Tell me briefly what you plan to create or preserve, then implement the MVP scaffold. Prioritize an excellent homepage and reusable case-study system. Use placeholder content where necessary, do not invent accomplishments, and do not deploy to production.”
