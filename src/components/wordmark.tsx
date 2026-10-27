import Link from "next/link";

/**
 * The IT Vidya mark: a serif "IT" monogram. A lamp flame rises from the "I"
 * (Inner Transformation) and an open orbit encircles both letters
 * (Integral Thinking). The flame sits on the orbit: the inner light is part
 * of the whole.
 */
export function Mark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <rect width="48" height="48" rx="12" fill="var(--color-forest)" />
      <path
        d="M19.59 10.62A16 16 0 1 1 12.89 14.49"
        fill="none"
        stroke="#f5e6cb"
        strokeOpacity=".5"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <g fill="#f7f3ec">
        <path d="M13.7 19.6h3.6v12.8h-3.6z" />
        <path d="M11.2 18h8.6v1.6c-1 0-1.9.2-2.5.6h-3.6c-.6-.4-1.5-.6-2.5-.6z" />
        <path d="M11.2 34h8.6v-1.6c-1 0-1.9-.2-2.5-.6h-3.6c-.6.4-1.5.6-2.5.6z" />
        <path d="M22.4 18h14.4v5.2h-1.2c-.3-1.7-1-2.7-2.6-2.7h-1.4v11.3h-3.6V20.5h-1.4c-1.6 0-2.3 1-2.6 2.7h-1.2z" />
        <path d="M25.3 34h8.6v-1.6c-1 0-1.9-.2-2.5-.6h-3.6c-.6.4-1.5.6-2.5.6z" />
      </g>
      <path d="M15.5 7.4c2.4 2.7 3.2 4.7 3.2 6.3a3.2 3.2 0 0 1-6.4 0c0-1.6.8-3.6 3.2-6.3Z" fill="#e3a64b" />
      <path d="M15.5 11.2c.9 1.1 1.2 1.9 1.2 2.6a1.2 1.2 0 0 1-2.4 0c0-.7.3-1.5 1.2-2.6Z" fill="#fbe9c6" />
    </svg>
  );
}

/** "IT" rendered with both meanings, e.g. for the footer and About page. */
export function ItMeaning({ className = "", tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const initial = tone === "dark" ? "text-turmeric-soft" : "text-turmeric-ink";
  return (
    <span className={className}>
      <span className={`font-semibold ${initial}`}>I</span>nner <span className={`font-semibold ${initial}`}>T</span>
      ransformation <span aria-hidden="true">·</span> <span className={`font-semibold ${initial}`}>I</span>ntegral{" "}
      <span className={`font-semibold ${initial}`}>T</span>hinking
    </span>
  );
}

export function Wordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 rounded-md no-underline ${dark ? "text-white" : "text-ink"}`}
      aria-label="IT Vidya — Inner Transformation and Integral Thinking — home"
    >
      <Mark
        className={`size-10 shrink-0 rounded-[22%] transition-transform duration-300 group-hover:-rotate-3 ${
          dark ? "ring-1 ring-white/30" : ""
        }`}
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.5rem] font-semibold tracking-tight">
          <span className={dark ? "text-turmeric-soft" : "text-forest"}>IT</span> Vidya
        </span>
        <span
          className={`mt-1 hidden text-[0.625rem] font-semibold tracking-[0.14em] uppercase sm:block ${
            dark ? "text-white/70" : "text-muted"
          }`}
        >
          Inner Transformation · Integral Thinking
        </span>
      </span>
    </Link>
  );
}
