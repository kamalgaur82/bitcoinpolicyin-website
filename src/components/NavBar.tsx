"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/content";
import Wordmark from "@/components/Wordmark";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-line">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10"
        aria-label="Primary"
      >
        <Wordmark textClassName="text-base sm:text-lg" />

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/newsletter"
            className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-cream transition-opacity hover:opacity-85"
          >
            Newsletter
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-cream lg:hidden">
          <div className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-3 text-base font-medium text-ink-soft hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/newsletter"
              className="mt-3 rounded-lg bg-gold px-5 py-3 text-center text-base font-semibold text-cream"
              onClick={() => setOpen(false)}
            >
              Newsletter
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
