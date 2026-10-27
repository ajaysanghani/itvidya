import Link from "next/link";
import { Suspense } from "react";
import { DomainCard, JourneyCard } from "@/components/cards";
import { ExploreBrowser } from "@/components/explore-browser";
import { IntegralMap } from "@/components/integral-map";
import { ResourceCard } from "@/components/resource-card";
import { PageHeader, SectionHeading } from "@/components/ui";
import { getAllTags, getDomains, getJourneys, getResources, summarise } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Explore Knowledge",
  description:
    "Explore eight interconnected learning domains — self, relationships, nature, philosophy, learning, society, work and community — and search the IT Vidya knowledge library.",
  path: "/explore",
});

export default function ExplorePage() {
  const domains = getDomains();
  const resources = getResources().map(summarise);
  const tags = getAllTags();

  return (
    <>
      <PageHeader
        eyebrow="Explore knowledge"
        title="Eight worlds of learning, woven together."
        lead={
          <p>
            Every domain connects to the others. Understanding yourself changes how you relate to people; how we relate
            shapes communities; communities depend on nature and institutions. Start wherever your curiosity is strongest.
          </p>
        }
      />

      <section aria-labelledby="map-title" className="container-page py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="map-title"
              eyebrow="The integral map"
              title="See the whole, then choose a thread."
              intro={
                <>
                  <p>
                    Each point is a learning domain. Faint lines remind us that every domain touches every other; stronger
                    lines show especially close relationships.
                  </p>
                  <p className="mt-3 text-base text-muted">Select a domain on the map, or use the cards below.</p>
                </>
              }
            />
          </div>
          <div className="lg:col-span-7">
            <IntegralMap domains={domains} variant="interactive" className="mx-auto w-full max-w-2xl" />
          </div>
        </div>

        <h2 className="sr-only">All domains</h2>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((d) => (
            <li key={d.slug}>
              <DomainCard domain={d} />
            </li>
          ))}
        </ul>
      </section>

      <section id="library" aria-labelledby="library-title" className="scroll-mt-20 border-t border-line-soft bg-paper-deep/50 py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading
            id="library-title"
            eyebrow="Knowledge library"
            title="Search and filter every resource."
            intro={
              <p>
                Filter by domain or topic, or search the full text. Prefer a simple list?{" "}
                <Link href="/knowledge" className="link-quiet text-forest">
                  See the A–Z library index
                </Link>
                .
              </p>
            }
          />
          <div className="mt-10">
            <Suspense
              fallback={
                <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {resources.map((r) => (
                    <li key={r.slug}>
                      <ResourceCard resource={r} />
                    </li>
                  ))}
                </ul>
              }
            >
              <ExploreBrowser
                resources={resources}
                domains={domains.map((d) => ({ slug: d.slug, title: d.title, shortTitle: d.shortTitle }))}
                tags={tags}
              />
            </Suspense>
          </div>
        </div>
      </section>

      <section aria-labelledby="explore-journeys" className="container-page py-16 lg:py-20">
        <SectionHeading
          id="explore-journeys"
          eyebrow="Prefer a guided path?"
          title="Follow a learning journey."
          intro="Five steps, each pairing reading with reflection and practice."
        />
        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {getJourneys().map((j, i) => (
            <li key={j.slug}>
              <JourneyCard journey={j} index={i} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
