import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { POLICY_BRIEFS, POLICY_PRINCIPLES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Policy",
  description:
    "Neutral, evidence-based frameworks for policymakers: policy briefs, consultation responses, government workshops, and the principles that guide our work.",
};

const WORKSHOPS = [
  "GNLU",
  "academic institutions",
  "policy roundtables",
  "state innovation cells",
];

export default function PolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Policy"
        title="Neutral, evidence-based frameworks for policymakers."
      />

      {/* Policy briefs */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20" aria-label="Policy briefs">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Policy briefs
        </h2>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {POLICY_BRIEFS.map((b) => (
            <li key={b} className="flex items-center justify-between py-5">
              <span className="font-display text-lg font-medium text-ink">{b}</span>
              <span className="text-sm text-ink-faint">In preparation</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink-faint">
          Each brief is published with a PDF, a plain-language summary, and the
          data used.
        </p>
      </section>

      {/* Government workshops */}
      <section className="border-y border-line bg-cream-alt py-16 md:py-20" aria-label="Government workshops">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Government &amp; institutional workshops
          </h2>
          <p className="mt-3 text-ink-soft">
            Sessions delivered with institutions and policy bodies across India.
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
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20" aria-label="Policy principles">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Policy principles
        </h2>
        <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
    </>
  );
}
