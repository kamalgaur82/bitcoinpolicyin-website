import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Bitcoin Policy India collaborates with universities, think tanks, community groups, and institutions across India.",
};

const CATEGORIES = ["Universities", "Think tanks", "Community groups", "Institutions"];

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partners"
        title="Who we work with"
        intro="We collaborate with institutions across India to raise the quality of the Bitcoin conversation. Collaborations are described in neutral terms and never imply endorsement."
      />

      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CATEGORIES.map((c) => (
            <div
              key={c}
              className="flex items-center justify-between rounded-xl border border-line bg-card px-6 py-5"
            >
              <span className="font-display text-lg font-medium text-ink">{c}</span>
              <span className="text-sm text-ink-faint">To be listed</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
