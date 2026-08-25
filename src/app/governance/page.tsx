import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Legal & Governance",
  description:
    "Bitcoin Policy India's governing documents: mission charter, organisational blueprint, funding policy, code of conduct, conflict-of-interest policy, and transparency reports.",
};

const DOCUMENTS = [
  { title: "Mission Charter", note: "Our purpose, mandate, and standards of independence." },
  { title: "Organisational Physics", note: "How the organisation is structured and how it operates." },
  { title: "Funding Policy", note: "Sources of funding and the safeguards on our independence." },
  { title: "Code of Conduct", note: "Standards of behaviour expected of everyone at BPI." },
  { title: "Conflict-of-Interest Policy", note: "How we identify and manage conflicts." },
  { title: "Entity & Registration", note: "Our legal entity and registration details." },
  { title: "Transparency Reports", note: "Periodic reporting on activity and funding." },
];

export default function GovernancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal & Governance"
        title="How we are governed"
        intro="Our credibility rests on being independent and transparent. These documents set out our mandate, structure, and safeguards."
      />

      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-20">
        <ul className="divide-y divide-line border-y border-line">
          {DOCUMENTS.map((d) => (
            <li key={d.title} className="flex items-center justify-between gap-4 py-6">
              <div>
                <h2 className="font-display text-xl font-semibold text-ink">
                  {d.title}
                </h2>
                <p className="mt-1 text-sm text-ink-soft">{d.note}</p>
              </div>
              <span className="shrink-0 text-sm text-ink-faint">Coming soon</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-faint">
          The Charter is currently in draft (v1.7). Documents will be published
          here as they are finalised.
        </p>
      </section>
    </>
  );
}
