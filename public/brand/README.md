# Bitcoin Policy India — logo assets

Built from the official **Bitcoin ₿ letterform** (`bitcoin-b.svg`, from the
public-domain Bitcoin logo), stood upright and paired with a thin
saffron–white–green bar. The tricolor is a stylised national accent — not the
flag, and no Ashoka Chakra.

Regenerate with `node scripts/build-logos.mjs` (from `v-next`).

## Files

Three configurations × three treatments, each as **SVG + PNG**:

| | Full colour | Black (1-colour) | White (1-colour) |
|---|---|---|---|
| **Mark** (icon) | `bpi-mark-color.svg` | `bpi-mark-black.svg` | `bpi-mark-white.svg` |
| **₿PI** | `bpi-abbr-color.svg` | `bpi-abbr-black.svg` | `bpi-abbr-white.svg` |
| **₿itcoin Policy India** | `bpi-full-color.svg` | `bpi-full-black.svg` | `bpi-full-white.svg` |

- The **mark** is the ₿ on the slate tile — used as the favicon.
- **₿PI** and **₿itcoin Policy India** use the Bitcoin ₿ *as the letter "B"*.
- **Every SVG has matching PNGs** (transparent background): marks and the
  `bitcoin-b` glyph at `-512.png` / `-1024.png`; lockups at `-h256.png` /
  `-h512.png`.

## Treatments

- **Full colour** — gold ₿ + tricolor; text in dark ink (for light grounds).
  On dark grounds the site renders gold ₿ + off-white text (see the nav).
- **Black** / **White** — one-colour fallbacks for stamps, embossing,
  single-colour print, or watermarks. The bar keeps its three-segment shape in
  a single ink.

## Colours

- Tile `#14161b`, border `#2a2e35`
- Gold ₿ `#f5a524`
- Tricolor — saffron `#ff9933` · white `#ffffff` · green `#16a34a`
- One-colour black `#111318`

## Type

The wordmark text is **Archivo** (700). The lockup SVGs reference Archivo with
an Arial/sans fallback; the PNGs are rendered with Archivo baked in.

## Don'ts

- Don't recolour the ₿ or the tricolor, stretch the mark, or add effects.
- Never present the tricolor as the national flag, and never add a chakra.
