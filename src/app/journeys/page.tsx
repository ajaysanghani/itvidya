import Link from "next/link";
import { JourneyCard } from "@/components/cards";
import { Notice, PageHeader, SectionHeading } from "@/components/ui";
import { getJourneys } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Learning Journeys",
  description:
    "Three guided, five-step learning journeys on self and relationships, learning and thinking, and coexistence in nature and society — with readings, reflection prompts and practical exercises.",
  path: "/journeys",
});

const howItWorks = [
  {
    title: "Five steps, one rhythm",
    text: "Each step pairs one or two readings with reflection prompts and a practical exercise. Most people take about a week per step.",
  },
  {
    title: "Self-paced and free",
    text: "There is no sign-up, no deadline and no fee. Pause, repeat or skip steps as you need.",
  },
  {
    title: "Better together",
    text: "Journeys work well with a friend, family or study circle. Meet after each step to share reflections.",
  },
  {
    title: "No certificates",
    text: "Journeys are exploratory, not credentials. The evidence of completion is in your own understanding and practice.",
  },
];

export default function JourneysPage() {
  const journeys = getJourneys();
  return (
    <>
      <PageHeader
        eyebrow="Learning journeys"
        title="Guided paths for steady, reflective learning."
        lead={
          <p>
            A learning journey is a sequence of readings, reflections and practices designed to build understanding step
            by step. Choose the one that meets you where you are.
          </p>
        }
      />

      <section aria-labelledby="all-journeys" className="container-page py-16">
        <h2 id="all-journeys" className="sr-only">
          All journeys
        </h2>
        <ul className="grid gap-6 lg:grid-cols-3">
          {journeys.map((j, i) => (
            <li key={j.slug}>
              <JourneyCard journey={j} index={i} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="how-title" className="border-y border-line-soft bg-card py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading id="how-title" eyebrow="How journeys work" title="Simple structure, plenty of room." />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((h) => (
              <li key={h.title}>
                <h3 className="text-xl font-medium">{h.title}</h3>
                <p className="mt-2 text-ink-soft">{h.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-prose py-16">
        <Notice title="Exploratory, not clinical" tone="info">
          IT Vidya journeys are educational explorations. They are not therapy, counselling, medical treatment or
          guaranteed transformation programmes. If you are struggling, please reach out to a qualified professional or a
          trusted person.
        </Notice>
        <p className="mt-8 text-center text-ink-soft">
          Facilitators and educators: you are welcome to use these journeys with groups.{" "}
          <Link href="/contribute" className="link-quiet text-forest">
            Tell us how it went
          </Link>{" "}
          or propose a new journey.
        </p>
      </section>
    </>
  );
}
