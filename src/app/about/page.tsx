import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  WHY_EXISTS,
  PURPOSE,
  COMMITMENTS,
  WE_ARE,
  WE_ARE_NOT,
  IDENTITY,
  FOUNDERS,
  FOUNDERS_INTRO,
  RED_LINES,
  BOUNDARIES,
  STANDARD,
  VISION,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About BPI",
  description:
    "Why Bitcoin Policy India exists, what we believe, and what we're building: an independent, Bitcoin-only, public-interest policy think tank working to enable positive, rational, forward-looking regulation for Bitcoin in India.",
};

const DOES = [
  {
    title: "Research",
    items: [
      "Research papers and data-driven analyses",
      "Benchmark studies and comparative regulatory models",
      "Risk frameworks and consumer-protection analysis",
      "CBDCs vs Bitcoin — implications for India",
    ],
    note: "Rigorous but readable. Deep, but not dense.",
  },
  {
    title: "Education",
    items: [
      "Substack explainers and India-focused series",
      "Visual charts and data dashboards",
      "YouTube explainers",
      "University workshops and lectures",
    ],
    note: "Not marketing — building understanding.",
  },
  {
    title: "Policy",
    items: [
      "Consultation responses and sector-specific briefs",
      "Government and institutional workshops",
      "Risk models and assessment templates",
      "Draft structures for taxation and classification",
    ],
    note: "Constructive, evidence-based, India-first.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About BPI"
        title="Why BPI exists"
        intro="India doesn't yet have a trusted, rigorous, India-specific source that consistently translates Bitcoin policy in a serious way. We exist to be that source — with a clear point of view and disciplined independence."
      />

      {/* Why we exist */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20" aria-label="Why we exist">
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

      {/* Purpose + principle + commitments */}
      <section className="border-y border-line bg-cream-alt py-16 md:py-20" aria-label="Purpose">
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

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {COMMITMENTS.map((c) => (
              <div key={c.title} className="rounded-2xl border border-line bg-card p-6">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we are / are not */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20" aria-label="What we are and are not">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              What we are
            </h2>
            <ul className="mt-6 space-y-3">
              {WE_ARE.map((w) => (
                <li key={w} className="flex gap-3 text-ink-soft">
                  <span className="mt-1 shrink-0 font-semibold text-gold" aria-hidden>✓</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              What we are not
            </h2>
            <ul className="mt-6 space-y-3">
              {WE_ARE_NOT.map((w) => (
                <li key={w} className="flex gap-3 text-ink-soft">
                  <span className="mt-1 shrink-0 font-semibold text-ink-faint" aria-hidden>✕</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who's behind BPI */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20" aria-label="Who's behind BPI">
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
      </section>

      {/* Identity */}
      <section className="border-y border-line bg-cream-alt py-16 md:py-20" aria-label="Our identity">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
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
        </div>
      </section>

      {/* How we work */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20" aria-label="How we work">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          How we work
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {DOES.map((d) => (
            <div key={d.title}>
              <h3 className="font-display text-xl font-semibold text-ink">
                {d.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {d.items.map((it) => (
                  <li key={it} className="flex gap-2 text-ink-soft">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden />
                    {it}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium text-ink-faint">{d.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Red lines */}
      <section className="border-y border-line bg-cream-alt py-16 md:py-20" aria-label="Our red lines">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Our red lines
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            We assume we may one day be judged by hostile interpreters, not
            sympathetic ones. So we hold hard lines.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {RED_LINES.map((r) => (
              <li
                key={r}
                className="flex items-start gap-3 rounded-xl border border-line bg-card px-5 py-4 text-ink"
              >
                <span className="mt-0.5 shrink-0 font-semibold text-gold" aria-hidden>—</span>
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm font-medium uppercase tracking-wider text-ink-faint">
            In our writing, we also don&rsquo;t
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {BOUNDARIES.map((b) => (
              <li
                key={b}
                className="rounded-full border border-line bg-card px-4 py-2 text-sm text-ink-soft"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The standard */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20" aria-label="The bar we hold">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          The bar every output must clear
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STANDARD.map((s) => (
            <div key={s.title} className="rounded-2xl border border-line bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="border-t border-line bg-cream-alt py-16 text-center md:py-24" aria-label="What we're building">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
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
        </div>
      </section>
    </>
  );
}
