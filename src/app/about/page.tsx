import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  WHY_EXISTS,
  PURPOSE,
  MEANS_FOR_INDIA,
  IDENTITY,
  FOUNDERS,
  FOUNDERS_INTRO,
  BOUNDARIES,
  VISION,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About BPI",
  description:
    "Why Bitcoin Policy India exists, what we believe, and what we're building: an independent, Bitcoin-only policy think tank working to enable positive, rational, forward-looking regulation for Bitcoin in India.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About BPI"
        title="Why BPI exists"
        intro="India doesn't yet have a trusted, rigorous, India-specific source that consistently translates Bitcoin policy in a serious way. We exist to be that source — with a clear point of view and disciplined independence."
      />

      {/* The gap we fill */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20" aria-label="The gap we fill">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <h2 className="font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            The gap we fill
          </h2>
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-ink-soft">{WHY_EXISTS.lead}</p>
            <ul className="mt-6 space-y-2.5">
              {WHY_EXISTS.gaps.map((g) => (
                <li key={g} className="flex gap-3 text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                  {g}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-display text-2xl font-medium leading-snug text-ink">
              {WHY_EXISTS.resolve}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-y border-line bg-cream-alt py-16 md:py-20" aria-label="Our mission">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <h2 className="font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Our mission
            </h2>
            <div className="md:col-span-2">
              <p className="font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
                {PURPOSE}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                Our approach is simple: earn policymakers&rsquo; trust through
                independence and rigor, and let our usefulness follow from that —
                never the other way around. That&rsquo;s what keeps us a credible
                voice rather than another interested party.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Bitcoin represents for India */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20" aria-label="What Bitcoin represents for India">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <h2 className="font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            What Bitcoin represents for India
          </h2>
          <p className="text-lg leading-relaxed text-ink-soft md:col-span-2 md:text-xl">
            {MEANS_FOR_INDIA.lead}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MEANS_FOR_INDIA.represents.map((r) => (
            <div key={r.title} className="rounded-2xl border border-line bg-card p-8">
              <h3 className="font-display text-xl font-semibold text-ink">
                {r.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who's behind BPI */}
      <section className="border-y border-line bg-cream-alt py-16 md:py-20" aria-label="Who's behind BPI">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Who&rsquo;s behind BPI
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">
            {FOUNDERS_INTRO}
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {FOUNDERS.map((f) => (
              <div key={f.name} className="rounded-2xl border border-line bg-card p-8">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {f.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold">{f.role}</p>
                <p className="mt-4 leading-relaxed text-ink-soft">{f.bio}</p>
                {f.link && (
                  <a
                    href={f.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-gold"
                  >
                    {f.linkLabel}
                    <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Identity */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20" aria-label="Our identity">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Our identity
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {IDENTITY.map((i) => (
            <div key={i.title} className="rounded-2xl border border-line bg-card p-8">
              <h3 className="font-display text-xl font-semibold text-ink">
                {i.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{i.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we won't do */}
      <section className="border-y border-line bg-cream-alt py-16 md:py-20" aria-label="What we won't do">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            What we won&rsquo;t do
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            Discipline protects credibility. In our work and writing, we
            don&rsquo;t:
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {BOUNDARIES.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-xl border border-line bg-card px-5 py-4 text-ink-soft"
              >
                <span className="mt-0.5 shrink-0 font-semibold text-gold" aria-hidden>✕</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Vision */}
      <section className="mx-auto max-w-7xl border-t border-line px-6 py-16 text-center md:px-10 md:py-24" aria-label="What we're building">
        <span className="text-sm font-semibold uppercase tracking-wider text-gold">
          Long-term ambition
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
          {VISION.headline}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {VISION.body}
        </p>
        <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {VISION.aims.map((a) => (
            <li
              key={a}
              className="rounded-2xl border border-line bg-card p-6 text-sm leading-relaxed text-ink-soft"
            >
              {a}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="mt-12 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 font-semibold text-cream transition-opacity hover:opacity-90"
        >
          Get in touch <span aria-hidden>&rarr;</span>
        </Link>
      </section>
    </>
  );
}
