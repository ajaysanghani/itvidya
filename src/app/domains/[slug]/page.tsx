import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DomainCard, JourneyCard, ResourceCard } from "@/components/cards";
import { DomainGlyph } from "@/components/domain-glyph";
import { IntegralMap } from "@/components/integral-map";
import { ArrowRight, Breadcrumbs, Notice, SectionHeading } from "@/components/ui";
import {
  getDomain,
  getDomains,
  getJourneysForDomain,
  getResourcesForDomain,
  summarise,
} from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getDomains().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/domains/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const domain = getDomain(slug);
  if (!domain) return {};
  return pageMetadata({
    title: domain.title,
    description: `${domain.tagline} ${domain.purpose}`,
    path: `/domains/${domain.slug}`,
  });
}

export default async function DomainPage({ params }: PageProps<"/domains/[slug]">) {
  const { slug } = await params;
  const domain = getDomain(slug);
  if (!domain) notFound();

  const domains = getDomains();
  const { primary, connected } = getResourcesForDomain(domain.slug);
  const journeys = getJourneysForDomain(domain.slug);
  const related = domain.related.map((r) => domains.find((d) => d.slug === r)!);

  return (
    <>
      {/* Header */}
      <div className="border-b border-line-soft">
        <div className="container-page grid gap-10 pt-10 pb-14 lg:grid-cols-12 lg:pt-14 lg:pb-20">
          <div className="lg:col-span-8">
            <Breadcrumbs items={[{ href: "/explore", label: "Explore" }, { href: `/domains/${domain.slug}`, label: domain.title }]} />
            <div className="mt-8 flex items-center gap-4">
              <DomainGlyph slug={domain.slug} className="size-14" />
              <p className="eyebrow">
                Domain {String(domain.number).padStart(2, "0")} of 08
              </p>
            </div>
            <h1 className="mt-5 text-4xl leading-[1.06] font-medium sm:text-5xl lg:text-6xl">{domain.title}</h1>
            <p className="mt-4 font-display text-xl text-forest italic sm:text-2xl">{domain.tagline}</p>
            <p className="mt-6 max-w-2xl text-lg text-ink-soft sm:text-xl">{domain.purpose}</p>
          </div>
          <div className="hidden lg:col-span-4 lg:block">
            <IntegralMap domains={domains} variant="interactive" highlight={domain.slug} className="w-full" />
          </div>
        </div>
      </div>

      {/* Introduction + why it matters */}
      <section aria-labelledby="intro-title" className="container-page grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7">
          <h2 id="intro-title" className="eyebrow">
            Introduction
          </h2>
          <div className="prose-body mt-4">
            {domain.introduction.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="card p-7">
            <h2 className="text-2xl font-medium">Why this domain matters</h2>
            <ul className="mt-5 space-y-4">
              {domain.whyItMatters.map((w) => (
                <li key={w} className="flex gap-3 text-ink-soft">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-turmeric" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Areas of inquiry */}
      <section aria-labelledby="areas-title" className="container-page pb-16 lg:pb-20">
        <h2 id="areas-title" className="text-2xl font-medium sm:text-3xl">
          Areas of inquiry
        </h2>
        <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line-soft bg-line-soft sm:grid-cols-2 lg:grid-cols-5">
          {domain.subtopics.map((s) => (
            <li key={s.title} className="bg-card p-6">
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-[0.95rem] text-ink-soft">{s.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Key questions */}
      <section aria-labelledby="questions-title" className="bg-forest py-16 text-white lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-turmeric-soft!">Key questions</p>
            <h2 id="questions-title" className="mt-3 text-3xl leading-tight font-medium text-white">
              Questions worth living with.
            </h2>
            <p className="mt-4 text-white/80">
              These are not quiz questions. Return to them over weeks and months; notice how your answers change.
            </p>
          </div>
          <ol className="space-y-5 lg:col-span-8">
            {domain.keyQuestions.map((q, i) => (
              <li key={q} className="flex gap-5 border-b border-white/15 pb-5 last:border-0">
                <span aria-hidden="true" className="font-display text-lg text-turmeric-soft tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-xl leading-snug text-white sm:text-2xl">{q}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Featured knowledge */}
      <section aria-labelledby="resources-title" className="container-page py-16 lg:py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading id="resources-title" eyebrow="Featured knowledge" title={`Resources in ${domain.shortTitle}`} />
          <Link href={`/explore?domain=${domain.slug}#library`} className="btn btn-secondary self-start md:self-auto">
            Filter the library
          </Link>
        </div>
        {primary.length > 0 ? (
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {primary.map((r) => (
              <li key={r.slug}>
                <ResourceCard resource={summarise(r)} showDomain={false} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-8 rounded-2xl border border-dashed border-line p-8 text-center text-ink-soft">
            No resources have been published in this domain yet.{" "}
            <Link href="/contribute#proposal" className="link-quiet text-forest">
              Propose one
            </Link>
            .
          </p>
        )}

        {connected.length > 0 && (
          <div className="mt-14">
            <h3 className="text-xl font-medium">Also connected to this domain</h3>
            <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {connected.slice(0, 6).map((r) => (
                <li key={r.slug}>
                  <ResourceCard resource={summarise(r)} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Practice */}
      <section aria-labelledby="practice-title" className="container-page">
        <div className="grid gap-8 rounded-[2rem] border border-line-soft bg-card p-8 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Practical reflection</p>
            <h2 id="practice-title" className="mt-3 text-3xl leading-tight font-medium">
              {domain.practice.title}
            </h2>
            <p className="mt-3 text-sm font-semibold text-muted">{domain.practice.duration}</p>
          </div>
          <div className="lg:col-span-8">
            <ol className="space-y-4">
              {domain.practice.steps.map((s, i) => (
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
            {domain.practice.note && (
              <div className="mt-6">
                <Notice title="A note of care" tone="care">
                  {domain.practice.note}
                </Notice>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Journeys */}
      <section aria-labelledby="dj-title" className="container-page py-16 lg:py-20">
        <SectionHeading id="dj-title" eyebrow="Learning journeys" title="Journeys that pass through this domain" />
        {journeys.length > 0 ? (
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {journeys.map((j) => (
              <li key={j.slug}>
                <JourneyCard journey={j} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-line p-8 text-center">
            <p className="text-ink-soft">
              No guided journey focuses on this domain yet. Its resources appear in other journeys, and new journeys are
              being planned.
            </p>
            <Link href="/journeys" className="btn btn-secondary mt-5">
              See all journeys
            </Link>
          </div>
        )}
      </section>

      {/* Related domains */}
      <section aria-labelledby="related-title" className="border-t border-line-soft bg-paper-deep/50 py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            id="related-title"
            eyebrow="Related domains"
            title="Where this leads next"
            intro="No domain stands alone. These are especially closely connected to this one."
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((d) => (
              <li key={d.slug}>
                <DomainCard domain={d} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contribute */}
      <section aria-labelledby="dc-title" className="container-page pt-16">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-line bg-card p-8 sm:p-10 md:flex-row md:items-center">
          <div>
            <h2 id="dc-title" className="text-2xl font-medium sm:text-3xl">
              Do you know this domain well?
            </h2>
            <p className="mt-2 max-w-xl text-ink-soft">
              Researchers, practitioners, teachers and thoughtful learners can propose resources, suggest corrections or
              offer to review content in {domain.title}.
            </p>
          </div>
          <Link href="/contribute" className="btn btn-primary shrink-0">
            Contribute <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
