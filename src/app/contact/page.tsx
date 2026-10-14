import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bitcoin Policy India — general enquiries, partnerships, and press.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="Simple, serious, clean. Send us a note and it reaches the right desk — or email us directly."
      />

      <section className="mx-auto max-w-2xl px-6 py-16 md:px-10 md:py-20">
        <ContactForm />
      </section>
    </>
  );
}
