import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ResourceCard } from "@/components/cards";
import { DomainGlyph } from "@/components/domain-glyph";
import { Breadcrumbs, EpistemicBadge, JsonLd, Notice, formatDate } from "@/components/ui";
import type { EpistemicKind, ReviewStage } from "@/content/schema";
import { site } from "@/content/site";
import {
  domainTitle,
  epistemicLabels,
  formatLabels,
  getDomain,
  getJourneysForResource,
  getResource,
  getResources,
  getResourcesBySlugs,
  readingMinutes,
  resourceLicense,
  summarise,
} from "@/lib/content";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getResources().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps<"/knowledge/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const r = getResource(slug);
  if (!r) return {};
  return {
    ...pageMetadata({
      title: r.title,
      description: r.summary,
      path: `/knowledge/${r.slug}`,
      type: "article",
      publishedTime: r.published,
      modifiedTime: r.review.lastReviewed,
      authors: [r.author.name],
      tags: r.tags,
    }),
    keywords: r.tags,
  };
}

const reviewLabels: Record<ReviewStage, string> = {
  "editorial-draft": "Initial edition · awaiting expert review",
  "editor-reviewed": "Reviewed by IT Vidya editors",
  "peer-reviewed": "Reviewed by subject-matter experts",
};

function sectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default async function ResourcePage({ params }: PageProps<"/knowledge/[slug]">) {
  const { slug } = await params;
  const r = getResource(slug);
  if (!r) notFound();

  const domain = getDomain(r.domain)!;
  const minutes = readingMinutes(r);
  const related = getResourcesBySlugs(r.related).map(summarise);
  const journeys = getJourneysForResource(r.slug);
  const license = resourceLicense(r);
  const kindsUsed = [...new Set(r.sections.map((s) => s.kind).filter(Boolean))] as EpistemicKind[];

  const toc = [
    { id: "key-ideas", label: "Key ideas" },
    ...r.sections.map((s) => ({ id: sectionId(s.heading), label: s.heading })),
    { id: "reflect", label: "Reflection questions" },
    { id: "apply", label: "Suggested application" },
    ...(r.references?.length ? [{ id: "further-reading", label: "Further reading" }] : []),
    { id: "about-this-resource", label: "About this resource" },
  ];

  return (
    <article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: r.title,
          description: r.summary,
          url: absoluteUrl(`/knowledge/${r.slug}`),
          mainEntityOfPage: absoluteUrl(`/knowledge/${r.slug}`),
          datePublished: r.published,
          dateModified: r.review.lastReviewed,
          inLanguage: "en",
          keywords: r.tags.join(", "),
          articleSection: domain.title,
          timeRequired: `PT${minutes}M`,
          author: { "@type": "Organization", name: r.author.name, url: site.url },
          publisher: { "@id": `${site.url}/#organization` },
          isAccessibleForFree: true,
        }}
      />

      {/* Header */}
      <header className="border-b border-line-soft">
        <div className="container-page pt-10 pb-12 sm:pb-14">
          <Breadcrumbs
            items={[
              { href: "/explore", label: "Explore" },
              { href: `/domains/${domain.slug}`, label: domain.title },
              { href: `/knowledge/${r.slug}`, label: r.title },
            ]}
          />
          <div className="mt-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <Link
                href={`/domains/${domain.slug}`}
                className="inline-flex items-center gap-2 font-semibold text-ink-soft no-underline hover:text-forest"
              >
                <DomainGlyph slug={domain.slug} className="size-5" />
                {domain.title}
              </Link>
              <span className="text-muted">
                {formatLabels[r.format]} · {minutes} min read · {r.level === "beginner" ? "Beginner-friendly" : "Intermediate"}
              </span>
            </div>
            <h1 className="mt-5 text-4xl leading-[1.08] font-medium sm:text-5xl lg:text-[3.5rem]">{r.title}</h1>
            <p className="mt-6 font-serif text-xl leading-relaxed text-ink-soft sm:text-[1.375rem]">{r.summary}</p>
            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <div>
                <dt className="text-muted">Written by</dt>
                <dd className="font-semibold text-ink">{r.author.name}</dd>
              </div>
              <div>
                <dt className="text-muted">Published</dt>
                <dd className="font-semibold text-ink">
                  <time dateTime={r.published}>{formatDate(r.published)}</time>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Review status</dt>
                <dd className="font-semibold text-ink">{reviewLabels[r.review.stage]}</dd>
              </div>
            </dl>
          </div>
        </div>
      </header>

      <div className="container-page grid gap-12 py-12 lg:grid-cols-12 lg:py-16">
        {/* Table of contents */}
        <aside className="order-last lg:order-first lg:col-span-3" aria-label="On this page">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">On this page</p>
            <ol className="mt-4 space-y-2 border-l border-line text-[0.95rem]">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="-ml-px block border-l border-transparent py-0.5 pl-4 text-ink-soft no-underline hover:border-forest hover:text-forest">
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
            {kindsUsed.length > 0 && (
              <details className="mt-8 rounded-2xl border border-line-soft bg-card p-4 text-sm">
                <summary className="font-semibold text-ink">How to read the labels</summary>
                <p className="mt-3 text-ink-soft">
                  Sections are labelled so you can tell what kind of claim each one makes.
                </p>
                <dl className="mt-3 space-y-3">
                  {kindsUsed.map((k) => (
                    <div key={k}>
                      <dt>
                        <EpistemicBadge kind={k} />
                      </dt>
                      <dd className="mt-1 text-ink-soft">{epistemicLabels[k].description}</dd>
                    </div>
                  ))}
                </dl>
              </details>
            )}
          </div>
        </aside>

        {/* Body */}
        <div className="min-w-0 lg:col-span-8 lg:col-start-5">
          {r.careNote && (
            <div className="mb-10">
              <Notice title="A note of care" tone="care">
                {r.careNote}
              </Notice>
            </div>
          )}

          <section id="key-ideas" aria-labelledby="key-ideas-title" className="scroll-mt-28 rounded-2xl border-l-4 border-turmeric bg-card px-6 py-6 sm:px-8">
            <h2 id="key-ideas-title" className="eyebrow">
              Key ideas
            </h2>
            <ul className="mt-4 space-y-3">
              {r.keyIdeas.map((k) => (
                <li key={k} className="flex gap-3 font-serif text-lg leading-snug text-ink">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-forest" />
                  {k}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-12 space-y-12">
            {r.sections.map((s) => {
              const id = sectionId(s.heading);
              return (
                <section key={id} id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28">
                  {s.kind && (
                    <p className="mb-3">
                      <EpistemicBadge kind={s.kind} />
                    </p>
                  )}
                  <h2 id={`${id}-title`} className="text-[1.75rem] leading-tight font-medium sm:text-3xl">
                    {s.heading}
                  </h2>
                  <div className="prose-body mt-4 max-w-[42rem]">
                    {s.body.map((p) => (
                      <p key={p.slice(0, 32)}>{p}</p>
                    ))}
                    {s.points && (
                      <ul className="mt-5 space-y-3">
                        {s.points.map((pt) => (
                          <li key={pt} className="flex gap-3">
                            <span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full" style={{ background: `var(--color-d-${r.domain})` }} />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="rule-ornament my-14" aria-hidden="true">
            <span className="size-1.5 rounded-full bg-turmeric" />
          </div>

          {/* Reflect */}
          <section id="reflect" aria-labelledby="reflect-title" className="scroll-mt-28 rounded-[1.5rem] bg-forest px-6 py-8 text-white sm:px-10 sm:py-10">
            <p className="eyebrow text-turmeric-soft!">Pause and reflect</p>
            <h2 id="reflect-title" className="mt-2 text-2xl font-medium text-white sm:text-3xl">
              Reflection questions
            </h2>
            <ol className="mt-6 space-y-4">
              {r.reflectionQuestions.map((q, i) => (
                <li key={q} className="flex gap-4">
                  <span aria-hidden="true" className="font-display text-turmeric-soft tabular-nums">
                    {i + 1}.
                  </span>
                  <p className="font-serif text-lg leading-snug text-white/95">{q}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-white/70">
              Consider writing your answers by hand, or discussing them with someone you trust.
            </p>
          </section>

          {/* Apply */}
          <section id="apply" aria-labelledby="apply-title" className="mt-10 scroll-mt-28 rounded-[1.5rem] border border-line bg-card px-6 py-8 sm:px-10">
            <p className="eyebrow">Suggested application</p>
            <h2 id="apply-title" className="mt-2 text-2xl font-medium sm:text-3xl">
              {r.application.title}
            </h2>
            <ol className="mt-6 space-y-4">
              {r.application.steps.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-forest-soft font-display text-forest"
                  >
                    {i + 1}
                  </span>
                  <p className="pt-0.5 text-ink-soft">{s}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Further reading */}
          {r.references && r.references.length > 0 && (
            <section id="further-reading" aria-labelledby="fr-title" className="mt-14 scroll-mt-28">
              <h2 id="fr-title" className="text-2xl font-medium">
                Further reading
              </h2>
              <p className="mt-2 text-sm text-muted">
                Starting points for deeper study. Listing a work here does not mean it supports every statement above, or
                that IT Vidya endorses all of its views.
              </p>
              <ul className="mt-5 divide-y divide-line-soft border-y border-line-soft">
                {r.references.map((ref) => (
                  <li key={ref.title} className="py-4">
                    <p className="font-serif text-lg text-ink">
                      <cite className="not-italic">{ref.url ? <a href={ref.url} className="link-quiet">{ref.title}</a> : ref.title}</cite>
                    </p>
                    <p className="text-sm text-ink-soft">
                      {ref.author}
                      {ref.year ? ` · ${ref.year}` : ""}
                    </p>
                    {ref.note && <p className="mt-1 text-sm text-muted">{ref.note}</p>}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Tags */}
          <div className="mt-12">
            <h2 className="text-sm font-semibold text-ink">Topics</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {r.tags.map((t) => (
                <li key={t}>
                  <Link href={`/explore?tag=${encodeURIComponent(t)}#library`} className="tag">
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About this resource */}
          <section id="about-this-resource" aria-labelledby="atr-title" className="mt-12 scroll-mt-28 rounded-2xl border border-line-soft bg-paper-deep/60 p-6 text-sm">
            <h2 id="atr-title" className="text-lg font-medium">
              About this resource
            </h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-ink">Attribution</dt>
                <dd className="text-ink-soft">
                  {r.author.name}
                  {r.author.role ? ` — ${r.author.role}` : ""}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Status</dt>
                <dd className="text-ink-soft">
                  {reviewLabels[r.review.stage]}. Last revised <time dateTime={r.review.lastReviewed}>{formatDate(r.review.lastReviewed)}</time>.
                  {r.review.note ? ` ${r.review.note}` : ""}
                </dd>
              </div>
              {r.aiAssistance && (
                <div>
                  <dt className="font-semibold text-ink">AI assistance</dt>
                  <dd className="text-ink-soft">{r.aiAssistance}</dd>
                </div>
              )}
              <div>
                <dt className="font-semibold text-ink">Licence</dt>
                <dd className="text-ink-soft">
                  {license.label}. {license.summary}{" "}
                  <Link href="/principles#licensing" className="link-quiet text-forest">
                    Read more
                  </Link>
                  .
                </dd>
              </div>
            </dl>
            <p className="mt-5 border-t border-line-soft pt-4 text-ink-soft">
              Spotted an error, an unfair summary or a missing perspective?{" "}
              <Link href={`/contribute?type=correction&resource=${r.slug}#proposal`} className="link-quiet font-semibold text-forest">
                Suggest a correction
              </Link>
              .
            </p>
          </section>
        </div>
      </div>

      {/* Journeys + related */}
      <div className="border-t border-line-soft bg-paper-deep/50 py-16">
        <div className="container-page">
          {journeys.length > 0 && (
            <section aria-labelledby="in-journeys" className="mb-14">
              <h2 id="in-journeys" className="text-2xl font-medium">
                Part of a learning journey
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {journeys.map((j) => {
                  const stepIndex = j.steps.findIndex((s) => s.resources.includes(r.slug));
                  return (
                    <li key={j.slug}>
                      <Link
                        href={`/journeys/${j.slug}#step-${stepIndex + 1}`}
                        className="card flex flex-col gap-1 p-5 no-underline hover:border-line sm:flex-row sm:items-center sm:justify-between"
                      >
                        <span className="font-display text-lg text-ink">{j.title}</span>
                        <span className="text-sm text-forest">
                          Step {stepIndex + 1}: {j.steps[stepIndex].title} →
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          <section aria-labelledby="related-res">
            <h2 id="related-res" className="text-2xl font-medium">
              Continue exploring
            </h2>
            <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <li key={rel.slug}>
                  <ResourceCard resource={rel} />
                </li>
              ))}
            </ul>
            <p className="mt-8 text-ink-soft">
              More in{" "}
              <Link href={`/domains/${domain.slug}`} className="link-quiet text-forest">
                {domain.title}
              </Link>
              {r.alsoIn?.map((d) => (
                <span key={d}>
                  {" · "}
                  <Link href={`/domains/${d}`} className="link-quiet text-forest">
                    {domainTitle(d)}
                  </Link>
                </span>
              ))}
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
