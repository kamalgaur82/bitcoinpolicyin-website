import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { RESEARCH_PAPERS, RESEARCH_THEMES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Deep, rigorous, evidence-based research on Bitcoin — for India. Featured papers and research themes across economics, energy, consumer protection, technology, and regulation.",
};

const PHILOSOPHY = [
  "Explain without agenda",
  "Benchmark globally",
  "Contextualise for India",
  "Communicate clearly",
  "Update as facts evolve",
];

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Deep, rigorous, evidence-based research on Bitcoin — for India."
        intro="Our evidence base: original papers, data, and analysis. This is the raw material behind everything we take to policymakers and everything we translate for the public."
      />

      {/* Featured work */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20" aria-label="Featured work">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Featured work
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESEARCH_PAPERS.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl border border-line bg-card p-8"
            >
              <h3 className="font-display text-xl font-semibold leading-snug text-ink">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {p.summary}
              </p>
              <p className="mt-6 text-xs uppercase tracking-wider text-ink-faint">
                {p.status}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-faint">
          Full documents are published here as each is finalised. For a draft or
          a briefing, <a href="/contact" className="text-gold hover:text-ink">get in touch</a>.
        </p>
      </section>

      {/* Research themes */}
      <section className="border-y border-line bg-cream-alt py-16 md:py-20" aria-label="Research themes">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Research themes
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RESEARCH_THEMES.map((t) => (
              <div key={t.title} className="rounded-2xl border border-line bg-card p-8">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {t.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20" aria-label="Research philosophy">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Research philosophy
        </h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {PHILOSOPHY.map((p) => (
            <li
              key={p}
              className="rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium text-ink-soft"
            >
              {p}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
