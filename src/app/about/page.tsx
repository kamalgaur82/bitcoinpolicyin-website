import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  WHY_EXISTS,
  COMMITMENTS,
  IDENTITY,
  BOUNDARIES,
  STANDARD,
  VISION,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About BPI",
  description:
    "Why Bitcoin Policy India exists, what we believe, and what we're building: an independent, Bitcoin-only, India-first research, education, and policy company advancing India's understanding of Bitcoin.",
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
    title: "Public Education",
    items: [
      "Substack explainers and India-focused series",
      "Visual charts and data dashboards",
      "YouTube explainers",
      "University workshops and lectures",
    ],
    note: "Not marketing — national capacity building.",
  },
  {
    title: "Policy Frameworks",
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
        intro="India's conversations around Bitcoin are often shaped by noise — hype cycles, misinformation, trading culture, and confusing narratives. Bitcoin Policy India exists to change that."
      />

      {/* Why we exist */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20" aria-label="Why we exist">
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
      </section>

      {/* Mission + commitments */}
      <section className="border-y border-line bg-cream-alt py-16 md:py-20" aria-label="Mission">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">
            Our mission
          </span>
          <p className="mt-4 font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
            To advance India&rsquo;s understanding of Bitcoin through
            high-quality research, public education, and evidence-based policy
            frameworks — independent, neutral, and Bitcoin-only.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            We don&rsquo;t advocate for special treatment. We advocate for good
            understanding — because good understanding leads to good policy.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
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

      {/* Identity */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20" aria-label="Our identity">
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

      {/* What we do */}
      <section className="border-y border-line bg-cream-alt py-16 md:py-20" aria-label="What we do">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            What we do
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
        </div>
      </section>

      {/* Boundaries */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20" aria-label="What we don't do">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          What we don&rsquo;t do
        </h2>
        <p className="mt-4 text-lg text-ink-soft">
          Boundaries protect credibility. These are non-negotiable — we
          don&rsquo;t:
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {BOUNDARIES.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 rounded-xl border border-line bg-card px-5 py-4 text-ink-soft"
            >
              <span className="mt-0.5 shrink-0 font-semibold text-gold" aria-hidden>
                ✕
              </span>
              {b}
            </li>
          ))}
        </ul>
      </section>

      {/* The standard */}
      <section className="border-y border-line bg-cream-alt py-16 md:py-20" aria-label="The bar we hold">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
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
        </div>
      </section>

      {/* Vision */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center md:px-10 md:py-24" aria-label="What we're building">
        <span className="text-sm font-semibold uppercase tracking-wider text-gold">
          Long-term vision
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
          Work with us <span aria-hidden>&rarr;</span>
        </Link>
      </section>
    </>
  );
}
