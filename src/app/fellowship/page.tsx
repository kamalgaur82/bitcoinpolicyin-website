import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { FELLOWSHIP } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fellowship",
  description:
    "The BPI Fellowship develops India's next generation of Bitcoin policy thinkers — a 12-week program in research, policy reasoning, public education, and institutional conduct.",
};

export default function FellowshipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fellowship"
        title="Developing India's next generation of Bitcoin policy thinkers."
        intro="A 12-week program that trains fellows to research, write, and engage with clarity and rigor. This is not a crypto or Web3 fellowship — it's a Bitcoin policy fellowship, grounded in research and India's public interest."
      />

      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
        {/* Tiers */}
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Three tiers
        </h2>
        <p className="mt-3 text-ink-soft">{FELLOWSHIP.commitment}</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FELLOWSHIP.tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-line bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-ink">
                {t.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-gold">{t.commitment}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {t.detail}
              </p>
            </div>
          ))}
        </div>

        {/* 12-week cycle */}
        <h2 className="mt-16 font-display text-3xl font-semibold text-ink md:text-4xl">
          The 12-week cycle
        </h2>
        <ol className="mt-8 space-y-3">
          {FELLOWSHIP.cycle.map((c) => (
            <li
              key={c.weeks}
              className="flex flex-col gap-1 rounded-xl border border-line bg-card px-5 py-4 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <span className="w-28 shrink-0 font-display text-base font-semibold text-gold">
                {c.weeks}
              </span>
              <span className="text-ink-soft">{c.focus}</span>
            </li>
          ))}
        </ol>

        {/* Deliverables */}
        <h2 className="mt-16 font-display text-3xl font-semibold text-ink md:text-4xl">
          What every fellow produces
        </h2>
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

        {/* Curriculum */}
        <h2 className="mt-16 font-display text-3xl font-semibold text-ink md:text-4xl">
          What the fellowship teaches
        </h2>
        <ol className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {FELLOWSHIP.curriculum.map((m, idx) => (
            <li
              key={m}
              className="flex items-center gap-4 rounded-xl border border-line bg-card px-5 py-4"
            >
              <span className="font-display text-xl font-semibold text-gold">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="text-ink">{m}</span>
            </li>
          ))}
        </ol>

        {/* Selection */}
        <h2 className="mt-16 font-display text-3xl font-semibold text-ink md:text-4xl">
          How we select
        </h2>
        <p className="mt-3 text-ink-soft">
          Skill can be trained; temperament and integrity can&rsquo;t. We look for:
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {FELLOWSHIP.selection.map((s) => (
            <li
              key={s}
              className="rounded-full bg-gold-tint px-5 py-2.5 text-sm font-semibold text-ink"
            >
              {s}
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
