"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Wordmark } from "@/components/wordmark";
import { mainNav } from "@/content/site";

function isActive(pathname: string, href: string) {
  if (href === "/explore") {
    return pathname === "/explore" || pathname.startsWith("/domains") || pathname.startsWith("/knowledge");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close the menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      data-site-header
      className="sticky top-0 z-40 border-b border-line-soft bg-paper/90 backdrop-blur-sm supports-[backdrop-filter]:bg-paper/80"
    >
      <div className="container-page flex h-[4.75rem] items-center justify-between gap-6">
        <Wordmark />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-4 py-2 text-[0.98rem] font-medium no-underline transition-colors ${
                      active ? "bg-forest-soft text-forest-deep" : "text-ink-soft hover:bg-paper-deep hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="ml-3">
              <Link
                href="/contact"
                aria-current={pathname === "/contact" ? "page" : undefined}
                className="btn btn-primary min-h-0! px-5! py-2! text-[0.95rem]!"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-paper-deep md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="border-t border-line-soft bg-paper md:hidden"
      >
        <nav aria-label="Main (mobile)" className="container-page py-4">
          <ul className="flex flex-col">
            {[{ href: "/", label: "Home" }, ...mainNav, { href: "/principles", label: "Principles" }, { href: "/contact", label: "Contact us" }].map(
              (item) => {
                const active = item.href === "/" ? pathname === "/" : isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-12 items-center border-b border-line-soft font-display text-xl no-underline ${
                        active ? "text-forest" : "text-ink"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              },
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
