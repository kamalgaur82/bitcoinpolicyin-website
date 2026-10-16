"use client";

import { useState, type FormEvent } from "react";
import {
  WEB3FORMS_ENDPOINT,
  CONTACT_PURPOSES,
  contactKey,
  contactEnabled,
  type ContactPurpose,
} from "@/lib/forms";
import { SITE } from "@/lib/content";

const field =
  "w-full rounded-lg border border-line bg-card px-4 py-3 text-ink placeholder:text-ink-faint focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";
const labelCls = "mb-1.5 block text-sm font-medium text-ink";

function DirectEmails() {
  return (
    <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-ink">
      <a className="hover:text-gold-ink" href={`mailto:${SITE.email.contact}`}>{SITE.email.contact}</a>
      <a className="hover:text-gold-ink" href={`mailto:${SITE.email.partners}`}>{SITE.email.partners}</a>
      <a className="hover:text-gold-ink" href={`mailto:${SITE.email.press}`}>{SITE.email.press}</a>
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  if (!contactEnabled()) {
    return (
      <div className="rounded-2xl border border-dashed border-line bg-cream-alt p-8 text-center text-sm text-ink-faint">
        Our contact form is being connected. In the meantime, email us directly:
        <DirectEmails />
      </div>
    );
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("company_website")) return; // honeypot
    const purpose = (data.get("purpose") as ContactPurpose) || "general";
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: contactKey(purpose),
          subject: `BPI website — ${CONTACT_PURPOSES.find((p) => p.value === purpose)?.label ?? "Contact"}`,
          from_name: "Bitcoin Policy India website",
          name: data.get("name"),
          email: data.get("email"),
          organisation: data.get("organisation") || "—",
          purpose,
          message: data.get("message"),
          replyto: data.get("email"),
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
      if (res.ok && json.success !== false) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.message || "Something went wrong. Please try again, or email us directly.");
      }
    } catch {
      setStatus("error");
      setError("Couldn't reach the server. Please try again, or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-card p-8 text-center">
        <h2 className="font-display text-xl font-semibold text-ink">Thanks — your message is on its way.</h2>
        <p className="mt-2 text-ink-soft">We&rsquo;ll get back to you. For anything urgent, email {SITE.email.contact}.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 inline-flex items-center gap-1.5 font-semibold text-gold-ink hover:text-ink"
        >
          Send another message <span aria-hidden>&rarr;</span>
        </button>
      </div>
    );
  }

  const busy = status === "submitting";

  return (
    <form onSubmit={onSubmit} className="space-y-5" aria-label="Contact form">
      <div className="hidden" aria-hidden="true">
        <label>Leave this empty<input type="text" name="company_website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>Name</label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Email</label>
          <input id="email" name="email" type="email" required inputMode="email" placeholder="you@example.com" className={field} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="organisation" className={labelCls}>Organisation <span className="text-ink-faint">(optional)</span></label>
          <input id="organisation" name="organisation" type="text" placeholder="Company, body, or institution" className={field} />
        </div>
        <div>
          <label htmlFor="purpose" className={labelCls}>Purpose</label>
          <select id="purpose" name="purpose" defaultValue="general" className={field}>
            {CONTACT_PURPOSES.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>Message</label>
        <textarea id="message" name="message" required rows={6} placeholder="How can we help?" className={field} />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">{error}</p>
      )}

      <button
        type="submit"
        disabled={busy}
        className="inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3.5 font-semibold text-ink transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {busy ? "Sending…" : "Send message"}
      </button>

      <div className="pt-2 text-sm text-ink-faint">
        <p>Prefer to go straight to a desk?</p>
        <ul className="mt-2 space-y-1">
          <li>
            Partnerships —{" "}
            <a href={`mailto:${SITE.email.partners}`} className="font-medium text-ink hover:text-gold-ink">
              {SITE.email.partners}
            </a>
          </li>
          <li>
            Press —{" "}
            <a href={`mailto:${SITE.email.press}`} className="font-medium text-ink hover:text-gold-ink">
              {SITE.email.press}
            </a>
          </li>
          <li>
            Anything else — use the form above, or{" "}
            <a href={`mailto:${SITE.email.contact}`} className="font-medium text-ink hover:text-gold-ink">
              {SITE.email.contact}
            </a>
          </li>
        </ul>
      </div>
    </form>
  );
}
