import type { MetadataRoute } from "next";
import { getDomains, getJourneys, getResources } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "/", priority: 1 },
    { path: "/explore", priority: 0.9 },
    { path: "/journeys", priority: 0.9 },
    { path: "/knowledge", priority: 0.6 },
    { path: "/about", priority: 0.7 },
    { path: "/principles", priority: 0.6 },
    { path: "/contribute", priority: 0.6 },
    { path: "/contact", priority: 0.4 },
  ];
  return [
    ...staticPages.map((p) => ({ url: absoluteUrl(p.path), priority: p.priority })),
    ...getDomains().map((d) => ({ url: absoluteUrl(`/domains/${d.slug}`), priority: 0.8 })),
    ...getJourneys().map((j) => ({ url: absoluteUrl(`/journeys/${j.slug}`), priority: 0.8 })),
    ...getResources().map((r) => ({
      url: absoluteUrl(`/knowledge/${r.slug}`),
      lastModified: r.review.lastReviewed,
      priority: 0.7,
    })),
  ];
}
