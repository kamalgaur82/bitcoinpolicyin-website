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
  { label: "Bitcoin in India", href: "/bitcoin-in-india" },
  { label: "Policy", href: "/policy" },
  { label: "Contact", href: "/contact" },
] as const;

// Footer / system pages
export const FOOTER_LINKS = [
  { label: "Events", href: "/events" },
  { label: "Press", href: "/press" },
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
      { title: "Legal clarity & self-custody", body: "Holding Bitcoin is legal but ungrounded — no dedicated law since the 2021 bill was shelved. The right to hold and self-custody your own Bitcoin, securely and lawfully, deserves clear recognition." },
      { title: "Retail protection & education", body: "Helping ordinary people take part safely — starting with plain, honest education on what self-custody is, what it means, and how to do it responsibly." },
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
    "Independent, India-first Bitcoin thinking",
    "Trusted engagement with central and state stakeholders",
    "Policy clarity and credible frameworks",
  ],
} as const;

// Validated facts (Aug-2025 verification ledger, verdict 5.1 "Correct",
// re-checked against current 2026 sources 2026-08-25). Every item is sourced;
// do not add unsourced figures here.
export const INDIA_FACTS = [
  {
    stat: "No. 1",
    label:
      "India's rank for grassroots crypto adoption — first in the world, three years running (2023–2025). Bitcoin is the single largest crypto asset, yet India's rules still lump it in with every other token.",
    source: "Chainalysis Global Crypto Adoption Index (2023–2025)",
  },
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
    stat: "8,133 GWh",
    label:
      "Solar power curtailed across India in a single quarter (April–June 2026) — stranded, interruptible energy that flexible Bitcoin mining could put to use rather than see wasted. Curtailment today is concentrated in solar as grid build-out lags new capacity.",
    source: "Grid-India; MNRE reply to Parliament (2026)",
  },
] as const;

// Featured work (Policy page) — actual BPI work products. Descriptions and
// takeaways are drawn from the documents themselves. Items with a `slug` have a
// detail page (/policy/<slug>) showing takeaways; the full document is shared
// directly on request. Contributor works (mining, energy) are attributed to
// their authors and summarised faithfully from the source documents.
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
    slug: "sovereign-mining-initiative",
    title: "The Sovereign Mining Initiative",
    summary:
      "How India's surplus and curtailed renewable energy — solar, wind, hydro — can be turned into economic value through flexible, interruptible Bitcoin mining, with global precedents from Bhutan, Ethiopia and Texas.",
    status: "Research paper · Sunil Kumar",
    audience:
      "A research paper by Sunil Kumar, examining Bitcoin mining as a flexible consumer of India's surplus renewable energy.",
    sections: [
      {
        heading: "The problem",
        points: [
          "India is targeting 500 GW of renewable capacity by 2030 — one of the world's largest expansion programmes.",
          "That growth has outpaced the grid: solar and wind are intermittent, and when generation exceeds local demand or transmission capacity, power is curtailed — stranded generation assets and wasted output.",
          "Curtailment undermines investor confidence in renewables and caps the economic return on infrastructure the country has already paid for.",
        ],
      },
      {
        heading: "Why Bitcoin mining fits",
        points: [
          "Unlike a factory or a smelter, a mining load can scale up or down within seconds — it is genuinely interruptible.",
          "That makes it uniquely suited to absorb surplus renewable energy that would otherwise be curtailed, and to act as a grid-balancing tool that improves renewable integration rather than competing with households for power.",
        ],
      },
      {
        heading: "What other countries have done",
        points: [
          "Bhutan — a sovereign, state-led model using surplus hydropower, adding a new revenue stream from energy that had limited local value.",
          "Ethiopia — a private-investment model: licences and incentives to attract miners, generating foreign direct investment and jobs.",
          "Texas (USA) — flexible mining loads inside the ERCOT demand-response framework, disconnecting rapidly when the grid is under stress.",
        ],
      },
      {
        heading: "Three models for India",
        points: [
          "State-led sovereign, private-investment-driven, and hybrid public–private.",
          "The paper's finding: a hybrid model is the most robust — it splits risk between public and private actors and balances public revenue with private-sector efficiency.",
          "Bitcoin's price volatility remains the single largest risk in every model, and the analysis treats it as such.",
        ],
      },
      {
        heading: "What would make it work",
        points: [
          "Enabling fiscal policy — tax holidays and accelerated depreciation — to draw domestic and global capital.",
          "'Renewable-Only Mining Zones' inside an SEZ framework, so mining stays tied to clean surplus and aligned with India's climate commitments — with scope to monetise carbon credits alongside.",
          "A phased roadmap: state-owned pilots to prove the concept, then public–private partnerships in SEZ and renewable clusters, then a durable dual framework.",
        ],
      },
      {
        heading: "The balanced view",
        points: [
          "Mining is presented as a complementary tool to monetise surplus energy — not a substitute for traditional power markets or industrial energy use.",
          "Success depends on interdisciplinary work across energy planners, policymakers, legal scholars, financial experts and technologists — and on compliance with international norms.",
        ],
      },
    ],
  },
  {
    slug: "sovereign-energy-monetization",
    title: "Sovereign Energy Monetization for India",
    summary:
      "A working paper proposing a limited government pilot to test whether stranded energy — renewable curtailment, hydro spillage and gas flaring — can be monetised through flexible, containerised computing deployed at the source. The objective is infrastructure efficiency, not speculation.",
    status: "Working paper · Anooj",
    audience:
      "A working paper by Anooj proposing a small, evidence-gathering government pilot — its stated objective is infrastructure efficiency, not speculation.",
    sections: [
      {
        heading: "The problem",
        points: [
          "Valuable domestic energy is routinely wasted — solar curtailed during oversupply, hydroelectric spillage in the monsoon, and associated petroleum gas flared at remote oil fields where pipelines can't reach.",
          "Electricity is perishable: when it can't reach a buyer, a productive resource becomes lost revenue for public-sector enterprises and a poor return on infrastructure.",
          "Separately, India relies on strong foreign-exchange inflows to manage external shocks — and those channels (exports, investment, remittances) turn on global conditions India can't fully control.",
        ],
      },
      {
        heading: "The proposal",
        points: [
          "Deploy modular, containerised computing directly at the site of generation — move the load to the energy, instead of moving the energy across expensive transmission.",
          "Stranded energy powers the equipment; the output is exported digitally over the internet and earns revenue in global markets; the load shuts down instantly whenever the grid needs the power.",
          "In effect, a virtual export channel for energy that would otherwise be wasted.",
        ],
      },
      {
        heading: "Why it doesn't threaten the grid",
        points: [
          "The key property is flexibility: unlike continuous industrial loads, computing can be interrupted immediately with no physical damage.",
          "That lets grid operators absorb surplus during low demand, disconnect the load at peak, stabilise frequency and reduce curtailment.",
          "The infrastructure behaves as a controllable demand-response asset — not a permanent consumer of electricity.",
        ],
      },
      {
        heading: "International experience",
        points: [
          "Bhutan — excess hydroelectric generation directed to state digital-asset production, adding revenue from energy of otherwise limited value.",
          "Texas (ERCOT) — flexible computing loads integrated into demand response, returning power to households and businesses under grid stress.",
          "Middle East — energy-producing nations increasingly evaluating digital infrastructure to monetise surplus and reduce waste.",
        ],
      },
      {
        heading: "A limited pilot for India",
        points: [
          "No national rollout — a 10–15 MW pilot over 12 months to gather evidence for informed policymaking.",
          "Candidate sites: ONGC flare-gas fields in Assam, NHPC hydro facilities with seasonal spillage, and high-curtailment renewable zones.",
          "Guardrails: no public power priority may be compromised; grid operators keep authority to curtail instantly; funded by private capital; government exposure kept minimal.",
          "Measure what matters: energy recovered, curtailment reduction, revenue, grid-response performance and environmental impact.",
        ],
      },
      {
        heading: "How it would be governed",
        points: [
          "A limited-mandate inter-ministerial working group — Power, Petroleum & Natural Gas, Finance, RBI, MeitY, NHPC and ONGC.",
          "If it works, the pilot points to additional revenue for public-sector enterprises, less renewable curtailment, lower flare-gas emissions and better use of assets already built.",
          "The question the paper puts to policymakers: keep wasting energy that cannot reach a market, or test technologies that can bring a market to the energy source.",
        ],
      },
    ],
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
    name: "Bitplebs · Goa",
    host: "Goa",
    date: "Oct 2025",
    detail:
      "BPI seminar sessions on Bitcoin's strategic power, law & policy, India's Bitcoin future, and reforming India's digital-asset policy.",
  },
  {
    name: "Regional Stakeholder Consultation on Crypto Assets",
    host: "GNLU · Bengaluru",
    date: "Nov 2025",
    detail:
      "Presented a functional taxonomy and a regulator-mapping framework for digital assets in India.",
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

// "Bitcoin in India" explainer (/bitcoin-in-india). Plain-language, grounded,
// RBI-safe. Every load-bearing fact re-verified against current 2026 sources.
export const EXPLAINER = {
  intro:
    "Straight answers to the questions Indians actually ask about Bitcoin — no hype, no jargon. For where we think policy should go, see our positions.",
  qas: [
    {
      q: "Is Bitcoin legal in India?",
      a: "Yes. Buying, holding, selling, and transferring Bitcoin is legal. It isn't legal tender — no one is obliged to accept it as payment — and there's no dedicated law for it yet, so it sits in a legal grey area, governed mainly through tax and anti-money-laundering rules.",
      source: "Finance Act 2022; FIU-IND registration regime",
    },
    {
      q: "Is Bitcoin the same as “crypto”?",
      a: "No — and the difference matters for policy. Bitcoin has no issuer, no company behind it, and a fixed supply; it behaves more like a digital commodity. “Crypto” spans thousands of tokens, many with issuers, promoters, and very different risks. Lumping them together produces blunt, ill-fitting rules — which is why we argue classification must come before regulation.",
      source: "",
    },
    {
      q: "How many Indians own Bitcoin?",
      a: "Honestly, no one knows precisely — there is no official count, and the headline numbers you see (often 100 million or more) are third-party estimates for “crypto” owners broadly, not Bitcoin. What is well established is the scale and direction: India has ranked first in the world for grassroots crypto adoption three years running. Bitcoin is the single largest crypto asset, so a very large number of Indians are exposed to it — which is exactly why we argue it should be treated on its own terms, not lumped in with every other token.",
      source: "Chainalysis Global Crypto Adoption Index (2023–2025)",
    },
    {
      q: "How is Bitcoin taxed in India?",
      a: "Gains are taxed at a flat 30% (Section 115BBH), with a 1% tax deducted at source on transfers (Section 194S). Losses can't be set off against other income or carried forward. This regime came in with the Finance Act 2022 and was left unchanged in the Union Budget 2026.",
      source: "Finance Act 2022; Union Budget 2026 (§115BBH, §194S)",
    },
    {
      q: "Is Bitcoin banned? Was it ever?",
      a: "It isn't banned. In 2018 the RBI restricted regulated banks from dealing with crypto businesses; in 2020 the Supreme Court set that restriction aside (Internet and Mobile Association of India v. RBI). Since then India has regulated the space through taxation and reporting, not prohibition.",
      source: "Supreme Court, IAMAI v. RBI (2020)",
    },
    {
      q: "Who regulates Bitcoin in India?",
      a: "There's no single regulator. It's a patchwork today — the income-tax authorities (CBDT) for the VDA tax, and FIU-IND for anti-money-laundering compliance by exchanges — with no dedicated Bitcoin or crypto statute. We've mapped which regulator is the natural fit for each kind of digital asset.",
      source: "",
    },
    {
      q: "Can I hold my own Bitcoin (self-custody)?",
      a: "Yes, holding your own Bitcoin is legal. But the right to self-custody isn't positively grounded in law — it exists by default rather than by clear protection. We think that right deserves explicit recognition.",
      source: "",
    },
    {
      q: "What about the RBI's digital rupee?",
      a: "The RBI is piloting a central bank digital currency — the digital rupee (e-rupee). A CBDC and Bitcoin are different things: one is sovereign digital cash issued by the central bank, the other an open, decentralised asset. They can coexist and answer different needs.",
      source: "",
    },
  ],
} as const;

// Press / media kit (/press). Copy is approved, ready-to-quote language.
export const PRESS = {
  oneLine:
    "Bitcoin Policy India (BPI) is an independent, Bitcoin-only policy think tank working to enable positive, rational, forward-looking regulation for Bitcoin in India.",
  oneParagraph:
    "Bitcoin Policy India (BPI) is an independent, Bitcoin-only effort in research, education, and policy — focused entirely on India. It makes the evidence-based case for clear, workable Bitcoin regulation: treating Bitcoin distinctly from the wider “crypto” category, rationalising its taxation, and grounding the rights to hold and self-custody. Founded by Kamal Gaur and Saqeer Shah, BPI is deliberately small, independent, and India-first.",
  naming:
    "Refer to us as “Bitcoin Policy India” (first mention) or “BPI” thereafter.",
  logoNote: "High-resolution logo and founder headshots are available on request.",
} as const;

