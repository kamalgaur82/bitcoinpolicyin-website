import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { RESEARCH_PAPERS, RESEARCH_THEMES, REFERENCES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Research and frameworks from Bitcoin Policy India — including a functional taxonomy and regulator mapping for digital assets, a VDA accounting framework, and the Sovereign Mining work.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="The research and frameworks behind our policy positions."
        intro="A small body of specific, India-first work — the evidence base we take to policymakers and translate for the public."
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
          a briefing,{" "}
          <a href="/contact" className="text-gold hover:text-ink">
            get in touch
          </a>
          .
        </p>
      </section>

      {/* Themes */}
      <section className="border-y border-line bg-cream-alt py-16 md:py-20" aria-label="Research themes">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            What we work on
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

      {/* References */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20" aria-label="References we build on">
        <h2 className="font-display text-2xl font-semibold text-ink">
          References we build on
        </h2>
        <p className="mt-3 text-ink-soft">
          Independent, third-party research that informs our work. These are not
          BPI publications.
        </p>
        <ul className="mt-8 space-y-4">
          {REFERENCES.map((r) => (
            <li key={r.title} className="rounded-2xl border border-line bg-card p-6">
              <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                {r.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-gold">
                {r.author} · {r.year}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{r.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
