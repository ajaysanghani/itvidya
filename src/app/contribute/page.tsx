import Link from "next/link";
import { Suspense } from "react";
import { ContactChannel } from "@/components/contact-channel";
import { ProposalForm } from "@/components/proposal-form";
import { PageHeader, SectionHeading } from "@/components/ui";
import { site } from "@/content/site";
import { getDomains, getResources } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contribute — Share What You Know",
  description:
    "Help build the IT Vidya knowledge commons: propose resources, suggest corrections, offer expert review or share experience from teaching and facilitation.",
  path: "/contribute",
});

const ways = [
  {
    title: "Write a resource",
    text: "Propose an essay, primer, guide or practice on a question you understand deeply.",
  },
  {
    title: "Suggest corrections",
    text: "Point out errors, unclear passages, unfair summaries or missing perspectives in existing content.",
  },
  {
    title: "Review as an expert",
    text: "Offer to check resources in your field — science, philosophy, a tradition, education, community practice.",
  },
  {
    title: "Design a journey",
    text: "Suggest a sequence of learning steps for a particular audience or theme.",
  },
  {
    title: "Share facilitation experience",
    text: "Used our material with a class or circle? Tell us what worked, what did not and what people asked.",
  },
  {
    title: "Bring other voices",
    text: "Help us include traditions, regions and perspectives that are not yet represented.",
  },
];

const criteria = [
  "Clear, plain language that a curious beginner can follow",
  "Honest about what is evidence, interpretation, perspective and open question",
  "Fair to views the author does not share",
  "Practical: it invites reflection and application, not only information",
  "Properly attributed, with sources for factual claims",
  "Original, or shared with the necessary permissions",
];

const process = [
  { title: "Propose", text: "Prepare a short proposal using the form below." },
  { title: "Conversation", text: "An editor responds with questions or suggestions." },
  { title: "Drafting", text: "You write or revise, with editorial support." },
  { title: "Review", text: "The draft is checked for accuracy, fairness and clarity." },
  { title: "Publication", text: "It is published with your attribution and its review status." },
];

const faqs = [
  {
    q: "Do I need formal qualifications to contribute?",
    a: "No. Lived experience, practice and careful study are all valued. Factual claims still need reliable sources, and some topics will be reviewed by people with relevant expertise.",
  },
  {
    q: "Will I be paid?",
    a: "IT Vidya Version 1 is a non-commercial commons and does not currently offer payment for contributions. If this changes, it will be announced openly.",
  },
  {
    q: "Who owns what I contribute?",
    a: "Contributor agreements are still being prepared. Until they exist, we will not publish your work without agreeing terms with you in writing, and you will be credited for it. See the licensing principle for our current position.",
  },
  {
    q: "Can I use AI tools?",
    a: "You may, provided you disclose how you used them and personally verify every factual claim. AI output is never accepted as a source.",
  },
  {
    q: "How long will it take to hear back?",
    a: "IT Vidya is in its first version and the editorial process is still being set up, so responses may take time. We would rather be honest about that than promise a turnaround we cannot keep.",
  },
];

export default function ContributePage() {
  const domains = getDomains().map((d) => ({ slug: d.slug, title: d.title }));
  const resourceTitles = Object.fromEntries(getResources().map((r) => [r.slug, r.title]));

  return (
    <>
      <PageHeader
        eyebrow="Contribute"
        title="Share What You Know"
        lead={
          <p>
            IT Vidya is a knowledge commons. It grows through teachers, researchers, practitioners, elders, students and
            thoughtful learners who share what they understand — carefully, honestly and generously.
          </p>
        }
      />

      <section aria-labelledby="ways-title" className="container-page py-16 lg:py-20">
        <SectionHeading id="ways-title" eyebrow="Ways to contribute" title="Many ways to enrich the commons." />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ways.map((w, i) => (
            <li key={w.title} className="card p-6">
              <span aria-hidden="true" className="font-display text-sm text-turmeric-ink tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-xl font-medium">{w.title}</h3>
              <p className="mt-1.5 text-ink-soft">{w.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="criteria-title" className="border-y border-line-soft bg-card py-16 lg:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="criteria-title" eyebrow="What we look for" title="Qualities of a good contribution" />
            <ul className="mt-8 space-y-3">
              {criteria.map((c) => (
                <li key={c} className="flex gap-3 text-ink-soft">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-turmeric" />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-ink-soft">
              All contributions are guided by our{" "}
              <Link href="/principles" className="link-quiet text-forest">
                Knowledge Commons Principles
              </Link>
              .
            </p>
          </div>
          <div>
            <h2 className="eyebrow">How the process works</h2>
            <ol className="mt-6 space-y-5">
              {process.map((p, i) => (
                <li key={p.title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-forest/30 bg-paper font-display text-forest"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium">{p.title}</h3>
                    <p className="text-ink-soft">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="proposal" aria-labelledby="proposal-title" className="container-page scroll-mt-20 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              id="proposal-title"
              eyebrow="Contribution proposal"
              title="Prepare your proposal"
              intro={
                <p>
                  Fill in what you can. You will get a formatted proposal to{" "}
                  {site.contact.email ? "email to us" : "keep until our contact address is published"}.
                </p>
              }
            />
            <div className="mt-8">
              <ContactChannel />
            </div>
          </div>
          <div className="card p-6 sm:p-8 lg:col-span-8">
            <Suspense fallback={<p className="text-ink-soft">Loading the proposal form…</p>}>
              <ProposalForm contactEmail={site.contact.email} domains={domains} resourceTitles={resourceTitles} />
            </Suspense>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="container-prose pb-8">
        <h2 id="faq-title" className="text-3xl font-medium">
          Questions contributors ask
        </h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex list-none items-center justify-between gap-4 font-display text-xl text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="text-2xl text-forest transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
