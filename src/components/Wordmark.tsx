import Link from "next/link";
import { BTC_D } from "@/lib/bitcoin-mark";

// BPI wordmark: the official Bitcoin ₿ (upright) as the "B" in Bitcoin, over a
// thin saffron-white-green bar, followed by "itcoin Policy India" in Archivo.
// The ₿ is gold; the text takes the surrounding ink colour (currentColor).
export default function Wordmark({
  className = "",
  svgClass = "h-8 w-auto",
}: {
  className?: string;
  svgClass?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Bitcoin Policy India — home"
      className={`group inline-flex items-center text-ink ${className}`}
    >
      <svg viewBox="0 0 270 44" className={svgClass} role="img" aria-hidden="true">
        <g transform="translate(12.2 20.5) scale(0.6663) rotate(-13.7) translate(-30.875 -31.41)">
          <path d={BTC_D} fill="#f5a524" />
        </g>
        <rect x="2" y="35.5" width="5.848" height="2.4" rx="1.2" fill="#ff9933" />
        <rect x="9.276" y="35.5" width="5.848" height="2.4" fill="#ffffff" />
        <rect x="16.552" y="35.5" width="5.848" height="2.4" rx="1.2" fill="#16a34a" />
        <text
          x="24.9"
          y="31"
          className="font-display"
          fontWeight="700"
          fontSize="30"
          letterSpacing="-0.6"
          fill="currentColor"
        >
          itcoin Policy India
        </text>
      </svg>
    </Link>
  );
}
