"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { ResourceCard } from "@/components/resource-card";
import type { DomainSlug } from "@/content/schema";
import type { ResourceSummary } from "@/lib/content";

interface Props {
  resources: ResourceSummary[];
  domains: { slug: DomainSlug; title: string; shortTitle: string }[];
  tags: { tag: string; count: number }[];
}

type FullText = Record<string, string>;

function normalise(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

const TOP_TAGS = 14;

export function ExploreBrowser({ resources, domains, tags }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const searchId = useId();

  const domain = (params.get("domain") as DomainSlug | null) ?? null;
  const tag = params.get("tag");
  const urlQuery = params.get("q") ?? "";

  const [query, setQuery] = useState(urlQuery);
  const [showAllTags, setShowAllTags] = useState(false);
  const [fullText, setFullText] = useState<FullText | null>(null);
  const fetchStarted = useRef(false);

  // Keep the input in sync when the URL changes (e.g. back/forward navigation).
  const [lastUrlQuery, setLastUrlQuery] = useState(urlQuery);
  if (urlQuery !== lastUrlQuery) {
    setLastUrlQuery(urlQuery);
    setQuery(urlQuery);
  }

  const loadFullText = useCallback(() => {
    if (fetchStarted.current) return;
    fetchStarted.current = true;
    fetch("/search-index.json")
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { resources: { slug: string; text: string }[] } | null) => {
        if (!data) return;
        setFullText(Object.fromEntries(data.resources.map((r) => [r.slug, normalise(r.text)])));
      })
      .catch(() => {
        // Titles, summaries and tags are still searchable without the full-text index.
      });
  }, []);

  useEffect(() => {
    if (urlQuery) loadFullText();
  }, [urlQuery, loadFullText]);

  const updateParams = useCallback(
    (changes: Record<string, string | null>) => {
      const next = new URLSearchParams(params.toString());
      for (const [k, v] of Object.entries(changes)) {
        if (v) next.set(k, v);
        else next.delete(k);
      }
      const qs = next.toString();
      router.replace(`${pathname}${qs ? `?${qs}` : ""}#library`, { scroll: false });
    },
    [params, pathname, router],
  );

  // Debounce writing the query to the URL.
  useEffect(() => {
    if (query === urlQuery) return;
    const t = setTimeout(() => updateParams({ q: query.trim() || null }), 250);
    return () => clearTimeout(t);
  }, [query, urlQuery, updateParams]);

  const terms = useMemo(() => normalise(query).split(/\s+/).filter(Boolean), [query]);

  const results = useMemo(() => {
    return resources.filter((r) => {
      if (domain && r.domain !== domain && !r.alsoIn.includes(domain)) return false;
      if (tag && !r.tags.includes(tag)) return false;
      if (terms.length === 0) return true;
      const haystack = normalise(
        [r.title, r.summary, r.domainTitle, r.format, ...r.tags].join(" "),
      ) + (fullText?.[r.slug] ? ` ${fullText[r.slug]}` : "");
      return terms.every((t) => haystack.includes(t));
    });
  }, [resources, domain, tag, terms, fullText]);

  const visibleTags = showAllTags ? [...tags] : tags.slice(0, TOP_TAGS);
  if (tag && !visibleTags.some((t) => t.tag === tag)) {
    const active = tags.find((t) => t.tag === tag);
    if (active) visibleTags.push(active);
  }
  const hasFilters = Boolean(domain || tag || query.trim());
  const domainName = domain ? domains.find((d) => d.slug === domain)?.title : null;

  return (
    <div>
      <div className="card p-5 sm:p-6">
        <form role="search" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor={searchId} className="text-sm font-semibold text-ink">
            Search the library
          </label>
          <div className="relative mt-2">
            <svg viewBox="0 0 20 20" className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
              <circle cx="9" cy="9" r="5.5" />
              <path d="m13.5 13.5 3.5 3.5" />
            </svg>
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={loadFullText}
              placeholder="Try “trust”, “ecology”, “happiness” or “Ostrom”"
              className="min-h-12 w-full rounded-full border border-line bg-paper pr-4 pl-12 text-base text-ink placeholder:text-muted focus:border-teal focus:outline-none focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-turmeric"
              autoComplete="off"
            />
          </div>
        </form>

        <fieldset className="mt-6">
          <legend className="text-sm font-semibold text-ink">Domain</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <button type="button" className="chip" aria-pressed={!domain} onClick={() => updateParams({ domain: null })}>
              All domains
            </button>
            {domains.map((d) => (
              <button
                key={d.slug}
                type="button"
                className="chip"
                aria-pressed={domain === d.slug}
                onClick={() => updateParams({ domain: domain === d.slug ? null : d.slug })}
              >
                <span aria-hidden="true" className="size-2 rounded-full" style={{ background: `var(--color-d-${d.slug})` }} />
                {d.shortTitle}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-5">
          <legend className="text-sm font-semibold text-ink">Topic tags</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {visibleTags.map((t) => (
              <button
                key={t.tag}
                type="button"
                className="chip text-sm!"
                aria-pressed={tag === t.tag}
                onClick={() => updateParams({ tag: tag === t.tag ? null : t.tag })}
              >
                {t.tag}
                <span className="text-xs opacity-70">{t.count}</span>
              </button>
            ))}
            {tags.length > TOP_TAGS && (
              <button
                type="button"
                className="link-quiet px-2 text-sm font-semibold text-forest"
                aria-expanded={showAllTags}
                onClick={() => setShowAllTags((v) => !v)}
              >
                {showAllTags ? "Show fewer tags" : `Show all ${tags.length} tags`}
              </button>
            )}
          </div>
        </fieldset>
      </div>

      <div className="mt-8 flex flex-wrap items-baseline justify-between gap-3">
        <p className="text-ink-soft" role="status" aria-live="polite">
          <strong className="font-semibold text-ink">{results.length}</strong>{" "}
          {results.length === 1 ? "resource" : "resources"}
          {domainName && <> in {domainName}</>}
          {tag && <> tagged “{tag}”</>}
          {query.trim() && <> matching “{query.trim()}”</>}
        </p>
        {hasFilters && (
          <button
            type="button"
            className="link-quiet text-sm font-semibold text-forest"
            onClick={() => {
              setQuery("");
              updateParams({ domain: null, tag: null, q: null });
            }}
          >
            Clear all filters
          </button>
        )}
      </div>

      {results.length > 0 ? (
        <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {results.map((r) => (
            <li key={r.slug}>
              <ResourceCard resource={r} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed border-line px-6 py-12 text-center">
          <p className="font-display text-2xl">Nothing here yet.</p>
          <p className="mx-auto mt-2 max-w-md text-ink-soft">
            No resources match these filters. Try a broader word, remove a filter — or, if this is a topic you know
            well, consider proposing a resource on it.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setQuery("");
                updateParams({ domain: null, tag: null, q: null });
              }}
            >
              Clear filters
            </button>
            <a href="/contribute#proposal" className="btn btn-primary">
              Propose a resource
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
