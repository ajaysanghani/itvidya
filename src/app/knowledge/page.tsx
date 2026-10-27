import Link from "next/link";
import { DomainGlyph } from "@/components/domain-glyph";
import { PageHeader } from "@/components/ui";
import { formatLabels, getDomains, getResourcesForDomain, readingMinutes } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Knowledge Library Index",
  description: "A complete index of IT Vidya knowledge resources, organised by learning domain.",
  path: "/knowledge",
});

export default function KnowledgeIndexPage() {
  const domains = getDomains();
  return (
    <>
      <PageHeader
        eyebrow="Knowledge library"
        title="Library index"
        lead={
          <p>
            Every published resource, organised by domain. To search or filter by topic, use{" "}
            <Link href="/explore#library" className="link-quiet text-forest">
              Explore
            </Link>
            .
          </p>
        }
      />
      <div className="container-page grid gap-x-12 gap-y-14 py-16 md:grid-cols-2">
        {domains.map((d) => {
          const { primary } = getResourcesForDomain(d.slug);
          return (
            <section key={d.slug} aria-labelledby={`idx-${d.slug}`}>
              <div className="flex items-center gap-3 border-b border-line pb-3">
                <DomainGlyph slug={d.slug} className="size-7" />
                <h2 id={`idx-${d.slug}`} className="text-2xl font-medium">
                  <Link href={`/domains/${d.slug}`} className="text-ink no-underline hover:text-forest">
                    {d.title}
                  </Link>
                </h2>
              </div>
              {primary.length > 0 ? (
                <ul className="divide-y divide-line-soft">
                  {primary.map((r) => (
                    <li key={r.slug} className="py-4">
                      <Link href={`/knowledge/${r.slug}`} className="font-display text-lg text-ink no-underline hover:text-forest">
                        {r.title}
                      </Link>
                      <p className="text-sm text-muted">
                        {formatLabels[r.format]} · {readingMinutes(r)} min read
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="py-4 text-ink-soft">No resources yet.</p>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}
