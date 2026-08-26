import type { Metadata } from "next";
import {
  INDIA_FACTS,
  RESEARCH_PAPERS,
  POLICY_PRINCIPLES,
  REFERENCES,
} from "@/lib/content";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Policy",
  description:
    "Bitcoin Policy India's positions and the work behind them — sourced facts on India's Bitcoin policy, our research and frameworks, and the principles that guide our engagement with government.",
};

const WORKSHOPS = [
  "GNLU stakeholder consultation",
  "Academic institutions",
  "Policy roundtables",
  "State innovation cells",
];

export default function PolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Policy"
        title="Independent, evidence-based positions for policymakers."
        intro="What we stand for, and the work behind it. We engage government directly with rigorous analysis — never as a lobbying ask, and never for private interests."
      />

      {/* The problem, in numbers */}
      <section className="border-b border-line" aria-label="The problem, in numbers">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            The problem, in numbers
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            A few facts that frame why India&rsquo;s Bitcoin policy matters. Every
            figure is sourced.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {INDIA_FACTS.map((f) => (
              <div key={f.stat} className="rounded-2xl border border-line bg-card p-8">
                <div className="font-display text-3xl font-semibold text-gold">
                  {f.stat}
                </div>
                <p className="mt-3 leading-relaxed text-ink-soft">{f.label}</p>
                <p className="mt-4 text-xs uppercase tracking-wider text-ink-faint">
                  {f.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our work */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20" aria-label="Our work">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Our work
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          A small body of specific, India-first work that backs our positions.
        </p>
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
          We share drafts and briefings directly with the institutions they&rsquo;re
          for. For one,{" "}
          <a href="/contact" className="text-gold hover:text-ink">
            get in touch
          </a>
          .
        </p>
      </section>

      {/* Engagement */}
      <section className="border-y border-line bg-cream-alt py-16 md:py-20" aria-label="Where we engage">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Where we engage
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            We work with serious institutions and policy bodies across India —
            through consultations, roundtables, and direct discussion.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {WORKSHOPS.map((w) => (
              <li
                key={w}
                className="rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium text-ink-soft"
              >
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Policy principles */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20" aria-label="Policy principles">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          The principles that guide us
        </h2>
        <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {POLICY_PRINCIPLES.map((p, idx) => (
            <li
              key={p}
              className="flex items-center gap-4 rounded-xl border border-line bg-card px-5 py-4"
            >
              <span className="font-display text-2xl font-semibold text-gold">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="text-lg text-ink">{p}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* References */}
      <section className="border-t border-line bg-cream-alt py-16 md:py-20" aria-label="References we build on">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="font-display text-2xl font-semibold text-ink">
            References we build on
          </h2>
          <p className="mt-3 text-ink-soft">
            Independent, third-party research that informs our work. These are not
            BPI publications.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
        </div>
      </section>
    </>
  );
}
