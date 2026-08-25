import Link from "next/link";

// Interim text wordmark for "Bitcoin Policy India".
// Replaces the old logo PNG (which read "Bitcoin Policy Institute India")
// until a rebranded mark is designed. Palette-agnostic: uses design tokens
// (ink + gold) so it follows whatever final colour palette is chosen.
export default function Wordmark({
  className = "",
  textClassName = "text-lg",
}: {
  className?: string;
  textClassName?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Bitcoin Policy India — home"
      className={`group flex items-center gap-2.5 ${className}`}
    >
      <span
        className="flex aspect-square h-9 items-center justify-center rounded-lg bg-gold font-display text-xl font-bold text-cream"
        aria-hidden
      >
        ₿
      </span>
      <span
        className={`font-display font-semibold leading-tight text-ink ${textClassName}`}
      >
        Bitcoin Policy India
      </span>
    </Link>
  );
}
