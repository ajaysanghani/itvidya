const stages = [
  { title: "Explore", text: "Follow your curiosity across domains, questions and perspectives." },
  { title: "Understand", text: "Look for clarity: what is known, what is interpreted, what is still open." },
  { title: "Reflect", text: "Test ideas against your own experience, honestly and without hurry." },
  { title: "Apply", text: "Try what you have understood in daily life, relationships and work." },
  { title: "Share", text: "Offer what you learned back to others, and learn again from their response." },
];

export function LearningCycle() {
  return (
    <div className="relative">
      <ol className="relative grid gap-4 md:grid-cols-5 md:gap-0">
        {stages.map((s, i) => (
          <li key={s.title} className="relative flex gap-4 md:flex-col md:items-center md:px-3 md:text-center">
            {/* connector */}
            {i < stages.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute top-14 left-[1.6rem] h-[calc(100%-2.5rem)] w-px bg-line md:top-[1.6rem] md:left-[calc(50%+2rem)] md:h-px md:w-[calc(100%-4rem)]"
              />
            )}
            <span
              aria-hidden="true"
              className="relative z-10 inline-flex size-[3.25rem] shrink-0 items-center justify-center rounded-full border border-forest/30 bg-card font-display text-lg text-forest shadow-[var(--shadow-soft)]"
            >
              {i + 1}
            </span>
            <div className="pb-2 md:mt-4">
              <h3 className="text-xl font-medium">{s.title}</h3>
              <p className="mt-1 text-[0.98rem] text-ink-soft">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted">
        <svg viewBox="0 0 20 20" className="size-4 text-turmeric" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
          <path d="M16 10a6 6 0 1 1-1.8-4.3M16 3v3.5h-3.5" />
        </svg>
        And the cycle begins again — each turn a little deeper.
      </p>
    </div>
  );
}
