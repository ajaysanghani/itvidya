import Link from "next/link";
import { DomainCard, JourneyCard, ResourceCard } from "@/components/cards";
import { IntegralMap } from "@/components/integral-map";
import { LearningCycle } from "@/components/learning-cycle";
import { ArrowRight, SectionHeading } from "@/components/ui";
import { site } from "@/content/site";
import {
  featuredResourceSlugs,
  getDomains,
  getJourneys,
  getResourcesBySlugs,
  summarise,
} from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${site.name} — Inner Transformation & Integral Thinking`,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

const everyday = [
  {
    title: "At home",
    text: "A disagreement with a parent or partner becomes less about winning and more about understanding what each person needs.",
  },
  {
    title: "In learning",
    text: "A student learns to tell facts from interpretations, and to study in ways that actually last.",
  },
  {
    title: "At work",
    text: "A professional asks not only how to do a task well, but whom it serves and what it costs.",
  },
  {
    title: "In community",
    text: "Neighbours facing a shared problem learn to listen first, and then act together.",
  },
];

const commonsRoles = [
  {
    title: "Learners",
    text: "Read, reflect and practise at your own pace. Ask questions, notice what is unclear, and tell us when something could be better.",
  },
  {
    title: "Educators & facilitators",
    text: "Use resources and journeys with classes, study circles and families. Share what worked, what did not, and what your learners asked.",
  },
  {
    title: "Contributors & reviewers",
    text: "Propose new resources, bring expertise from your field or tradition, review content for accuracy and suggest corrections.",
  },
];

export default function HomePage() {
  const domains = getDomains();
  const journeys = getJourneys();
  const featured = getResourcesBySlugs(featuredResourceSlugs).map(summarise);

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-dots pointer-events-none absolute inset-0" />
        <div className="container-page relative grid items-center gap-10 pt-12 pb-16 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:pt-20 lg:pb-24">
          <div className="lg:col-span-7">
            <p className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-line bg-card/80 px-4 py-1.5 text-sm text-ink-soft shadow-[var(--shadow-soft)]">
              <span className="font-display font-semibold text-forest">IT</span>
              <span aria-hidden="true" className="text-line">|</span>
              <span>
                <b className="font-semibold text-turmeric-ink">I</b>nner <b className="font-semibold text-turmeric-ink">T</b>ransformation
              </span>
              <span aria-hidden="true" className="text-turmeric">+</span>
              <span>
                <b className="font-semibold text-turmeric-ink">I</b>ntegral <b className="font-semibold text-turmeric-ink">T</b>hinking
              </span>
            </p>
            <h1
              id="hero-title"
              className="mt-5 text-[2.6rem] leading-[1.04] font-medium sm:text-6xl lg:text-[4.25rem]"
            >
              Understand Yourself.
              <br />
              Understand Life.
              <br />
              <span className="text-forest italic">Think Integrally.</span>
            </h1>
            <p className="mt-7 max-w-xl text-xl text-ink-soft sm:text-[1.375rem] sm:leading-relaxed">{site.statement}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/explore" className="btn btn-primary">
                Explore Knowledge <ArrowRight />
              </Link>
              <Link href="/journeys" className="btn btn-secondary">
                Begin a Learning Journey
              </Link>
            </div>
            <p className="mt-10 font-display text-lg text-muted italic">{site.tagline}</p>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div aria-hidden="true" className="absolute inset-[8%] rounded-full bg-turmeric-soft/40 blur-3xl" />
            <IntegralMap domains={domains} variant="decorative" className="relative w-full" />
          </div>
        </div>
      </section>

      {/* What IT stands for */}
      <section aria-labelledby="it-title" className="relative overflow-hidden bg-forest text-white">
        <svg aria-hidden="true" viewBox="0 0 800 800" className="pointer-events-none absolute -top-64 -left-64 size-[50rem] text-white/[0.05]">
          <circle cx="400" cy="400" r="390" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="400" cy="400" r="280" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="400" cy="400" r="170" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <div className="container-page relative grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow text-turmeric-soft!">The meaning of IT</p>
            <h2 id="it-title" className="mt-4 text-4xl leading-[1.05] font-medium text-white sm:text-5xl">
              Two kinds of learning.
              <br />
              <span className="text-turmeric-soft italic">One name.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-white/80">
              In IT Vidya, &ldquo;IT&rdquo; stands for both <strong className="font-semibold text-white">Inner Transformation</strong>{" "}
              and <strong className="font-semibold text-white">Integral Thinking</strong>. <em>Vidyā</em> is the Sanskrit word for
              knowledge that illuminates. Together: the learning that changes how we see ourselves, and how we see the whole.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {[
              {
                word: ["Inner", "Transformation"],
                kicker: "Looking within",
                text: "The patient, practical work of seeing ourselves clearly — our needs, feelings, intentions and habits — so that our actions come more from understanding than from reaction.",
                href: "/domains/self",
                link: "Begin with the Self",
              },
              {
                word: ["Integral", "Thinking"],
                kicker: "Seeing the whole",
                text: "The habit of seeing a question from many sides — inner and outer, personal and collective, short and long term — and noticing how the parts connect.",
                href: "/knowledge/what-is-integral-thinking",
                link: "What is integral thinking?",
              },
            ].map((c, i) => (
              <article key={c.kicker} className="relative flex flex-col rounded-[1.5rem] bg-white/[0.07] p-7 ring-1 ring-white/15 backdrop-blur-sm">
                <span aria-hidden="true" className="absolute top-5 right-6 font-display text-6xl leading-none text-white/10">
                  {i === 0 ? "I" : "T"}
                </span>
                <p className="text-xs font-semibold tracking-[0.14em] text-turmeric-soft uppercase">{c.kicker}</p>
                <h3 className="mt-4 font-display text-3xl leading-tight text-white">
                  {c.word.map((w) => (
                    <span key={w} className="block">
                      <span className="text-turmeric-soft">{w[0]}</span>
                      {w.slice(1)}
                    </span>
                  ))}
                </h3>
                <p className="mt-4 flex-1 text-white/80">{c.text}</p>
                <Link href={c.href} className="mt-6 inline-flex items-center gap-1.5 font-semibold text-white no-underline hover:text-turmeric-soft">
                  {c.link} <ArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section aria-labelledby="why-title" className="border-y border-line-soft bg-card">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow">Why this matters</p>
            <h2 id="why-title" className="mt-3 text-3xl leading-tight font-medium sm:text-[2.5rem]">
              Most of life&rsquo;s important lessons are not taught anywhere.
            </h2>
          </div>
          <div className="prose-body lg:col-span-7">
            <p>
              We are taught subjects, but rarely how to understand ourselves — what we really want, why we react as we do,
              how to listen, how to build trust. We learn facts about nature and society, but rarely how they connect to
              one another and to our daily choices.
            </p>
            <p>
              <strong className="font-semibold text-ink">Inner transformation</strong> is the slow, practical work of seeing
              ourselves more clearly, so that our actions come a little more from understanding and a little less from habit
              or pressure. <strong className="font-semibold text-ink">Integral thinking</strong> is the habit of seeing a
              question from many sides — inner and outer, personal and collective — and noticing how the parts relate.
            </p>
            <p>
              Neither is a destination. Both are ways of learning that can make ordinary life steadier, kinder and more
              meaningful. IT Vidya exists to support that learning — openly, honestly and for everyone.
            </p>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-line-soft bg-line-soft sm:grid-cols-2 lg:col-span-12 lg:grid-cols-4">
            {everyday.map((e) => (
              <li key={e.title} className="bg-paper p-6">
                <h3 className="text-lg font-medium text-forest">{e.title}</h3>
                <p className="mt-2 text-[0.98rem] text-ink-soft">{e.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Eight learning worlds */}
      <section aria-labelledby="worlds-title" className="container-page py-20 lg:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="worlds-title"
            eyebrow="Eight learning worlds"
            title="Every part of life is a place to learn."
            intro="Eight interconnected domains, from the inner life of a single person to the shared life of communities. Begin anywhere — each one leads to the others."
          />
          <Link href="/explore" className="btn btn-secondary shrink-0 self-start md:self-auto">
            See how they connect
          </Link>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((d) => (
            <li key={d.slug}>
              <DomainCard domain={d} />
            </li>
          ))}
        </ul>
      </section>

      {/* Featured journeys */}
      <section aria-labelledby="journeys-title" className="bg-paper-deep/60 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            id="journeys-title"
            eyebrow="Learning journeys"
            title="Guided paths for steady, reflective learning."
            intro="Each journey has five steps, with readings, reflection prompts and practical exercises. Go at your own pace — alone, with a friend or with a study circle."
          />
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {journeys.map((j, i) => (
              <li key={j.slug}>
                <JourneyCard journey={j} index={i} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured knowledge */}
      <section aria-labelledby="knowledge-title" className="container-page py-20 lg:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="knowledge-title"
            eyebrow="Featured knowledge"
            title="Start with a good question."
            intro="Essays, primers and practices written in plain language. Each one shows clearly what is established evidence, what is interpretation and what is an open question."
          />
          <Link href="/explore#library" className="btn btn-secondary shrink-0 self-start md:self-auto">
            Browse the library
          </Link>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((r) => (
            <li key={r.slug}>
              <ResourceCard resource={r} />
            </li>
          ))}
        </ul>
      </section>

      {/* How we learn */}
      <section aria-labelledby="cycle-title" className="border-y border-line-soft bg-card py-20 lg:py-24">
        <div className="container-page">
          <SectionHeading
            id="cycle-title"
            eyebrow="How we learn"
            title="Understanding grows in cycles."
            intro="Reading alone rarely changes us. At IT Vidya, every resource invites a fuller movement — from exploration to understanding, reflection, application and sharing."
            align="center"
          />
          <div className="mt-14">
            <LearningCycle />
          </div>
        </div>
      </section>

      {/* Knowledge commons */}
      <section aria-labelledby="commons-title" className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="commons-title"
              eyebrow="A knowledge commons"
              title="Knowledge grows when it is shared with care."
              intro={
                <>
                  IT Vidya is designed as a commons: a shared resource that learners, educators and contributors enrich
                  together, guided by clear{" "}
                  <Link href="/principles" className="link-quiet text-forest">
                    principles
                  </Link>{" "}
                  of honesty, attribution and respect for different perspectives.
                </>
              }
            />
          </div>
          <ul className="grid gap-5 lg:col-span-7">
            {commonsRoles.map((r, i) => (
              <li key={r.title} className="card flex gap-5 p-6">
                <span aria-hidden="true" className="font-display text-3xl leading-none text-turmeric-ink">
                  {["i", "ii", "iii"][i]}
                </span>
                <div>
                  <h3 className="text-xl font-medium">{r.title}</h3>
                  <p className="mt-1.5 text-ink-soft">{r.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contribution invitation */}
      <section aria-labelledby="share-title" className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-forest px-6 py-16 text-center text-white sm:px-12 lg:py-20">
          <svg aria-hidden="true" viewBox="0 0 400 400" className="pointer-events-none absolute -top-24 -right-24 size-80 opacity-15">
            <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" />
            <circle cx="200" cy="200" r="130" fill="none" stroke="currentColor" />
            <circle cx="200" cy="200" r="70" fill="none" stroke="currentColor" />
          </svg>
          <p className="eyebrow text-turmeric-soft!">Contribute</p>
          <h2 id="share-title" className="mx-auto mt-3 max-w-2xl text-3xl leading-tight font-medium text-white sm:text-[2.75rem]">
            What have you learned that others could learn from?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
            Teachers, researchers, practitioners, elders, students — the commons grows through people who share what they
            know, carefully and generously.
          </p>
          <Link href="/contribute" className="btn mt-9 bg-white text-forest-deep hover:bg-turmeric-soft">
            Share What You Know <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
