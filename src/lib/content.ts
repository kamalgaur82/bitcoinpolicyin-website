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
    body: "Evidence-based, independent analysis for policymakers, institutions, and researchers.",
  },
] as const;

// ── Charter (Moral + Structural Charters v1.7; Mission Charter v1.0) ───────
// Conviction-led posture: we make the evidence-based case for Bitcoin in
// India. Adapted for the for-profit "Bitcoin Policy India" — the non-profit /
// Section 8 framing in the source docs is intentionally left out.

// Purpose / north star (Structural Charter vision).
export const PURPOSE =
  "To help India secure its sovereign financial future and empower every citizen with economic freedom — through the strategic adoption of Bitcoin.";

// Mission (Structural Charter).
export const MISSION =
  "We work to dismantle policy barriers and correct misinformation through rigorous, data-driven research and education — making the case for Bitcoin as a strategic reserve asset for the Indian state and an accessible savings technology for its people.";

// Why we exist — monetary sovereignty + the vacuum (Moral + Mission Charter).
export const WHY_EXISTS = {
  lead: "India has the world's largest youth population, world-class digital public infrastructure, and rising global ambition — yet its financial architecture remains exposed to inflation, currency shocks, and opaque monetary governance. In a digital age, sovereignty is not only political or military. It is also monetary.",
  gaps: [
    "Policy conversations are fragmented and often punitive.",
    "Research is shallow, biased, or imported wholesale.",
    "Public education is inconsistent.",
    "Most discussion collapses into ideology, hype, or noise.",
  ],
  resolve: "There is a vacuum. We exist to fill it — with clarity, evidence, and conviction.",
} as const;

// What we believe (Moral Charter).
export const BELIEFS = [
  { title: "Bitcoin is honest money", body: "A fixed supply, rules that cannot be manipulated, and no authority that can debase it — the first monetary network to truly minimise trust." },
  { title: "Monetary sovereignty is national sovereignty", body: "In a digital age, a nation's freedom is bound up with the integrity of its money." },
  { title: "It strengthens India's institutions", body: "Bitcoin is not here to undermine the RBI. It is here to give India optionality in a world of declining fiat credibility." },
  { title: "Not an ideology — a benchmark of truth", body: "We reject tribalism and hype. Bitcoin's case rests on evidence and first principles, not belief." },
] as const;

// What Bitcoin represents for India (Moral Charter).
export const BITCOIN_REPRESENTS = [
  { title: "Fairness", body: "No insider access, no privileged dilution." },
  { title: "Sovereignty", body: "A tool that strengthens national resilience." },
  { title: "Transparency", body: "An auditable monetary system, immune to political cycles." },
  { title: "Time-protection", body: "Money that protects the labour of 1.4 billion Indians from erosion." },
  { title: "Inclusion", body: "An asset open to all — not just the wealthy or well-connected." },
  { title: "Accountability", body: "A system where mathematics, not power, enforces the rules." },
] as const;

// Where we focus — the five verticals (Structural Charter).
export const VERTICALS = [
  { title: "Sovereign Mining", tagline: "Energy into monetary value", body: "Turn India's stranded and surplus renewable energy into a monetary asset — and a flexible, location-agnostic load that helps balance the grid." },
  { title: "Strategic National Reserve", tagline: "Optionality for the state", body: "Model the case for a measured Bitcoin allocation that reduces over-reliance on any single foreign reserve currency." },
  { title: "Corporate Treasury", tagline: "A long-term treasury hedge", body: "Frameworks for Indian companies and family offices to hold Bitcoin responsibly — custody, accounting, and risk." },
  { title: "Household Savings", tagline: "Bitcoin as savings technology", body: "Financial-literacy frameworks and fair, classification-correct taxation so households can save in Bitcoin sensibly." },
  { title: "Enabling Infrastructure", tagline: "Safe, compliant rails", body: "Standards for custody, security, and service providers so India's Bitcoin ecosystem stays safe and reliable." },
] as const;

// The three commitments beneath the mission (Home + About).
export const COMMITMENTS = [
  { title: "Rigor", body: "Every insight is accurate, sourced, and globally benchmarked." },
  { title: "Clarity", body: "Complex ideas, explained simply." },
  { title: "Independence", body: "No party line, no industry brief. Our conclusions follow the evidence." },
] as const;

// Identity pillars — "Our Identity" (About).
export const IDENTITY = [
  { title: "Bitcoin-Only", body: "Not Web3. Not crypto. Not tokens. Not NFTs. Only Bitcoin — understood deeply and explained clearly." },
  { title: "India-First", body: "We benchmark globally, but think locally. Every question starts with India's economy, grid, and institutions." },
  { title: "Non-Partisan & Independent", body: "No party line, no industry brief. Our conclusions follow the evidence, wherever it leads." },
  { title: "Rigor Without Jargon", body: "Being clear is harder than being complicated. We choose clarity." },
  { title: "Signal Over Noise", body: "We publish less, but publish well. Accuracy over speed, depth over trends." },
] as const;

// Boundaries — what we don't do (About). Conviction-led but disciplined:
// we advocate for sound Bitcoin policy, never for private interests.
export const BOUNDARIES = [
  "Shill tokens, altcoins, or “crypto” projects",
  "Give trading, investment, or portfolio advice",
  "Comment on price or make predictions",
  "Publish hype, memes, or maximalist rhetoric",
  "Lobby or market on behalf of exchanges or private companies",
  "Align with political parties or campaigns",
] as const;

// Long-term ambition — what we're building (Home + About).
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
  { title: "Balanced", body: "We have a view — and we state benefits, risks, and trade-offs fairly." },
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
  values: ["humility", "independence", "discipline", "evidence", "consistency", "clarity"],
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
