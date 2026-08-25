import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Workshops, talks, panels, and roundtables from Bitcoin Policy India.",
};

const TYPES = ["Workshops", "Talks", "Panels", "Roundtables"];

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Workshops, talks, panels & roundtables"
        intro="Where we convene serious, non-hyped conversations about Bitcoin and India. Upcoming and past events will be listed here."
      />

      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
        <ul className="flex flex-wrap gap-3">
          {TYPES.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line bg-card px-5 py-2.5 text-sm font-medium text-ink-soft"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-2xl border border-dashed border-line bg-cream-alt p-8 text-center text-sm text-ink-faint">
          No events are scheduled yet. Check back soon, or add your support to
          hear when we do.
        </div>
      </section>
    </>
  );
}
