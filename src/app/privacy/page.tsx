import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Bitcoin Policy India handles personal data on this website — what we collect, how we use it, and the choices you have.",
};

const LAST_UPDATED = "September 2026";

const SECTIONS: { heading: string; body: string[] }[] = [
  {
    heading: "Who we are",
    body: [
      `Bitcoin Policy India (“BPI”, “we”) publishes this website at ${SITE.domain}. This notice explains what personal data we collect here, how we use it, and the choices you have. It doesn't cover third-party websites we link to.`,
    ],
  },
  {
    heading: "What we collect",
    body: [
      "Today this is a largely static site. We don't run advertising, and we don't use third-party tracking or profiling.",
      "When you choose to contact us or add your support, we collect only what you submit — such as your name, email address, the role you select, and any message — so that we can respond and, if you opt in, keep you posted on our work.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "To reply to your enquiry, to send the occasional update you've asked for, and to understand interest in our work. We do not sell or rent your details.",
      "We share personal data only with service providers who help us operate the site and our mailing (for example, an email provider), under appropriate safeguards — never for their own marketing.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      `You can unsubscribe from updates at any time. You can also ask us to access, correct, or delete the personal data we hold about you — just email ${SITE.email.contact}. We respond in line with applicable Indian data-protection law.`,
    ],
  },
  {
    heading: "Cookies",
    body: [
      "We use only what's necessary for the site to function. We don't set advertising or non-essential tracking cookies. If that ever changes, we'll update this page and seek your consent where it's required.",
    ],
  },
  {
    heading: "Retention & security",
    body: [
      "We keep personal data only as long as we need it for the purpose you gave it, and then delete it. We take reasonable measures to keep it secure.",
    ],
  },
  {
    heading: "Changes to this notice",
    body: [
      "We may update this notice as our work and our tools evolve. When we do, we'll revise the date below.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `Questions or requests about your data: ${SITE.email.contact}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy"
        intro="How we handle personal data on this website. We keep it minimal, and we don't sell it."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="max-w-3xl">
          <div className="rounded-2xl border border-dashed border-line bg-cream-alt p-5 text-sm text-ink-soft">
            <span className="font-semibold text-ink">Initial version.</span> This
            notice reflects how the site works today and will be finalised as we
            enable sign-ups and forms.
          </div>

          <div className="mt-10 space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-xl font-semibold text-ink md:text-2xl">
                  {s.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {s.body.map((p) => (
                    <p key={p} className="leading-relaxed text-ink-soft">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 border-t border-line pt-6 text-sm text-ink-faint">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>
    </>
  );
}
