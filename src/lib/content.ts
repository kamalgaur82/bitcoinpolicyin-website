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
  { label: "Work", href: "/work" },
  { label: "Policy", href: "/policy" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
] as const;

// Footer / system pages
export const FOOTER_LINKS = [
  { label: "Events", href: "/events" },
  { label: "Legal & Governance", href: "/governance" },
  { label: "Support", href: "/support" },
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

// The two co-founders (About). Bios drawn from kamalgaur.com, saqeershah.com,
// and BPI's own materials; kept factual and modest.
export const FOUNDERS_INTRO =
  "BPI is a small, deliberately lean effort — for now, two people doing the work. That's the point: independent, focused, and accountable. Together we set BPI's strategy, structure, and governance.";

export const FOUNDERS = [
  {
    name: "Kamal Gaur",
    role: "Co-founder",
    bio: "Two decades across telecom, technology, and financial services, having led organisations of 300+. He has briefed India's Parliamentary Standing Committee on Finance on cryptocurrency, and brings the analytical depth — leading BPI's research and frameworks on digital-asset taxonomy, classification, and taxation.",
    link: "https://kamalgaur.com",
    linkLabel: "kamalgaur.com",
  },
  {
    name: "Saqeer Shah",
    role: "Co-founder",
    bio: "An advocate and policy strategist. He brings the network and on-the-ground judgment — turning research into relationships and real engagement across policy and industry.",
    link: "https://saqeershah.com",
    linkLabel: "saqeershah.com",
  },
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

// Validated facts (Aug-2025 verification ledger, verdict 5.1 "Correct",
// re-checked against current 2026 sources 2026-08-25). Every item is sourced;
// do not add unsourced figures here.
export const INDIA_FACTS = [
  {
    stat: "30% + 1% TDS",
    label:
      "A flat 30% tax on gains from virtual digital assets, plus a 1% TDS on transfers, with no set-off or carry-forward of losses — retained unchanged in Budget 2026.",
    source: "Finance Act 2022; Union Budget 2026 (§115BBH, §194S)",
  },
  {
    stat: "~$135 billion",
    label:
      "India is the world's largest recipient of remittances (FY2024-25), typically at fees of 5–7% — exactly where low-cost, borderless rails matter most.",
    source: "RBI; World Bank",
  },
  {
    stat: "Fundamental right",
    label:
      "Privacy is a fundamental right in India — a constitutional anchor for financial privacy and the right to hold your own assets.",
    source: "Supreme Court, K. S. Puttaswamy v. Union of India (2017)",
  },
  {
    stat: "1,200 M kWh",
    label:
      "Renewable energy curtailed in Tamil Nadu in a single year — stranded, interruptible power that flexible Bitcoin mining could put to use.",
    source: "CEA / State Load Despatch Centres",
  },
] as const;

// Featured work cards (home "Our Work") — real BPI work.
export const FEATURED_WORK = [
  "An Accounting Framework for Virtual Digital Assets",
  "A Functional Taxonomy for Digital Assets in India",
  "The Sovereign Mining Initiative",
  "Regulator Mapping for Digital Assets",
] as const;

// Featured research (Research page) — actual BPI work products. Descriptions
// are drawn from the documents themselves; status reflects their real state.
export const RESEARCH_PAPERS = [
  {
    title: "An Accounting Standards Framework for Virtual Digital Assets in India",
    summary:
      "How VDAs should be classified and measured in financial statements — for the Ministry of Finance, MCA, NFRA and ICAI. Bitcoin as a distinct non-financial asset class, fair-valued through profit and loss, drawing on the US (FASB), Japan (ASBJ) and IFRS experience.",
    status: "Policy brief · draft, 2026",
  },
  {
    title: "A Functional Taxonomy for Digital Assets in India",
    summary:
      "A four-pillar, risk-based classification — decentralised cryptocommodities (Bitcoin), tokenised securities, stablecoins, and utility tokens — on the principle that classification must precede regulation.",
    status: "Presented · GNLU stakeholder consultation, Nov 2025",
  },
  {
    title: "Regulator Mapping for Digital Asset Categories",
    summary:
      "Which Indian regulator should oversee which kind of digital asset — mapping Bitcoin to commodity-style oversight (MoF/DEA, FIU-IND) rather than SEBI or RBI.",
    status: "Presented · GNLU stakeholder consultation, Nov 2025",
  },
  {
    title: "The Sovereign Mining Initiative",
    summary:
      "How India's stranded and surplus renewable energy — hydro, solar, wind — can be turned into monetary value through flexible, interruptible Bitcoin mining, with global precedents from Bhutan, Norway and Texas.",
    status: "Research · in progress",
  },
  {
    title: "Sovereign Energy Monetization for India",
    summary:
      "A pilot framework to convert stranded energy — renewable curtailment, hydro spillage, and gas flaring — into strategic reserves through flexible, containerised computing deployed at the source.",
    status: "Working paper",
  },
];

// External references we build on — third-party works, verified titles and
// attributions (2026-08-25). These are NOT BPI's own work.
export const REFERENCES = [
  {
    title: "The Impact of India's VDA Tax Policy: An Update",
    author: "Esya Centre",
    year: "2024",
    note: "Evidence on how the 30% tax and 1% TDS reshaped India's digital-asset market.",
  },
  {
    title: "TDS on Virtual Digital Assets: Effects on Tax Revenue and User Trends",
    author: "Centre for Tax Laws, NALSAR",
    year: "2024",
    note: "How the 1% TDS affected tax collection and pushed users toward offshore venues.",
  },
  {
    title: "Crypto Assets in India — Crypto Assets Project Report",
    author: "GNLU (Prof. S. Shanthakumar et al.)",
    year: "2025",
    note: "An academic assessment of the case for regulating crypto assets in India.",
  },
  {
    title:
      "Softwar: A Novel Theory on Power Projection and the National Strategic Significance of Bitcoin",
    author: "Jason P. Lowery, MIT",
    year: "2023",
    note: "A foundational reference on Bitcoin, energy, and national strategy.",
  },
] as const;

// Past events / talks — from BPI's own seminar and consultation materials.
export const EVENTS_PAST = [
  {
    name: "Regional Stakeholder Consultation on Crypto Assets",
    host: "GNLU · Bengaluru",
    date: "Nov 2025",
    detail:
      "Presented a functional taxonomy and a regulator-mapping framework for digital assets in India.",
  },
  {
    name: "Bitplebs · Goa",
    host: "Goa",
    date: "2025",
    detail:
      "BPI seminar sessions on Bitcoin's strategic power, law & policy, India's Bitcoin future, and reforming India's digital-asset policy.",
  },
] as const;

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
  commitment:
    "8–12 hours a week for Fellows, 4–6 for Associate Fellows. Not full-time — but not casual.",
  tiers: [
    {
      name: "Associate Fellow",
      commitment: "4–6 hrs/week",
      detail: "A training track for students, early-stage contributors, and high-potential volunteers.",
    },
    {
      name: "Fellow",
      commitment: "8–12 hrs/week",
      detail: "The core engine — the primary producer of research, explainers, policy briefs, and workshops.",
    },
    {
      name: "Senior Fellow",
      commitment: "Project-based",
      detail: "A domain expert leading major research, institutional collaborations, and mentoring.",
    },
  ],
  cycle: [
    { weeks: "Weeks 1–2", focus: "Orientation, research training, and project assignment." },
    { weeks: "Weeks 3–4", focus: "Foundational reading, framing sessions, and first drafts." },
    { weeks: "Weeks 5–9", focus: "Deep research, writing, and policy analysis." },
    { weeks: "Weeks 10–11", focus: "Reviews, editing, and public-education output." },
    { weeks: "Week 12", focus: "Final presentations, publication, and graduation." },
  ],
  deliverables: [
    "A 10–15 page research paper",
    "A 1,000–2,500 word policy brief",
    "A public explainer (article, deck, or video)",
    "A workshop or lecture",
    "A capstone project",
  ],
  curriculum: [
    "Bitcoin foundations, in an India context",
    "Research & writing discipline",
    "Policy thinking & comparative frameworks",
    "Public education & clear communication",
    "Institutional conduct & integrity",
  ],
  selection: [
    "Humility over ego",
    "Consistency over brilliance",
    "Curiosity over credentials",
    "India-first, not personality-first",
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
