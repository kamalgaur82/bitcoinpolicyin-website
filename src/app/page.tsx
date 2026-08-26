import Link from "next/link";
import {
  WHY_EXISTS,
  MEANS_FOR_INDIA,
  BELIEFS,
  PRIORITY_LAYERS,
  PILLARS,
  FEATURED_WORK,
  VISION,
  PURPOSE,
} from "@/lib/content";

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
            Sound, India-first policy for Bitcoin.
          </h1>
          <p
            className="anim-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            We&rsquo;re an independent, Bitcoin-only policy think tank working to
            enable positive, rational, and forward-looking regulation for
            Bitcoin in India — for its citizens, its institutions, and the state.
          </p>
          <div
            className="anim-fade-up mt-9 flex flex-wrap gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/policy"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 font-semibold text-cream transition-opacity hover:opacity-85"
            >
              Read our work <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-ink/20 px-7 py-3.5 font-semibold text-ink transition-colors hover:bg-card"
            >
              What we stand for
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
            <ul className="mt-6 space-y-2.5">
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

      {/* ------------------------------------ What Bitcoin represents for India */}
      <section
        className="border-t border-line"
        aria-label="What Bitcoin represents for India"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <h2 className="font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              What Bitcoin represents for India
            </h2>
            <p className="text-lg leading-relaxed text-ink-soft md:col-span-2 md:text-xl">
              {MEANS_FOR_INDIA.lead}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MEANS_FOR_INDIA.represents.map((r) => (
              <div key={r.title} className="rounded-2xl border border-line bg-card p-8">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- What we believe */}
      <section
        className="border-y border-line bg-cream-alt py-20 md:py-24"
        aria-label="What we believe"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              What we believe
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              A clear point of view, grounded in evidence — not ideology.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {BELIEFS.map((b) => (
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

      {/* --------------------------------------------------------- Where we focus */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24" aria-label="Where we focus">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Where we focus
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Six priorities, in three layers — so our work protects citizens,
            removes barriers, and builds foundations, rather than pushing a
            single issue.
          </p>
        </div>
        <div className="mt-12 space-y-10">
          {PRIORITY_LAYERS.map((layer) => (
            <div key={layer.layer} className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="md:col-span-1">
                <h3 className="font-display text-xl font-semibold text-gold">
                  {layer.layer}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{layer.blurb}</p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:col-span-3">
                {layer.items.map((it) => (
                  <div key={it.title} className="rounded-2xl border border-line bg-card p-6">
                    <h4 className="font-display text-base font-semibold text-ink">
                      {it.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {it.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------ How we work */}
      <section
        className="border-y border-line bg-cream-alt py-20 md:py-24"
        aria-label="How we work"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              How we work
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Three engines, each feeding the next: research becomes education,
              education informs policy, policy raises new research questions.
            </p>
          </div>
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
          <Link href="/policy" className="shrink-0 font-semibold text-gold hover:text-ink">
            Explore our work &rarr;
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {FEATURED_WORK.map((title) => (
            <Link
              key={title}
              href="/policy"
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
        <div className="mx-auto max-w-7xl px-6 text-center md:px-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">
            Our purpose
          </span>
          <p className="mx-auto mt-4 max-w-3xl font-display text-2xl font-medium leading-snug text-ink md:text-3xl">
            {PURPOSE}
          </p>
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
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

      {/* ----------------------------------------------------------------- Support */}
      <section className="border-t border-line bg-cream-alt" aria-label="Support the mission">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-10">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Stand with sound Bitcoin policy for India.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-ink-soft">
            Add your name to a growing community of people who want sound,
            India-first Bitcoin policy — and be among the first to hear as our
            work goes out.
          </p>
          <Link
            href="/support"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 font-semibold text-cream transition-opacity hover:opacity-90"
          >
            Add your support <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
