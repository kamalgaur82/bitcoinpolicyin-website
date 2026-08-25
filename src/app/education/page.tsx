import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { EDUCATION_ARTICLES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Making Bitcoin understandable for India: Substack explainers, visual explainers, YouTube education, and workshops — simple, accurate, and non-hyped.",
};

const FORMATS = [
  {
    title: "Visual explainers",
    body: "Charts, diagrams, and fact sheets that make complex ideas legible.",
  },
  {
    title: "YouTube explainers",
    body: "Short, calm, educational — the opposite of hype.",
  },
  {
    title: "Workshops",
    body: "Undergraduate, MBA/policy, government training, and open public sessions.",
  },
];

export default function EducationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Making Bitcoin understandable for India."
      />

      {/* Articles */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20" aria-label="Articles">
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Explainers
        </h2>
        <p className="mt-3 text-ink-soft">Simple, accurate, and non-hyped.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {EDUCATION_ARTICLES.map((a) => (
            <article
              key={a}
              className="rounded-2xl border border-line bg-card p-8"
            >
              <h3 className="font-display text-xl font-semibold text-ink">
                &ldquo;{a}&rdquo;
              </h3>
              <p className="mt-4 text-sm font-medium text-ink-faint">
                Coming soon
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Formats */}
      <section className="border-t border-line bg-cream-alt py-16 md:py-20" aria-label="Formats">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {FORMATS.map((f) => (
              <div key={f.title} className="rounded-2xl border border-line bg-card p-8">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
