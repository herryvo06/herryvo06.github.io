# CLAUDE.md: rules for every session in this repo

`DESIGN.md` is the single source of truth for this site. Read it before changing anything.

## Hard rules
- **Never invent facts, numbers, quotes, dates or links.** Every fact must come from DESIGN.md, the résumé (`public/resume.pdf`) or a real project repo.
- **Hide anything that depends on an unfilled TODO item (T1–T10)** in the DESIGN.md table. Never show placeholder text to visitors.
- **All copy lives in `src/content/site.ts`.** Components never hard-code visitor-facing text.
- **Use only the canonical links:**
  - Website: https://herryvo06.github.io
  - GitHub: https://github.com/herryvo06
  - LinkedIn: https://www.linkedin.com/in/herryvo/
  - Email: syquocuyvo@gmail.com
  - Résumé: https://herryvo06.github.io/resume.pdf (served from `public/resume.pdf`)
- Experience titles, organisations and dates match the résumé **character for character**.
- Follow the wireframes (DESIGN.md 4.1), design tokens (3.1–3.5) and illustration style (3.6) exactly.
- Desktop first (≥ 1024 px). Below 1024 px: only the safety net (one column, RiverLine hidden, no horizontal scroll).
- If DESIGN.md is unclear, ask Herry instead of guessing.

## Commit rules
- Commit after **every small, meaningful change**: one config, one art primitive, one component, one section, one test file, one workflow, one fix.
- Commit only after `npm run build` and `npm test -- --run` pass. Never commit broken code.
- Stage only the files of that change.
- Conventional Commits, English, imperative mood, ≤ 70 characters, e.g. `feat(hero): add typed facts`, `chore: configure Tailwind tokens`, `fix(nav): highlight active section`, `ci: add Pages deploy workflow`.
- **Never push.** Never rewrite history (amend, rebase, force) unless Herry asks.

## Commands
- `npm run dev`: local preview at http://localhost:5173
- `npm test -- --run`: Vitest (includes the `site.ts` content validation)
- `npm run build`: type-check and production build into `dist/`
- `npm run lint`: ESLint
