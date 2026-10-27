import Link from "next/link";
import { DomainGlyph } from "@/components/domain-glyph";
import type { ResourceSummary } from "@/lib/content";

export function ResourceCard({
  resource,
  headingLevel = "h3",
  showDomain = true,
}: {
  resource: ResourceSummary;
  headingLevel?: "h2" | "h3";
  showDomain?: boolean;
}) {
  const H = headingLevel;
  return (
    <article className="card group relative flex h-full flex-col p-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        {showDomain && (
          <span className="inline-flex items-center gap-1.5 font-semibold" style={{ color: `var(--color-d-${resource.domain})` }}>
            <DomainGlyph slug={resource.domain} className="size-4" />
            <span className="text-ink-soft">{resource.domainTitle}</span>
          </span>
        )}
        <span className="text-muted">
          {resource.format} · {resource.minutes} min read
        </span>
      </div>
      <H className="mt-3 text-xl font-medium leading-snug">
        <Link
          href={`/knowledge/${resource.slug}`}
          className="text-ink no-underline after:absolute after:inset-0 after:rounded-[var(--radius-card)] after:content-[''] group-hover:text-forest"
        >
          {resource.title}
        </Link>
      </H>
      <p className="mt-2 text-[0.98rem] text-ink-soft">{resource.summary}</p>
      <ul className="mt-auto flex flex-wrap gap-1.5 pt-5" aria-label="Tags">
        {resource.tags.slice(0, 3).map((t) => (
          <li key={t} className="tag">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
