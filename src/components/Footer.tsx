import Link from "next/link";
import { NAV_LINKS, FOOTER_LINKS, SITE } from "@/lib/content";
import Wordmark from "@/components/Wordmark";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream-alt">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="max-w-sm md:col-span-2">
            <Wordmark textClassName="text-xl" />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              An independent, Bitcoin-only policy think tank working to enable
              positive, rational regulation for Bitcoin in India.
              Bitcoin-only. India-first. Independent.
            </p>
            <p className="mt-4 text-sm text-ink-soft">
              <a
                href={`mailto:${SITE.email.contact}`}
                className="transition-colors hover:text-ink"
              >
                {SITE.email.contact}
              </a>
            </p>
          </div>

          <nav aria-label="Explore" className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
              Explore
            </span>
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <nav aria-label="More" className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-faint">
              More
            </span>
            {FOOTER_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-faint md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Bitcoin Policy India. All rights
            reserved.
          </span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-ink">
              Privacy
            </Link>
            <span>Bitcoin-only · India-first · Independent &amp; non-partisan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
