import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JourneyCard, ResourceCard } from "@/components/cards";
import { DomainGlyph } from "@/components/domain-glyph";
import { JourneyStepper } from "@/components/journey-stepper";
import { Breadcrumbs, Notice } from "@/components/ui";
import {
  domainTitle,
  getJourney,
  getJourneys,
  getResourcesBySlugs,
  summarise,
} from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getJourneys().map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: PageProps<"/journeys/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const j = getJourney(slug);
  if (!j) return {};
  return pageMetadata({
    title: j.title,
    description: `${j.subtitle} A free, self-paced learning journey in five steps, with readings, reflection prompts and practical exercises.`,
    path: `/journeys/${j.slug}`,
  });
}

export default async function JourneyPage({ params }: PageProps<"/journeys/[slug]">) {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) notFound();

  const others = getJourneys().filter((j) => j.slug !== journey.slug);

  return (
    <>
      <header className="border-b border-line-soft">
        <div className="container-page pt-10 pb-14">
          <Breadcrumbs
            items={[
              { href: "/journeys", label: "Learning Journeys" },
              { href: `/journeys/${journey.slug}`, label: journey.title },
            ]}
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow">Learning journey · 5 steps</p>
              <h1 className="mt-4 text-4xl leading-[1.06] font-medium sm:text-5xl lg:text-[3.5rem]">{journey.title}</h1>
              <p className="mt-5 font-display text-xl text-forest italic sm:text-2xl">{journey.subtitle}</p>
              <p className="mt-6 text-lg text-ink-soft">
                <span className="font-semibold text-ink">Learning objective: </span>
                {journey.objective}
              </p>
            </div>
            <dl className="card grid content-start gap-5 p-6 lg:col-span-5">
              <div>
                <dt className="eyebrow">Duration</dt>
                <dd className="mt-1 font-display text-xl">{journey.duration}</dd>
                <dd className="text-sm text-ink-soft">{journey.pace}</dd>
              </div>
              <div>
                <dt className="eyebrow">Intended for</dt>
                <dd>
                  <ul className="mt-1 space-y-1 text-ink-soft">
                    {journey.audience.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Domains</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {journey.domains.map((d) => (
                    <Link key={d} href={`/domains/${d}`} className="tag gap-1.5">
                      <DomainGlyph slug={d} className="size-4" />
                      {domainTitle(d)}
                    </Link>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <section aria-labelledby="outcomes-title" className="lg:col-span-7">
              <h2 id="outcomes-title" className="text-xl font-medium">
                By the end, you may be better able to…
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {journey.outcomes.map((o) => (
                  <li key={o} className="flex gap-3 text-ink-soft">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-turmeric" />
                    {o}
                  </li>
                ))}
              </ul>
            </section>
            <div className="lg:col-span-5">
              <Notice title="An exploratory journey" tone="info">
                {journey.careNote ??
                  "This is an exploratory educational journey, not a certified course or a guaranteed transformation programme. Move at your own pace and adapt it to your situation."}
              </Notice>
            </div>
          </div>
        </div>
      </header>

      <section aria-label="Journey steps" className="container-page py-14 lg:py-16">
        <JourneyStepper journeySlug={journey.slug} steps={journey.steps.map((s) => ({ title: s.title, focus: s.focus }))}>
          {journey.steps.map((step, i) => {
            const resources = getResourcesBySlugs(step.resources).map(summarise);
            return (
              <article key={step.title} aria-labelledby={`step-title-${i}`}>
                <h2 id={`step-title-${i}`} className="mt-2 text-3xl leading-tight font-medium sm:text-4xl">
                  {step.title}
                </h2>
                <p className="mt-2 font-display text-lg text-forest italic">{step.focus}</p>
                <div className="prose-body mt-6">
                  {step.summary.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>

                <h3 className="mt-10 text-xl font-medium">Read and explore</h3>
                <ul className="mt-4 grid gap-4 md:grid-cols-2">
                  {resources.map((r) => (
                    <li key={r.slug}>
                      <ResourceCard resource={r} />
                    </li>
                  ))}
                </ul>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                  <section aria-labelledby={`reflect-${i}`} className="rounded-2xl bg-forest p-6 text-white">
                    <h3 id={`reflect-${i}`} className="text-xl font-medium text-white">
                      Reflection prompts
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {step.reflectionPrompts.map((p) => (
                        <li key={p} className="font-serif text-[1.05rem] leading-snug text-white/95">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section aria-labelledby={`exercise-${i}`} className="rounded-2xl border border-line bg-card p-6">
                    <p className="eyebrow">Practical exercise · {step.exercise.time}</p>
                    <h3 id={`exercise-${i}`} className="mt-2 text-xl font-medium">
                      {step.exercise.title}
                    </h3>
                    <ol className="mt-4 list-decimal space-y-2 pl-5 text-ink-soft marker:font-display marker:text-forest">
                      {step.exercise.instructions.map((ins) => (
                        <li key={ins}>{ins}</li>
                      ))}
                    </ol>
                  </section>
                </div>

                <p className="mt-8 border-l-4 border-turmeric pl-5 font-display text-xl text-ink italic">
                  {step.takeaway}
                </p>
              </article>
            );
          })}

          <article aria-labelledby="completion-title">
            <h2 id="completion-title" className="mt-2 text-3xl leading-tight font-medium sm:text-4xl">
              Completing the journey
            </h2>
            <p className="mt-3 text-lg text-ink-soft">
              Completion is not a finish line. It is a moment to gather what you have learned and decide what to carry
              forward.
            </p>
            <ol className="mt-8 space-y-4">
              {journey.completion.guidance.map((g, i) => (
                <li key={g} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-turmeric-soft font-display text-turmeric-ink"
                  >
                    {i + 1}
                  </span>
                  <p className="pt-0.5 text-ink-soft">{g}</p>
                </li>
              ))}
            </ol>
            <h3 className="mt-12 text-xl font-medium">Continue exploring</h3>
            <ul className="mt-4 grid gap-4 md:grid-cols-2">
              {getResourcesBySlugs(journey.completion.continueWith).map((r) => (
                <li key={r.slug}>
                  <ResourceCard resource={summarise(r)} />
                </li>
              ))}
            </ul>
          </article>
        </JourneyStepper>
      </section>

      <section aria-labelledby="other-journeys" className="border-t border-line-soft bg-paper-deep/50 py-16">
        <div className="container-page">
          <h2 id="other-journeys" className="text-2xl font-medium sm:text-3xl">
            Other journeys
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((j) => (
              <li key={j.slug}>
                <JourneyCard journey={j} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
