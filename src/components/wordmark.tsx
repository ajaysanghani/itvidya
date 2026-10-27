import Link from "next/link";

/** The IT Vidya mark: eight points around a lit centre. */
export function Mark({ className = "size-8" }: { className?: string }) {
  const dots = Array.from({ length: 8 }, (_, i) => {
    const a = ((-90 + i * 45) * Math.PI) / 180;
    return { x: +(16 + 11 * Math.cos(a)).toFixed(2), y: +(16 + 11 * Math.sin(a)).toFixed(2) };
  });
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <circle cx="16" cy="16" r="11" fill="none" stroke="var(--color-forest)" strokeWidth="1.25" />
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="2" fill="var(--color-forest)" />
      ))}
      <circle cx="16" cy="16" r="4" fill="var(--color-turmeric)" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 rounded-md text-ink no-underline"
      aria-label="IT Vidya — home"
    >
      <Mark className="size-8 shrink-0" />
      <span className="font-display text-[1.375rem] font-semibold tracking-tight">
        IT <span className="text-forest">Vidya</span>
      </span>
    </Link>
  );
}
