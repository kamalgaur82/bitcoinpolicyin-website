import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Legal & Governance",
  description:
    "Bitcoin Policy India's governing documents: mission and mandate, and entity details.",
};

const DOCUMENTS = [
  {
    title: "Mission & mandate",
    note: "Our purpose and standards of independence — set out on our About page. The full Mission Charter is being finalised.",
    status: "Published in brief",
    href: "/about",
  },
  {
    title: "Entity & registration",
    note: "Our legal entity and registration details.",
    status: "Coming soon",
  },
];

export default function GovernancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal & Governance"
        title="How we are governed"
        intro="Our credibility rests on being independent and transparent. These documents set out our mandate, structure, and safeguards."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <ul className="divide-y divide-line border-y border-line">
          {DOCUMENTS.map((d) => (
            <li key={d.title} className="flex items-center justify-between gap-4 py-6">
              <div>
                <h2 className="font-display text-xl font-semibold text-ink">
                  {d.href ? (
                    <Link href={d.href} className="transition-colors hover:text-gold">
                      {d.title}
                    </Link>
                  ) : (
                    d.title
                  )}
                </h2>
                <p className="mt-1 text-sm text-ink-soft">{d.note}</p>
              </div>
              <span className="shrink-0 text-sm text-ink-faint">{d.status}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-faint">
          The full Mission Charter is currently in draft (v1.7). Documents will
          be published here as they are finalised.
        </p>
      </section>
    </>
  );
}
