import type { Metadata } from "next";
import { Playfair_Display, Public_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://www.bitcoinpolicy.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bitcoin Policy India — Clarity. Rigor. Independence.",
    template: "%s · Bitcoin Policy India",
  },
  description:
    "Evidence-based Bitcoin research and policy for India. An independent, Bitcoin-only, India-first company producing clear, evidence-based insights through research, education, and policy analysis.",
  keywords: [
    "Bitcoin policy India",
    "Bitcoin research India",
    "Bitcoin education India",
    "digital asset policy",
    "CBDC vs Bitcoin",
    "Bitcoin taxation India",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Bitcoin Policy India",
    title: "Bitcoin Policy India — Clarity. Rigor. Independence.",
    description:
      "Evidence-based Bitcoin research and policy for India — independent and Bitcoin-only.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Policy India",
    description:
      "Evidence-based Bitcoin research and policy for India — independent and Bitcoin-only.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${publicSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
