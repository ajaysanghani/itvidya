import Link from "next/link";
import { ContactChannel } from "@/components/contact-channel";
import { NotionContactForm } from "@/components/notion-contact-form";
import { PageHeader } from "@/components/ui";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Send IT Vidya a message — questions, corrections, contribution ideas, collaboration or feedback from educators and facilitators.",
  path: "/contact",
});

const topics = [
  {
    title: "Questions and feedback",
    text: "Anything about IT Vidya, its content or its approach.",
  },
  {
    title: "Corrections",
    text: "Errors, unfair summaries or missing perspectives. Including the page link helps us find it quickly.",
  },
  {
    title: "Contributions and reviews",
    text: "For detailed proposals, the contribution form helps you structure your idea.",
    href: "/contribute#proposal",
    cta: "Prepare a proposal",
  },
  {
    title: "Educators and facilitators",
    text: "Using IT Vidya with a group? We would love to hear how it went.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="We would love to hear from you."
        lead={
          <p>
            Questions, corrections, ideas and offers of help are all welcome. Every message is read by the IT Vidya team.
          </p>
        }
      />
      <div className="container-page grid gap-12 py-14 lg:grid-cols-12 lg:py-16">
        <section aria-labelledby="form-title" className="lg:col-span-7">
          <h2 id="form-title" className="text-3xl font-medium">
            Send us a message
          </h2>
          <p className="mt-2 mb-6 text-ink-soft">
            Fill in the form below. Your message goes straight to the IT Vidya team&rsquo;s inbox in Notion.
          </p>
          <NotionContactForm />
        </section>

        <aside className="space-y-8 lg:col-span-5" aria-label="About contacting IT Vidya">
          <div>
            <h2 className="eyebrow">What to write about</h2>
            <ul className="mt-5 space-y-3">
              {topics.map((t) => (
                <li key={t.title} className="card p-5">
                  <h3 className="text-lg font-medium">{t.title}</h3>
                  <p className="mt-1 text-[0.98rem] text-ink-soft">{t.text}</p>
                  {t.href && (
                    <Link href={t.href} className="link-quiet mt-2 inline-block font-semibold text-forest">
                      {t.cta} →
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {site.contact.email && <ContactChannel />}

          <div className="rounded-2xl bg-forest-soft/60 p-6 text-[0.98rem] text-ink-soft">
            <h2 className="text-lg font-medium text-ink">Your privacy</h2>
            <p className="mt-2">
              The contact form is provided by Notion. What you submit is stored in IT Vidya&rsquo;s Notion workspace,
              used only to reply to you and for the purpose you wrote about, and handled under{" "}
              <a href="https://www.notion.com/trust/privacy-policy" className="link-quiet text-forest" target="_blank" rel="noopener noreferrer">
                Notion&rsquo;s privacy policy
              </a>
              . Please don&rsquo;t include sensitive personal information. See our{" "}
              <Link href="/principles#privacy" className="link-quiet text-forest">
                privacy principle
              </Link>
              .
            </p>
          </div>

          <p className="text-sm text-muted">
            Official IT Vidya channels will be listed on this page as they are established. If a channel is not listed
            here, please treat it with caution.
          </p>
        </aside>
      </div>
    </>
  );
}
