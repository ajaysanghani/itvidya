"use client";

import { useSearchParams } from "next/navigation";
import { useId, useRef, useState } from "react";

const TYPES = [
  { value: "resource", label: "A new knowledge resource" },
  { value: "correction", label: "A correction or improvement" },
  { value: "journey", label: "A learning journey idea" },
  { value: "review", label: "Offer to review content in my field" },
  { value: "experience", label: "Experience from teaching or facilitation" },
  { value: "principles", label: "Feedback on the principles" },
  { value: "other", label: "Something else" },
] as const;

interface Props {
  contactEmail: string | null;
  /** True when the Notion "Contact Us" form is published on /contact. */
  hasContactForm: boolean;
  domains: { slug: string; title: string }[];
  resourceTitles: Record<string, string>;
}

interface Draft {
  name: string;
  email: string;
  type: string;
  domain: string;
  title: string;
  summary: string;
  background: string;
  sources: string;
  ai: string;
}

function compose(d: Draft, typeLabel: string, domainLabel: string) {
  return [
    `IT Vidya contribution proposal`,
    ``,
    `Type: ${typeLabel}`,
    `Domain: ${domainLabel || "Not specified"}`,
    `Working title: ${d.title}`,
    ``,
    `Summary`,
    d.summary,
    ``,
    `About me / relevant background`,
    d.background || "—",
    ``,
    `Sources, references or materials`,
    d.sources || "—",
    ``,
    `AI assistance used in preparing this proposal`,
    d.ai || "—",
    ``,
    `Name: ${d.name}`,
    `Email: ${d.email || "—"}`,
    ``,
    `I confirm that this is my own work or that I have the right to share it, and I have read the IT Vidya Knowledge Commons Principles.`,
  ].join("\n");
}

export function ProposalForm({ contactEmail, hasContactForm, domains, resourceTitles }: Props) {
  const params = useSearchParams();
  const formId = useId();
  const resultRef = useRef<HTMLDivElement>(null);

  const initialType = TYPES.some((t) => t.value === params.get("type")) ? params.get("type")! : "resource";
  const presetResource = params.get("resource");
  const presetTitle = presetResource && resourceTitles[presetResource] ? `Correction: ${resourceTitles[presetResource]}` : "";

  const [draft, setDraft] = useState<Draft>({
    name: "",
    email: "",
    type: initialType,
    domain: "",
    title: presetTitle,
    summary: "",
    background: "",
    sources: "",
    ai: "",
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [text, setText] = useState<string | null>(null);
  const [copied, setCopied] = useState<"idle" | "done" | "failed">("idle");

  const set = (k: keyof Draft) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setDraft((d) => ({ ...d, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const problems: string[] = [];
    if (!draft.name.trim()) problems.push("Please add your name.");
    if (!draft.title.trim()) problems.push("Please add a working title.");
    if (draft.summary.trim().length < 40) problems.push("Please describe your proposal in at least a couple of sentences.");
    if (!consent) problems.push("Please confirm the rights and principles statement.");
    setErrors(problems);
    if (problems.length) {
      setText(null);
      return;
    }
    const typeLabel = TYPES.find((t) => t.value === draft.type)?.label ?? draft.type;
    const domainLabel = domains.find((d) => d.slug === draft.domain)?.title ?? "";
    setText(compose(draft, typeLabel, domainLabel));
    setCopied("idle");
    requestAnimationFrame(() => resultRef.current?.focus());
  };

  const copy = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied("done");
    } catch {
      setCopied("failed");
    }
  };

  const download = () => {
    if (!text) return;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "itvidya-proposal.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const mailto =
    contactEmail && text
      ? `mailto:${contactEmail}?subject=${encodeURIComponent(`IT Vidya proposal: ${draft.title}`)}&body=${encodeURIComponent(text)}`
      : null;

  const field = "mt-1.5 w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-muted focus:border-teal focus:outline-none focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-turmeric";
  const label = "text-sm font-semibold text-ink";
  const hint = "mt-1 text-sm text-muted";

  return (
    <div>
      <form onSubmit={onSubmit} noValidate aria-describedby={`${formId}-about`} className="grid gap-6">
        <p id={`${formId}-about`} className="rounded-xl bg-forest-soft/60 px-4 py-3 text-sm text-forest-deep">
          This form does not send anything. It helps you prepare a well-structured proposal, which you can then{" "}
          {contactEmail ? "send by email or copy" : "copy into our Contact Us form or download"} yourself.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor={`${formId}-name`} className={label}>
              Your name <span aria-hidden="true">*</span>
            </label>
            <input id={`${formId}-name`} className={field} value={draft.name} onChange={set("name")} autoComplete="name" required aria-required="true" />
          </div>
          <div>
            <label htmlFor={`${formId}-email`} className={label}>
              Email <span className="font-normal text-muted">(optional)</span>
            </label>
            <input id={`${formId}-email`} type="email" className={field} value={draft.email} onChange={set("email")} autoComplete="email" />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor={`${formId}-type`} className={label}>
              What would you like to contribute?
            </label>
            <select id={`${formId}-type`} className={field} value={draft.type} onChange={set("type")}>
              {TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={`${formId}-domain`} className={label}>
              Related domain
            </label>
            <select id={`${formId}-domain`} className={field} value={draft.domain} onChange={set("domain")}>
              <option value="">Not sure / several</option>
              {domains.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {d.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor={`${formId}-title`} className={label}>
            Working title <span aria-hidden="true">*</span>
          </label>
          <input id={`${formId}-title`} className={field} value={draft.title} onChange={set("title")} required aria-required="true" />
        </div>

        <div>
          <label htmlFor={`${formId}-summary`} className={label}>
            Summary <span aria-hidden="true">*</span>
          </label>
          <p id={`${formId}-summary-hint`} className={hint}>
            What is it about, who is it for, and why does it matter? For corrections, quote the passage and explain the issue.
          </p>
          <textarea
            id={`${formId}-summary`}
            className={`${field} min-h-36`}
            value={draft.summary}
            onChange={set("summary")}
            aria-describedby={`${formId}-summary-hint`}
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor={`${formId}-background`} className={label}>
            Your relevant background
          </label>
          <p id={`${formId}-background-hint`} className={hint}>
            Experience, study, practice or tradition you draw on. Credentials are welcome but not required.
          </p>
          <textarea id={`${formId}-background`} className={`${field} min-h-24`} value={draft.background} onChange={set("background")} aria-describedby={`${formId}-background-hint`} />
        </div>

        <div>
          <label htmlFor={`${formId}-sources`} className={label}>
            Sources and materials
          </label>
          <p id={`${formId}-sources-hint`} className={hint}>
            Key references, and any third-party material you would include (with its licence, if known).
          </p>
          <textarea id={`${formId}-sources`} className={`${field} min-h-24`} value={draft.sources} onChange={set("sources")} aria-describedby={`${formId}-sources-hint`} />
        </div>

        <div>
          <label htmlFor={`${formId}-ai`} className={label}>
            AI assistance
          </label>
          <p id={`${formId}-ai-hint`} className={hint}>
            If you used AI tools to prepare this, briefly say how. This helps reviewers and is required by our principles.
          </p>
          <input id={`${formId}-ai`} className={field} value={draft.ai} onChange={set("ai")} aria-describedby={`${formId}-ai-hint`} placeholder="e.g. None, or “used for proofreading”" />
        </div>

        <div className="flex gap-3">
          <input
            id={`${formId}-consent`}
            type="checkbox"
            className="mt-1 size-5 shrink-0 accent-[var(--color-forest)]"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <label htmlFor={`${formId}-consent`} className="text-ink-soft">
            I confirm this is my own work or that I have the right to share it, and I have read the{" "}
            <a href="/principles" className="link-quiet text-forest">
              Knowledge Commons Principles
            </a>
            .
          </label>
        </div>

        {errors.length > 0 && (
          <div role="alert" className="rounded-xl border border-clay/40 bg-[#f7e7e1] px-4 py-3 text-sm text-[#7f3a26]">
            <p className="font-semibold">Please check the following:</p>
            <ul className="mt-1 list-disc pl-5">
              {errors.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <button type="submit" className="btn btn-primary">
            Prepare my proposal
          </button>
        </div>
      </form>

      {text && (
        <div ref={resultRef} tabIndex={-1} className="mt-10 rounded-2xl border border-line bg-paper p-6 focus:outline-none" aria-labelledby={`${formId}-result`}>
          <h3 id={`${formId}-result`} className="text-xl font-medium">
            Your proposal is ready to send
          </h3>
          {contactEmail ? (
            <p className="mt-2 text-ink-soft">
              Nothing has been sent yet. Open it in your email app to send it to {contactEmail}, or copy the text.
            </p>
          ) : hasContactForm ? (
            <p className="mt-2 text-ink-soft">
              <strong className="font-semibold text-ink">Nothing has been sent yet.</strong> Copy the text below, then paste
              it into our{" "}
              <a href="/contact" className="link-quiet text-forest">
                Contact Us form
              </a>{" "}
              and choose the topic &ldquo;Contribution or proposal&rdquo;.
            </p>
          ) : (
            <p className="mt-2 text-ink-soft">
              <strong className="font-semibold text-ink">Nothing has been sent.</strong> Our Contact Us form is still being
              set up, so please copy or download your proposal and keep it for now. The form will appear on the{" "}
              <a href="/contact" className="link-quiet text-forest">
                Contact page
              </a>
              .
            </p>
          )}
          <pre className="mt-5 max-h-80 overflow-auto rounded-xl border border-line-soft bg-card p-4 font-sans text-sm whitespace-pre-wrap text-ink-soft">
            {text}
          </pre>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            {mailto && (
              <a href={mailto} className="btn btn-primary">
                Open in email app
              </a>
            )}
            <button type="button" className="btn btn-secondary" onClick={copy}>
              Copy text
            </button>
            <button type="button" className="btn btn-secondary" onClick={download}>
              Download as .txt
            </button>
          </div>
          <p className="mt-3 text-sm text-muted" role="status" aria-live="polite">
            {copied === "done" && "Copied to your clipboard."}
            {copied === "failed" && "Copying was blocked by your browser — please select the text above and copy it manually."}
          </p>
        </div>
      )}
    </div>
  );
}
