import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { EVENTS_PAST } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Talks, consultations, and roundtables from Bitcoin Policy India — including the GNLU stakeholder consultation and Bitplebs Goa.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Talks, consultations & roundtables"
        intro="Where we convene serious, non-hyped conversations about Bitcoin and India."
      />

      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20" aria-label="Recent events">
        <h2 className="font-display text-2xl font-semibold text-ink">Recent</h2>
        <ul className="mt-8 space-y-6">
          {EVENTS_PAST.map((e) => (
            <li key={e.name} className="rounded-2xl border border-line bg-card p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {e.name}
                </h3>
                <span className="text-sm text-ink-faint">{e.date}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-gold">{e.host}</p>
              <p className="mt-3 leading-relaxed text-ink-soft">{e.detail}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-2xl border border-dashed border-line bg-cream-alt p-6 text-center text-sm text-ink-faint">
          No upcoming events are scheduled yet. Add your support to hear when we
          announce the next one.
        </div>
      </section>
    </>
  );
}
