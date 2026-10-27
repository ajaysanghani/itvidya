import { site } from "@/content/site";

/** Shows the configured contact address, or a clearly labelled placeholder. */
export function ContactChannel() {
  const email = site.contact.email;
  if (email) {
    return (
      <div className="card p-6">
        <p className="eyebrow">Email</p>
        <a href={`mailto:${email}`} className="mt-2 block font-display text-2xl break-all text-forest">
          {email}
        </a>
      </div>
    );
  }
  return (
    <div className="rounded-[var(--radius-card)] border-2 border-dashed border-turmeric/60 bg-turmeric-soft/30 p-6">
      <p className="eyebrow text-turmeric-ink!">Placeholder</p>
      <p className="mt-2 font-display text-2xl text-ink">{site.contact.placeholder}</p>
      <p className="mt-2 text-ink-soft">
        IT Vidya has not yet published a monitored contact address. Rather than show an address nobody reads, we are
        leaving this clearly marked until one is ready.
      </p>
      <p className="mt-3 text-xs text-muted">
        For site maintainers: set <code className="rounded bg-paper-deep px-1">NEXT_PUBLIC_CONTACT_EMAIL</code> at build
        time to publish an address here and enable email sending on the Contribute page.
      </p>
    </div>
  );
}
