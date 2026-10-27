import { domains as allDomains } from "@/content/domains";
import { journeys as allJourneys } from "@/content/journeys";
import { resources as allResources } from "@/content/resources";
import type {
  Domain,
  DomainSlug,
  EpistemicKind,
  Journey,
  Resource,
  ResourceFormat,
} from "@/content/schema";
import { DOMAIN_SLUGS } from "@/content/schema";
import { defaultLicense } from "@/content/site";

const WORDS_PER_MINUTE = 200;

export const epistemicLabels: Record<EpistemicKind, { label: string; description: string }> = {
  evidence: {
    label: "Established understanding",
    description: "Broadly supported by research or long, well-documented observation. Details may still be debated.",
  },
  interpretation: {
    label: "Interpretation",
    description: "A reasoned reading of evidence or experience. Others may reasonably read it differently.",
  },
  perspective: {
    label: "Philosophical perspective",
    description: "A view from a tradition or thinker, offered for inquiry — not as proven fact.",
  },
  plural: {
    label: "Multiple perspectives",
    description: "A question on which thoughtful people and traditions disagree.",
  },
  hypothesis: {
    label: "Open question",
    description: "An idea or question that is not settled and is worth exploring further.",
  },
  practice: {
    label: "Reflective practice",
    description: "An exercise to try and observe for yourself.",
  },
};

export const formatLabels: Record<ResourceFormat, string> = {
  essay: "Essay",
  primer: "Primer",
  guide: "Guide",
  practice: "Practice",
};

function resourceText(r: Resource): string {
  return [
    r.summary,
    ...r.keyIdeas,
    ...r.sections.flatMap((s) => [s.heading, ...s.body, ...(s.points ?? [])]),
    ...r.reflectionQuestions,
    r.application.title,
    ...r.application.steps,
  ].join(" ");
}

export function readingMinutes(r: Resource): number {
  const words = resourceText(r).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function resourceLicense(r: Resource) {
  return r.license ?? defaultLicense;
}

/* ------------------------------------------------------------------ */
/* Validation — runs once at module load, so a broken reference fails   */
/* the build rather than shipping a broken link.                        */
/* ------------------------------------------------------------------ */

function validate() {
  const errors: string[] = [];
  const resourceSlugs = new Set<string>();
  const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

  for (const r of allResources) {
    if (resourceSlugs.has(r.slug)) errors.push(`Duplicate resource slug: ${r.slug}`);
    resourceSlugs.add(r.slug);
    if (!slugPattern.test(r.slug)) errors.push(`Invalid resource slug: ${r.slug}`);
    if (r.reflectionQuestions.length === 0) errors.push(`${r.slug}: needs reflection questions`);
    if (r.sections.length === 0) errors.push(`${r.slug}: needs content sections`);
  }

  for (const r of allResources) {
    for (const rel of r.related) {
      if (!resourceSlugs.has(rel)) errors.push(`${r.slug}: unknown related resource "${rel}"`);
      if (rel === r.slug) errors.push(`${r.slug}: relates to itself`);
    }
  }

  const domainSlugs = new Set<string>(allDomains.map((d) => d.slug));
  for (const slug of DOMAIN_SLUGS) {
    if (!domainSlugs.has(slug)) errors.push(`Missing domain definition: ${slug}`);
  }
  for (const d of allDomains) {
    for (const rel of d.related) {
      if (!domainSlugs.has(rel)) errors.push(`Domain ${d.slug}: unknown related domain "${rel}"`);
    }
  }

  const journeySlugs = new Set<string>();
  for (const j of allJourneys) {
    if (journeySlugs.has(j.slug)) errors.push(`Duplicate journey slug: ${j.slug}`);
    journeySlugs.add(j.slug);
    if (j.steps.length !== 5) errors.push(`Journey ${j.slug}: expected 5 steps, found ${j.steps.length}`);
    for (const step of j.steps) {
      for (const rs of step.resources) {
        if (!resourceSlugs.has(rs)) errors.push(`Journey ${j.slug}: unknown resource "${rs}"`);
      }
    }
    for (const rs of j.completion.continueWith) {
      if (!resourceSlugs.has(rs)) errors.push(`Journey ${j.slug}: unknown resource "${rs}"`);
    }
  }

  if (errors.length > 0) {
    throw new Error(`IT Vidya content validation failed:\n  - ${errors.join("\n  - ")}`);
  }
}

validate();

/* ------------------------------------------------------------------ */
/* Accessors                                                            */
/* ------------------------------------------------------------------ */

const published = allResources.filter((r) => r.status === "published");

export function getDomains(): Domain[] {
  return allDomains;
}

export function getDomain(slug: string): Domain | undefined {
  return allDomains.find((d) => d.slug === slug);
}

export function domainTitle(slug: DomainSlug): string {
  return getDomain(slug)?.title ?? slug;
}

export function getResources(): Resource[] {
  return published;
}

export function getResource(slug: string): Resource | undefined {
  return published.find((r) => r.slug === slug);
}

export function getResourcesBySlugs(slugs: string[]): Resource[] {
  return slugs.map((s) => getResource(s)).filter((r): r is Resource => Boolean(r));
}

/** Resources whose primary domain is `slug`, followed by those that also touch it. */
export function getResourcesForDomain(slug: DomainSlug): { primary: Resource[]; connected: Resource[] } {
  return {
    primary: published.filter((r) => r.domain === slug),
    connected: published.filter((r) => r.domain !== slug && r.alsoIn?.includes(slug)),
  };
}

export function getJourneys(): Journey[] {
  return allJourneys;
}

export function getJourney(slug: string): Journey | undefined {
  return allJourneys.find((j) => j.slug === slug);
}

export function getJourneysForDomain(slug: DomainSlug): Journey[] {
  return allJourneys.filter((j) => j.domains.includes(slug));
}

export function getJourneysForResource(slug: string): Journey[] {
  return allJourneys.filter((j) => j.steps.some((s) => s.resources.includes(slug)));
}

export function getAllTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const r of published) {
    for (const t of r.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/** Hand-picked resources for the homepage — one strong entry point per domain where possible. */
export const featuredResourceSlugs = [
  "what-is-integral-thinking",
  "what-does-it-mean-to-understand-yourself",
  "how-do-we-build-trust",
  "what-is-coexistence",
  "facts-opinions-assumptions-and-interpretations",
  "how-can-communities-solve-shared-problems",
];

/** Compact, serialisable description of a resource for cards and client-side filtering. */
export interface ResourceSummary {
  slug: string;
  title: string;
  summary: string;
  domain: DomainSlug;
  domainTitle: string;
  alsoIn: DomainSlug[];
  tags: string[];
  format: string;
  level: string;
  minutes: number;
}

export function summarise(r: Resource): ResourceSummary {
  return {
    slug: r.slug,
    title: r.title,
    summary: r.summary,
    domain: r.domain,
    domainTitle: domainTitle(r.domain),
    alsoIn: r.alsoIn ?? [],
    tags: r.tags,
    format: formatLabels[r.format],
    level: r.level === "beginner" ? "Beginner-friendly" : "Intermediate",
    minutes: readingMinutes(r),
  };
}

/** Full text for client-side search, fetched lazily from /search-index.json. */
export function buildSearchIndex() {
  return {
    resources: published.map((r) => ({ slug: r.slug, text: resourceText(r) })),
  };
}
