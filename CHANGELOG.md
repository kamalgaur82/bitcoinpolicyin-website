# Bitcoin Policy India — website versions

Named milestones for the site. Every commit is versioned in git, every push
is a separate Cloudflare Pages deployment (rollback-able from the dashboard),
and meaningful versions are tagged below (`git tag`).

## v0.13 — Content once-over: de-dup & re-architecture (2026-09)
- Fixed inconsistencies: aligned to Research + Policy (dropped the stray
  "Education" engine on About); home "Our work" cards now deep-link to
  each work's `/policy/[slug]`; reworded hero (removed "Sound").
- Cut cross-page duplication: `WHY_EXISTS`/`PURPOSE`/`VISION` now teased on
  Home, owned in full on About. Consolidated six overlapping value lists
  to two — kept `IDENTITY` and `BOUNDARIES`; removed `COMMITMENTS`,
  `WE_ARE`, `WE_ARE_NOT`, `STANDARD`, and the `DOES` engines block.
- Relocated "Where we focus" (`PRIORITY_LAYERS`) to the Policy page as the
  policy agenda; Home keeps a 3-layer teaser. Moved "What Bitcoin
  represents for India" from Home to About. Home 8→7 sections, About 10→7.
- Removed the orphaned Fellowship page (unlinked; program not open).
  Copy and data parked in `docs/fellowship.md` for later.
- `FEATURED_WORK` retired in favour of deriving featured cards from
  `RESEARCH_PAPERS`. Footer/nav structure left as-is (standard pattern).

## v0.12 — Typeface change to Archivo (2026-09)
- Replaced Playfair Display with Archivo as the display/heading face
  across the whole site (all-sans grotesque over Public Sans body).
  Token-level swap in the font loader and `--font-display`; every
  heading and the wordmark inherit it.

## v0.11 — Contributor takeaway pages (2026-09)
- Added `/policy/[slug]` takeaway pages for the two contributor works —
  The Sovereign Mining Initiative (Sunil Kumar) and Sovereign Energy
  Monetization for India (Anooj) — summarised faithfully from the source
  documents, RBI-safe framing (energy efficiency / grid stability /
  additive revenue). Both now show "Read the takeaways →" on Policy.

## v0.10 — Explainer + press kit (2026-09)
- New "Bitcoin in India" plain-language explainer page (sourced Q&A) and
  a Press / media kit page (approved descriptions, founder bios, naming
  guidance, press contact).

## v0.9 — Per-work detail pages (2026-08)
- Introduced `/policy/[slug]` detail pages showing takeaways for the
  three authored works; full documents shared directly on request.

## v0.8 — Final read-through polish (2026-08)
- "How we work" trimmed from 3 engines to 2 (research, policy); homepage
  work titles aligned with Policy; contact copy tightened; dead consts
  removed; Vision de-"high-trust/institution"-ed.

## v0.7 — Rebalanced, grounded priorities (2026-08)
- "Where we focus" rebalanced to an even 3/3/3; key asks grounded in
  verified 2026 facts; all five original pillars represented (reserve as
  a carefully-worded research interest).

## v0.6 — Single for-profit reconciliation (2026-08)
- Two-entity (Think Tank + Advisory / for-profit + non-profit) model
  dropped; removed all "public-interest" posture claims.

## v0.5 — Guardrail read-through (2026-08)
- Two standing content guardrails enforced across the site: (1) no
  India/RBI monetary-debasement subtext — Bitcoin's case made positively;
  (2) no internal-only framing or public "never" that forecloses
  for-profit/advisory revenue, and no over-promised capability lists.
- Fixes: "sound money" → "durable, rules-based money"; softened tax
  wording; trimmed "what we are not" and the Governance doc list; removed
  the internal red-lines block and dead consts.

## v0.4 — Citizen values/soul layer (2026-08)
- Added "What Bitcoin represents for India" (Moral Charter), in RBI-safe framing.

## v0.3 — Merge Work into Policy; drop Writing (2026-08)
- Merged the Work page into a single **Policy** page: positions + the public
  work behind them (taxonomy, GNLU, Parliament briefing) + sourced facts +
  references. No public library of proposals; drafts/briefings go direct.
- Dropped the Writing page — **Support** is the single way to subscribe and
  show support for positive Bitcoin policy in India.
- Nav: About · Policy · Contact (+ Support). Contact emails on @bitcoinpolicy.in.

## v0.2 — Lean 2-person footprint (2026-08)
- Repositioned as a small, independent 2-person policy shop (Kamal + Saqeer),
  not an institute-scale operation.
- Posture: blended — a clear point of view on positive Bitcoin regulation,
  held in a disciplined, policymaker-credible register (per the Apr-2026
  alignment deck).
- Nav trimmed to About · Work · Policy · Writing · Contact (+ Support).
- Real, validated content: sourced India facts (tax, remittances, energy,
  privacy) and actual BPI work (taxonomy, regulator mapping, VDA framework).
- "Who's behind BPI" founders section; Fellowship de-emphasised ("planned").
- Contact emails on @bitcoinpolicy.in; consistent section widths.

## v0.1 — First build (2026-08)
- Next.js static site on Cloudflare Pages, Slate-mono dark theme.
- Content aligned to the official Website IA + Mission Charter.
- Rebranded to for-profit "Bitcoin Policy India" (no "Institute").
