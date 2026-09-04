import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { PRESS, FOUNDERS, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press and media kit for Bitcoin Policy India — ready-to-quote descriptions, founder bios, naming guidance, and press contact.",
};

const LOGO_ASSETS = [
  { label: "Full logo — colour", svg: "bpi-full-color.svg", png: "bpi-full-color-h512.png" },
  { label: "Full logo — white (on dark)", svg: "bpi-full-white.svg", png: "bpi-full-white-h512.png" },
  { label: "Full logo — black (one-colour)", svg: "bpi-full-black.svg", png: "bpi-full-black-h512.png" },
  { label: "₿PI — colour", svg: "bpi-abbr-color.svg", png: "bpi-abbr-color-h512.png" },
  { label: "₿PI — white", svg: "bpi-abbr-white.svg", png: "bpi-abbr-white-h512.png" },
  { label: "₿PI — black", svg: "bpi-abbr-black.svg", png: "bpi-abbr-black-h512.png" },
  { label: "Mark — colour", svg: "bpi-mark-color.svg", png: "bpi-mark-color-1024.png" },
  { label: "Mark — white", svg: "bpi-mark-white.svg", png: "bpi-mark-white-1024.png" },
  { label: "Mark — black", svg: "bpi-mark-black.svg", png: "bpi-mark-black-1024.png" },
  { label: "Bitcoin ₿ glyph", svg: "bitcoin-b.svg", png: "bitcoin-b-1024.png" },
];

export default function PressPage() {
  return (
    <>
      <PageHeader
        eyebrow="Press"
        title="Press & media kit"
        intro="Everything you need to write about us — accurately. Descriptions are approved and ready to quote."
      />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20">
        {/* Descriptions */}
        <h2 className="font-display text-2xl font-semibold text-ink">
          How to describe BPI
        </h2>
        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-line bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
              One line
            </p>
            <p className="mt-2 leading-relaxed text-ink">{PRESS.oneLine}</p>
          </div>
          <div className="rounded-2xl border border-line bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
              One paragraph
            </p>
            <p className="mt-2 leading-relaxed text-ink">{PRESS.oneParagraph}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-ink-soft">{PRESS.naming}</p>

        {/* Founders */}
        <h2 className="mt-14 font-display text-2xl font-semibold text-ink">
          Founders
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {FOUNDERS.map((f) => (
            <div key={f.name} className="rounded-2xl border border-line bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-ink">
                {f.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-gold">{f.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.bio}</p>
            </div>
          ))}
        </div>

        {/* Logo downloads */}
        <h2 className="mt-14 font-display text-2xl font-semibold text-ink">
          Logo
        </h2>
        <p className="mt-2 text-sm text-ink-soft">
          Each is available as SVG (scalable, print-ready) and PNG. Full-colour
          is the default; use the white version on dark backgrounds, and the
          black version for one-colour print.
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {LOGO_ASSETS.map((a) => (
            <li
              key={a.svg}
              className="flex items-center justify-between gap-4 rounded-xl border border-line bg-card px-5 py-4"
            >
              <span className="text-sm font-medium text-ink">{a.label}</span>
              <span className="flex shrink-0 items-center gap-3 text-xs font-semibold uppercase tracking-wider">
                <a href={`/brand/${a.svg}`} download className="text-gold hover:text-ink">
                  SVG ↓
                </a>
                <a href={`/brand/${a.png}`} download className="text-gold hover:text-ink">
                  PNG ↓
                </a>
              </span>
            </li>
          ))}
        </ul>

        {/* Assets + contact */}
        <div className="mt-14 rounded-2xl border border-dashed border-line bg-cream-alt p-8 text-center">
          <h2 className="font-display text-xl font-semibold text-ink">
            Assets &amp; enquiries
          </h2>
          <p className="mx-auto mt-2 max-w-md text-ink-soft">{PRESS.logoNote}</p>
          <a
            href={`mailto:${SITE.email.press}`}
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 font-semibold text-cream transition-opacity hover:opacity-90"
          >
            {SITE.email.press}
          </a>
        </div>
      </section>
    </>
  );
}
