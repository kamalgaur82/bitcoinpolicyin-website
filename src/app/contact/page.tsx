import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bitcoin Policy India — general enquiries, partnerships, and press.",
};

const CHANNELS = [
  { label: "General", email: SITE.email.contact },
  { label: "Partnerships", email: SITE.email.partners },
  { label: "Press", email: SITE.email.press },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="Simple, serious, clean. Reach the right team directly, or send us a note."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {CHANNELS.map((c) => (
            <div key={c.label} className="rounded-2xl border border-line bg-card p-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-faint">
                {c.label}
              </h2>
              <a
                href={`mailto:${c.email}`}
                className="mt-3 block font-display text-lg font-medium text-ink transition-colors hover:text-gold"
              >
                {c.email}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-line bg-cream-alt p-8 text-center text-sm text-ink-faint">
          A contact form (name · organisation · purpose · message) will be wired
          up here once the backend is connected.
        </div>
      </section>
    </>
  );
}
