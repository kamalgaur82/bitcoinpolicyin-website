import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "One clear, evidence-based Bitcoin insight every week. No hype. No noise. Subscribe to the Bitcoin Policy India newsletter.",
};

export default function NewsletterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Newsletter"
        title="One clear Bitcoin insight each week."
        intro="No hype. No noise. Evidence-based analysis, written to be understood."
      />

      <section className="mx-auto max-w-xl px-6 py-16 md:px-10 md:py-20">
        {/* Non-functional until a provider (e.g. Substack) is connected. */}
        <form
          className="flex flex-col gap-3 sm:flex-row"
          aria-label="Newsletter signup (coming soon)"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            inputMode="email"
            placeholder="you@example.com"
            disabled
            className="flex-1 rounded-lg border border-line bg-card px-5 py-3.5 text-ink placeholder:text-ink-faint disabled:opacity-70"
          />
          <button
            type="button"
            disabled
            className="rounded-lg bg-gold px-7 py-3.5 font-semibold text-cream disabled:opacity-60"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-sm text-ink-faint">
          Signup opens once our newsletter provider is connected.
        </p>
      </section>
    </>
  );
}
