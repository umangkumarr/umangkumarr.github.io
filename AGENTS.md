# Agent guide — umangkumarr.github.io

Personal website of Umang Kumar. Astro 7 + Tailwind CSS v4 in a Turborepo
monorepo managed with **Bun 1.3.13** (never npm/yarn/pnpm — the lockfile is
`bun.lock`). The only app is `apps/website`; it builds to fully static HTML
and deploys to GitHub Pages via `.github/workflows/deploy.yml`.

## Commands

```bash
bun install                 # repo root
bun run dev                 # in apps/website — http://localhost:3010
bun test                    # in apps/website (bun:test)
bun run build               # in apps/website — static output in dist/
```

## Where things live

| Content | File |
| --- | --- |
| Homepage timeline (lifeline) data | `apps/website/src/lib/umang.ts` |
| Blog posts list | `apps/website/src/lib/writing.ts` |
| Stack tabs (about page) | `apps/website/src/lib/stack.ts` |
| Identity / JSON-LD / social URLs | `apps/website/src/lib/person.ts` |
| About page (bio, work, education) | `apps/website/src/pages/about.astro` |
| Globe clock (canvas + cobe) | `apps/website/src/components/globe-clock.astro` |
| Footer social icons | `apps/website/src/components/social-links.astro` |
| Production origin for URLs | `apps/website/src/lib/url.ts` |

## Conventions

- TypeScript strict; explicit types where they add clarity. Prefer `const`,
  `for...of`, optional chaining, and template literals — match the existing
  code, which follows these throughout.
- Pages are `.astro` files with `export const prerender = true` in
  frontmatter; the site must stay fully prerenderable (`output: "static"`),
  so never add code that needs a server at request time.
- Client-side behavior goes in `<script>` blocks inside Astro components
  (vanilla TS, no framework runtime). The globe clock and lifeline follow
  this pattern.
- Styling is Tailwind utility classes inline; dark mode is class-based
  (`dark:` variants keyed off `html.dark`, toggled by the theme switcher and
  persisted in localStorage). Canvas code reads the theme via
  `document.documentElement.classList.contains("dark")`.
- Keep every page's JSON-LD (`jsonLd` prop into the layout) in sync when
  changing titles, descriptions, or content lists.
- Tests live in `apps/website/__tests__` and run with `bun test`; keep the
  sitemap test's route list in sync with `src/pages/sitemap.xml.ts`.

## Gotchas

- The lifeline shows an age per year computed from `birthYear` in
  `lib/umang.ts` — currently an assumption (2002) awaiting the real value.
- The Söhne fonts in `apps/website/public/fonts` are commercially licensed
  to the original site author — replace before this repo/site goes public.
- The lifeline renderer is ported from evilrabbit/lifeline (MIT); keep the
  attribution in `src/lib/lifeline/types.ts` and the README.
- `public/photo-3x4.jpg` is pre-graded for the dark theme (muted color,
  slight blue wash); the ungraded original is not in this repo.

## Rules aliasing

`AGENTS.md` (this file) is the single source of truth for agent rules.
`CLAUDE.md` is a symlink to it for Claude Code. If a future tool needs its
own filename, symlink it here too rather than duplicating content.
