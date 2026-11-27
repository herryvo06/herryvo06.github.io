# herryvo06.github.io · "Sông Lam" data river portfolio

The portfolio of **Uy (Herry) Vo**, Math + CS @ Knox College, seeking Summer 2027 Data Engineering internships.

**Live site:** https://herryvo06.github.io · **Résumé:** https://herryvo06.github.io/resume.pdf

Data engineering already speaks the language of rivers: *source, stream, upstream, downstream, lineage*. I grew up on the Lam River in Nghệ An, Vietnam, so the site is a river that runs from source to sea. Each section is a stretch of the river, and each project is a catch.

| KM | Section | What's there |
|---|---|---|
| 0 | Source | Who I am, résumé, contact |
| 5 | How my data flows | Real pipelines drawn as rivers: sources → ingest → clean → model → serve |
| 20 | The Catch | Case studies (Southeast Asia Financial Flows, Dickson polynomials) |
| 30 | Downstream | Experience, matching the résumé |
| 50 | Cửa Hội | Where the Lam River meets the sea: contact |

## Stack

Vite · React · TypeScript · Tailwind CSS v4 · Framer Motion · React Router · Vitest + Testing Library · ESLint + Prettier · GitHub Pages via GitHub Actions. Fonts (Fraunces, Inter, JetBrains Mono) are self-hosted with `@fontsource`. All illustrations are hand-built inline SVG.

## Architecture

```
src/content/site.ts ──▶ components ──▶ Vite build ──▶ dist/ ──▶ GitHub Pages
 (all copy + data)        (no hard-coded text)          ▲
        │                                               │
        └── site.test.ts: no empty strings, no TODO      └── .github/workflows/pages.yml
            placeholders, https:// or / URLs only            (test → build → deploy on main)
```

```
src/
  content/site.ts        all visitor-facing copy and data (single source)
  components/            Nav, RiverLine, Hero, FlowDiagram, CaseStudyCard, Timeline, Footer…
  components/art/        SVG primitives (Fish, Tree, Ripple, Float, Hills, Water) + scenes/
  pages/                 Home, NotFound
  styles/tokens.css      design tokens ("Lam River at dusk" palette)
public/
  resume.pdf             the résumé (fixed name: overwrite to update)
  404.html               deep-link redirect for GitHub Pages
  og.png, favicon.svg, robots.txt, sitemap.xml, projects/*.webp
design/og.svg            source of the share image (fonts embedded)
DESIGN.md                the full spec · CLAUDE.md: rules for coding agents
```

## Run it locally

Requires Node 20+.

```bash
npm install
npm run dev            # http://localhost:5173
npm test -- --run      # unit tests, including content validation
npm run build          # type-check + production build into dist/
npm run preview        # serve dist/ at http://localhost:4173
npm run lint
```

## Update the content

Edit `src/content/site.ts`, then run the tests. See the maintenance table in `DESIGN.md` section 15. To update the résumé, overwrite `public/resume.pdf` and keep the name.

**Regenerate the share image** after editing `design/og.svg` (macOS, Chrome installed):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars \
  --window-size=1200,630 --screenshot="$PWD/public/og.png" "file://$PWD/design/og.svg"
```

## Deploy

Push to `main` (through a pull request). `.github/workflows/pages.yml` tests, builds and deploys to GitHub Pages.

## Contact

[LinkedIn](https://www.linkedin.com/in/herryvo/) · [GitHub](https://github.com/herryvo06) · syquocuyvo@gmail.com
