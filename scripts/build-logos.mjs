// Regenerates the BPI logo asset set in public/brand from the official
// Bitcoin ₿ letterform. Run from the v-next dir: `node scripts/build-logos.mjs`
// Deps (devDependencies): @resvg/resvg-js, @expo-google-fonts/archivo.
import { createRequire } from "module";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const V = process.cwd();
const require = createRequire(V + "/package.json");
const { Resvg } = require("@resvg/resvg-js");
const OUT = join(V, "public", "brand");
mkdirSync(OUT, { recursive: true });

const font700 = join(V, "node_modules/@expo-google-fonts/archivo/700Bold/Archivo_700Bold.ttf");
const font400 = join(V, "node_modules/@expo-google-fonts/archivo/400Regular/Archivo_400Regular.ttf");

// Official Bitcoin ₿ letterform (white path from the public-domain Bitcoin logo).
const BTC = {
  d: "m46.103,27.444c0.637-4.258-2.605-6.547-7.038-8.074l1.438-5.768-3.511-0.875-1.4,5.616c-0.923-0.23-1.871-0.447-2.813-0.662l1.41-5.653-3.509-0.875-1.439,5.766c-0.764-0.174-1.514-0.346-2.242-0.527l0.004-0.018-4.842-1.209-0.934,3.75s2.605,0.597,2.55,0.634c1.422,0.355,1.679,1.296,1.636,2.042l-1.638,6.571c0.098,0.025,0.225,0.061,0.365,0.117-0.117-0.029-0.242-0.061-0.371-0.092l-2.296,9.205c-0.174,0.432-0.615,1.08-1.609,0.834,0.035,0.051-2.552-0.637-2.552-0.637l-1.743,4.019,4.569,1.139c0.85,0.213,1.683,0.436,2.503,0.646l-1.453,5.834,3.507,0.875,1.439-5.772c0.958,0.26,1.888,0.5,2.798,0.726l-1.434,5.745,3.511,0.875,1.453-5.823c5.987,1.133,10.489,0.676,12.384-4.739,1.527-4.36-0.076-6.875-3.226-8.515,2.294-0.529,4.022-2.038,4.483-5.155zm-8.022,11.249c-1.085,4.36-8.426,2.003-10.806,1.412l1.928-7.729c2.38,0.594,10.012,1.77,8.878,6.317zm1.086-11.312c-0.99,3.966-7.1,1.951-9.082,1.457l1.748-7.01c1.982,0.494,8.365,1.416,7.334,5.553z",
  x: 15.57, y: 11.15, w: 30.61, h: 40.52,
};
const ANGLE = 13.7; // official ₿ tilt; counter-rotate to upright
const GCX = BTC.x + BTC.w / 2, GCY = BTC.y + BTC.h / 2;
const btc = (cx, cy, h, fill) => {
  const s = h / BTC.h;
  return `<g transform="translate(${cx} ${cy}) scale(${s.toFixed(4)}) rotate(${-ANGLE}) translate(${(-GCX).toFixed(3)} ${(-GCY).toFixed(3)})"><path d="${BTC.d}" fill="${fill}"/></g>`;
};
const btcW = (h) => (BTC.w * h) / BTC.h;
const tribar = (x, y, totalW, h, c) => {
  const gap = totalW * 0.07, seg = (totalW - 2 * gap) / 3, r = h / 2;
  return (
    `<rect x="${x}" y="${y}" width="${seg}" height="${h}" rx="${r}" fill="${c[0]}"/>` +
    `<rect x="${x + seg + gap}" y="${y}" width="${seg}" height="${h}" fill="${c[1]}"/>` +
    `<rect x="${x + 2 * (seg + gap)}" y="${y}" width="${seg}" height="${h}" rx="${r}" fill="${c[2]}"/>`
  );
};
const TREAT = {
  color: { btc: "#f5a524", tri: ["#ff9933", "#ffffff", "#16a34a"], text: "#14161b", tile: true },
  black: { btc: "#111318", tri: ["#111318", "#111318", "#111318"], text: "#111318", tile: false },
  white: { btc: "#ffffff", tri: ["#ffffff", "#ffffff", "#ffffff"], text: "#ffffff", tile: false },
};
const svgOpen = (w, h) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">`;
const txt = (x, y, fs, fill, s) =>
  `<text x="${x}" y="${y}" font-family="Archivo" font-weight="700" font-size="${fs}" letter-spacing="-0.6" fill="${fill}">${s}</text>`;

function mark(t) {
  const T = TREAT[t];
  let s = svgOpen(44, 44);
  if (T.tile) {
    s += `<rect x="0.5" y="0.5" width="43" height="43" rx="11" fill="#14161b" stroke="#2a2e35"/>`;
    s += btc(22, 18, 24, T.btc);
    s += tribar(11.5, 33, 21, 2.8, T.tri);
  } else {
    s += btc(22, 19, 30, T.btc);
    s += tribar(10.5, 37, 23, 2.8, T.tri);
  }
  return s + `</svg>`;
}
function abbr(t) {
  const T = TREAT[t];
  const bh = 27, bw = btcW(bh), cx = 2 + bw / 2, cy = 20.5, tx = 2 + bw + 5, w = tx + 40;
  let s = svgOpen(Math.round(w), 44);
  s += btc(cx, cy, bh, T.btc);
  s += tribar(2, 35.5, bw, 2.4, T.tri);
  s += txt(tx, 31, 30, T.text, "PI");
  return s + `</svg>`;
}
function full(t) {
  const T = TREAT[t];
  const bh = 27, bw = btcW(bh), cx = 2 + bw / 2, cy = 20.5, tx = 2 + bw + 2.5, w = tx + 245;
  let s = svgOpen(Math.round(w), 44);
  s += btc(cx, cy, bh, T.btc);
  s += tribar(2, 35.5, bw, 2.4, T.tri);
  s += txt(tx, 31, 30, T.text, "itcoin Policy India");
  return s + `</svg>`;
}

const build = { mark, abbr, full };
const png = (svg, mode, value) =>
  new Resvg(svg, {
    fitTo: { mode, value },
    font: { fontFiles: [font700, font400], defaultFontFamily: "Archivo", loadSystemFonts: false },
    background: "rgba(0,0,0,0)",
  }).render().asPng();

for (const cfg of ["mark", "abbr", "full"]) {
  for (const t of ["color", "black", "white"]) {
    const svg = build[cfg](t), base = `bpi-${cfg}-${t}`;
    writeFileSync(join(OUT, base + ".svg"), svg + "\n");
    if (cfg === "mark") {
      writeFileSync(join(OUT, base + "-512.png"), png(svg, "width", 512));
      writeFileSync(join(OUT, base + "-1024.png"), png(svg, "width", 1024));
    } else {
      writeFileSync(join(OUT, base + "-h256.png"), png(svg, "height", 256));
      writeFileSync(join(OUT, base + "-h512.png"), png(svg, "height", 512));
    }
  }
}
// base ₿ glyph — upright, on a 44×44 canvas with padding. SVG uses
// currentColor (recolour in code); PNGs are rendered in Bitcoin gold.
const glyphSvg = (fill) => svgOpen(44, 44) + btc(22, 22, 32, fill) + `</svg>`;
writeFileSync(join(OUT, "bitcoin-b.svg"), glyphSvg("currentColor") + "\n");
writeFileSync(join(OUT, "bitcoin-b-512.png"), png(glyphSvg("#f5a524"), "width", 512));
writeFileSync(join(OUT, "bitcoin-b-1024.png"), png(glyphSvg("#f5a524"), "width", 1024));
console.log("logo assets written to", OUT);
