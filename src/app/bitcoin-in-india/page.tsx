import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { EXPLAINER } from "@/lib/content";

export const metadata: Metadata = {
  title: "Bitcoin in India",
  description:
    "Straight, plain-language answers about Bitcoin in India: is it legal, how it's taxed, whether it's the same as 'crypto', the RBI's stance, and self-custody — no hype, no jargon.",
};

export default function BitcoinInIndiaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bitcoin in India"
        title="Bitcoin, explained for India."
        intro={EXPLAINER.intro}
      />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20" aria-label="Common questions">
        <div className="divide-y divide-line border-y border-line">
          {EXPLAINER.qas.map((qa) => (
            <div key={qa.q} className="py-8">
              <h2 className="font-display text-xl font-semibold text-ink md:text-2xl">
                {qa.q}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{qa.a}</p>
              {qa.source && (
                <p className="mt-3 text-xs uppercase tracking-wider text-ink-faint">
                  {qa.source}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/policy"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 font-semibold text-cream transition-opacity hover:opacity-85"
          >
            Our policy positions <span aria-hidden>&rarr;</span>
          </Link>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 rounded-lg border border-ink/20 px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-card"
          >
            Add your support
          </Link>
        </div>
      </section>
    </>
  );
}
