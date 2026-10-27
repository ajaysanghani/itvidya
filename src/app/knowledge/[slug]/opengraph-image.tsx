import { domainTitle, getResource, getResources } from "@/lib/content";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "IT Vidya knowledge resource";
export const size = ogSize;
export const contentType = "image/png";
export const dynamic = "force-static";

export function generateStaticParams() {
  return getResources().map((r) => ({ slug: r.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getResource(slug);
  return renderOgImage({
    eyebrow: r ? domainTitle(r.domain) : "Knowledge",
    title: r?.title ?? "IT Vidya",
    footer: "Learn Deeply. Live Consciously. Contribute Meaningfully.",
  });
}
