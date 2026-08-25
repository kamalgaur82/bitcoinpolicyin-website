import Link from "next/link";
import {
  PILLARS,
  FEATURED_WORK,
  WHY_EXISTS,
  BITCOIN_IS,
  VISION,
} from "@/lib/content";

const WHO_WE_ARE = [
  "Bitcoin-only",
  "India-first",
  "Neutral & non-partisan",
  "Evidence-driven",
  "Independent",
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="border-b border-line" aria-label="Introduction">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="anim-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Clarity. Rigor. Independence.
          </p>
          <h1 className="anim-fade-up mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.1] text-ink md:text-6xl">
            Evidence-based Bitcoin research and policy for India.
          </h1>
          <p
            className="anim-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            We produce clear, neutral, India-first insights on Bitcoin — through
            research, education, and policy frameworks designed for a rapidly
            changing world.
          </p>
          <div
            className="anim-fade-up mt-9 flex flex-wrap gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/research"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 font-semibold text-cream transition-opacity hover:opacity-85"
            >
              Read our work <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 rounded-lg border border-ink/20 px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-card"
            >
              Join the newsletter
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- Why we exist */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24" aria-label="Why we exist">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <h2 className="font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Why we exist
          </h2>
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-ink-soft">{WHY_EXISTS.lead}</p>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              But public understanding of Bitcoin in India hasn&rsquo;t kept pace
              with its relevance:
            </p>
            <ul className="mt-5 space-y-2.5">
              {WHY_EXISTS.gaps.map((g) => (
                <li key={g} className="flex gap-3 text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                  {g}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-display text-xl font-medium text-ink md:text-2xl">
              {WHY_EXISTS.resolve}
            </p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- What Bitcoin is */}
      <section
        className="border-y border-line bg-cream-alt py-20 md:py-24"
        aria-label="What Bitcoin is to us"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              What Bitcoin is to us
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              We treat Bitcoin as a serious subject — not a trade, a meme, or a
              tribe. Five lenses shape our work.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BITCOIN_IS.map((b) => (
              <div key={b.title} className="rounded-2xl border border-line bg-card p-8">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {b.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Who we are */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24" aria-label="Who we are">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <h2 className="font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Who we are
          </h2>
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-ink-soft">
              Bitcoin Policy India (BPI) is an independent research, education,
              and policy company dedicated to helping India understand Bitcoin
              with clarity and seriousness.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {WHO_WE_ARE.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line bg-card px-4 py-2 text-sm font-medium text-ink-soft"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <p className="mt-8 font-display text-xl font-medium text-ink md:text-2xl">
              Our mission is simple: make India&rsquo;s Bitcoin conversations
              more informed.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-gold hover:text-ink"
            >
              Read our charter &amp; mission <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ What We Do */}
      <section
        className="border-y border-line bg-cream-alt py-20 md:py-24"
        aria-label="What we do"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            What we do
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-line bg-card p-8"
              >
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------- Our Work */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24" aria-label="Our work">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Our work
          </h2>
          <Link href="/research" className="shrink-0 font-semibold text-gold hover:text-ink">
            Explore research &rarr;
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {FEATURED_WORK.map((title) => (
            <Link
              key={title}
              href="/research"
              className="group flex items-start justify-between gap-4 rounded-2xl border border-line bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <h3 className="font-display text-xl font-semibold text-ink">
                {title}
              </h3>
              <span
                className="mt-1 shrink-0 text-gold transition-transform group-hover:translate-x-1"
                aria-hidden
              >
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------ What we're building */}
      <section className="border-t border-line bg-cream-alt py-20 md:py-24" aria-label="What we're building">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            {VISION.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {VISION.body}
          </p>
          <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {VISION.aims.map((a) => (
              <li
                key={a}
                className="rounded-2xl border border-line bg-card p-6 text-sm leading-relaxed text-ink-soft"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* -------------------------------------------------------------- Fellowship */}
      <section className="border-t border-line py-20 md:py-24" aria-label="Fellowship">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              The BPI Fellowship
            </h2>
            <p className="mt-3 text-lg text-ink-soft">
              A program for India&rsquo;s next generation of Bitcoin policy
              thinkers. 12-week cycles. Serious work. High standards.
            </p>
          </div>
          <Link
            href="/fellowship"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-gold px-7 py-3.5 font-semibold text-cream transition-opacity hover:opacity-85"
          >
            Learn more <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>

      {/* --------------------------------------------------------------- Newsletter */}
      <section className="border-t border-line bg-cream-alt" aria-label="Newsletter">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-10">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            One clear, evidence-based Bitcoin insight every week.
          </h2>
          <p className="mt-3 text-lg text-ink-soft">No hype. No noise.</p>
          <Link
            href="/newsletter"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 font-semibold text-cream transition-opacity hover:opacity-90"
          >
            Subscribe <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
