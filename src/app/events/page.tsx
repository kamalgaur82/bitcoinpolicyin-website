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

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20" aria-label="Recent events">
        <h2 className="font-display text-2xl font-semibold text-ink">Recent</h2>
        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {EVENTS_PAST.map((e) => (
            <li key={e.name} className="rounded-2xl border border-line bg-card p-8">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {e.name}
                </h3>
                <span className="mt-1 shrink-0 whitespace-nowrap text-sm text-ink-faint">
                  {e.date}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-gold">{e.host}</p>
              <p className="mt-3 leading-relaxed text-ink-soft">{e.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
