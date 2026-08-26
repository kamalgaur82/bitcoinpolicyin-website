import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RESEARCH_PAPERS } from "@/lib/content";
import PageHeader from "@/components/PageHeader";

const WORKS = RESEARCH_PAPERS.filter((w) => w.slug);

export function generateStaticParams() {
  return WORKS.map((w) => ({ slug: w.slug as string }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = WORKS.find((w) => w.slug === slug);
  if (!work) return {};
  return { title: work.title, description: work.summary };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = WORKS.find((w) => w.slug === slug);
  if (!work) notFound();

  return (
    <>
      <PageHeader eyebrow="Our work" title={work.title} intro={work.summary} />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20">
        {work.audience && (
          <p className="text-sm font-medium leading-relaxed text-gold">
            {work.audience}
          </p>
        )}
        <p className="mt-2 text-xs uppercase tracking-wider text-ink-faint">
          {work.status}
        </p>

        <div className="mt-10 space-y-12">
          {work.sections?.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-2xl font-semibold text-ink">
                {s.heading}
              </h2>
              <ul className="mt-4 space-y-3">
                {s.points.map((pt) => (
                  <li key={pt} className="flex gap-3 leading-relaxed text-ink-soft">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      aria-hidden
                    />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Request the full document */}
        <div className="mt-14 rounded-2xl border border-line bg-cream-alt p-8 text-center">
          <h2 className="font-display text-xl font-semibold text-ink">
            Want the full document?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-ink-soft">
            We share the complete brief directly with the institutions it&rsquo;s
            for. To request it, get in touch.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 font-semibold text-cream transition-opacity hover:opacity-90"
          >
            Request the document <span aria-hidden>&rarr;</span>
          </Link>
        </div>

        <div className="mt-10">
          <Link
            href="/policy"
            className="inline-flex items-center gap-2 font-semibold text-ink hover:text-gold"
          >
            <span aria-hidden>&larr;</span> All our work
          </Link>
        </div>
      </section>
    </>
  );
}
