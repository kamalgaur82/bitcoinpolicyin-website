import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { RESOURCES } from "@/lib/content";

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

      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
    </>
  );
}
