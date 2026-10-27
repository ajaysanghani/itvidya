import { site } from "@/content/site";

/**
 * The Contact Us form is a Notion Form. Submissions are stored as rows in the
 * "IT Vidya — Contact Us" Notion database. The form is embedded when its
 * public link is configured, with a direct link as a fallback in case the
 * browser or Notion blocks embedding.
 */
export function NotionContactForm() {
  const url = site.contact.notionFormUrl;

  if (!url) {
    return (
      <div className="rounded-[1.5rem] border-2 border-dashed border-turmeric/60 bg-turmeric-soft/30 p-8">
        <p className="eyebrow text-turmeric-ink!">Coming soon</p>
        <h3 className="mt-3 text-2xl font-medium">The contact form is being set up.</h3>
        <p className="mt-3 text-ink-soft">
          Our Contact Us form runs on Notion and will appear here as soon as its public link is published. Nothing can be
          sent from this page until then.
        </p>
        <p className="mt-4 text-xs text-muted">
          For site maintainers: publish the form view of the &ldquo;IT Vidya — Contact Us&rdquo; Notion database, then set{" "}
          <code className="rounded bg-paper-deep px-1">NEXT_PUBLIC_NOTION_FORM_URL</code> to its share link and rebuild.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-[var(--shadow-soft)]">
        <iframe
          src={url}
          title="Contact IT Vidya — form powered by Notion"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="block h-[56rem] w-full sm:h-[50rem]"
        />
      </div>
      <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
        <span>Form not showing, or prefer a full page?</span>
        <a href={url} target="_blank" rel="noopener noreferrer" className="link-quiet font-semibold text-forest">
          Open the contact form in a new tab ↗
        </a>
      </p>
    </div>
  );
}
