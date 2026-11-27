/**
 * All visitor-facing copy and data for the site (DESIGN.md section 6).
 * Components never hard-code text. Sources: DESIGN.md, public/resume.pdf and the
 * Southeast-Asia-Financial-Flows-Analytics README. Never invent facts here.
 *
 * Unfilled TODOs (DESIGN.md T1–T10) are simply absent, and the UI hides what needs them.
 */

// ── Types ────────────────────────────────────────────────────────────────────

export type CaseStudy = {
  slug: string;
  title: string;
  label: string;
  question: string;
  data?: string;
  approach: string[];
  approachSteps?: string[];
  results: { label: string; value: string }[];
  resultNotes?: string[];
  judgement?: string;
  nextTime?: string;
  stack: string[];
  image?: { src: string; alt: string; width: number; height: number };
  links: { label: string; url: string }[];
  status: "done" | "in-progress";
};

export type Role = {
  title: string;
  org: string;
  location: string;
  start: string;
  end: string;
  line: string;
  stack: string[];
};

export type Catch = {
  id: string;
  size: "big" | "medium" | "small" | "golden";
  title: string;
  body: string;
  metric?: string;
  url?: string;
};

export type FlowStage = "source" | "ingest" | "clean" | "ingest-clean" | "model" | "serve";

export type FlowTab = {
  id: string;
  label: string;
  /** `why` is TODO T6: the note card stays hidden until it is filled. */
  nodes: { stage: FlowStage; label: string; why?: string }[];
};

// ── Profile ──────────────────────────────────────────────────────────────────

export const profile = {
  name: "Uy (Herry) Vo",
  shortName: "Herry Vo",
  logo: "HV",
  logoIcon: "🎣",
  role: "Data Engineering · Math + CS @ Knox College",
  status: "🎣 Seeking Summer 2027 Data Engineering internships",
  email: "syquocuyvo@gmail.com",
  resumeUrl: "/resume.pdf",
  links: {
    github: "https://github.com/herryvo06",
    linkedin: "https://www.linkedin.com/in/herryvo/",
    site: "https://herryvo06.github.io",
    source: "https://github.com/herryvo06/herryvo06.github.io",
  },
  typedFacts: [
    "Grew up on the Lam River, Nghệ An, Vietnam",
    "4.0 GPA · Math + Computer Science",
    "Traced $16B of remittances flowing home",
    "Presented at the Rose-Hulman Math Conference 2026",
    "Planted 300 trees for a school in Sa Pa",
  ],
  typedFactsLabel: "Quick facts about me",
  pitch:
    "I turn messy public data into clean, tested pipelines, and I use math to check that the answers hold up.",
  about:
    "I grew up in Nghệ An, Vietnam, on the banks of the Lam River, and now study Mathematics and Computer Science at Knox College. I started with spreadsheets for 300+ students at a tutoring center, moved on to Python pipelines for research and World Bank data, and I'm now learning dbt, Airflow and the cloud. When I'm not debugging, I'm usually fishing.",
  stats: [
    { value: "4.0", label: "GPA" },
    { value: "$16B", label: "traced" },
    { value: "300", label: "trees planted" },
  ],
};

// ── Shared UI copy ───────────────────────────────────────────────────────────

export const ui = {
  skipLink: "Skip to content",
  mainNavLabel: "Main",
  homeLabel: ", Herry Vo, back to the source",
  resumeButton: "Résumé",
  downloadResume: "Download résumé",
  emailMe: "Email me",
  github: "GitHub",
  linkedin: "LinkedIn",
  scrollCue: "Follow the river",
  readCaseStudy: "Read the case study",
  closeCaseStudy: "Close the case study",
  caseStudyNavLabel: "Case study sections",
  inProgress: "🚧 in progress",
  flowTabsLabel: "Choose a project to see how its data flows",
  newTabHint: "(opens in a new tab)",
};

export const nav = [
  { id: "flows", label: "Flows" },
  { id: "catch", label: "Catch" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

/** River stations, in order from source to sea (RiverLine + section headers). */
export const sections = {
  source: { id: "source", km: "KM 0", name: "Source", vn: "Đầu nguồn" },
  flows: { id: "flows", km: "KM 5", name: "How my data flows", title: "How my data flows" },
  catch: { id: "catch", km: "KM 20", name: "The Catch", title: "The Catch", vn: "Mẻ cá" },
  experience: { id: "experience", km: "KM 30", name: "Downstream", title: "Downstream" },
  contact: {
    id: "contact",
    km: "KM 50",
    name: "The sea",
    vn: "Cửa Hội",
    title: "You've reached the sea. Let's talk.",
  },
} as const;

export const sectionOrder = ["source", "flows", "catch", "experience", "contact"] as const;

// ── KM 5 · How my data flows ─────────────────────────────────────────────────

export const flowIntro =
  "Every pipeline starts upstream. Pick a project and follow its data to the sea.";

export const stageNames: Record<FlowStage, string> = {
  source: "Sources",
  ingest: "Ingest",
  clean: "Clean",
  "ingest-clean": "Ingest · Clean",
  model: "Model",
  serve: "Serve",
};

export const flows: FlowTab[] = [
  {
    id: "sea-flows",
    label: "SEA Financial Flows",
    nodes: [
      { stage: "source", label: "World Bank WDI CSV · KNOMAD XLSX" },
      { stage: "ingest", label: "Python" },
      { stage: "clean", label: "pandas: country IDs standardised, zeros → missing" },
      { stage: "model", label: "275-row country-year panel" },
      { stage: "serve", label: "Matplotlib / Seaborn figures · CSV / JSON tables" },
    ],
  },
  {
    id: "breaking-games",
    label: "Breaking Games",
    nodes: [
      { stage: "source", label: "6 e-commerce datasets" },
      { stage: "ingest-clean", label: "MySQL relational schema" },
      { stage: "model", label: "SQL conversion, cart-abandonment and campaign metrics" },
      { stage: "serve", label: "HTML stakeholder dashboard" },
    ],
  },
  {
    id: "knox-its",
    label: "Knox ITS",
    nodes: [
      { stage: "source", label: "Jira Service Desk tickets" },
      { stage: "ingest-clean", label: "Excel VBA macros (100+ records/month)" },
      { stage: "model", label: "Standardised incident categories" },
      { stage: "serve", label: "PivotTable reports (saves 3 h per cycle)" },
    ],
  },
  {
    id: "dickson",
    label: "Dickson",
    nodes: [
      { stage: "source", label: "Polynomial parameters" },
      { stage: "ingest-clean", label: "Python, NumPy, SymPy" },
      { stage: "model", label: "Factorisation and root analysis" },
      { stage: "serve", label: "Matplotlib plots → LaTeX proofs" },
    ],
  },
];

// ── KM 20 · The Catch ────────────────────────────────────────────────────────

export const caseStudyHeadings = {
  question: "The question",
  data: "The data",
  approach: "The approach",
  result: "The result",
  nextTime: "What I'd change",
  links: "Links",
};

/** Short labels for the expanded case study's sticky mini-nav (wireframe 4.1). */
export const caseStudyNav = {
  question: "Question",
  data: "Data",
  approach: "Approach",
  result: "Result",
  nextTime: "Next time",
  links: "Links",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "southeast-asia-financial-flows",
    title: "Southeast Asia Financial Flows",
    label: "Case study · Data pipeline",
    question:
      "How much money flows home to Vietnam, and how does it compare with foreign investment?",
    data: "3 World Bank / KNOMAD datasets → 275 country-year records, 11 ASEAN economies, 2000–2024.",
    approach: [
      "A Python ETL pipeline: one command (run_pipeline.py) rebuilds every table and figure.",
      "The wide World Bank tables become a tidy country-year panel, with country names harmonised through ISO codes.",
    ],
    approachSteps: ["run_pipeline.py", "src/data.py", "analysis.py", "viz.py"],
    judgement:
      "KNOMAD stores “not reported” as 0 for some economies, so I treat zeros as missing. Cambodia and Indonesia show series breaks, so I flagged their growth numbers.",
    results: [
      { value: "$16.0B", label: "remittances in 2024" },
      { value: "10.1×", label: "growth since 2000" },
      { value: "#3", label: "in ASEAN" },
    ],
    resultNotes: [
      "Remittances grew from US$1.6B (2000) to US$16.0B (2024): 10.1×, a 10.1% compound annual growth rate.",
      "In 2024 they were 79% of foreign direct investment, the same order of magnitude.",
      "Vietnam ranks #3 in ASEAN, with an 18% share of the region's remittances.",
      "Relative to GDP, remittances peaked near 8% in 2007 and settled around 3.3%, because the economy grew even faster.",
    ],
    nextTime:
      "Move the cleaning into SQL/dbt models with tests, schedule a yearly refresh, and add a small dashboard.",
    stack: ["Python", "pandas", "NumPy", "Matplotlib", "Seaborn"],
    image: {
      src: "/projects/vietnam-remittance-trend.webp",
      alt: "Line chart of remittance inflows to Vietnam from 2000 to 2024, rising from 1,585 to 16,000 million US dollars, with year-on-year declines marked in 2001, 2009, 2012, 2015 and 2020.",
      width: 1200,
      height: 650,
    },
    links: [
      {
        label: "Repo",
        url: "https://github.com/herryvo06/Southeast-Asia-Financial-Flows-Analytics",
      },
    ],
    status: "done",
  },
  {
    slug: "dickson-polynomials",
    title: "Dickson Self-Reciprocal Polynomials",
    label: "Case study · Math research",
    question: "Can computation help test conjectures about Dickson self-reciprocal polynomials?",
    approach: [
      "A Python pipeline (NumPy, SymPy) that generates Dickson polynomials and automates factorisation and root analysis.",
    ],
    results: [{ value: "2026", label: "Rose-Hulman conference talk" }],
    resultNotes: [
      "Root-distribution and symmetry plots, turned into LaTeX proofs.",
      "Presented at the 2026 Rose-Hulman Undergraduate Mathematics Conference.",
    ],
    stack: ["Python", "NumPy", "SymPy", "Matplotlib", "LaTeX"],
    links: [
      {
        label: "Conference post",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7444042540237873152/",
      },
    ],
    status: "done",
  },
  {
    slug: "bite-forecast",
    title: "Bite Forecast",
    label: "Next project",
    question: "Currently being built: Bite Forecast, a fishing-conditions ELT pipeline.",
    approach: [],
    results: [],
    stack: [],
    links: [],
    status: "in-progress",
  },
];

// ── KM 30 · Downstream (titles, orgs, locations, dates exactly as on the résumé) ──

export const roles: Role[] = [
  {
    title: "Data Support Assistant",
    org: "ITS Team, Knox College",
    location: "Galesburg, IL",
    start: "Sep 2026",
    end: "Present",
    line: "Built Excel VBA macros that classify 100+ Jira records a month, saving 3 hours per reporting cycle.",
    stack: ["Excel VBA", "Jira", "Reftab"],
  },
  {
    title: "EdTech Analytics Assistant",
    org: "Brightspace LMS Team, Knox College",
    location: "Galesburg, IL",
    start: "Aug 2026",
    end: "Present",
    line: "Analysed 600+ Brightspace survey responses with pandas and Seaborn.",
    stack: ["pandas", "Seaborn"],
  },
  {
    title: "SQL & Database Architecture Extern",
    org: "Extern | Breaking Games",
    location: "Remote",
    start: "Aug 2026",
    end: "Oct 2026",
    line: "Designed a relational MySQL schema for 6 e-commerce datasets.",
    stack: ["MySQL", "SQL", "HTML"],
  },
  {
    title: "Undergraduate Researcher – Dickson Self-reciprocal Polynomials",
    org: "Knox College | Advisor: Prof. Neranga Fernando",
    location: "Galesburg, IL",
    start: "Nov 2025",
    end: "Mar 2026",
    line: "Built a Python pipeline to test conjectures; presented at Rose-Hulman 2026.",
    stack: ["Python", "NumPy", "SymPy", "Matplotlib", "LaTeX"],
  },
  {
    title: "Data Analytics Intern",
    org: "MathExpress Center",
    location: "Hanoi, Vietnam",
    start: "May 2025",
    end: "Aug 2025",
    line: "Built Power BI dashboards for 300+ students.",
    stack: ["Excel", "Power BI"],
  },
];

// ── KM 50 · Cửa Hội (footer) ────────────────────────────────────────────────

export const footer = {
  sourceLabel: "Source on GitHub",
  updatedLabel: "Last updated",
  builtBy: "Built by Herry Vo",
};

// ── 404 ──────────────────────────────────────────────────────────────────────

export const notFound = {
  label: "KM ? · Off the map",
  title: "This one got away 🎣",
  body: "The page you were fishing for isn't in this river.",
  back: "Back to the source",
};

// ── SEO (index.html must match; a test checks it) ────────────────────────────

export const seo = {
  title: "Herry Vo · Data Engineering",
  description:
    "Uy (Herry) Vo, Math + CS student at Knox College building data pipelines. Seeking Summer 2027 Data Engineering internships.",
  url: "https://herryvo06.github.io/",
};

/** Catches for KM 12 (Phase 2). Kept empty in Phase 1. */
export const catches: Catch[] = [];
