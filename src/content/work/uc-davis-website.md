---
title: UC Davis Website, Design System & SiteFarm
organization: University of California, Davis
category: Design Systems
summary: How a shared digital style guide, Pattern Lab components, and the SiteFarm platform connected the UC Davis flagship redesign to hundreds of campus websites.
role: UX Designer, IET Web Development
timeframe: 2021–2022 (approx.)
team: IET Web Development and Strategic Communications

eyebrow: Case study · Enterprise web platform
headline: One design system. Hundreds of websites.
deck: How cross-team collaboration, reusable components, and a shared platform helped UC Davis connect an award-winning flagship redesign with a campus-wide web ecosystem.
proof:
  - label: 2022 Webby People's Voice Winner
    evidence: verified
    source: webby
  - label: 800+ campus sites in a reported six-month rollout
    evidence: reported
    source: uctech
  - label: Two teams, one shared codebase
    evidence: verified
    source: uctech

challenge: In 2021 UC Davis rebranded, but the outside vendor's style guide was built for print, with little to no guidance for the web. UCDavis.edu traditionally leads any design change on campus, so whatever the team did on the flagship would set the tone for hundreds of other university websites.
challengePoints:
  - Translate print-first brand elements into accessible, modern web design.
  - Move the campus home site onto the campus CMS, SiteFarm.
  - Bring the new brand to 800+ campus websites, many with department-specific subthemes.
  - Avoid the old pattern, where rebrands took years and each department applied them with its own people and budget.

contributions:
  source: uctech
  mine:
    - Co-created the 2021 digital style guide with Tom Watts, translating the print-focused brand into web guidance.
    - Designed the SiteFarm page comps in Adobe XD, validated by Tom Watts.
    - Worked within IET Web Development, the team that primarily developed SiteFarm.
    - Submitted the teams' 2022 UC Tech Awards entry documenting the project.
    - TODO — which Pattern Lab components, Sass/CSS, Twig, or theme code you personally built or reviewed
  team:
    - Strategic Communications set the brand vision and did the first work applying the new brand to digital.
    - Tom Watts designed the unique page layouts for UCDavis.edu.
    - Both teams developed UCDavis.edu together.
    - IET Web Development primarily developed SiteFarm, with contributions back from UCDavis.edu through the shared codebase.
    - Shawn DeArmond (IET Web Development) and Tristan Peery (Strategic Communications) led the project.

approach: The teams treated a digital style guide as the single source of truth, then carried it through the campus design system in order, from Adobe XD comps to Pattern Lab components to a new SiteFarm theme. UCDavis.edu launched on that foundation first, and the theme then rolled out to campus sites.
flow:
  steps:
    - 2021 brand guidelines (print-focused, from an outside vendor)
    - Digital style guide in Adobe XD, the source of truth
    - SiteFarm page comps in Adobe XD
    - Pattern Lab components in the front-end pattern library
    - New SiteFarm theme
  outputs:
    - UCDavis.edu flagship, launched first
    - 800+ SiteFarm campus sites, rolled out after
  loop: Shared codebase. New elements built for either can be contributed back to both.
  caption: Simplified architecture based on the teams' UC Tech Awards submission. It shows the order of the work, not literal repositories or build pipelines.

decisions:
  - title: Make a digital style guide the single source of truth
    alternative: Let each team interpret the print-focused vendor guidelines on its own.
    why: One reference for UCDavis.edu, SiteFarm, and any campus app adopting the brand, with a baseline for accessible, modern design built in.
    source: uctech
  - title: Apply the brand to the campus pattern library first
    alternative: Build the flagship as a one-off, then retrofit the campus platform later.
    why: Pattern Lab already housed SiteFarm's components, so updating it first meant the flagship and campus sites would draw on the same new patterns.
    source: uctech
  - title: Launch the flagship on the shared platform, then roll out campus-wide
    alternative: A bespoke flagship separate from SiteFarm, with campus sites rebranded independently.
    why: Moving UCDavis.edu onto SiteFarm put both on one codebase, so the flagship could prove the design and new elements could flow back to every site.
    source: uctech

outcomes:
  - statement: UCDavis.edu was the 2022 Webby People's Voice Winner in Websites and Mobile Sites, School/University.
    evidence: verified
    source: webby
  - statement: The teams' submission reports that the new branding reached 800+ university websites in about six months, delivered by two small teams.
    evidence: reported
    source: uctech
    note: Self-reported in the submission, which also says cost savings were never calculated. Confirm whether "websites" means sites, installs, or branded properties.
  - statement: The submission describes a repeatable path for future rebrands, with departments able to contribute new design elements back to the shared system.
    evidence: reported
    source: uctech
  - statement: 2022 CASE Circle of Excellence, Bronze, Websites (Institutional).
    evidence: unverified
    source: case
    note: The CASE site blocks automated access. Confirm the award level, category, and the "4.1 million annual users" figure before featuring either.

technologies:
  - Adobe XD
  - Pattern Lab
  - SiteFarm (Drupal)
  - HTML
  - CSS

reflection:
  approved: false
  text: A design system is as much a communication tool as a component library. The most valuable work here wasn't any single page; it was a shared foundation that let many teams build consistently without starting from scratch.

references:
  - id: uctech
    title: 'UC Tech Awards 2022 submission: Design systems for the win (UC Davis)'
    publisher: University of California Office of the President
    url: https://www.ucop.edu/information-technology-services/_files/uc-tech-awards/2022/design-systems-for-the-win-uc-davis.pdf
    status: verified
  - id: webby
    title: University of California, Davis Homesite, People's Voice Winner, 2022
    publisher: The Webby Awards
    url: https://winners.webbyawards.com/2022/websites-and-mobile-sites/general-websites-and-mobile-sites/schooluniversity/212571/university-of-california-davis-homesite
    status: verified
  - id: case
    title: UC Davis Homesite, 2022 Circle of Excellence
    publisher: CASE
    url: https://www.case.org/awards/circle-excellence/2022/uc-davis-homesite
    status: unverified
    note: Not yet confirmed; the page could not be checked automatically.
  - id: styleguide
    title: 2021 Digital Style Guide (Adobe XD)
    publisher: UC Davis
    url: https://xd.adobe.com/view/45eec55b-8d01-4f34-b3f6-66a4a0b0ef07-10bd/grid
    status: unverified
    note: Linked from the submission. Check that it still loads; Adobe has wound down XD sharing.
  - id: comps
    title: SiteFarm page design comps (Adobe XD)
    publisher: UC Davis
    url: https://xd.adobe.com/view/ef606701-b73d-46c9-8e13-eb6f522bfb4c-ba33/grid
    status: unverified
    note: Linked from the submission. Check that it still loads.
  - id: patternlab
    title: 2021 rebranded pattern library
    publisher: UC Davis
    url: http://dev.webstyleguide.ucdavis.edu/redesign/?p=all
    status: unverified
    note: Linked from the submission; a dev URL that may not stay public.

cover: ../../assets/ucdavis-pattern-lab.jpg
coverAlt: Pattern Lab displaying a UC Davis SiteFarm page template, with the component navigation panel on the left.
coverCaption: The SiteFarm pattern library in Pattern Lab, where the rebranded components lived.
coverStyle: tilt
featuredOrder: 1
status: draft
todo:
  - Confirm your personal code contributions (Pattern Lab components, Sass/CSS, Twig, theme work, code reviews)
  - Confirm exact project dates and your milestones
  - Confirm whether you proposed or shaped any of the three decisions; they're presented as team decisions until then
  - Verify the CASE award and the 4.1 million users figure
  - Open each unverified reference link and confirm it still works and is public
  - Approve or rewrite the reflection
  - Confirm you're comfortable naming colleagues (Tom Watts, Shawn DeArmond, Tristan Peery); they're named in the public submission
  - Add authentic artifacts if available (style guide pages, XD exports, before/after captures)
---
