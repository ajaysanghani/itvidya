import Link from "next/link";
import { ItMeaning, Wordmark } from "@/components/wordmark";
import { footerNav, site } from "@/content/site";
import { getDomains } from "@/lib/content";

export function SiteFooter() {
  const domains = getDomains();
  return (
    <footer data-site-footer className="relative mt-24 overflow-hidden bg-forest-deep text-white/80">
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -right-40 -bottom-56 size-[38rem] text-white/[0.06]"
      >
        <circle cx="300" cy="300" r="290" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="300" cy="300" r="210" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="300" cy="300" r="130" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="container-page relative grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Wordmark tone="dark" />
          <p className="mt-6 max-w-sm text-white/75">{site.statement}</p>
          <p className="mt-6 font-display text-lg text-turmeric-soft italic">{site.tagline}</p>
          <Link href="/contact" className="btn mt-8 bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20">
            Contact us
          </Link>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="text-xs font-semibold tracking-[0.14em] text-turmeric-soft uppercase">IT Vidya</h2>
          <ul className="mt-4 space-y-2.5">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-quiet text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Learning domains" className="md:col-span-4">
          <h2 className="text-xs font-semibold tracking-[0.14em] text-turmeric-soft uppercase">Learning domains</h2>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {domains.map((d) => (
              <li key={d.slug}>
                <Link href={`/domains/${d.slug}`} className="link-quiet text-white/80 hover:text-white">
                  {d.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Content licensing is described in our{" "}
            <Link href="/principles#licensing" className="link-quiet text-white/80">
              Knowledge Commons Principles
            </Link>
            .
          </p>
          <p>
            <ItMeaning tone="dark" />
          </p>
        </div>
      </div>
    </footer>
  );
}
