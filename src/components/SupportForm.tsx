"use client";

import { useState, type FormEvent } from "react";
import { WEB3FORMS_ENDPOINT, WEB3FORMS_KEYS, SUPPORT_ROLES, supportEnabled } from "@/lib/forms";

const field =
  "w-full rounded-lg border border-line bg-card px-4 py-3 text-ink placeholder:text-ink-faint focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";
const labelCls = "mb-1.5 block text-sm font-medium text-ink";

export default function SupportForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  // Coming-soon state until a Web3Forms key is configured.
  if (!supportEnabled()) {
    return (
      <>
        <form className="space-y-5 opacity-70" aria-label="Support signup (coming soon)">
          <div>
            <label htmlFor="s-name" className={labelCls}>Name</label>
            <input id="s-name" type="text" placeholder="Your name" disabled className={field} />
          </div>
          <div>
            <label htmlFor="s-email" className={labelCls}>Email</label>
            <input id="s-email" type="email" placeholder="you@example.com" disabled className={field} />
          </div>
          <button type="button" disabled className="w-full rounded-lg bg-gold px-7 py-3.5 font-semibold text-ink opacity-60">
            Add my support
          </button>
        </form>
        <p className="mt-5 text-sm text-ink-faint">
          Sign-ups open shortly, once our form is connected. We&rsquo;ll only use your details to keep
          you posted on major milestones — and we&rsquo;ll never share them.
        </p>
      </>
    );
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("company_website")) return; // honeypot
    const role = data.get("role");
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEYS.support,
          subject: `BPI website - Support - ${role || "Other"}`,
          from_name: "Bitcoin Policy India website",
          name: data.get("name"),
          email: data.get("email"),
          role,
          keep_me_posted: data.get("updates") ? "Yes" : "No",
          replyto: data.get("email"),
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
      if (res.ok && json.success !== false) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Couldn't reach the server. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-card p-8 text-center">
        <h2 className="font-display text-xl font-semibold text-ink">You&rsquo;re in — thank you.</h2>
        <p className="mt-2 text-ink-soft">We&rsquo;ll keep you posted as our work goes out. No spam.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 inline-flex items-center gap-1.5 font-semibold text-gold-ink hover:text-ink"
        >
          Add another <span aria-hidden>&rarr;</span>
        </button>
      </div>
    );
  }

  const busy = status === "submitting";

  return (
    <form onSubmit={onSubmit} className="space-y-5" aria-label="Support sign-up">
      <div className="hidden" aria-hidden="true">
        <label>Leave this empty<input type="text" name="company_website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div>
        <label htmlFor="name" className={labelCls}>Name</label>
        <input id="name" name="name" type="text" required placeholder="Your name" className={field} />
      </div>

      <div>
        <label htmlFor="email" className={labelCls}>Email</label>
        <input id="email" name="email" type="email" required inputMode="email" placeholder="you@example.com" className={field} />
      </div>

      <div>
        <label htmlFor="role" className={labelCls}>I&rsquo;m a…</label>
        <select id="role" name="role" defaultValue="" required className={field}>
          <option value="" disabled>Select one</option>
          {SUPPORT_ROLES.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-soft">
        <input type="checkbox" name="updates" defaultChecked className="mt-1 accent-gold" />
        Keep me posted on major milestones. (No weekly emails, no spam.)
      </label>

      {status === "error" && <p role="alert" className="text-sm text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-lg bg-gold px-7 py-3.5 font-semibold text-ink transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {busy ? "Adding…" : "Add my support"}
      </button>

      <p className="text-sm text-ink-faint">
        We&rsquo;ll only use your details to keep you posted on major milestones — and we&rsquo;ll never share them.
      </p>
    </form>
  );
}
