import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SupportForm from "@/components/SupportForm";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Stand with Bitcoin Policy India. Add your name to a growing community of people who want better, India-first Bitcoin policy.",
};

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Stand with BPI"
        intro="We're building a community of people who want better, India-first Bitcoin policy. Add your name to join us — and to hear from us as our work goes out."
      />

      <section className="mx-auto max-w-xl px-6 py-16 md:px-10 md:py-20">
        <SupportForm />
      </section>
    </>
  );
}
