import Link from "next/link";
import { DomainGlyph } from "@/components/domain-glyph";
import { ArrowRight } from "@/components/ui";
import type { Domain, Journey } from "@/content/schema";
import { domainTitle } from "@/lib/content";

export { ResourceCard } from "@/components/resource-card";

export function DomainCard({ domain, headingLevel = "h3" }: { domain: Domain; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <Link
      href={`/domains/${domain.slug}`}
      className="card group relative flex h-full flex-col p-6 no-underline transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-line"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-6 top-0 h-[3px] origin-left scale-x-0 rounded-b-full transition-transform duration-300 group-hover:scale-x-100"
        style={{ background: `var(--color-d-${domain.slug})` }}
      />
      <div className="flex items-start justify-between">
        <span
          className="inline-flex size-14 items-center justify-center rounded-2xl"
          style={{ background: `color-mix(in srgb, var(--color-d-${domain.slug}) 11%, transparent)` }}
        >
          <DomainGlyph slug={domain.slug} className="size-9" />
        </span>
        <span className="font-display text-sm text-muted tabular-nums" aria-hidden="true">
          {String(domain.number).padStart(2, "0")}
        </span>
      </div>
      <H className="mt-6 text-xl font-medium leading-snug text-ink group-hover:text-forest">{domain.title}</H>
      <p className="mt-2 text-[0.98rem] text-ink-soft">{domain.tagline}</p>
      <p className="mt-auto pt-5 text-sm text-muted">
        {domain.subtopics
          .slice(0, 3)
          .map((s) => s.title)
          .join(" · ")}
      </p>
    </Link>
  );
}

export function JourneyCard({ journey, index }: { journey: Journey; index?: number }) {
  return (
    <article className="card group relative flex h-full flex-col overflow-hidden">
      <div className="border-b border-line-soft bg-forest-soft/50 px-6 pt-6 pb-5">
        <div className="flex items-center justify-between text-sm">
          <span className="eyebrow">{index !== undefined ? `Journey ${index + 1}` : "Learning journey"}</span>
          <span className="text-muted">{journey.duration}</span>
        </div>
        <h3 className="mt-3 text-2xl font-medium leading-snug">
          <Link
            href={`/journeys/${journey.slug}`}
            className="text-ink no-underline after:absolute after:inset-0 after:content-[''] group-hover:text-forest"
          >
            {journey.title}
          </Link>
        </h3>
      </div>
      <div className="flex flex-1 flex-col px-6 py-5">
        <p className="text-ink-soft">{journey.subtitle}</p>
        <ol className="mt-5 space-y-2 text-[0.95rem]" aria-label="Steps">
          {journey.steps.map((s, i) => (
            <li key={s.title} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-line font-display text-xs text-forest"
              >
                {i + 1}
              </span>
              <span className="text-ink-soft">{s.title}</span>
            </li>
          ))}
        </ol>
        <div className="mt-auto flex items-center justify-between pt-6 text-sm">
          <span className="text-muted">{journey.domains.map((d) => domainTitle(d).split(" ")[0]).join(" · ")}</span>
          <span className="inline-flex items-center gap-1 font-semibold text-forest">
            Begin <ArrowRight />
          </span>
        </div>
      </div>
    </article>
  );
}
