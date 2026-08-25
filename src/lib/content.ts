// Central content model for the BPI marketing site.
// Source of truth: "BPI Website — Full Information Architecture + Copy" (Dec 2025).
// Entity: Bitcoin Policy India (for-profit; no "Institute" in the identity).
// Positioning: Bitcoin-only, India-first, evidence-based research, education,
// and policy analysis. NOTE: non-profit/"no lobbying" framing from the source
// doc is under review now that the entity is for-profit — see project memory.

export const SITE = {
  name: "Bitcoin Policy India",
  short: "BPI",
  tagline: "Clarity. Rigor. Independence.",
  promise: "Advancing India's understanding of Bitcoin.",
  domain: "bitcoinpolicy.in",
  email: {
    contact: "contact@bpiindia.org",
    partners: "partners@bpiindia.org",
    press: "media@bpiindia.org",
  },
} as const;

// Primary navigation (top-level IA from the doc). Home is the logo.
export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Policy", href: "/policy" },
  { label: "Education", href: "/education" },
  { label: "Fellowship", href: "/fellowship" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;

// Footer / system pages
export const FOOTER_LINKS = [
  { label: "Legal & Governance", href: "/governance" },
  { label: "Partners", href: "/partners" },
  { label: "Events", href: "/events" },
  { label: "Newsletter", href: "/newsletter" },
] as const;

// Three pillars — "What We Do" (home).
export const PILLARS = [
  {
    title: "Research",
    body: "Deep, accessible, globally benchmarked insights that cut through noise.",
  },
  {
    title: "Public Education",
    body: "Explain Bitcoin to India in a way that is simple, accurate, and non-hyped.",
  },
  {
    title: "Policy Frameworks",
    body: "Evidence-based, neutral analysis for policymakers, institutions, and researchers.",
  },
] as const;

// ── Charter (Mission Charter v1.0, Dec 2025) ──────────────────────────────
// Adapted for the for-profit "Bitcoin Policy India": the enduring conviction
// carries over; explicit non-profit framing is left out per prior decision.

// Why we exist — the vacuum (Home + About).
export const WHY_EXISTS = {
  lead: "India is stepping into a future shaped by digital money, global competition, economic uncertainty, and accelerating technological change. In that world, Bitcoin is no longer a niche curiosity.",
  gaps: [
    "Policy conversations are fragmented.",
    "Research is shallow or biased.",
    "Public education is inconsistent.",
    "Most discussion collapses into ideology, hype, or noise.",
  ],
  resolve: "There is a vacuum. We exist to fill it with clarity.",
} as const;

// What we say about Bitcoin — our stance (Home + About).
export const BITCOIN_IS = [
  { title: "A monetary innovation", body: "A new form of money with global implications no serious economy can ignore." },
  { title: "A maturing financial asset", body: "Increasingly held by institutions and treated as a distinct asset class." },
  { title: "A security & energy question", body: "As much about the grid and national resilience as about finance." },
  { title: "A savings technology", body: "For many, a way to preserve value over long time horizons." },
  { title: "A foundation for resilience", body: "A potential hedge against monetary and geopolitical fragility." },
] as const;

// The three commitments beneath the mission (Home + About).
export const COMMITMENTS = [
  { title: "Rigor", body: "Every insight is accurate, sourced, and globally benchmarked." },
  { title: "Clarity", body: "Complex ideas, explained simply." },
  { title: "Independence", body: "No alignment with political parties, corporate interests, or ideological tribes." },
] as const;

// Identity pillars — "Our Identity" (About).
export const IDENTITY = [
  { title: "Bitcoin-Only", body: "Not Web3. Not crypto. Not tokens. Not NFTs. Only Bitcoin — understood deeply and explained clearly." },
  { title: "India-First", body: "We benchmark globally, but think locally. Every question starts with India's economy, grid, and institutions." },
  { title: "Non-Partisan & Non-Ideological", body: "We are neutral because neutrality builds trust — for government, academia, industry, and citizens alike." },
  { title: "Rigor Without Jargon", body: "Being clear is harder than being complicated. We choose clarity." },
  { title: "Signal Over Noise", body: "We publish less, but publish well. Accuracy over speed, depth over trends." },
] as const;

// Boundaries — what we don't do (About). Credibility boundaries from the
// charter; the non-profit-specific lines are intentionally omitted.
export const BOUNDARIES = [
  "Shill tokens, altcoins, or “crypto” projects",
  "Give trading, investment, or portfolio advice",
  "Comment on price or make predictions",
  "Publish hype, memes, or maximalist rhetoric",
  "Lobby for special treatment or private interests",
  "Align with political parties or campaigns",
] as const;

// Long-term vision — what we're building (Home + About).
export const VISION = {
  headline: "What we're building",
  body: "A durable, India-first reference point for Bitcoin — known for clarity, independence, intellectual honesty, and policy relevance.",
  aims: [
    "The reference point policymakers turn to",
    "The training ground for India's next generation of Bitcoin thinkers",
    "The bridge between India and global Bitcoin research",
  ],
} as const;

// The bar every output must clear (About).
export const STANDARD = [
  { title: "Accurate", body: "Verified, benchmarked, referenced." },
  { title: "Independent", body: "Unaffected by corporate or political interests." },
  { title: "Clear", body: "Simple language. No jargon." },
  { title: "Useful", body: "Something policymakers, educators, companies, and citizens can actually use." },
  { title: "Neutral", body: "Benefits, risks, and trade-offs explained fairly." },
] as const;

// Our Approach (About).
export const APPROACH = [
  "Slow thinking over hot takes",
  "Facts over fear",
  "India over ideology",
  "Clarity over complexity",
  "Signal over noise",
] as const;

// Featured work cards (home "Our Work").
export const FEATURED_WORK = [
  "Bitcoin in India: A Regulatory-Neutral Primer",
  "CBDC vs Bitcoin — An India Context Analysis",
  "Bitcoin & Taxation: Global Benchmarks for India",
  "The State of Bitcoin in India (Annual Report)",
] as const;

// Featured papers (Research page grid).
export const RESEARCH_PAPERS = [
  { title: "CBDCs vs Bitcoin: A Comparative Analysis for India", href: undefined as string | undefined },
  { title: "Bitcoin Mining: Energy, Economics & India's Grid", href: undefined },
  { title: "Bitcoin Taxation — Global Models & Lessons for India", href: undefined },
  { title: "Financial Inclusion & Bitcoin: India's Opportunity", href: undefined },
  { title: "Bitcoin & National Security: A Structural Overview", href: undefined },
];

// Research themes (Research page).
export const RESEARCH_THEMES = [
  { title: "Economics & Monetary Policy", body: "Inflation, monetary supply, competitiveness, savings." },
  { title: "Energy & Mining", body: "Renewables, grid stabilisation, rural power economics." },
  { title: "Consumer Protection", body: "Risk models, safeguards, taxation clarity." },
  { title: "Technology & Security", body: "Decentralisation, scalability, security guarantees." },
  { title: "Regulation & Law", body: "Classification frameworks, AML/KYC, global comparisons." },
] as const;

// Policy briefs + principles (Policy page).
export const POLICY_BRIEFS = [
  "CBDC vs Bitcoin",
  "Taxation models",
  "Risk & consumer protection",
  "Classification frameworks",
  "International benchmarks",
] as const;

export const POLICY_PRINCIPLES = [
  "India-first",
  "Consumer protection",
  "Technological neutrality",
  "Deep research",
  "Independence",
  "Evidence over ideology",
] as const;

// Education content (Education page).
export const EDUCATION_ARTICLES = [
  "Bitcoin, Explained for India",
  "Why Bitcoin Is Not Crypto",
  "How to Think About CBDCs",
  "Bitcoin & Energy — Facts vs Myth",
] as const;

// Fellowship (Fellowship page).
export const FELLOWSHIP = {
  trains: ["research", "policy reasoning", "public education", "institutional thinking"],
  deliverables: [
    "1 research paper",
    "1 policy brief",
    "1 explainer",
    "1 workshop",
    "1 capstone project",
  ],
  values: ["humility", "neutrality", "discipline", "evidence", "consistency", "clarity"],
} as const;

// Resources page sections.
export const RESOURCES = [
  "Research PDFs",
  "Policy briefs",
  "Infographics",
  "Data dashboards",
  "Media kit",
  "Annual report",
] as const;
