import { DomainGlyph } from "@/components/domain-glyph";
import { Mark } from "@/components/wordmark";
import type { Domain, DomainSlug } from "@/content/schema";

/**
 * The integral map: the eight domains arranged on a circle around a shared
 * centre, with faint lines between every pair and stronger lines between
 * closely related domains. Used decoratively in the hero and as an
 * interactive, labelled map on the Explore and domain pages.
 */

const SIZE = 640;
const C = SIZE / 2;
const R = 212;
const NODE = 30;

function position(index: number, radius = R) {
  const angle = ((-90 + index * 45) * Math.PI) / 180;
  return {
    x: +(C + radius * Math.cos(angle)).toFixed(2),
    y: +(C + radius * Math.sin(angle)).toFixed(2),
    cos: Math.cos(angle),
    sin: Math.sin(angle),
  };
}

function curve(a: { x: number; y: number }, b: { x: number; y: number }) {
  // Pull each connection gently toward the centre so the web reads as woven.
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const cx = +(mx + (C - mx) * 0.35).toFixed(2);
  const cy = +(my + (C - my) * 0.35).toFixed(2);
  return `M${a.x} ${a.y}Q${cx} ${cy} ${b.x} ${b.y}`;
}

interface Props {
  domains: Domain[];
  variant: "decorative" | "interactive";
  highlight?: DomainSlug;
  className?: string;
}

export function IntegralMap({ domains, variant, highlight, className }: Props) {
  const index = new Map(domains.map((d, i) => [d.slug, i]));
  const pairs: [number, number][] = [];
  for (let i = 0; i < domains.length; i++) {
    for (let j = i + 1; j < domains.length; j++) pairs.push([i, j]);
  }
  const strong = new Set<string>();
  for (const d of domains) {
    for (const rel of d.related) {
      const a = index.get(d.slug)!;
      const b = index.get(rel)!;
      strong.add(a < b ? `${a}-${b}` : `${b}-${a}`);
    }
  }
  const hi = highlight ? index.get(highlight) : undefined;
  const interactive = variant === "interactive";
  const labelled = interactive;

  return (
    <svg
      viewBox={labelled ? `-90 -40 ${SIZE + 180} ${SIZE + 80}` : `0 0 ${SIZE} ${SIZE}`}
      className={className}
      role={interactive ? "group" : undefined}
      aria-label={interactive ? "Map of the eight interconnected learning domains" : undefined}
      aria-hidden={interactive ? undefined : true}
      focusable="false"
    >
      <g>
        {/* Orbits */}
        <circle cx={C} cy={C} r={R + 54} fill="none" stroke="var(--color-line-soft)" strokeWidth="1" />
        <circle
          cx={C}
          cy={C}
          r={R}
          fill="none"
          stroke="var(--color-line)"
          strokeWidth="1"
          strokeDasharray="2 7"
        />

        {/* Faint web between every pair */}
        {pairs.map(([a, b]) => {
          const key = `${a}-${b}`;
          const isStrong = strong.has(key);
          const touchesHi = hi !== undefined && (a === hi || b === hi);
          const pa = position(a);
          const pb = position(b);
          let stroke = "var(--color-line)";
          let width = 0.75;
          let opacity = 0.7;
          if (isStrong) {
            stroke = "var(--color-teal)";
            width = 1.4;
            opacity = hi === undefined ? 0.55 : 0.2;
          }
          if (touchesHi && isStrong) {
            stroke = "var(--color-turmeric)";
            width = 2.25;
            opacity = 1;
          }
          return (
            <path
              key={key}
              d={curve(pa, pb)}
              fill="none"
              stroke={stroke}
              strokeWidth={width}
              opacity={opacity}
            />
          );
        })}

        {/* Centre */}
        <circle cx={C} cy={C} r="74" fill="var(--color-forest-soft)" opacity="0.6" />
        <circle
          cx={C}
          cy={C}
          r="46"
          fill="var(--color-card)"
          stroke="var(--color-forest)"
          strokeWidth="1.25"
          className={variant === "decorative" ? "motion-breathe" : undefined}
        />
        <svg x={C - 30} y={C - 30} width="60" height="60" viewBox="0 0 48 48" overflow="visible">
          <Mark className="" />
        </svg>

      {/* Nodes */}
      {domains.map((d, i) => {
        const p = position(i);
        const isHi = hi === i;
        const node = (
          <g className="map-node">
            <circle
              className="node-ring"
              cx={p.x}
              cy={p.y}
              r={NODE}
              fill={isHi ? "var(--color-turmeric-soft)" : "var(--color-card)"}
              stroke={isHi ? "var(--color-turmeric)" : `var(--color-d-${d.slug})`}
              strokeWidth={isHi ? 2.5 : 1.5}
            />
            <svg x={p.x - 19} y={p.y - 19} width="38" height="38" overflow="visible">
              <DomainGlyph slug={d.slug} className="" />
            </svg>
          </g>
        );
        if (!labelled) {
          return <g key={d.slug}>{node}</g>;
        }
        const lp = position(i, R + NODE + 22);
        const anchor = lp.cos > 0.3 ? "start" : lp.cos < -0.3 ? "end" : "middle";
        const dy = lp.sin > 0.5 ? 14 : lp.sin < -0.5 ? -4 : 6;
        return (
          <a
            key={d.slug}
            href={`/domains/${d.slug}`}
            aria-label={`${d.title}${isHi ? " (current domain)" : ""}`}
            className="map-link"
          >
            {node}
            <text
              x={lp.x}
              y={lp.y + dy}
              textAnchor={anchor}
              fontSize="21"
              fontWeight={isHi ? 700 : 600}
              fill={isHi ? "var(--color-turmeric-ink)" : "var(--color-ink)"}
              fontFamily="var(--font-sans)"
            >
              {d.shortTitle}
            </text>
          </a>
        );
      })}
      </g>
    </svg>
  );
}
