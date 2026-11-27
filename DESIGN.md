# DESIGN.md: Herry Vo, "Sông Lam" Data River Portfolio

> **How to use this file:** put it at the root of the `herryvo06.github.io` repo and give it to your coding agent (Claude Code, Cursor, etc.) as the project spec.
> Build one **phase** at a time (section 14). Each phase has a ready-to-paste prompt.
> Anything marked `[T1]`–`[T10]` or `[TODO]` is a fact only Herry can fill in (see the TODO table below). **The agent must never invent numbers, quotes, dates or links.**

**Canonical links (use these exact URLs everywhere: site, README, résumé, LinkedIn):**

| | URL |
|---|---|
| Website | https://herryvo06.github.io |
| GitHub | https://github.com/herryvo06 |
| LinkedIn | https://www.linkedin.com/in/herryvo/ |
| Email | syquocuyvo@gmail.com |
| Résumé | https://herryvo06.github.io/resume.pdf |

### Open content TODOs (Herry fills these in later)
Until a row is filled, the site **hides** the element that needs it. The agent must not guess any of these.

| # | Item | Used in | Value |
|---|---|---|---|
| T1 | Portrait photo (same as LinkedIn): yes/no + file | Hero, OG image | |
| T2 | Dickson project repo link (if public) | Case study 2, Flow tab | |
| T3 | One headline finding + one figure you own from the Dickson research | Case study 2 | |
| T4 | Ecotopia: year, your role, number of volunteers | Riverbank | |
| T5 | Ecotopia photo you own (no identifiable children's faces unless the school gave permission) | Riverbank | |
| T6 | One "why this choice" line per Flow-diagram node | KM 5 | |
| T7 | Fun facts: best catch (species + where), currently reading, favourite film | Cast a line | |
| T8 | Testimonial quotes (with permission): name, role, quote | Riverbank | |
| T9 | Booking link (Calendly / Cal.com), optional | Hero, footer | |
| T10 | Analytics: GoatCounter yes/no | `index.html` | |

---

## 0. Identity: the "only-me" brief

**Who:** Uy (Herry) Vo. B.S. Mathematics & Computer Science, Knox College (Galesburg, IL), expected June 2029. GPA 4.0/4.0, Dean's List (3 terms), Knox Trustees Scholar. International student from **Nghệ An, Vietnam**.

**Target:** Summer 2027 **Data Engineering** internships in the US, growing into **Analytics Engineering**.

**Only-me facts (reuse them in the site hero, GitHub bio and LinkedIn headline):**

| Fact | Source |
|---|---|
| Grew up in Nghệ An, the province the **Lam River (Sông Lam)** runs through | personal |
| 4.0 GPA · Math + CS · Knox Trustees Scholar | résumé |
| Presented research on **Dickson self-reciprocal polynomials** at the 2026 Rose-Hulman Undergraduate Mathematics Conference | résumé |
| Led an Ecotopia campaign that **planted 300 trees** for a low-income primary school in Sa Pa | personal |
| Traced **US$16.0B** of remittances flowing into Vietnam (10.1× since 2000) with a Python ETL pipeline | project repo |
| Loves **fishing**, math, films and comics | personal |

**The concept, in one sentence:**
Data engineering already speaks the language of rivers (*source, stream, upstream, downstream, lake, flow, lineage*). Herry grew up on the Lam River and fishes for fun. So the whole site is **a river that runs from source to sea**: every section is a stretch of the river, and every project is a catch.

**Why nobody can copy this:** the river is a real river from his home province, the trees are his campaign, the polynomials are his research, and the remittance flows are about his own country. The metaphor maps exactly onto data-engineering vocabulary, so the theme *explains* the work instead of decorating it.

**Do not borrow from the reference sites:** no rice terraces, no cats, no "plant a seedling" visitor button, no in-browser SQL editor, no sky that follows a timezone. Learn from their thinking, not their features.

---

## 1. Goals, audience, success criteria

**Primary audience:** a US recruiter or hiring manager for DE/AE internships, opening the link from a résumé or LinkedIn. They spend 30–60 seconds.

**Target device: desktop only.** The site is designed for screens ≥ 1024 px wide (laptop and desktop). Dedicated mobile and tablet layouts are out of scope. Below 1024 px there is no separate design, only a safety net: columns stack into one so nothing overlaps or scrolls sideways.

**In 10 seconds they must know:** name, "Data Engineering", Knox Math + CS, 4.0, open to Summer 2027 internships, and how to get the résumé.
**In 60 seconds they should remember:** "the river/fishing data engineer from Vietnam who traced $16B of remittances and did math research."

**Success criteria for launch:**
- [ ] Every fact on the site matches the résumé and LinkedIn
- [ ] Résumé downloads from `/resume.pdf` and contains the canonical links above
- [ ] Lighthouse (desktop preset) ≥ 90 for Performance, Accessibility, Best Practices and SEO
- [ ] Looks correct at 1280 px and 1920 px widths, and works with keyboard only
- [ ] Zero broken links, zero placeholder text visible to visitors

**Non-goals (for now):** a blog CMS, a backend, cookies or tracking pixels, dark/light toggle (the site is dark by design), multiple languages. Privacy-friendly analytics (GoatCounter, no cookies) is the only allowed exception, and only if T10 = yes.

---

## 2. Voice and copy rules

- English, first person, short sentences, light humor about fishing and data. Examples:
  - "I follow data from the source to the sea."
  - "Patient enough to fish, stubborn enough to debug."
  - "Every pipeline starts upstream."
- Every project line contains **a number** that comes from the real repo or résumé.
- Experience titles, organisations and dates must **match the résumé and LinkedIn exactly**.
- Vietnamese words appear only as small accents (section labels, alt text) and always sit next to the English.
- No buzzword lists ("passionate, hardworking, detail-oriented"). Show the evidence instead.

---

## 3. Visual design system

### 3.1 Palette ("Lam River at dusk")
| Token | Hex | Use |
|---|---|---|
| `--deep` | `#0B2A3C` | page background (deep river water) |
| `--current` | `#14506B` | cards, panels |
| `--shallow` | `#2E8C9A` | links, interactive elements, borders |
| `--foam` | `#E8F1F2` | primary text |
| `--silt` | `#9FB4BC` | secondary text |
| `--dusk` | `#F2A65A` | accent: CTAs, highlights, the fishing float |
| `--leaf` | `#6BBF7A` | tree accent (Riverbank section) and success states |

Every text/background pair must meet WCAG AA (4.5:1 for body text). `--silt` is only for text ≥ 14 px on `--deep`.

### 3.2 Typography
| Role | Font | Sizes |
|---|---|---|
| Display (name, section titles) | **Fraunces** (warm serif, like a fishing logbook) | 72 px name; 40 px section titles |
| Body | **Inter** | 18 px, line-height 1.6 |
| Data, numbers, labels, code | **JetBrains Mono** | 14 px |

Load via `@fontsource` packages (self-hosted, no Google Fonts request), with `font-display: swap`.

### 3.3 Spacing, layout, breakpoints
- 8 px spacing scale (`4, 8, 16, 24, 32, 48, 64, 96`).
- Content max-width 1100 px; text blocks max 68 characters wide.
- Design target: **1280 px** wide; must also look right at 1024 px and 1920 px. Desktop-first.
- Safety net below 1024 px: grids become one column, the RiverLine is hidden. No other small-screen work.
- Border radius 12 px on cards, 999 px on chips and buttons.

### 3.4 Motifs
- **RiverLine:** a thin animated river on the left edge connects every section like a pipeline DAG. Each section is a "station" node; the active station glows `--dusk`.
- Section labels look like river kilometre markers in mono: `KM 0 · SOURCE`, `KM 20 · THE CATCH`.
- Ripples on hover. A small **fishing float** icon marks interactive elements and is the favicon.
- **Math easter egg (Phase 4):** the hero wave pattern is drawn from the real roots of a Dickson polynomial, computed in Python and exported as SVG path data. Tooltip: "These ripples are the roots of a Dickson polynomial. Ask me about it."

### 3.5 Motion rules
- Durations 150–400 ms, ease-out. Scroll-in reveals only once per element.
- `prefers-reduced-motion: reduce` → the river stops flowing, fish stand still, counters show final values.
- No animation may block reading or delay content.

### 3.6 Illustration style: "modern flat river"
All illustrations are **hand-built inline SVG React components** (no stock art, no clip art, no emoji inside illustrations, no AI-generated raster images). Style:

| Rule | Spec |
|---|---|
| Look | Modern **flat geometric vector**: clean shapes, rounded corners, generous negative space. Think product-illustration style, not cartoon, not hand-drawn. |
| Depth | Built from **3–4 layered bands** (sky → far hills → water surface → deep water), each slightly lighter towards the surface. Gentle parallax on scroll (max 20 px shift; off under reduced motion). |
| Color | Only palette tokens. Soft **linear gradients** inside one hue family (e.g. `--current` → `--deep`). `--dusk` is reserved for the single focal point in each scene (float, sun, CTA). |
| Light | One consistent light source: low dusk sun from the **upper right**. Highlights on the right edge of shapes, a thin `--dusk` reflection line on the water. |
| Lines | Mostly fills, no heavy outlines. Strokes only for details (fishing line, ripples, tree trunks): 1.5 px, round caps, `--foam` at 40–70% opacity. |
| Shapes | Fish = ellipse body + triangle tail + small circle eye, 3 sizes; golden fish has a soft glow. Trees = circle or rounded-triangle crown on a thin trunk, 3 variants rotated for variety. Hills = smooth Bézier curves. Ripples = concentric open arcs. Float = two-tone capsule (`--dusk` top, `--foam` bottom). |
| Detail level | Minimal: an illustration must still read at 120 px wide. Max ~60 path elements per scene. |
| Texture | Optional very subtle grain overlay (≤ 4% opacity) on large water areas. Nothing else. |
| Reuse | Shared primitives in `src/components/art/` (`Fish`, `Tree`, `Ripple`, `Float`, `Hills`, `Water`), composed into scenes. |
| Accessibility | Decorative art is `aria-hidden="true"`; any art that carries meaning (e.g. the tree counter) gets a text equivalent. |

Scenes to build: **Hero spring** (a small source between two hills, the river starts as a thin line and flows down-left into the RiverLine), **Cast a line river** (side view: surface band, 3 depth bands with fish, a rod tip entering from the top right), **Riverbank** (a long riverbank strip where 300 tiny trees appear in rows), **Cửa Hội** (the river widening into a horizon line at the sea, dusk sun on the right), **404** (an empty hook and a ripple).

---

## 4. Information architecture

One page, top to bottom = upstream to downstream. A sticky top nav (logo "HV 🎣" + links + "Résumé" button).

| KM | Section (anchor) | Mentorship-guide role | Content | Phase |
|---|---|---|---|---|
| 0 | **Source** · Đầu nguồn (`#source`) | Hero | Name, role, rotating facts, CTAs | 1 |
| 5 | **How my data flows** (`#flows`) | Show how you work | Pipeline diagram of real work | 1 |
| 12 | **Cast a line** · Thả câu (`#cast`) | Something interactive | Fishing mini-game, every catch is a real fact | 2 |
| 20 | **The Catch** · Mẻ cá (`#catch`) | Projects as case studies | 2–3 case studies | 1 |
| 30 | **Downstream** (`#experience`) | Experience timeline | Roles, matching the résumé | 1 |
| 38 | **Riverbank** · Bờ sông (`#riverbank`) | Impact + testimonials | 300 trees + quotes | 2 |
| 45 | **Field notes** · Nhật ký (`#notes`) | Writing | Short posts | 4 |
| 50 | **Cửa Hội** (`#contact`) | Contact + footer | Email, résumé, links | 1 |

*(Cửa Hội is where the Lam River meets the sea in Nghệ An, so the footer is literally where the river ends.)*

Project detail pages live at `/projects/<slug>` (Phase 2). Until then, case studies expand inline.

### 4.1 Wireframes
Layout grid: 12 columns, 24 px gutters, content max-width 1100 px, centred. Alternate section backgrounds between `--deep` and a 4% lighter tint so sections are easy to tell apart. Vertical rhythm: 96 px between sections.

**Nav (all pages)**
```
┌──────────────────────────────────────────────────────────┐
│ HV 🎣     Flows  Catch  Experience  Contact      [Résumé]│
└──────────────────────────────────────────────────────────┘
 sticky; transparent at top, --deep with blur after 40 px scroll;
 the active section's link is underlined in --dusk
```

**KM 0 · Source (Hero)**: text left (cols 1–7), illustration right (cols 8–12)
```
Min-height: 100vh − nav
┌─┬────────────────────────────────────────┬──────────────────────────┐
│R│ KM 0 · SOURCE · Đầu nguồn               │                          │
│i│                                         │     [Hero spring art]    │
│v│ Uy (Herry) Vo                (72px)     │   hills, source, river   │
│e│ Data Engineering · Math + CS @ Knox     │   flowing down-left      │
│r│ ▍Grew up on the Lam River…  (typed)     │   into the RiverLine ↙   │
│L│                                         │                          │
│i│ One-line pitch (max 2 lines, --silt)    │                          │
│n│ [🎣 Seeking Summer 2027 DE internships] │                          │
│e│ [Download résumé]  [Email me]           │                          │
│ │ (GitHub) (LinkedIn)                     │                          │
└─┴────────────────────────────────────────┴──────────────────────────┘
         ↓ "Follow the river" scroll cue (bobbing float)

```

**About strip** (directly under the hero, same section): a 2–3 sentence paragraph (section 5) at max 68 characters wide, with 3 stat chips beside it: `4.0 GPA` · `$16B traced` · `300 trees planted`.

**KM 5 · How my data flows**
```
┌──────────────────────────────────────────────────────────────────┐
│ KM 5 · HOW MY DATA FLOWS                                          │
│ [SEA Flows] [Breaking Games] [Knox ITS] [Dickson]   ← tabs        │
│                                                                   │
│  (Sources) ══〰══ (Ingest) ══〰══ (Clean) ══〰══ (Model) ══〰══ (Serve) │
│   WDI CSV         Python          pandas         275 rows     charts│
│   KNOMAD XLSX                                                     │
│                                                                   │
│ ┌ note card: "Why pandas here? …" (appears on node hover/focus) ┐ │
└──────────────────────────────────────────────────────────────────┘
```

**KM 12 · Cast a line** (Phase 2)
```
┌──────────────────────────────────────────────────────────────────┐
│ KM 12 · CAST A LINE · Thả câu                  📓 Caught 3/12    │
│ ~~~~~~~~~~~~~~~~~~~~~~~~~~~ surface ~~~~~~~~~~~~~~~~~~~~ rod ╲     │
│        ◁○  small fish                               │      │
│                 ◁◯   medium fish                     │ line  │
│   ◁⬭  big fish                    ◁⬭                ●float │
│              ✦◁◯ golden                                     │
│                    [ 🎣 Cast ]   Show all catches →          │
│ ┌ catch card slides up from bottom: title · line · metric · link ┐│
└──────────────────────────────────────────────────────────────────┘
Height: 420 px. Cast button is ≥ 48px tall, centered.
```

**KM 20 · The Catch**
```
Collapsed card (2 per row for done cards; in-progress card full width, dashed border)
┌───────────────────────────────┐
│ [chart image 16:9, rounded]   │
│ CASE STUDY · DATA PIPELINE    │  ← mono label
│ Southeast Asia Financial Flows│
│ "How much money flows home…?" │
│ [$16.0B] [10.1×] [#3 ASEAN]   │  ← metric chips (--dusk numbers)
│ Python · pandas · Seaborn     │
│ [Read the case study ↓] [Repo]│
└───────────────────────────────┘

Expanded (spans the full row; sticky mini-nav on the left)
┌────────────┬─────────────────────────────────────────────┐
│ Question   │ The question  ………                           │
│ Data       │ The data      ………                           │
│ Approach   │ The approach  [diagram] ………                 │
│ Result     │ The result    [chart] + 3 big numbers        │
│ Next time  │ What I'd change ………                         │
└────────────┴─────────────────────────────────────────────┘
```

**KM 30 · Downstream**
```
Dates left, river rail, cards right
  Sep 2026 – Present   ●──┐ ┌─────────────────────────────────────┐
                          │ │ Data Support Assistant               │
                          │ │ ITS Team, Knox College · Galesburg   │
                          │ │ one line with a number               │
                          │ │ [Excel VBA] [Jira] [Reftab]          │
                          │ └─────────────────────────────────────┘
  Aug 2026 – Present   ●──┤ …
```

**KM 38 · Riverbank** (Phase 2)
```
┌──────────────────────────────────────────────────────────────────┐
│ KM 38 · RIVERBANK · Bờ sông                                       │
│ ┌────────────────┐  ┌───────────────────────────────────────────┐ │
│ │  300           │  │ 🌳🌳🌳🌳🌳🌳 [Riverbank art: rows of trees    │ │
│ │  trees planted │  │ 🌳🌳🌳🌳     appear as you scroll]            │ │
│ │  for a school  │  └───────────────────────────────────────────┘ │
│ │  in Sa Pa      │                                                │
│ └────────────────┘  (testimonial bottles row: hidden until T8)    │
└──────────────────────────────────────────────────────────────────┘
(Tree glyphs above are placeholders for the SVG tree primitive.)
```

**KM 50 · Cửa Hội (footer)**
```
┌──────────────────────────────────────────────────────────────────┐
│ [Cửa Hội art: the river widens into the sea, dusk sun on the right]│
│            You've reached the sea. Let's talk.        (40px)      │
│              [Download résumé]   [Email me]                       │
│                    (GitHub)  (LinkedIn)                           │
│ ──────────────────────────────────────────────────────────────── │
│ Source on GitHub · Last updated <date> · Built by Herry Vo        │
└──────────────────────────────────────────────────────────────────┘
```

---

## 5. Section specs + acceptance criteria

### KM 0 · Source (Hero)
- `Uy (Herry) Vo`, subtitle **"Data Engineering · Math + CS @ Knox College"**.
- Typed line rotating every 2.5 s through:
  1. "Grew up on the Lam River, Nghệ An, Vietnam"
  2. "4.0 GPA · Math + Computer Science"
  3. "Traced $16B of remittances flowing home"
  4. "Presented at the Rose-Hulman Math Conference 2026"
  5. "Planted 300 trees for a school in Sa Pa"
- **One-line pitch (draft, Herry may edit):** "I turn messy public data into clean, tested pipelines, and I use math to check that the answers hold up."
- **About strip (draft, Herry may edit):** "I grew up in Nghệ An, Vietnam, on the banks of the Lam River, and now study Mathematics and Computer Science at Knox College. I started with spreadsheets for 300+ students at a tutoring center, moved on to Python pipelines for research and World Bank data, and I'm now learning dbt, Airflow and the cloud. When I'm not debugging, I'm usually fishing."
- Status chip: "🎣 Seeking Summer 2027 Data Engineering internships".
- CTAs: **Download résumé** (`/resume.pdf`, primary, `--dusk`) and **Email me** (secondary). Icon links: GitHub, LinkedIn (canonical URLs).
- Background: the river starts as a thin spring and widens as you scroll.

**Accept when:** name, role, status, both CTAs and icons are visible without scrolling at 1280×720 and 1024×640; the typed line has a static fallback for screen readers (`aria-live="off"`, the full list in visually hidden text).

### KM 5 · How my data flows
A diagram drawn as a river with tributaries: **Sources → Ingest → Clean → Model → Serve**. Tabs switch between real work:

| Tab | Sources | Ingest/Clean | Model | Serve |
|---|---|---|---|---|
| SEA Financial Flows | World Bank WDI CSV, KNOMAD XLSX | Python, pandas (country IDs standardised, zeros → missing) | 275 country-year panel | Matplotlib/Seaborn figures, CSV/JSON tables |
| Breaking Games extern | 6 e-commerce datasets | MySQL relational schema | SQL conversion / cart-abandonment / campaign metrics | HTML stakeholder dashboard |
| Knox ITS | Jira Service Desk tickets | Excel VBA macros (100+ records/month) | Standardised incident categories | PivotTable reports (saves 3 h per cycle) |
| Dickson research | Polynomial parameters | Python, NumPy, SymPy | Factorisation and root analysis | Matplotlib plots → LaTeX proofs |

Clicking or focusing a node shows a one-line "why this choice" note `[T6]` (hide the note card until filled).

**Accept when:** tabs are keyboard-navigable (arrow keys, `role="tablist"`); all text comes from `site.ts`.

### KM 12 · Cast a line (signature interactive, Phase 2)
- A side-view river with fish at different depths. **Each fish = one real item:**
  - big fish = projects (size scales with commit count from `river.json` in Phase 3; fixed sizes before that)
  - medium fish = experiences
  - small fish = fun facts: best catch, currently reading, favourite film `[T7]` (skip any fish whose fact is not filled)
  - one golden fish = the Dickson polynomial easter egg
- Press **Cast** (button, or Space when focused). The line drops, the float bobs for 1–2 s, then hooks a random fish not yet caught. A catch card slides up: title, one line, a number, a link.
- A logbook shows "Caught 3/12". Catching everything reveals: "You caught everything. Let's talk." with the email button.
- Fallback button "Show all catches" opens the full list.

**Accept when:** works with mouse and keyboard; never repeats a fish until all are caught; catch logic is a pure function with unit tests; reduced-motion skips the animation and shows the card immediately.

### KM 20 · The Catch (case studies)
Card → expands inline (Phase 1) or links to `/projects/<slug>` (Phase 2). Template:
**The question → The data → The approach (diagram) → The result (number + chart) → What I'd change → Links**

1. **Southeast Asia Financial Flows** · `southeast-asia-financial-flows`
   - Question: "How much money flows home to Vietnam, and how does it compare with foreign investment?"
   - Data: 3 World Bank / KNOMAD datasets → 275 country-year records, 11 ASEAN economies, 2000–2024.
   - Approach: Python ETL (`run_pipeline.py` → `src/data.py`, `analysis.py`, `viz.py`).
   - Results: US$1.6B → US$16.0B (10.1×, 10.1% CAGR). 79% of FDI in 2024. #3 in ASEAN with an 18% share. Remittances/GDP peaked near 8% in 2007 and settled around 3.3%.
   - Judgement worth showing: KNOMAD zeros treated as missing; series breaks flagged for Cambodia and Indonesia.
   - What I'd change: SQL/dbt models with tests, a scheduled yearly refresh, a small dashboard.
   - Image: `reports/figures/01_vietnam_remittance_trend.png` from the repo (copy into `public/projects/`, compress to WebP).
   - Link: https://github.com/herryvo06/Southeast-Asia-Financial-Flows-Analytics
2. **Dickson Self-Reciprocal Polynomials** · `dickson-polynomials`
   - Question: "Can computation help test conjectures about Dickson self-reciprocal polynomials?"
   - Approach: a Python pipeline (NumPy, SymPy) that generates polynomials, automates factorisation and root analysis.
   - Result: root-distribution and symmetry plots turned into LaTeX proofs; presented at Rose-Hulman 2026.
   - Links: LinkedIn post https://www.linkedin.com/feed/update/urn:li:activity:7444042540237873152/ · repo `[T2]`
   - Figure and headline finding: `[T3]` (until filled, show the card with text only)
3. **Next project** (placeholder): "Currently being built: Bite Forecast, a fishing-conditions ELT pipeline." Shown with a "🚧 in progress" chip. Replace with the real case study when ready (section 13).

**Accept when:** every number matches the source repo or résumé; each case study links to a repo with a proper README; images have alt text and explicit width/height.

### KM 30 · Downstream (experience)
A vertical timeline along the river, newest first, copied **exactly** from the résumé:

| Role | Organisation | Location | Dates | Line (number) |
|---|---|---|---|---|
| Data Support Assistant | ITS Team, Knox College | Galesburg, IL | Sep 2026 – Present | VBA macros classify 100+ Jira records/month, saving 3 h per reporting cycle |
| EdTech Analytics Assistant | Brightspace LMS Team, Knox College | Galesburg, IL | Aug 2026 – Present | Analysed 600+ survey responses with pandas and Seaborn |
| SQL & Database Architecture Extern | Extern · Breaking Games | Remote | Aug 2026 – Oct 2026 | Designed a MySQL schema for 6 e-commerce datasets |
| Undergraduate Researcher | Knox College (Advisor: Prof. Neranga Fernando) | Galesburg, IL | Nov 2025 – Mar 2026 | Python pipeline to test conjectures; presented at Rose-Hulman 2026 |
| Data Analytics Intern | MathExpress Center | Hanoi, Vietnam | May 2025 – Aug 2025 | Power BI dashboards for 300+ students |

Each role also shows stack chips.
**Accept when:** text matches the résumé character for character for titles, organisations and dates.

### KM 38 · Riverbank (impact + testimonials, Phase 2)
- **Ecotopia:** 300 small trees grow along the riverbank as the section scrolls in (counter 0 → 300). Copy: "Before I built pipelines, I planted trees: 300 of them, for a primary school in Sa Pa." `[T4, T5]` (show text without the photo until T5 is filled)
- **Testimonials** as "messages in bottles" that open on click. Only real quotes, used with permission. Candidates: Prof. Neranga Fernando, ITS supervisor, Brightspace supervisor `[T8]`. **Hide the testimonials block until there is at least one real quote.**

### KM 45 · Field notes (Phase 4)
Short posts from real experience. Ideas: "KNOMAD stores missing data as 0, and what that taught me about trusting sources" · "What fishing taught me about debugging pipelines". Each shows date, tag and read time. Hide the section until the first post exists.

### KM 50 · Cửa Hội (footer)
- Heading: "You've reached the sea. Let's talk."
- Repeat **Download résumé**, **Email**, GitHub, LinkedIn (canonical URLs).
- Small print: "Source on GitHub" (link to the repo) · "Last updated: <build date>" · template credit if any.

---

## 6. Content model (`src/content/site.ts`)

All copy and data live in one typed file. Components never hard-code text. Starter shape:

```ts
export const profile = {
  name: "Uy (Herry) Vo",
  role: "Data Engineering · Math + CS @ Knox College",
  status: "Seeking Summer 2027 Data Engineering internships",
  email: "syquocuyvo@gmail.com",
  resumeUrl: "/resume.pdf",
  links: {
    github: "https://github.com/herryvo06",
    linkedin: "https://www.linkedin.com/in/herryvo/",
    site: "https://herryvo06.github.io",
  },
  typedFacts: [ /* the 5 lines from section 5 */ ],
};

export type CaseStudy = {
  slug: string; title: string; question: string; data: string;
  approach: string[]; results: { label: string; value: string }[];
  judgement?: string; nextTime: string; stack: string[];
  image?: { src: string; alt: string }; links: { label: string; url: string }[];
  status: "done" | "in-progress";
};

export type Role = { title: string; org: string; location: string;
  start: string; end: string; line: string; stack: string[] };

export type Catch = { id: string; size: "big" | "medium" | "small" | "golden";
  title: string; body: string; metric?: string; url?: string };

export type FlowTab = { id: string; label: string;
  nodes: { stage: "source"|"ingest"|"clean"|"model"|"serve"; label: string; why?: string }[] };
```
Add a Vitest test that validates `site.ts`: no empty strings, every URL starts with `https://` or `/`, no `[TODO` or `[T1]`–`[T10]` placeholders in fields that are rendered (TODO items must be hidden or filtered out).

---

## 7. Component inventory

| Component | Responsibility | Notes |
|---|---|---|
| `Nav` | sticky nav, active-section highlight, Résumé button | `aria-current` on the active link |
| `RiverLine` | animated river + station nodes, scroll progress | `IntersectionObserver`; decorative → `aria-hidden` |
| `SectionHeader` | KM marker + title + optional Vietnamese accent | |
| `Hero` | KM 0 | typed line component with reduced-motion fallback |
| `FlowDiagram` | KM 5 tabs + SVG diagram | horizontal river of 5 stations |
| `CastALine` | KM 12 game | logic in `lib/catch.ts` (pure, tested) |
| `CaseStudyCard` / `CaseStudyPage` | KM 20 | shared data, two layouts |
| `Timeline` | KM 30 | semantic `<ol>` |
| `Riverbank` | KM 38 trees + bottles | hidden parts when data missing |
| `Footer` | KM 50 | |

---

## 8. Tech stack and repo structure

**Two repos**, like a real data platform: a pipeline repo and a serving repo.

### Repo A: `herryvo06/herryvo06.github.io` (website, exists already)
- **Vite + React + TypeScript**, Tailwind CSS, Framer Motion, React Router with `BrowserRouter` (clean URLs like `/projects/dickson-polynomials`). **Decision:** deep links on GitHub Pages use the `404.html` redirect technique (a `public/404.html` that stores the path and redirects to `/`, restored by a small script in `index.html`). Do not use `HashRouter`.
- A themed **404 page** inside the app for unknown routes: the 404 art scene + "This one got away 🎣" + a button back to the source.
- Vitest + Testing Library. ESLint + Prettier.

```
.github/workflows/pages.yml
public/
  resume.pdf            # ← the résumé lives HERE, with this exact lowercase name
  og.png                # 1200×630 share image
  favicon.svg           # fishing float
  projects/*.webp
scripts/sync_hub.py     # Phase 3: copies river.json from the hub repo
src/
  content/site.ts
  data/hub/river.json   # Phase 3
  components/…          # see section 7
  lib/catch.ts
  styles/tokens.css
  App.tsx, main.tsx
index.html              # Vite entry (replaces the current placeholder)
DESIGN.md               # this file
README.md               # what the site is, stack, how to run, architecture diagram
```

### Repo B: `herryvo06/herryvo06` (profile README + data hub, Phase 3)
```
.github/workflows/refresh.yml   # daily cron: run pipeline, commit outputs on change
hub/extract.py    # GitHub REST API → data/raw/github_YYYY-MM-DD.json
hub/transform.py  # raw → clean tables (DuckDB SQL)
hub/contracts.py  # pydantic schema checks: fail the run on bad data
hub/render.py     # river.svg + README sections
tests/            # pytest
data/river.json   # served to the website
assets/river.svg
README.md
```

---

## 9. Deployment (GitHub Pages via GitHub Actions)

The Pages source is already set to **GitHub Actions**. Workflow `.github/workflows/pages.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm test -- --run
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```
- `vite.config.ts`: `base: "/"` (this is a user site at the domain root).
- **Quality gates (Phase 2, separate workflow `quality.yml` on pull requests):**
  - link check of the built site with `lycheeverse/lychee-action` (fail on broken links; LinkedIn may block bots, so exclude `linkedin.com` and check it by hand)
  - Lighthouse CI (`treosh/lighthouse-ci-action`) on the desktop preset, failing below 90 in any category
- Work on a branch, open a pull request, merge to `main`. The quality checks run on the PR; the deploy runs on `main`.
- Phase 3 adds a step before `npm ci`: fetch `river.json` from the hub repo, plus a `repository_dispatch` trigger so the site rebuilds when the hub refreshes.

---

## 10. The hub pipeline (Phase 3: the portfolio is itself a DE project)

```
GitHub API ──extract──▶ raw JSON ──DuckDB SQL──▶ clean tables ──▶ river.json ──▶ website
                                    │                          └──▶ river.svg ──▶ profile README
                                    └── pydantic contracts + pytest (fail fast on bad data)
```
- **Extract:** public repos, commits in the last 52 weeks, languages, stars. Auth with the Actions `GITHUB_TOKEN`, never a committed key.
- **Transform (SQL):** weekly commit counts, top languages, per-repo activity, last-updated date.
- **Serve:** `river.json` = `{ generated_at, weeks: [{week, commits}], repos: [{name, commits, stars, lang, url}], languages: [{name, pct}] }`.
- **Render `river.svg`:** a river flowing left to right across 52 weeks. Its **width** each week = commits that week; each pinned repo is a fish at its last-active week. The README and website show the same river: one identity, one dataset.
- **Idempotent:** re-running on the same day produces the same output; commit only when the data changed.
- **Failure handling:** if extraction or a contract check fails, the run fails loudly (red Action, no commit) and the last good `river.json` stays in place. The website build never depends on the hub being up: `sync_hub.py` falls back to the committed copy in `src/data/hub/`, and the UI falls back to fixed fish sizes if the file is missing or older than 30 days.
- The hub README documents this with the diagram. Interview talking point: *"My portfolio runs on a scheduled ELT pipeline with data contracts."*

---

## 11. GitHub profile README (same identity)

1. `river.svg` banner (static placeholder in Phase 1, generated in Phase 3) + header "Following data from source to sea 🎣".
2. **About:** Math + CS @ Knox College (4.0) · seeking Summer 2027 DE/AE internships · from Nghệ An, Vietnam; fishes; planted 300 trees.
3. **Now building:** the current DE project, with a link.
4. **Tech stack** badges: *Languages* (Python, SQL) · *Data* (pandas, NumPy, MySQL, Power BI, Excel) · *Learning now* (dbt, Airflow, cloud).
5. **Experience** mini-table matching the résumé.
6. Links: portfolio · LinkedIn · email · résumé (canonical URLs).

### 11.1 LinkedIn alignment (same story, same facts)
- **Headline (draft):** "Math + CS @ Knox College (4.0) | Aspiring Data Engineer | Python · SQL · learning dbt & Airflow | From Nghệ An, Vietnam 🎣"
- **About:** reuse the site's About strip, then add one line per case study and the portfolio link.
- **Featured:** portfolio site · SEA Financial Flows repo · Dickson conference post.
- **Contact info:** website = https://herryvo06.github.io, custom URL = `linkedin.com/in/herryvo`.
- Experience titles and dates identical to the résumé and section 5.

**Profile sidebar:** same photo as LinkedIn. Name "Uy (Herry) Vo". Bio: "Math + CS @ Knox College · Data Engineering · From Nghệ An 🇻🇳". Website field: https://herryvo06.github.io. Pin: SEA Financial Flows first, then the Dickson repo, then the hub. Each pinned repo has a description (what + stack) and topics.

---

## 12. Quality: accessibility, performance, SEO

**Accessibility**
- Semantic landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`); one `h1`.
- Visible focus ring (`--dusk`, 2 px); skip-to-content link.
- All decorative SVG `aria-hidden`; meaningful images have alt text.
- The game and the diagram work fully with the keyboard.

**Performance budget**
- JS ≤ 150 KB gzipped on first load; lazy-load `CastALine` and project pages.
- Images WebP, explicit dimensions, `loading="lazy"` below the fold.
- LCP < 2.5 s, CLS < 0.1 (desktop preset).

**SEO and sharing**
- `<title>Herry Vo · Data Engineering</title>`
- Meta description: "Uy (Herry) Vo, Math + CS student at Knox College building data pipelines. Seeking Summer 2027 Data Engineering internships."
- Open Graph + Twitter card tags with `og.png` (river + name + role), `og:url` = https://herryvo06.github.io
- `robots.txt`, `sitemap.xml`, canonical link tag.
- **OG image spec:** 1200×630, `--deep` background, the Cửa Hội art in the bottom third, "Uy (Herry) Vo" in Fraunces 72 px, "Data Engineering · Math + CS @ Knox College" in Inter 32 px. Build it as an SVG in the repo, export it to PNG.

**Browser support**
- Latest 2 versions of Chrome, Edge, Firefox and **Safari (macOS)**. Safari differs most in SVG animation and `backdrop-filter`, so test there too.
- Widths 1024 px → 1920 px. No horizontal scrolling at any width (the one-column safety net handles anything narrower).

---

## 13. Roadmap: the projects that make the site credible

1. **"Bite Forecast": a fishing-conditions ELT pipeline (flagship DE project).**
   Question: *"When are fish most likely to bite on rivers near Galesburg?"*
   - Sources: USGS Water Services API (river flow, water temperature) + a weather API (pressure, wind) + **Herry's own fishing log**, which is data nobody else has.
   - Stack: Python ingestion → DuckDB or BigQuery → **dbt** staging/marts with tests → **Airflow** (or Dagster) daily schedule → a small dashboard. CI: sqlfluff + `dbt build` on each PR. Docker Compose so anyone can run it.
   - Math angle: a simple statistical model of conditions vs. catches, with honest caveats about sample size.
2. **Upgrade SEA Financial Flows to analytics engineering:** dbt models (staging → intermediate → marts), tests, docs, a scheduled yearly refresh.
3. **A tiny tool other people can use**, e.g. a Python package that cleans KNOMAD/World Bank files (country codes, zeros-as-missing), published to PyPI.

---

## 14. Build phases + prompts to paste

### Phase 0: housekeeping (Herry, manual)
- [x] Repo `herryvo06.github.io` created; Pages source = GitHub Actions
- [ ] **Update the résumé PDF itself** so its header shows `linkedin.com/in/herryvo` and `github.com/herryvo06` (the current PDF still shows the old links). Re-export it.
- [ ] Put the new PDF at **`public/resume.pdf`** (lowercase, fixed name) once the Vite project exists. Delete `Herry_Resume.pdf` from the repo root. Keep the name fixed so links never break: to update later, just overwrite the file.
- [ ] Update the LinkedIn contact info and the GitHub bio/website field to the canonical links.

### Commit rules (all phases)
- Commit after **every small, meaningful change**: one config, one art primitive, one component, one section, one test file, one workflow, one bug fix.
- Commit only after `npm run build` and the tests pass. Never commit broken code.
- Stage only the files of that change. Use Conventional Commit messages in English, imperative mood, ≤ 70 characters, e.g. `feat(hero): add typed facts`, `chore: configure Tailwind tokens`, `fix(nav): highlight active section`, `ci: add Pages deploy workflow`.
- Never push and never rewrite history (amend, rebase, force) unless Herry asks.
- These rules, plus the hard rules in the Phase 1 prompt, are saved in `CLAUDE.md` so every session follows them.

### Phase 1: MVP, desktop website
**Prompt 1: website MVP**
```
Build Phase 1 of my portfolio in this repo, following DESIGN.md (the single source of truth). Read it fully first.

Scope: desktop website only (≥1024px); see section 1 for the small-screen safety net. Build Nav, RiverLine, art primitives, Hero + About, How my data flows, The Catch, Downstream, Cửa Hội footer and the 404 page. Skip Cast a line, Riverbank, Field notes and the hub pipeline.

Rules:
- Never invent facts, numbers, dates or links. Hide anything that depends on an unfilled T1–T10 item.
- All copy lives in src/content/site.ts. Use only the canonical links.
- Follow the wireframes (4.1), design tokens (3.1–3.5) and illustration style (3.6) exactly.
- Move Herry_Resume.pdf to public/resume.pdf. Add pages.yml exactly as in section 9.
- Follow the commit rules in section 14. Save all these rules in CLAUDE.md first.

When done: list the commits, the remaining TODOs for me, and how to preview locally. If DESIGN.md is unclear, ask me instead of guessing.
```

**Prompt 2: profile README**
```
Read DESIGN.md section 11. Create README.md for repo herryvo06/herryvo06 with the same palette and voice, and a static assets/river.svg placeholder (generated in Phase 3). Use only the canonical links. Follow the commit rules in section 14.
```

**Then:** preview with `npm run dev`, check `site.ts` against the résumé, push the branch, open a pull request, merge to `main`, watch the Actions run turn green, open https://herryvo06.github.io, click every link, download the résumé and check its links, then add the site to LinkedIn and GitHub.

### Phase 2: signature interactive (next weekend)
> Read DESIGN.md. Implement KM 12 Cast a line per section 5: catches from `site.ts`, pure logic in `src/lib/catch.ts` with Vitest tests (no repeats until all are caught), keyboard support, the "Show all catches" fallback, the logbook counter, lazy-loaded. Then implement KM 38 Riverbank (300-tree counter; testimonials hidden until real quotes exist) and `/projects/<slug>` detail pages that work on GitHub Pages.

### Phase 3: hub pipeline (week 3)
> Read DESIGN.md sections 8, 10 and 11. Build the hub in `herryvo06/herryvo06`: extract → DuckDB transform → pydantic contracts → `river.json` + generated `river.svg`, pytest tests, a daily `refresh.yml` cron that commits only on change and sends a `repository_dispatch` to the website repo. In the website, add `scripts/sync_hub.py` + the workflow step, and size the fish from `river.json`.

### Phase 4: projects + polish (ongoing)
Build Bite Forecast (section 13) and make it case study 3. Add the Dickson-root hero ripple. Consider a custom domain. Publish two Field notes. Every time something changes, update LinkedIn, GitHub, the résumé and the site **together**.

---

## 15. Maintenance: how to update the site

| Change | Files to edit | Then |
|---|---|---|
| New job or new dates | résumé → `public/resume.pdf` · `site.ts` (roles) · LinkedIn · GitHub README | PR → merge |
| New project | project repo README first · `site.ts` (caseStudies + catches) · image in `public/projects/` · GitHub pins | PR → merge |
| Fill a TODO (T1–T10) | the table at the top of this file · `site.ts` | PR → merge |
| New post | `src/content/notes/<slug>.md` · `site.ts` (notes list) | PR → merge |

- Record every release in **`CHANGELOG.md`** (`## v1.1 · 2026-12-05` + bullets), so the site's history is itself proof of work.
- Once a month: click every link, re-run Lighthouse, and check the résumé PDF is the latest one.
