---
title: UCLA Fractal to Storybook Migration
organization: UCLA
category: Design Systems
summary: Used a constrained, AI-assisted workflow to move UCLA's approved design-system components from Fractal to Storybook in under a day of initial effort, then worked with developers on review and incremental hardening toward release.
role: UI/UX Experience Designer; SiteDen maintainer and design-system collaborator
timeframe: In progress, nearing release (as of October 2026)
team: Strategic Communications and Web Services developers, with the design-system release architect

eyebrow: Case study · AI-assisted migration
headline: Moving UCLA's design system from Fractal to Storybook
deck: Using AI to speed up a low-risk platform migration, while preserving an approved design system and making room for incremental modernization.
proof:
  - label: Initial migration in under a day
    evidence: reported
  - label: Reviewed by two developer teams
    evidence: reported
  - label: About 99% complete, nearing release
    evidence: in-progress

challenge: UCLA's public-facing design system was built on Fractal. Its v2 components were already approved and in use across campus, including in SiteDen, the Drupal distribution behind more than 60 websites. The system also did real distribution work, with versioned releases and compiled assets published through a CDN and packages. But Fractal was getting harder to sustain as its technology aged and support declined. A broader effort aimed to solve everything at once, moving to Storybook while adding design tokens and semantic class patterns, refactoring the stack, and rethinking the system as v3. That made the work far more complex than a platform move, with cross-department dependencies and open decisions slowing progress. Meanwhile, teams still needed a sustainable replacement for Fractal.
challengePoints:
  - Fractal was aging, with declining support.
  - SiteDen and other sites depended on the system's versioned releases, CDN assets, and packages.
  - Combining the migration with a v3 redesign multiplied the decisions needed before anything could move.
challengeQuote: Could we move the approved v2 system to Storybook now, without waiting for agreement on every v3 design and architecture decision?

roleIntro: As a maintainer of UCLA's SiteDen platform, I depended on the design system and had a direct stake in keeping it maintainable. I helped advocate for separating the immediate migration from the larger v3 redesign, an idea that also came up elsewhere, and then led the hands-on, AI-assisted v2-to-v2 migration.
contributions:
  note: Based on my own account as of October 2026.
  mine:
    - Helped advocate for doing the v2-to-v2 migration first, separate from the v3 redesign.
    - Set the technical constraints for Claude Code, supplied the source templates and styles, and used earlier experiments and examples to steer the generated Storybook structure.
    - Worked with developers to compare components, identify discrepancies, organize issues, and move fixes through the team.
    - Set up separate Storybook static builds for internal development and public documentation.
  team:
    - Developers from Strategic Communications and Web Services reviewed migrated components against the Fractal originals and worked through fixes.
    - The design-system release architect is deciding how Storybook output fits the versioned CDN and package workflows.
    - A cross-department v3 effort continues to explore design tokens, semantic class patterns, and a broader redesign.

approachHeading: Approach
approach: The goal was a faithful lift-and-shift. AI handled the repetitive transfer of existing templates; people kept responsibility for fidelity, dependencies, and release readiness.
flow:
  label: Migration path
  steps:
    - title: Separate the platform problem from the redesign
      text: Pursue Fractal v2 to Storybook v2, preserving the approved components and deferring major design changes to later, deliberate iterations.
    - title: Constrain the AI to a faithful lift-and-shift
      text: With local copies of the Fractal v2 source and a minimal Storybook project, I pointed Claude Code at the existing Handlebars templates, CSS, and assets, with examples of the intended output and file structure. The goal was to preserve HTML markup, not reinvent components.
    - title: Generate the initial migration
      text: With a narrow scope and explicit constraints, the initial transfer took less than a day. It was mostly the repetitive work of moving established templates into Storybook.
    - title: Review with developers and fix discrepancies
      text: Developers compared migrated components with the Fractal originals, then created and assigned issues for missing stylesheets, JavaScript dependencies, component behavior, and presentation gaps.
    - title: Modernize incrementally
      text: Converted stories to TypeScript, and configured two static builds, one with components and documentation for development and one documentation-focused build for publication.
    - title: Prepare for release integration
      text: A few pull requests remain, and the release architect is deciding how Storybook output will support the existing versioned CDN and package releases.
  caption: AI did the repetitive transfer in step 3; people own every review and release decision.

highlights:
  heading: Two ways to get there
  intro: The difference was in sequencing, not ambition. The v3 work wasn't cancelled; it no longer blocks the platform move.
  items:
    - title: All at once
      text: Fractal v2 straight to a v3 Storybook system, with design tokens, semantic class patterns, a refactored stack, and a redesign, all decided before anything ships.
    - title: Staged
      text: Fractal v2 to Storybook v2 now, preserving what's already approved, then v3 improvements arrive incrementally on a sustainable platform.

decisionsIntro: These choices shaped the migration. I advocated for the first and led the hands-on work behind the others, with developers sharing review and fixes.
decisions:
  - title: Ship the platform migration independently of v3
    alternative: Holding the Storybook move until every v3 design and architecture question was settled.
    why: Moving the approved v2 system first cut the number of decisions needed to make progress, while keeping a path open to tokens, semantic patterns, and other v3 improvements.
  - title: Use AI for repetitive transformation, not design authority
    why: The components and design decisions already existed. Claude Code was told to reproduce their structure and behavior in Storybook, and developers kept responsibility for fidelity, dependencies, correctness, and release readiness.
  - title: Start minimal and preserve markup
    alternative: A richer, JavaScript-heavy Storybook architecture from day one.
    why: A simple scaffold and HTML-first migration kept generated code from drifting away from the original Handlebars templates. TypeScript came later as an improvement, not a prerequisite.
  - title: Validate through cross-team comparison
    why: Rather than treating AI output as finished, the team compared Fractal and Storybook versions side by side, tracked gaps as issues, assigned owners, and fixed them.
  - title: Separate public documentation from the development build
    why: One build serves developers with components and documentation; another serves the public with documentation. How they plug into publishing and distribution is still being finalized.

outcomesIntro: These reflect my own account as of October 2026. The project is nearing release, so outcomes describe progress, not production impact.
outcomes:
  - statement: The initial migration took less than a day of effort, with Claude Code doing the bulk transfer of existing templates and assets. That's the initial migration only, not the whole project's duration or team effort.
    evidence: reported
  - statement: About 99% complete, with a few pull requests and release-distribution decisions remaining.
    evidence: in-progress
  - statement: Developers from Strategic Communications and Web Services compared the migrated components with the originals, documented gaps, assigned fixes, and worked through them together.
    evidence: reported
  - statement: The implementation progressed from an HTML-first proof of concept to TypeScript stories, with separate static builds for developers and the public.
    evidence: reported
outcomesNote: The Storybook migration isn't confirmed as released to production yet. Versioned releases, CDN publishing, and package distribution still need a final architecture review. A post-launch update will follow.

timeline:
  - period: Starting point
    milestone: Fractal v2 is the approved campus design system, supporting SiteDen and other sites
  - period: Broader effort
    milestone: A cross-department v3 initiative combines the Storybook move with tokens, semantic classes, and a redesign
  - period: Refocus
    milestone: A v2-to-v2 migration emerges as a practical independent step
  - period: AI-assisted migration
    milestone: A minimal Storybook scaffold, with templates, styles, and dependencies transferred in under a day
  - period: Collaborative QA
    milestone: Developers review component fidelity, assign issues, and fix defects
  - period: Hardening
    milestone: TypeScript stories and separate development and public builds
  - period: Now
    milestone: Final pull requests and the release architecture for CDN and package outputs
    current: true

technologies:
  - Fractal
  - Storybook
  - Claude Code
  - Handlebars
  - HTML
  - CSS
  - JavaScript
  - TypeScript
  - Drupal (SiteDen)

reflection:
  approved: false
  text: The most useful thing AI did here was remove the tedious part of the work, so the team could spend its time on judgment, reviewing fidelity, untangling dependencies, and deciding how to ship.

cover: ../../assets/storybook-migration.jpg
coverAlt: 'UCLA Design System in Storybook, showing the Forms documentation page with an annotated anatomy diagram of a text field.'
coverCaption: The migrated Forms documentation running in a local Storybook build.
coverStyle: tilt
featuredOrder: 4
status: draft
todo:
  - 'COVER IMAGE: crop out the browser toolbar and bookmarks bar (it shows internal tool names, your browser profile, and a localhost URL)'
  - Add genuine before/after screenshots (Fractal v2 vs Storybook v2) for a component or two, at matching viewport sizes
  - 'Optional visuals: a redacted issue/PR list (if authorized), and a diagram of the two static builds'
  - Exact Fractal and Storybook versions, and repository names if public
  - Count of migrated components/stories, and whether all are feature-complete
  - Any reliable measure of time saved versus a manual migration (don't claim one until then)
  - Whether the final PRs merged and the publishing workflow was approved; release date; SiteDen adoption
  - Confirm the "more than 60 websites" figure for SiteDen
  - Public Storybook URL, once released
  - Approve or rewrite the reflection
  - Keep UCLA brand attribution neutral; don't imply official endorsement
---
