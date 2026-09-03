import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

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
          backgroundColor: "#0e0f12",
          color: "#f5f5f3",
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
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 54,
              }}
            >
              <div style={{ position: "absolute", left: 13, top: 0, width: 4, height: 54, backgroundColor: "#f5a524" }} />
              <div style={{ position: "absolute", left: 20, top: 0, width: 4, height: 54, backgroundColor: "#f5a524" }} />
              <div
                style={{
                  fontFamily: "Archivo",
                  fontSize: 48,
                  fontWeight: 700,
                  color: "#f5a524",
                  lineHeight: 1,
                  marginTop: 1,
                }}
              >
                B
              </div>
            </div>
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
              color: "#f5a524",
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
          <div style={{ fontSize: 27, fontWeight: 400, color: "#b7bbc2" }}>
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
