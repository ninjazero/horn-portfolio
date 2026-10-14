import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * How well a claim is supported:
 * - verified:    confirmed against a cited primary source
 * - reported:    stated in a primary source but not independently measured
 * - unverified:  not yet confirmed; must not be presented as fact
 * - observed:    a qualitative finding documented in the source (e.g. usability testing)
 * - in-progress: work still underway
 */
const evidence = z.enum(['verified', 'reported', 'observed', 'unverified', 'in-progress']);

/**
 * Case studies. Every entry starts as `status: draft`; drafts render with a
 * visible "Draft" label so unverified content is never presented as final.
 * Outcomes, proof points, and references carry their own evidence level for
 * the same reason. Fields after `todo` are optional extras for long-form,
 * white-paper-style case studies.
 */
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      organization: z.string(),
      category: z.string(),
      summary: z.string(),
      timeframe: z.string().optional(),
      role: z.string().optional(),
      responsibilities: z.array(z.string()).default([]),
      challenge: z.string().optional(),
      approach: z.string().optional(),
      decisions: z
        .array(
          z.union([
            z.string(),
            z.object({
              /** The choice that was made. */
              title: z.string(),
              problem: z.string().optional(),
              alternative: z.string().optional(),
              why: z.string().optional(),
              /** What testing or research showed. */
              findings: z.string().optional(),
              tradeoff: z.string().optional(),
              /** Reference id that supports this decision. */
              source: z.string().optional(),
              /** Who made the decision, when that's established. */
              attribution: z.string().optional(),
            }),
          ]),
        )
        .default([]),
      outcomes: z
        .array(
          z.object({
            statement: z.string(),
            evidence,
            note: z.string().optional(),
            source: z.string().optional(),
          }),
        )
        .default([]),
      technologies: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      coverCaption: z.string().optional(),
      /** `fill` crops the cover to the card; `tilt` shows it as an angled screenshot. */
      coverStyle: z.enum(['fill', 'tilt']).default('fill'),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      featuredOrder: z.number().int().positive().optional(),
      status: z.enum(['draft', 'published']).default('draft'),
      todo: z.array(z.string()).default([]),

      /** Display headline for the case-study page; `title` stays the card/nav name. */
      headline: z.string().optional(),
      deck: z.string().optional(),
      eyebrow: z.string().optional(),
      team: z.string().optional(),
      /** Short proof points shown under the headline. */
      proof: z.array(z.object({ label: z.string(), evidence, source: z.string().optional() })).default([]),
      challengePoints: z.array(z.string()).default([]),
      /** Separates individual work from the wider team's, so credit stays accurate. */
      contributions: z
        .object({
          mine: z.array(z.string()),
          team: z.array(z.string()),
          source: z.string().optional(),
          /** Shown under the lists, e.g. when attribution rests on Anthony's own account. */
          note: z.string().optional(),
        })
        .optional(),
      /** Simplified architecture: linear steps, optional parallel outputs, and a loop note. */
      /** Pull quote under the challenge, e.g. the framed design challenge. */
      challengeQuote: z.string().optional(),
      /** Replaces the default intro paragraph of the role section. */
      roleIntro: z.string().optional(),
      /** Short callout about the method used, kept secondary to the project. */
      method: z
        .object({
          heading: z.string(),
          text: z.string(),
          link: z.object({ label: z.string(), url: z.url() }).optional(),
        })
        .optional(),
      /** Overrides the intro above the decision cards. */
      decisionsIntro: z.string().optional(),
      outcomesIntro: z.string().optional(),
      /** Shown after the outcomes, e.g. implementation status. */
      outcomesNote: z.string().optional(),
      timeline: z
        .array(
          z.object({
            period: z.string(),
            milestone: z.string(),
            note: z.string().optional(),
            /** Proposed next steps, not completed milestones. */
            planned: z.boolean().default(false),
            /** The milestone underway now. */
            current: z.boolean().default(false),
          }),
        )
        .default([]),
      /** Heading for the approach section; defaults to "Approach". */
      approachHeading: z.string().optional(),
      flow: z
        .object({
          /** Diagram label; defaults to "Simplified architecture". */
          label: z.string().optional(),
          /** Plain steps, or titled phases with a short description. */
          steps: z.array(z.union([z.string(), z.object({ title: z.string(), text: z.string() })])),
          outputs: z.array(z.string()).default([]),
          loop: z.string().optional(),
          caption: z.string().optional(),
        })
        .optional(),
      /** A titled set of short cards, e.g. post-launch support examples. */
      highlights: z
        .object({
          heading: z.string(),
          intro: z.string().optional(),
          items: z.array(z.object({ title: z.string(), text: z.string() })),
        })
        .optional(),
      /** Closing reflection; shown as a draft until Anthony approves the wording. */
      reflection: z.object({ text: z.string(), approved: z.boolean().default(false) }).optional(),
      references: z
        .array(
          z.object({
            id: z.string(),
            title: z.string(),
            publisher: z.string().optional(),
            /** Omit for internal sources that can't be linked. */
            url: z.url().optional(),
            status: z.enum(['verified', 'unverified']),
            note: z.string().optional(),
          }),
        )
        .default([]),
    }),
});

/**
 * Talks and community contributions. Every fact here should be checkable
 * against the linked recording or event page.
 */
const link = z.object({
  label: z.string(),
  url: z.url(),
  kind: z.enum(['video', 'slides', 'session', 'other']).default('other'),
});

const speaking = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/speaking' }),
  schema: z.object({
    title: z.string(),
    format: z.string().default('Conference talk'),
    coPresenters: z.array(z.string()).default([]),
    summary: z.string(),
    /** Every time the talk was given, most notable first. */
    appearances: z
      .array(
        z.object({
          event: z.string(),
          /** Quote it in YAML so it stays a string. */
          year: z.string(),
          location: z.string().optional(),
          date: z.string().optional(),
          /** Overrides the talk's format for this appearance, e.g. "Mini talk". */
          format: z.string().optional(),
          durationMinutes: z.number().int().positive().optional(),
          links: z.array(link).default([]),
        }),
      )
      .min(1),
    /** A case study that applies the ideas from this talk. */
    relatedWork: reference('work').optional(),
    order: z.number().int().default(0),
    status: z.enum(['draft', 'published']).default('draft'),
    todo: z.array(z.string()).default([]),
  }),
});

export const collections = { work, speaking };
