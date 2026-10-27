/**
 * IT Vidya content schema.
 *
 * All site content lives in typed local files under `src/content`. The build
 * validates cross-references (see `src/lib/content.ts`) so a broken slug fails
 * the build instead of shipping a broken link.
 */

export const DOMAIN_SLUGS = [
  "self",
  "relationships",
  "nature",
  "philosophy",
  "learning",
  "society",
  "work",
  "community",
] as const;

export type DomainSlug = (typeof DOMAIN_SLUGS)[number];

/**
 * Every content section can declare what kind of claim it makes, so readers
 * can tell established evidence from interpretation, perspective, open
 * questions and practice. Sections without a kind are neutral framing.
 */
export type EpistemicKind =
  | "evidence"
  | "interpretation"
  | "perspective"
  | "plural"
  | "hypothesis"
  | "practice";

export interface ContentSection {
  heading: string;
  kind?: EpistemicKind;
  /** Paragraphs of plain text. */
  body: string[];
  /** Optional bulleted points rendered after the paragraphs. */
  points?: string[];
}

export interface Reference {
  title: string;
  author: string;
  year?: number;
  /** Why this is worth reading — not a claim that it supports every statement above. */
  note?: string;
  url?: string;
}

export type ReviewStage = "editorial-draft" | "editor-reviewed" | "peer-reviewed";

export interface Review {
  stage: ReviewStage;
  /** ISO date (YYYY-MM-DD) of the last review or revision. */
  lastReviewed: string;
  note?: string;
}

export interface Attribution {
  name: string;
  role?: string;
}

export interface License {
  /** Short label shown on the page. */
  label: string;
  /** Plain-language explanation. */
  summary: string;
  /** SPDX-style identifier when an actual open license applies; omitted otherwise. */
  spdx?: string;
  url?: string;
}

export type ResourceFormat = "essay" | "primer" | "guide" | "practice";
export type ResourceLevel = "beginner" | "intermediate";

export interface Resource {
  slug: string;
  title: string;
  summary: string;
  domain: DomainSlug;
  /** Other domains this resource meaningfully touches. */
  alsoIn?: DomainSlug[];
  tags: string[];
  format: ResourceFormat;
  level: ResourceLevel;
  author: Attribution;
  status: "published" | "draft";
  review: Review;
  /** ISO date (YYYY-MM-DD). */
  published: string;
  /** Disclosure of AI assistance, shown on the page when present. */
  aiAssistance?: string;
  /** Shown before the content for topics touching health, psychology or finance. */
  careNote?: string;
  /** Short statement of the main idea, shown before the body. */
  keyIdeas: string[];
  sections: ContentSection[];
  reflectionQuestions: string[];
  application: {
    title: string;
    steps: string[];
  };
  related: string[];
  references?: Reference[];
  /** Overrides the site default content license. */
  license?: License;
}

export interface Domain {
  slug: DomainSlug;
  number: number;
  title: string;
  shortTitle: string;
  tagline: string;
  /** Purpose — one or two sentences. */
  purpose: string;
  introduction: string[];
  whyItMatters: string[];
  subtopics: { title: string; description: string }[];
  keyQuestions: string[];
  practice: {
    title: string;
    duration: string;
    steps: string[];
    note?: string;
  };
  related: DomainSlug[];
}

export interface JourneyStep {
  title: string;
  focus: string;
  summary: string[];
  resources: string[];
  reflectionPrompts: string[];
  exercise: {
    title: string;
    time: string;
    instructions: string[];
  };
  takeaway: string;
}

export interface Journey {
  slug: string;
  title: string;
  subtitle: string;
  objective: string;
  outcomes: string[];
  audience: string[];
  duration: string;
  pace: string;
  domains: DomainSlug[];
  careNote?: string;
  steps: JourneyStep[];
  completion: {
    guidance: string[];
    continueWith: string[];
  };
}
