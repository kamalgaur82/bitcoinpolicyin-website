import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Short-form analysis, explainers, and op-eds from Bitcoin Policy India — clear, India-first commentary on Bitcoin policy.",
};

const TOPICS = [
  "Why Bitcoin is not “crypto” — and why it matters for policy",
  "The 30% tax and 1% TDS: what the data now shows",
  "Self-custody as a right, not a loophole",
  "Bitcoin mining and India's stranded energy",
  "CBDCs and Bitcoin: complements, not substitutes",
];

export default function WritingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Clear, India-first commentary on Bitcoin policy."
        intro="Short-form analysis, explainers, and op-eds — the same rigor as our research, written to be read. This is where our thinking shows up between papers."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-line bg-cream-alt p-8 text-center">
          <p className="text-lg text-ink">
            Our writing channel is launching soon.
          </p>
          <p className="mx-auto mt-3 max-w-lg text-ink-soft">
            We&rsquo;ll publish op-eds and analysis here and on Substack. Add your
            support to hear when the first pieces go out.
          </p>
          <Link
            href="/support"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 font-semibold text-cream transition-opacity hover:opacity-90"
          >
            Add your support <span aria-hidden>&rarr;</span>
          </Link>
        </div>

        <h2 className="mt-16 font-display text-2xl font-semibold text-ink">
          What we&rsquo;ll be writing on
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {TOPICS.map((t) => (
            <li
              key={t}
              className="rounded-xl border border-line bg-card px-6 py-4 text-ink-soft"
            >
              {t}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
