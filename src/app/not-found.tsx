import type { Metadata } from "next";
import Link from "next/link";
import { getDomains } from "@/lib/content";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  const domains = getDomains();
  return (
    <div className="container-page py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="eyebrow">404 · Page not found</p>
        <h1 className="mt-4 text-4xl leading-tight font-medium sm:text-5xl">This path doesn&rsquo;t lead anywhere — yet.</h1>
        <p className="mt-5 text-lg text-ink-soft">
          The page you were looking for may have moved, or may never have existed. Every wrong turn is also a chance to
          explore something new.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            Return home
          </Link>
          <Link href="/explore#library" className="btn btn-secondary">
            Search the library
          </Link>
        </div>
      </div>
      <nav aria-label="Suggested domains" className="mt-16">
        <h2 className="eyebrow">Or begin with a domain</h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {domains.map((d) => (
            <li key={d.slug}>
              <Link href={`/domains/${d.slug}`} className="chip no-underline">
                {d.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
