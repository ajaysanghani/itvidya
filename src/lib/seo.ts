import type { Metadata } from "next";
import { site } from "@/content/site";

interface PageMetaInput {
  title: string;
  description: string;
  /** Path beginning with "/", used for the canonical URL. */
  path: string;
  type?: "website" | "article";
  /** Omit the "· IT Vidya" title suffix (used on the homepage). */
  absoluteTitle?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}

export function absoluteUrl(path: string): string {
  return `${site.url}${path === "/" ? "" : path}`;
}

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  absoluteTitle,
  publishedTime,
  modifiedTime,
  authors,
  tags,
}: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} · ${site.name}`;
  // Articles get a per-page image from their segment's opengraph-image file;
  // other pages reuse the site-wide card.
  const images = type === "article" ? undefined : [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: site.locale,
      type,
      ...(images ? { images } : {}),
      ...(type === "article" ? { publishedTime, modifiedTime, authors, tags } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(images ? { images: images.map((i) => i.url) } : {}),
    },
  };
}
