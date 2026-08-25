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

// ── Positioning (April 2026 Vision Alignment Deck; charters v1.7) ──────────
// Blend posture: a clear point of view (positive regulation for Bitcoin) held
// in a disciplined, policymaker-credible register — not slogan-heavy. Public
// site = the Think Tank (public-interest posture); the commercial Advisory arm
// is kept off the public site.

// Mission — working statement (April 2026 deck).
export const PURPOSE =
  "Bitcoin Policy India exists to enable positive, rational, and forward-looking regulation for Bitcoin — for Indians and India alike.";

// The core design principle (April 2026 deck).
export const PRINCIPLE =
  "We aim to be trusted by policymakers more than we are useful to industry.";

// Why we exist — the gap (April deck slide 3).
export const WHY_EXISTS = {
  lead: "India does not yet have a clear, rational, stable, Bitcoin-specific policy posture. Bitcoin is too often conflated with speculation and “crypto” noise; tax treatment is misaligned; legal clarity is incomplete; rights like self-custody aren't firmly grounded; mining is poorly understood; and retail protection is weak.",
  gaps: [
    "Policy conversations are fragmented and often punitive.",
    "Bitcoin is conflated with undifferentiated “crypto”.",
    "Self-custody and ownership rights aren't firmly grounded.",
    "Policymakers lack a trusted, rigorous, India-specific source.",
  ],
  resolve: "That is the gap we exist to fill.",
} as const;

// What we believe (blended: measured conviction).
export const BELIEFS = [
  { title: "Bitcoin is not “crypto”", body: "Treating Bitcoin on its own terms — not as one more speculative token — is the starting point for sensible policy." },
  { title: "Good regulation beats prohibition or neglect", body: "We argue for positive, rational, forward-looking rules. Not deregulation, and not hype." },
  { title: "Ownership and self-custody are worth protecting", body: "Indians should be able to hold their own Bitcoin securely and lawfully, with clear rights." },
  { title: "Monetary questions are sovereignty questions", body: "In a digital age, how a nation treats money bears on its long-term resilience — worth engaging from understanding, not fear." },
] as const;

// Where we focus — six priorities in three layers (April 2026 deck).
export const PRIORITY_LAYERS = [
  {
    layer: "Protection",
    blurb: "Grounding the rights and safeguards citizens need.",
    items: [
      { title: "Legal clarity for holding Bitcoin", body: "A clearer long-term understanding of what lawful ownership means for citizens and institutions." },
      { title: "Self-custody rights", body: "The legitimacy of individuals holding their own Bitcoin securely and legally." },
      { title: "Retail investor protection", body: "Protecting ordinary people from mis-selling, confusion, and avoidable harm." },
    ],
  },
  {
    layer: "Enablement",
    blurb: "Removing the barriers to responsible participation.",
    items: [
      { title: "Tax rationalisation", body: "A sensible long-term treatment of Bitcoin in place of today's misaligned VDA framework." },
      { title: "Institutional adoption", body: "Treasury, fund, and balance-sheet pathways, where appropriate." },
    ],
  },
  {
    layer: "Infrastructure",
    blurb: "The physical and energy foundations.",
    items: [
      { title: "Mining & energy policy", body: "Thoughtful frameworks for the role Bitcoin mining could play in India's grid and power context." },
    ],
  },
] as const;

// What we are (April 2026 deck slide 10).
export const WE_ARE = [
  "A Bitcoin-only, public-interest policy think tank",
  "A research and thought-leadership institution",
  "An advocacy body — in that we want to influence policy direction",
  "A small, high-trust, India-specific, long-term platform",
] as const;

// What we are not (April 2026 deck slide 11).
export const WE_ARE_NOT = [
  "A lobbying shop for hire",
  "A broker of access or a deal-making platform",
  "A place where money buys opinion",
  "A policy wrapper around commercial agendas",
  "A generic crypto industry association",
] as const;

// Red lines (April 2026 deck slide 13).
export const RED_LINES = [
  "We never take money to change an opinion.",
  "We never pay to secure a policy outcome.",
  "We never represent commercial interests in policy meetings.",
  "We never sell access to policymakers.",
  "We help people understand the system — we don't help them game it.",
] as const;

// The three commitments beneath the mission (Home + About).
export const COMMITMENTS = [
  { title: "Rigor", body: "Every insight is accurate, sourced, and globally benchmarked." },
  { title: "Clarity", body: "Complex ideas, explained simply — never slogan-heavy." },
  { title: "Independence", body: "No party line, no industry brief. Our conclusions follow the evidence." },
] as const;

// Identity pillars — "Our Identity" (About).
export const IDENTITY = [
  { title: "Bitcoin-Only", body: "Not Web3. Not crypto. Not tokens. Not NFTs. Only Bitcoin — anchored, and understood deeply." },
  { title: "India-First", body: "We benchmark globally, but think locally. Every question starts with India's economy, grid, and institutions." },
  { title: "Policymaker-Trusted", body: "We aim to be trusted by policymakers more than we are useful to industry." },
  { title: "Rigor Without Jargon", body: "Being clear is harder than being complicated. We choose clarity." },
  { title: "Integrity Over Growth", body: "Small, slow, and credible beats fast-growing but compromised." },
] as const;

// Boundaries — what we don't do (Bitcoin-only discipline + firewall).
export const BOUNDARIES = [
  "Shill tokens, altcoins, or “crypto” projects",
  "Give trading, investment, or portfolio advice",
  "Comment on price or make predictions",
  "Publish hype, memes, or maximalist rhetoric",
  "Represent commercial interests in policy meetings",
  "Align with political parties or campaigns",
] as const;

// Long-term ambition — what we're building (Home + About; April 2026 deck).
export const VISION = {
  headline: "What we're building",
  body: "A small, high-trust, Bitcoin-only policy institution that policymakers take seriously — helping move India from confusion toward a thoughtful, stable, rights-respecting, and economically intelligent Bitcoin posture.",
  aims: [
    "Policy clarity and credible frameworks",
    "Public-interest Bitcoin thinking",
    "Trusted engagement with central and state stakeholders",
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
