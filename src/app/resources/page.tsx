import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { RESOURCES, REFERENCES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Downloads, dashboards, and data from Bitcoin Policy India: research PDFs, policy briefs, infographics, data dashboards, media kit, and the annual report.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Downloads, dashboards, and data"
        intro="A central repository for everything we publish — organised so researchers, journalists, and policymakers can find what they need."
      />

      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20" aria-label="Our library">
        <h2 className="font-display text-2xl font-semibold text-ink">Our library</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {RESOURCES.map((r) => (
            <div
              key={r}
              className="flex items-center justify-between rounded-xl border border-line bg-card px-6 py-5"
            >
              <span className="font-display text-lg font-medium text-ink">{r}</span>
              <span className="text-sm text-ink-faint">Coming soon</span>
            </div>
          ))}
        </div>
      </section>

      {/* References we build on */}
      <section className="border-t border-line bg-cream-alt py-16 md:py-20" aria-label="References we build on">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <h2 className="font-display text-2xl font-semibold text-ink">
            References we build on
          </h2>
          <p className="mt-3 text-ink-soft">
            Independent, third-party research that informs our work. These are
            not BPI publications.
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
        </div>
      </section>
    </>
  );
}
