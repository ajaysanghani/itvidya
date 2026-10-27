import { site } from "@/content/site";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = `${site.name} — ${site.headline}`;
export const size = ogSize;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  return renderOgImage({
    eyebrow: "Inner Transformation · Integral Thinking",
    title: site.headline,
    footer: site.tagline,
  });
}
