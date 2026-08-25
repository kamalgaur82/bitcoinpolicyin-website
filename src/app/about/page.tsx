import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { IDENTITY, APPROACH } from "@/lib/content";

export const metadata: Metadata = {
  title: "About BPI",
  description:
    "Why Bitcoin Policy India exists: to advance India's understanding of Bitcoin through high-quality research, public education, and evidence-based policy frameworks — independent, neutral, and Bitcoin-only.",
};

const DOES = [
  {
    title: "Research",
    items: [
      "research papers",
      "data-driven analyses",
      "benchmark studies",
      "risk frameworks",
      "comparative regulatory models",
    ],
  },
  {
    title: "Policy",
    items: [
      "policy briefs",
      "consultation responses",
      "frameworks",
      "ministry workshops",
    ],
    note: "All neutral. All evidence-based.",
  },
  {
    title: "Education",
    items: [
      "Substack explainers",
      "data visualisations",
      "workshops",
      "university lectures",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About BPI"
        title="Why BPI exists"
        intro="India's conversations around Bitcoin are often shaped by noise — hype cycles, misinformation, trading culture, and confusing narratives. BPI exists to change that."
      />

      {/* Mission */}
      <section className="border-b border-line" aria-label="Mission">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">
            Our mission
          </span>
          <p className="mt-4 font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
            To advance India&rsquo;s understanding of Bitcoin through
            high-quality research, public education, and evidence-based policy
            frameworks — independent, neutral, and Bitcoin-only.
          </p>
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

      {/* What we do (expanded) */}
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
                {d.note && (
                  <p className="mt-3 text-sm font-medium text-ink-faint">{d.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20" aria-label="Our approach">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Our approach
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {APPROACH.map((a) => (
            <li
              key={a}
              className="flex items-center gap-3 rounded-xl border border-line bg-card px-5 py-4 text-lg text-ink"
            >
              <span className="font-display text-2xl text-gold" aria-hidden>
                &ldquo;
              </span>
              {a}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
