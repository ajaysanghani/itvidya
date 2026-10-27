import Link from "next/link";
import { EpistemicBadge, PageHeader } from "@/components/ui";
import { principles } from "@/content/principles";
import type { EpistemicKind } from "@/content/schema";
import { epistemicLabels } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Knowledge Commons Principles",
  description:
    "The principles that guide IT Vidya as a knowledge commons: respectful inquiry, source transparency, attribution, licensing, correction, diversity of perspectives, privacy, contributor recognition, responsible AI assistance and editorial independence.",
  path: "/principles",
});

export default function PrinciplesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Knowledge commons principles"
        title="How we hold knowledge in common."
        lead={
          <p>
            A commons only works when its people share an understanding of how to care for it. These ten principles guide
            how IT Vidya content is written, reviewed, credited and shared. This is an initial version; like everything
            here, it is open to improvement.
          </p>
        }
      />

      <div className="container-page grid gap-12 py-14 lg:grid-cols-12 lg:py-16">
        <nav aria-label="Principles" className="lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">Contents</p>
            <ol className="mt-4 space-y-2 text-[0.95rem]">
              {principles.map((p, i) => (
                <li key={p.id}>
                  <a href={`#${p.id}`} className="link-quiet text-ink-soft hover:text-forest">
                    {i + 1}. {p.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#labels" className="link-quiet text-ink-soft hover:text-forest">
                  Reading the content labels
                </a>
              </li>
            </ol>
          </div>
        </nav>

        <div className="space-y-6 lg:col-span-9">
          {principles.map((p, i) => (
            <section key={p.id} id={p.id} aria-labelledby={`${p.id}-title`} className="card scroll-mt-28 p-7 sm:p-9">
              <div className="flex items-baseline gap-4">
                <span aria-hidden="true" className="font-display text-2xl text-turmeric-ink tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 id={`${p.id}-title`} className="text-2xl font-medium sm:text-3xl">
                  {p.title}
                </h2>
              </div>
              <p className="prose-body mt-4">{p.statement}</p>
              <h3 className="mt-6 text-sm font-semibold text-ink">In practice</h3>
              <ul className="mt-3 space-y-2.5">
                {p.practice.map((pr) => (
                  <li key={pr} className="flex gap-3 text-ink-soft">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-forest" />
                    {pr}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section id="labels" aria-labelledby="labels-title" className="scroll-mt-28 rounded-[1.5rem] bg-forest-soft/60 p-7 sm:p-9">
            <h2 id="labels-title" className="text-2xl font-medium sm:text-3xl">
              Reading the content labels
            </h2>
            <p className="mt-3 text-ink-soft">
              To support source transparency, sections of IT Vidya resources carry one of these labels.
            </p>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              {(Object.keys(epistemicLabels) as EpistemicKind[]).map((k) => (
                <div key={k}>
                  <dt>
                    <EpistemicBadge kind={k} />
                  </dt>
                  <dd className="mt-2 text-ink-soft">{epistemicLabels[k].description}</dd>
                </div>
              ))}
            </dl>
          </section>

          <p className="pt-4 text-ink-soft">
            Have a suggestion for these principles?{" "}
            <Link href="/contribute?type=principles#proposal" className="link-quiet text-forest">
              Share it with us
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
