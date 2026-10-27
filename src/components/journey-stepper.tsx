"use client";

import { Children, useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

interface Props {
  journeySlug: string;
  steps: { title: string; focus: string }[];
  /** One pre-rendered panel per step, followed by the completion panel. */
  children: React.ReactNode;
}

const storageKey = (slug: string) => `itvidya:journey:${slug}`;

/* Completed steps are remembered only in this browser (localStorage). */
function readCompleted(slug: string): number[] {
  try {
    const raw = window.localStorage.getItem(storageKey(slug));
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((n) => Number.isInteger(n)) : [];
  } catch {
    return [];
  }
}

const listeners = new Set<() => void>();
function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

function stepFromHash(total: number): number | null {
  const m = window.location.hash.match(/^#step-(\d+)$/);
  if (m) {
    const n = Number(m[1]);
    if (n >= 1 && n <= total) return n - 1;
  }
  if (window.location.hash === "#completion") return total;
  return null;
}

export function JourneyStepper({ journeySlug, steps, children }: Props) {
  const panels = Children.toArray(children);
  const total = steps.length;
  const [active, setActive] = useState(0);
  const headingRef = useRef<HTMLDivElement>(null);
  const userNavigated = useRef(false);

  const completedRaw = useSyncExternalStore(
    subscribe,
    () => window.localStorage.getItem(storageKey(journeySlug)) ?? "[]",
    () => "[]",
  );
  const completed = (() => {
    try {
      return JSON.parse(completedRaw) as number[];
    } catch {
      return [];
    }
  })();

  // Read the initial step from the URL hash, and follow later hash changes.
  useEffect(() => {
    const sync = () => {
      const s = stepFromHash(total);
      if (s !== null) setActive(s);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [total]);

  const go = useCallback(
    (index: number) => {
      userNavigated.current = true;
      setActive(index);
      const hash = index === total ? "#completion" : `#step-${index + 1}`;
      window.history.replaceState(null, "", hash);
    },
    [total],
  );

  // Move focus to the new step heading after navigation, for keyboard and screen-reader users.
  useEffect(() => {
    if (!userNavigated.current) return;
    headingRef.current?.focus({ preventScroll: true });
    headingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [active]);

  const toggleComplete = (index: number) => {
    const current = readCompleted(journeySlug);
    const next = current.includes(index) ? current.filter((n) => n !== index) : [...current, index].sort();
    try {
      window.localStorage.setItem(storageKey(journeySlug), JSON.stringify(next));
    } catch {
      // Storage unavailable (e.g. private mode) — progress simply isn't saved.
    }
    listeners.forEach((l) => l());
  };

  const isCompletion = active === total;

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      {/* Step navigation */}
      <nav aria-label="Journey steps" className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow">Your path</p>
          <p className="mt-2 text-sm text-muted">
            {completed.length} of {total} steps marked complete
            <span className="sr-only"> (saved only in this browser)</span>
          </p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line-soft" aria-hidden="true">
            <div className="h-full rounded-full bg-forest transition-[width]" style={{ width: `${(completed.length / total) * 100}%` }} />
          </div>
          <ol className="mt-6 space-y-1.5">
            {steps.map((s, i) => {
              const current = i === active;
              const done = completed.includes(i);
              return (
                <li key={s.title}>
                  <a
                    href={`#step-${i + 1}`}
                    aria-current={current ? "step" : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      go(i);
                    }}
                    className={`flex items-start gap-3 rounded-xl px-3 py-2.5 no-underline transition-colors ${
                      current ? "bg-card shadow-[var(--shadow-soft)] ring-1 ring-line-soft" : "hover:bg-paper-deep"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full font-display text-sm ${
                        done ? "bg-forest text-white" : current ? "border-2 border-forest text-forest" : "border border-line text-muted"
                      }`}
                    >
                      {done ? "✓" : i + 1}
                    </span>
                    <span>
                      <span className={`block font-medium ${current ? "text-forest" : "text-ink"}`}>{s.title}</span>
                      <span className="block text-sm text-muted">
                        {s.focus}
                        {done && <span className="sr-only"> — completed</span>}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#completion"
                aria-current={isCompletion ? "step" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  go(total);
                }}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 no-underline ${
                  isCompletion ? "bg-card shadow-[var(--shadow-soft)] ring-1 ring-line-soft" : "hover:bg-paper-deep"
                }`}
              >
                <span aria-hidden="true" className="inline-flex size-7 items-center justify-center rounded-full bg-turmeric-soft text-turmeric-ink">
                  ★
                </span>
                <span className={`font-medium ${isCompletion ? "text-forest" : "text-ink"}`}>Completing the journey</span>
              </a>
            </li>
          </ol>
        </div>
      </nav>

      {/* Active panel */}
      <div className="min-w-0 lg:col-span-8">
        <div ref={headingRef} tabIndex={-1} className="scroll-mt-28 focus:outline-none" aria-live="polite">
          <p className="text-sm font-semibold text-muted">
            {isCompletion ? "After step 5" : `Step ${active + 1} of ${total}`}
          </p>
        </div>
        {panels.map((panel, i) => (
          <div key={i} id={i === total ? "completion" : `step-${i + 1}`} hidden={i !== active}>
            {panel}
          </div>
        ))}

        {!isCompletion && (
          <div className="mt-8">
            <button
              type="button"
              onClick={() => toggleComplete(active)}
              aria-pressed={completed.includes(active)}
              className="chip"
            >
              {completed.includes(active) ? "✓ Marked as complete" : "Mark this step as complete"}
            </button>
            <p className="mt-2 text-xs text-muted">Progress is stored only in this browser. Nothing is sent anywhere.</p>
          </div>
        )}

        <div className="mt-10 flex flex-col-reverse gap-3 border-t border-line-soft pt-6 sm:flex-row sm:justify-between">
          {active > 0 ? (
            <button type="button" className="btn btn-secondary" onClick={() => go(active - 1)}>
              ← {active - 1 < total ? `Step ${active}: ${steps[active - 1].title}` : "Previous"}
            </button>
          ) : (
            <span />
          )}
          {active < total && (
            <button type="button" className="btn btn-primary" onClick={() => go(active + 1)}>
              {active + 1 < total ? `Next: ${steps[active + 1].title}` : "Complete the journey"} →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
