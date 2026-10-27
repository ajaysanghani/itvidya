import Link from "next/link";
import { ArrowRight, PageHeader, SectionHeading } from "@/components/ui";
import { site } from "@/content/site";
import { getResources } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About IT Vidya",
  description:
    "IT Vidya is a lifelong learning commons for inner transformation, integral thinking and whole-life learning. Learn about our vision, approach and what Version 1 includes.",
  path: "/about",
});

const isList = [
  "A lifelong learning space for understanding oneself, relationships, nature and society",
  "A knowledge commons that learners, educators and contributors build together",
  "Plural — drawing on Indian and world traditions, the sciences and lived experience",
  "Honest about what is known, what is interpreted and what is still open",
];

const isNotList = [
  "An information technology (IT) education website",
  "A religious organisation, or the voice of any single school of thought",
  "A coaching programme, therapy or a guaranteed path to transformation",
  "A course marketplace or a certification body",
];

const audiences = [
  { title: "Youth and students", text: "Exploring who they are and how the world works, beyond the syllabus." },
  { title: "Lifelong learners", text: "Returning to the big questions at any age." },
  { title: "Educators, mentors and facilitators", text: "Looking for thoughtful material for classrooms and circles." },
  { title: "Researchers, philosophers and practitioners", text: "Bringing depth, and checking that we get things right." },
  { title: "Parents and families", text: "Learning together at home, across generations." },
  { title: "Community builders and professionals", text: "Seeking to connect inner understanding with outer action." },
];

const approach = [
  {
    title: "Integral",
    text: "We look at questions from many sides — inner and outer, personal and collective — and attend to how they connect.",
  },
  {
    title: "Inquiry-led",
    text: "We start from questions, not doctrines, and invite readers to test ideas against their own experience.",
  },
  {
    title: "Evidence-honest",
    text: "We label what is established, what is interpretation, what is perspective and what is still open.",
  },
  {
    title: "Practical",
    text: "Every resource ends with reflection and application, because understanding shows itself in living.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About IT Vidya"
        title="A learning commons for the whole of life."
        lead={<p>{site.statement}</p>}
      />

      <section aria-labelledby="vision-title" className="container-page grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <p className="eyebrow">Our vision</p>
          <h2 id="vision-title" className="mt-3 text-3xl leading-tight font-medium sm:text-[2.5rem]">
            Learning that helps people live well — together.
          </h2>
        </div>
        <div className="prose-body lg:col-span-7">
          <p>
            Schools and universities teach a great deal, but some of the most important things in life are rarely taught
            anywhere: how to understand ourselves, how to live well with others, how our lives connect to nature and
            society, and how to contribute to a prosperity that is shared.
          </p>
          <p>
            IT Vidya exists to make that kind of learning available to anyone, at any age. We bring together inner
            transformation — the practical work of seeing ourselves more clearly — and integral thinking — the habit of
            seeing how things connect. We believe the two belong together: clearer understanding within supports wiser
            action without, and the reverse.
          </p>
          <p>
            Our hope is to contribute, in a modest way, to a world where more people understand themselves, relate to
            each other with trust, live in harmony with nature and participate in collective prosperity.
          </p>
        </div>
      </section>

      <section aria-labelledby="name-title" className="border-y border-line-soft bg-card py-16">
        <div className="container-prose text-center">
          <p className="eyebrow">The name</p>
          <h2 id="name-title" className="mt-3 text-3xl font-medium">
            IT Vidya
          </h2>
          <p className="prose-body mt-5">
            <em>Vidyā</em> is a Sanskrit word for knowledge, learning and understanding — often used for knowledge that
            illuminates rather than merely informs. &ldquo;IT Vidya&rdquo; is simply our name. It is not an information
            technology platform, and the letters are not meant as an acronym.
          </p>
        </div>
      </section>

      <section aria-labelledby="is-title" className="container-page grid gap-6 py-16 md:grid-cols-2 lg:py-20">
        <h2 id="is-title" className="sr-only">
          What IT Vidya is and is not
        </h2>
        <div className="card p-8">
          <h3 className="text-2xl font-medium text-forest">IT Vidya is…</h3>
          <ul className="mt-5 space-y-3">
            {isList.map((i) => (
              <li key={i} className="flex gap-3 text-ink-soft">
                <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-forest" />
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[var(--radius-card)] border border-line p-8">
          <h3 className="text-2xl font-medium text-clay">IT Vidya is not…</h3>
          <ul className="mt-5 space-y-3">
            {isNotList.map((i) => (
              <li key={i} className="flex gap-3 text-ink-soft">
                <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-clay" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="approach-title" className="bg-paper-deep/60 py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading id="approach-title" eyebrow="Our approach" title="Four commitments in how we learn and teach." />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((a) => (
              <li key={a.title} className="card p-6">
                <h3 className="text-xl font-medium">{a.title}</h3>
                <p className="mt-2 text-ink-soft">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="audience-title" className="container-page py-16 lg:py-20">
        <SectionHeading
          id="audience-title"
          eyebrow="Who it is for"
          title="Beginners and experienced learners alike."
          intro="IT Vidya is written in plain language and designed for many kinds of learners."
        />
        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line-soft bg-line-soft sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <li key={a.title} className="bg-card p-6">
              <h3 className="text-lg font-medium">{a.title}</h3>
              <p className="mt-1.5 text-ink-soft">{a.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="v1-title" className="container-page">
        <div className="grid gap-10 rounded-[2rem] border border-line bg-card p-8 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Where we are</p>
            <h2 id="v1-title" className="mt-3 text-3xl leading-tight font-medium">
              This is Version 1 — a beginning.
            </h2>
          </div>
          <div className="space-y-4 text-ink-soft lg:col-span-7">
            <p>
              Version 1 is a static website with eight learning domains, an initial library of {getResources().length}{" "}
              knowledge resources and three learning journeys. There are no accounts, no payments and no tracking of
              individual learners.
            </p>
            <p>
              The initial resources were drafted with AI assistance by the IT Vidya Editorial Team and are clearly
              labelled as awaiting expert review. We are inviting educators, researchers and practitioners to review,
              correct and extend them.
            </p>
            <p>
              Future versions may add more domains of content, translations, community contributions and tools for
              facilitators. We will add them carefully, guided by our{" "}
              <Link href="/principles" className="link-quiet text-forest">
                Knowledge Commons Principles
              </Link>
              .
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link href="/explore" className="btn btn-primary">
                Start exploring <ArrowRight />
              </Link>
              <Link href="/contribute" className="btn btn-secondary">
                Help build the commons
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
