import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { FELLOWSHIP } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fellowship",
  description:
    "The BPI Fellowship develops India's next generation of Bitcoin policy thinkers — a 12-week program in research, policy reasoning, public education, and institutional thinking.",
};

const WHO = [
  "clarity",
  "rigor",
  "public-interest thinking",
  "Indian policy",
  "serious Bitcoin research",
];

export default function FellowshipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fellowship"
        title="Developing India's next generation of Bitcoin policy thinkers."
        intro="A 12-week program that trains fellows in research, policy reasoning, public education, and institutional thinking. Serious work. High standards."
      />

      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
        {/* What fellows do */}
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          What fellows do
        </h2>
        <p className="mt-3 text-ink-soft">Each fellow completes:</p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {FELLOWSHIP.deliverables.map((d) => (
            <li
              key={d}
              className="flex items-center gap-3 rounded-xl border border-line bg-card px-5 py-4 text-ink"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden />
              {d}
            </li>
          ))}
        </ul>

        {/* Who should apply */}
        <h2 className="mt-16 font-display text-3xl font-semibold text-ink md:text-4xl">
          Who should apply
        </h2>
        <p className="mt-3 text-ink-soft">People who care about:</p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {WHO.map((w) => (
            <li
              key={w}
              className="rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium text-ink-soft"
            >
              {w}
            </li>
          ))}
        </ul>

        {/* Values */}
        <h2 className="mt-16 font-display text-3xl font-semibold text-ink md:text-4xl">
          Fellowship values
        </h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {FELLOWSHIP.values.map((v) => (
            <li
              key={v}
              className="rounded-full bg-gold-tint px-5 py-2.5 text-sm font-semibold text-ink"
            >
              {v}
            </li>
          ))}
        </ul>

        {/* Apply */}
        <div className="mt-16 rounded-2xl border border-line bg-cream-alt p-8 text-center md:p-12">
          <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
            Apply now
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-ink-soft">
            Applications include a writing sample, an intent statement, your
            academic or employment details, and availability. The application
            form will open here for the next cohort.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 font-semibold text-cream transition-opacity hover:opacity-90"
          >
            Register your interest <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
