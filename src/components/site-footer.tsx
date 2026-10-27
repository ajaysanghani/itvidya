import Link from "next/link";
import { Mark } from "@/components/wordmark";
import { footerNav, site } from "@/content/site";
import { getDomains } from "@/lib/content";

export function SiteFooter() {
  const domains = getDomains();
  return (
    <footer data-site-footer className="mt-24 border-t border-line bg-paper-deep">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <Mark className="size-9" />
            <span className="font-display text-2xl font-semibold">
              IT <span className="text-forest">Vidya</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-ink-soft">{site.statement}</p>
          <p className="mt-6 font-display text-lg italic text-forest">{site.tagline}</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="eyebrow">IT Vidya</h2>
          <ul className="mt-4 space-y-2.5">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-quiet text-ink-soft hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Learning domains" className="md:col-span-4">
          <h2 className="eyebrow">Learning domains</h2>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {domains.map((d) => (
              <li key={d.slug}>
                <Link href={`/domains/${d.slug}`} className="link-quiet text-ink-soft hover:text-ink">
                  {d.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-3 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Content licensing is described in our{" "}
            <Link href="/principles#licensing" className="link-quiet">
              Knowledge Commons Principles
            </Link>
            .
          </p>
          <p>A lifelong learning commons · Version 1</p>
        </div>
      </div>
    </footer>
  );
}
