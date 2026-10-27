import type { DomainSlug } from "@/content/schema";

/**
 * Original line glyphs, one per domain. Drawn on a 48×48 grid with a single
 * stroke weight so they read as a family.
 */
const paths: Record<DomainSlug, React.ReactNode> = {
  // Concentric circles: attention turning inward.
  self: (
    <>
      <circle cx="24" cy="24" r="17" />
      <circle cx="24" cy="24" r="10" />
      <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
    </>
  ),
  // Two overlapping circles: relationship.
  relationships: (
    <>
      <circle cx="18" cy="24" r="11" />
      <circle cx="30" cy="24" r="11" />
    </>
  ),
  // A leaf with veins: living systems.
  nature: (
    <>
      <path d="M10 38C10 20 22 10 38 10c0 16-10 28-28 28Z" />
      <path d="M10 38 30 18M18 30h8M22 26v-7" />
    </>
  ),
  // A diya: the lamp of inquiry.
  philosophy: (
    <>
      <path d="M8 28h32c-2 7-8 11-16 11S10 35 8 28Z" />
      <path d="M24 23c-3-3-3-7 0-12 3 5 3 9 0 12Z" />
    </>
  ),
  // An open book.
  learning: (
    <>
      <path d="M24 14c-4-3-10-4-16-3v24c6-1 12 0 16 3 4-3 10-4 16-3V11c-6-1-12 0-16 3Z" />
      <path d="M24 14v24" />
    </>
  ),
  // Pillars beneath a shared roof: institutions.
  society: (
    <>
      <path d="M8 17 24 8l16 9H8Z" />
      <path d="M13 21v13M21 21v13M27 21v13M35 21v13M8 38h32" />
    </>
  ),
  // A spinning wheel: work, craft and self-reliance.
  work: (
    <>
      <circle cx="24" cy="24" r="15" />
      <circle cx="24" cy="24" r="3" />
      <path d="M24 9v12M24 27v12M9 24h12M27 24h12M13.4 13.4l8.5 8.5M26.1 26.1l8.5 8.5M34.6 13.4l-8.5 8.5M21.9 26.1l-8.5 8.5" />
    </>
  ),
  // A circle of people around a shared centre.
  community: (
    <>
      <circle cx="24" cy="24" r="5" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <circle
            key={deg}
            cx={(24 + 15 * Math.cos(rad)).toFixed(2)}
            cy={(24 + 15 * Math.sin(rad)).toFixed(2)}
            r="3.5"
          />
        );
      })}
    </>
  ),
};

export function DomainGlyph({
  slug,
  className = "size-10",
  title,
}: {
  slug: DomainSlug;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      style={{ color: `var(--color-d-${slug})` }}
    >
      {paths[slug]}
    </svg>
  );
}
