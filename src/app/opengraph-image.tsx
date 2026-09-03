import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { BTC_D } from "@/lib/bitcoin-mark";

// Upright gold ₿ as a standalone SVG, embedded as an <img> (Satori can't
// render the ₿ from a font — the glyph isn't in the available subsets).
const btcSvg =
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 56">` +
  `<g transform="translate(21 28) scale(1.229) rotate(-13.7) translate(-30.875 -31.41)">` +
  `<path d="${BTC_D}" fill="#f5a524"/></g></svg>`;
const btcImg = "data:image/svg+xml;utf8," + encodeURIComponent(btcSvg);

export const dynamic = "force-static";
export const alt =
  "Bitcoin Policy India — rational, India-first policy for Bitcoin.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontDir = "node_modules/@fontsource/archivo/files";
const archivo700 = readFileSync(
  join(process.cwd(), fontDir, "archivo-latin-700-normal.woff")
);
const archivo400 = readFileSync(
  join(process.cwd(), fontDir, "archivo-latin-400-normal.woff")
);

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#f7f4ee",
          color: "#1c1b18",
          fontFamily: "Archivo",
        }}
      >
        {/* Brand lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 7,
              width: 96,
              height: 96,
              borderRadius: 24,
              backgroundColor: "#14161b",
              border: "1px solid #2a2e35",
            }}
          >
            { /* eslint-disable-next-line @next/next/no-img-element */ }
            <img src={btcImg} width={42} height={56} alt="" />
            <div style={{ display: "flex", gap: 4 }}>
              <div style={{ width: 15, height: 5, borderRadius: 3, backgroundColor: "#ff9933" }} />
              <div style={{ width: 15, height: 5, backgroundColor: "#ffffff" }} />
              <div style={{ width: 15, height: 5, borderRadius: 3, backgroundColor: "#16a34a" }} />
            </div>
          </div>
          <div style={{ fontSize: 38, fontWeight: 700, letterSpacing: -1 }}>
            Bitcoin Policy India
          </div>
        </div>

        {/* Message */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 5,
              color: "#a66a00",
            }}
          >
            CLARITY. RIGOR. INDEPENDENCE.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 66,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            Rational, India-first policy for Bitcoin.
          </div>
          <div style={{ fontSize: 27, fontWeight: 400, color: "#55514b" }}>
            An independent, Bitcoin-only policy think tank.
          </div>
        </div>

        {/* Tricolor base */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            display: "flex",
            width: "100%",
            height: 10,
          }}
        >
          <div style={{ flex: 1, backgroundColor: "#ff9933" }} />
          <div style={{ flex: 1, backgroundColor: "#ffffff" }} />
          <div style={{ flex: 1, backgroundColor: "#16a34a" }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: archivo700, weight: 700, style: "normal" },
        { name: "Archivo", data: archivo400, weight: 400, style: "normal" },
      ],
    }
  );
}
