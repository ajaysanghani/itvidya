import Link from "next/link";
import type { EpistemicKind } from "@/content/schema";
import { epistemicLabels } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export function ArrowRight({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function ArrowLeft({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 10H4M9 5l-5 5 5 5" />
    </svg>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  id?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag id={id} className="mt-3 text-3xl font-medium leading-tight sm:text-[2.5rem]">
        {title}
      </Tag>
      {intro && <div className="mt-4 text-lg text-ink-soft">{intro}</div>}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-b border-line-soft">
      <div className="container-page pt-10 pb-12 sm:pt-14 sm:pb-16">
        {children}
        {eyebrow && <p className="eyebrow mt-6">{eyebrow}</p>}
        <h1 className="mt-3 max-w-4xl text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-[3.5rem]">{title}</h1>
        {lead && <div className="mt-5 max-w-2xl text-lg text-ink-soft sm:text-xl">{lead}</div>}
      </div>
    </div>
  );
}

export interface Crumb {
  href: string;
  label: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ href: "/", label: "Home" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-ink-soft">
                    {c.label}
                  </span>
                ) : (
                  <>
                    <Link href={c.href} className="link-quiet">
                      {c.label}
                    </Link>
                    <span aria-hidden="true" className="text-line">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            item: absoluteUrl(c.href),
          })),
        }}
      />
    </>
  );
}

const kindStyles: Record<EpistemicKind, string> = {
  evidence: "bg-forest-soft text-forest-deep",
  interpretation: "bg-paper-deep text-ink-soft",
  perspective: "bg-[#e6e5f2] text-[#363a73]",
  plural: "bg-turmeric-soft text-turmeric-ink",
  hypothesis: "bg-[#f3e1da] text-[#7f3a26]",
  practice: "bg-[#e3ece0] text-[#35562a]",
};

export function EpistemicBadge({ kind }: { kind: EpistemicKind }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[0.8125rem] font-semibold tracking-wide ${kindStyles[kind]}`}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
      {epistemicLabels[kind].label}
    </span>
  );
}

export function Notice({
  title,
  children,
  tone = "neutral",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "neutral" | "care" | "info";
}) {
  const tones = {
    neutral: "border-line bg-card",
    care: "border-turmeric/40 bg-turmeric-soft/50",
    info: "border-teal/30 bg-forest-soft/50",
  };
  return (
    <aside className={`rounded-2xl border px-5 py-4 ${tones[tone]}`} aria-label={title}>
      <p className="text-sm font-semibold text-ink">{title}</p>
      <div className="mt-1 text-[0.98rem] text-ink-soft">{children}</div>
    </aside>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here; "<" is escaped to prevent closing the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
