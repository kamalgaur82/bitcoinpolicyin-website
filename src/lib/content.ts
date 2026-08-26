// Central content model for the BPI marketing site.
// Source of truth: "BPI Website — Full Information Architecture + Copy" (Dec 2025).
// Entity: Bitcoin Policy India (for-profit; no "Institute" in the identity).
// Positioning: Bitcoin-only, India-first, evidence-based research, education,
// and policy analysis. SINGLE for-profit entity — the two-entity / non-profit /
// "public-interest" framing from the source docs does NOT apply.

export const SITE = {
  name: "Bitcoin Policy India",
  short: "BPI",
  tagline: "Clarity. Rigor. Independence.",
  promise: "Advancing India's understanding of Bitcoin.",
  domain: "bitcoinpolicy.in",
  email: {
    contact: "contact@bitcoinpolicy.in",
    partners: "partners@bitcoinpolicy.in",
    press: "media@bitcoinpolicy.in",
  },
} as const;

// Primary navigation (top-level IA from the doc). Home is the logo.
export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Policy", href: "/policy" },
  { label: "Contact", href: "/contact" },
] as const;

// Footer / system pages
export const FOOTER_LINKS = [
  { label: "Events", href: "/events" },
  { label: "Legal & Governance", href: "/governance" },
  { label: "Support", href: "/support" },
] as const;

// What we do (home "How we work").
export const PILLARS = [
  {
    title: "Research",
    body: "Rigorous, India-first analysis on the questions that matter — the evidence base for everything else.",
  },
  {
    title: "Policy",
    body: "Turning that research into clear positions, briefs, and direct, credible engagement with government.",
  },
] as const;

// ── Positioning (April 2026 Vision Alignment Deck; charters v1.7) ──────────
// Blend posture: a clear point of view (positive regulation for Bitcoin) held
// in a disciplined, policymaker-credible register — not slogan-heavy. Entity:
// a SINGLE for-profit (Bitcoin Policy India). The earlier two-entity Think Tank
// + Advisory model no longer applies — don't reintroduce "public-interest".

// Mission — working statement (April 2026 deck).
export const PURPOSE =
  "Bitcoin Policy India exists to enable positive, rational, and forward-looking regulation for Bitcoin — for Indians and India alike.";

// Why we exist — the gap (April deck slide 3).
export const WHY_EXISTS = {
  lead: "India does not yet have a clear, rational, stable, Bitcoin-specific policy posture. Bitcoin is too often conflated with speculation and “crypto” noise; tax treatment is misaligned; legal clarity is incomplete; rights like self-custody aren't firmly grounded; mining is poorly understood; and retail protection is weak.",
  gaps: [
    "Policy is fragmented and inconsistent.",
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

// What Bitcoin represents for India — the values layer (Moral Charter v1.7).
// Dignified, civic register; every phrase is from the charter, not invented.
export const MEANS_FOR_INDIA = {
  lead: "In a digital age, sovereignty is not only political or military — it is also monetary. We see Bitcoin as durable, rules-based money — a form of self-reliance, Atmanirbhar Bharat applied to money — an open asset that lets ordinary Indians build and preserve value over the long term, and opens a path to prosperity not reserved for the few.",
  represents: [
    { title: "Fairness", body: "The same rules for everyone — no insiders, no privileged access." },
    { title: "Sovereignty", body: "A tool that adds to India's optionality and resilience." },
    { title: "Transparency", body: "An open, rules-based system anyone can audit." },
    { title: "Long-term value", body: "A durable way to preserve the value of the work people put in, across long horizons." },
    { title: "Inclusion", body: "An asset open to all — not just the wealthy or well-connected." },
    { title: "Accountability", body: "Rules enforced by mathematics, the same for everyone." },
  ],
} as const;

// Where we focus — six priorities in three layers (April 2026 deck).
export const PRIORITY_LAYERS = [
  {
    layer: "Protection",
    blurb: "Grounding the rights and safeguards citizens need.",
    items: [
      { title: "Legal clarity for holding", body: "Holding Bitcoin is legal but ungrounded — no dedicated law since the 2021 bill was shelved. Ownership deserves clear, lawful recognition." },
      { title: "Self-custody rights", body: "The right to hold your own Bitcoin securely and lawfully, protected in principle." },
      { title: "Retail protection", body: "Protecting ordinary people from mis-selling, confusion, and avoidable harm." },
    ],
  },
  {
    layer: "Enablement",
    blurb: "Removing the barriers to responsible participation.",
    items: [
      { title: "Clear classification", body: "India lumps Bitcoin with every token under one Virtual Digital Asset definition (2022). Classification must precede sensible regulation." },
      { title: "Fair taxation", body: "A flat 30% plus a 1% TDS, with no loss set-off, taxes Bitcoin like speculation — and pushed activity offshore. It needs rationalising." },
      { title: "Institutional adoption", body: "Treasury, fund, and balance-sheet pathways for Bitcoin, where appropriate." },
    ],
  },
  {
    layer: "Infrastructure & strategy",
    blurb: "The foundations, and the long-horizon questions.",
    items: [
      { title: "Mining & energy", body: "Frameworks for the role Bitcoin mining could play in India's grid and power context." },
      { title: "Custody & service providers", body: "Standards for safe, compliant custody, security, and the providers a healthy ecosystem needs." },
      { title: "Strategic reserve — research", body: "A long-horizon question we study: what a measured, sovereign Bitcoin allocation could add to India's resilience and optionality." },
    ],
  },
] as const;

// What we are (April 2026 deck slide 10).
export const WE_ARE = [
  "A Bitcoin-only policy think tank",
  "An advocacy body — in that we want to influence policy direction",
  "A small, independent, India-first, long-term effort",
] as const;

// What we are not (April 2026 deck slide 11).
export const WE_ARE_NOT = [
  "A lobbying shop for hire",
  "A place where money buys opinion",
  "A generic crypto industry association",
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
  { title: "Non-Partisan & Independent", body: "No party line, no industry brief. Our conclusions follow the evidence." },
  { title: "Rigor Without Jargon", body: "Being clear is harder than being complicated. We choose clarity." },
  { title: "Integrity Over Growth", body: "Small, slow, and credible beats fast-growing but compromised." },
] as const;

// The two co-founders (About). Bios drawn from kamalgaur.com, saqeershah.com,
// and BPI's own materials; kept factual and modest.
export const FOUNDERS_INTRO =
  "BPI is a small, deliberately lean effort — independent, focused, and accountable. We drive the work and set BPI's strategy, structure, and governance, with support from a wider community of contributors who share the mission.";

export const FOUNDERS = [
  {
    name: "Kamal Gaur",
    role: "Co-founder",
    bio: "An IIM Ahmedabad alumnus with over two decades of leadership across financial services and technology, Kamal has spent close to a decade demystifying Bitcoin for Indians. He has presented to India's Parliamentary Standing Committee on Finance, taken part in industry discussions, and writes widely on money and technology.",
    link: "https://www.linkedin.com/in/kamalgaur/",
    linkLabel: "LinkedIn",
  },
  {
    name: "Saqeer Shah",
    role: "Co-founder",
    bio: "Saqeer is a lawyer who has litigated criminal cases across several state and high courts. He brings a practitioner's grasp of how India's legal and political institutions actually work — and the relationships and credibility to engage them seriously.",
    link: "", // LinkedIn URL to be added
    linkLabel: "LinkedIn",
  },
] as const;

// Boundaries — what we don't do (editorial discipline; see project guardrails).
export const BOUNDARIES = [
  "Take money to change our conclusions",
  "Shill tokens, altcoins, or “crypto” projects",
  "Give trading, investment, or portfolio advice",
  "Comment on price or make predictions",
  "Publish hype, memes, or maximalist rhetoric",
  "Align with political parties or campaigns",
] as const;

// Long-term ambition — what we're building (Home + About; April 2026 deck).
export const VISION = {
  headline: "What we're building",
  body: "A small, independent, Bitcoin-only policy voice that policymakers take seriously — helping move India from confusion toward a thoughtful, stable, rights-respecting, and economically intelligent Bitcoin posture.",
  aims: [
    "Policy clarity and credible frameworks",
    "Independent, India-first Bitcoin thinking",
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
  "An Accounting Standards Framework for Virtual Digital Assets in India",
  "A Functional Taxonomy for Digital Assets in India",
  "Regulator Mapping for Digital Asset Categories",
  "The Sovereign Mining Initiative",
] as const;

// Featured work (Policy page) — actual BPI work products. Descriptions and
// takeaways are drawn from the documents themselves. Items with a `slug` have a
// detail page (/policy/<slug>) showing takeaways; the full document is shared
// directly on request. Contributor works (mining, energy) intentionally have no
// detail page yet — pending the authors' sign-off.
export type Work = {
  slug?: string;
  title: string;
  summary: string;
  status: string;
  audience?: string;
  sections?: { heading: string; points: string[] }[];
};

export const RESEARCH_PAPERS: Work[] = [
  {
    slug: "vda-accounting-framework",
    title: "An Accounting Standards Framework for Virtual Digital Assets in India",
    summary:
      "How VDAs should be classified and measured in financial statements — for the Ministry of Finance, MCA, NFRA and ICAI. Bitcoin as a distinct non-financial asset class, fair-valued through profit and loss, drawing on the US (FASB), Japan (ASBJ) and IFRS experience.",
    status: "Policy brief · draft, 2026",
    audience: "A policy brief for the Ministry of Finance, MCA, NFRA and ICAI.",
    sections: [
      {
        heading: "The problem",
        points: [
          "India already taxes VDA gains at 30% and deducts a 1% TDS, and companies must disclose VDA dealings under Schedule III (since 2021). The Madras High Court has recognised crypto assets as property held in trust (Rhutikumari v. Zanmai Labs, 2025).",
          "Yet no Ind AS or ICAI guidance says how to classify or measure a VDA in financial statements — so by default they fall under Ind AS 38: carried at cost, losses shown, gains invisible until sale.",
          "The result: the disclosed 'amount held' has no standard meaning, audits lack an anchor, and the tax base is harder to verify than it should be.",
        ],
      },
      {
        heading: "What the world has settled on",
        points: [
          "United States (FASB, mandatory from 2025): actively-traded crypto at fair value through net income.",
          "Japan (ASBJ, since 2018): market value through profit and loss where an active market exists; customer crypto matched with a liability.",
          "IFRS has no standard — a widely-criticised 2019 decision routes crypto to inventory or intangibles; the IASB is revisiting it.",
          "Every body that examined the question deliberately — FASB, ASBJ, Swiss practice — chose fair value through profit or loss for actively-traded crypto.",
        ],
      },
      {
        heading: "What we propose",
        points: [
          "One VDA definition across tax and accounting, sub-classified: Class A (fungible, active-market, no issuer — e.g. Bitcoin), Class B (rights-bearing tokens like stablecoins), Class C (NFTs and illiquid tokens).",
          "Classify VDAs as a distinct non-financial asset class — expressly not cash, not currency, not a financial instrument — consistent with the Madras HC's property ruling.",
          "Measure Class A at fair value through profit and loss; hold customer assets on the trust model — segregated assets off the custodian's balance sheet, commingled assets on it with a matching liability (the lesson of WazirX).",
          "A cheap transition: a cumulative adjustment to opening retained earnings, no restatement.",
        ],
      },
      {
        heading: "What it does not do",
        points: [
          "It does not make any VDA legal tender or a unit of account — books stay in rupees.",
          "It does not alter the RBI's monetary role, SEBI or exchange listing policy, or the 30% / 1% tax architecture. Measurement is representation, not endorsement.",
        ],
      },
      {
        heading: "The path",
        points: [
          "Step 1 (0–12 months): an ICAI Guidance Note — no legislative change, immediately usable by auditors.",
          "Step 2 (12–36 months): a limited-scope Ind AS, endorsed by NFRA and notified by MCA.",
        ],
      },
    ],
  },
  {
    slug: "functional-taxonomy",
    title: "A Functional Taxonomy for Digital Assets in India",
    summary:
      "A four-pillar, risk-based classification — decentralised cryptocommodities (Bitcoin), tokenised securities, stablecoins, and utility tokens — on the principle that classification must precede regulation.",
    status: "Presented · GNLU stakeholder consultation, Nov 2025",
    audience: "Presented at the GNLU Regional Stakeholder Consultation, Bengaluru, November 2025.",
    sections: [
      {
        heading: "Why a taxonomy",
        points: [
          "Digital assets sit under one umbrella term — 'crypto' — despite fundamental differences in risk, economic function, and technical architecture.",
          "Classification must precede regulation, so that rules can be proportional, protect consumers, and leave room for innovation. The primary differentiator is issuer-dependence.",
        ],
      },
      {
        heading: "The four categories",
        points: [
          "Decentralised cryptocommodities (no issuer) — e.g. Bitcoin: no issuer, no cash-flow claims, commodity-like. Fit: commodity / payment-asset oversight, plus AML/KYC.",
          "Tokenised securities (issuer-dependent) — ICO and governance tokens, tokenised equity: an issuer and a profit expectation. Fit: SEBI; disclosures and anti-fraud norms.",
          "Stablecoins — fiat-backed or algorithmic: they touch the monetary system and carry reserve risk. Fit: RBI (reserves/payments), SEBI (backing assets), MeitY (tech).",
          "Consumer / utility tokens — loyalty, in-game, access: non-monetary, non-investment. Fit: light-touch, under MeitY and consumer-protection law.",
        ],
      },
      {
        heading: "Why it works",
        points: [
          "It aligns with MiCA, the UK FCA, Japan and US principles.",
          "It reduces misclassification, supports innovation, and enhances consumer protection — by treating each kind of asset on its own terms.",
        ],
      },
    ],
  },
  {
    slug: "regulator-mapping",
    title: "Regulator Mapping for Digital Asset Categories",
    summary:
      "Which Indian regulator should oversee which kind of digital asset — mapping Bitcoin to commodity-style oversight (MoF/DEA, FIU-IND) rather than SEBI or RBI.",
    status: "Presented · GNLU stakeholder consultation, Nov 2025",
    audience: "A companion to the functional taxonomy, presented at GNLU, November 2025.",
    sections: [
      {
        heading: "The idea",
        points: [
          "Once digital assets are classified by function, the right regulator for each becomes clear — a risk-based mapping rather than a single catch-all authority.",
        ],
      },
      {
        heading: "Who oversees what",
        points: [
          "Decentralised cryptocommodities (Bitcoin) — commodity-like, issuerless; risks are market integrity and AML. Likely regulators: the Ministry of Finance (DEA) for policy framing, FIU-IND for AML/CFT, and a possible future Digital Commodities Cell — not SEBI, not RBI.",
          "Tokenised securities — an issuer and profit expectation. Primary regulator SEBI, with MCA/ROC for corporate filings.",
          "Stablecoins — payment and settlement instruments with reserve risk. Primary regulator RBI, with SEBI, FIU-IND and MeitY.",
          "Consumer / utility tokens — light-touch, under MeitY and consumer-protection law.",
        ],
      },
    ],
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
    link: "https://www.esyacentre.org/documents/2024/12/9/the-impact-of-indias-vda-tax-policy-an-update",
  },
  {
    title: "TDS on Virtual Digital Assets: Effects on Tax Revenue and User Trends",
    author: "Centre for Tax Laws, NALSAR",
    year: "2024",
    note: "How the 1% TDS affected tax collection and pushed users toward offshore venues.",
    link: "",
  },
  {
    title: "Crypto Assets in India — Crypto Assets Project Report",
    author: "GNLU (Prof. S. Shanthakumar et al.)",
    year: "2025",
    note: "An academic assessment of the case for regulating crypto assets in India.",
    link: "",
  },
  {
    title:
      "Softwar: A Novel Theory on Power Projection and the National Strategic Significance of Bitcoin",
    author: "Jason P. Lowery, MIT",
    year: "2023",
    note: "A foundational reference on Bitcoin, energy, and national strategy.",
    link: "https://dspace.mit.edu/entities/publication/8ac6037b-efd6-4ecd-a57f-2b75c965c889",
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

// Policy principles (Policy page).
export const POLICY_PRINCIPLES = [
  "India-first",
  "Consumer protection",
  "Technological neutrality",
  "Deep research",
  "Independence",
  "Evidence over ideology",
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

