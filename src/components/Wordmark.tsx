import Link from "next/link";

// BPI wordmark: a dark tile with a gold ₿ over a thin tricolor
// (saffron-white-green) bar, beside the name in Archivo (--font-display).
// The tricolor is a stylised national accent — not the flag, and no chakra.
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
      <svg
        viewBox="0 0 44 44"
        className="h-9 w-9 shrink-0"
        role="img"
        aria-hidden="true"
      >
        <rect
          x="0.5"
          y="0.5"
          width="43"
          height="43"
          rx="11"
          fill="#14161b"
          stroke="#2a2e35"
        />
        <text
          x="22"
          y="26"
          textAnchor="middle"
          className="font-display"
          fontSize="21"
          fontWeight="700"
          fill="#f5a524"
        >
          {"₿"}
        </text>
        <rect x="11" y="33" width="7" height="2.8" rx="1.4" fill="#ff9933" />
        <rect x="18.5" y="33" width="7" height="2.8" fill="#ffffff" />
        <rect x="26" y="33" width="7" height="2.8" rx="1.4" fill="#16a34a" />
      </svg>
      <span
        className={`font-display font-semibold leading-tight text-ink ${textClassName}`}
      >
        Bitcoin Policy India
      </span>
    </Link>
  );
}
