import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Stand with Bitcoin Policy India. Add your name to a growing community of people who want sound, India-first Bitcoin policy.",
};

const ROLES = [
  "Citizen / individual",
  "Researcher / academic",
  "Industry / builder",
  "Policy / government",
  "Student",
  "Other",
];

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Stand with BPI"
        intro="We're building a community of people who want sound, India-first Bitcoin policy. Add your name to join us — and to hear from us as our work goes out."
      />

      <section className="mx-auto max-w-xl px-6 py-16 md:px-10 md:py-20">
        {/* Non-functional until a backend / form provider is connected. */}
        <form className="space-y-5" aria-label="Support signup (coming soon)">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              disabled
              className="w-full rounded-lg border border-line bg-card px-5 py-3 text-ink placeholder:text-ink-faint disabled:opacity-70"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              type="email"
              inputMode="email"
              placeholder="you@example.com"
              disabled
              className="w-full rounded-lg border border-line bg-card px-5 py-3 text-ink placeholder:text-ink-faint disabled:opacity-70"
            />
          </div>

          <div>
            <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-ink">
              I&rsquo;m a…
            </label>
            <select
              id="role"
              disabled
              defaultValue=""
              className="w-full rounded-lg border border-line bg-card px-5 py-3 text-ink disabled:opacity-70"
            >
              <option value="" disabled>
                Select one
              </option>
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <label className="flex items-start gap-3 text-sm text-ink-soft">
            <input type="checkbox" disabled className="mt-1 disabled:opacity-70" />
            Keep me posted on major milestones. (No weekly emails, no spam.)
          </label>

          <button
            type="button"
            disabled
            className="w-full rounded-lg bg-gold px-7 py-3.5 font-semibold text-cream disabled:opacity-60"
          >
            Add my support
          </button>
        </form>

        <p className="mt-5 text-sm text-ink-faint">
          Sign-ups open once our form is connected. We&rsquo;ll only use your
          details to keep you posted on major milestones — and we&rsquo;ll never
          share them.
        </p>
      </section>
    </>
  );
}
