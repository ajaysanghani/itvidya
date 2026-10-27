import Link from "next/link";
import { ContactChannel } from "@/components/contact-channel";
import { PageHeader } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: "How to get in touch with IT Vidya about contributions, corrections, collaboration or general questions.",
  path: "/contact",
});

const topics = [
  {
    title: "Contributions and reviews",
    text: "Proposals for new resources, journeys, or offers to review content.",
    href: "/contribute#proposal",
    cta: "Prepare a proposal",
  },
  {
    title: "Corrections",
    text: "Errors, unfair summaries or missing perspectives. Every resource has a “Suggest a correction” link.",
    href: "/contribute?type=correction#proposal",
    cta: "Suggest a correction",
  },
  {
    title: "Educators and facilitators",
    text: "Using IT Vidya material with a group? We would like to hear how it went.",
    href: "/contribute?type=experience#proposal",
    cta: "Share your experience",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch."
        lead={<p>Questions, corrections, ideas and offers of help are all welcome.</p>}
      />
      <div className="container-page grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <ContactChannel />
          <div className="mt-8 space-y-3 text-ink-soft">
            <h2 className="text-xl font-medium text-ink">A note on privacy</h2>
            <p>
              This website does not collect personal information through forms. If you write to us, we will use your
              message only to respond to you and for the purpose you wrote about. See our{" "}
              <Link href="/principles#privacy" className="link-quiet text-forest">
                privacy principle
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="lg:col-span-7">
          <h2 className="eyebrow">What to write about</h2>
          <ul className="mt-6 space-y-4">
            {topics.map((t) => (
              <li key={t.title} className="card p-6">
                <h3 className="text-xl font-medium">{t.title}</h3>
                <p className="mt-1.5 text-ink-soft">{t.text}</p>
                <Link href={t.href} className="link-quiet mt-3 inline-block font-semibold text-forest">
                  {t.cta} →
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            Official IT Vidya channels will be listed on this page as they are established. If a channel is not listed
            here, please treat it with caution.
          </p>
        </div>
      </div>
    </>
  );
}
