# umangkumar.com

Personal website of Umang Kumar — software development engineer at Meesho,
Bengaluru. An interactive lifeline timeline, an about page, writing, and a
live globe clock (IST) built on [cobe](https://cobe.vercel.app).
Astro 7 + Tailwind v4, in a Turborepo + Bun monorepo. The lifeline renderer
is ported from [evilrabbit/lifeline](https://github.com/evilrabbit/lifeline)
(MIT © Evil Rabbit).

## Develop

```bash
bun install
bun run dev        # website on http://localhost:3010
```

## Edit content

| What | Where |
| --- | --- |
| Timeline milestones | `apps/website/src/lib/umang.ts` |
| About page (bio, work, projects, education) | `apps/website/src/pages/about.astro` |
| Blog posts | `apps/website/src/lib/writing.ts` |
| Tools/stack tabs | `apps/website/src/lib/stack.ts` |
| Identity / SEO (JSON-LD, socials) | `apps/website/src/lib/person.ts` |
| Social icons in the footer | `apps/website/src/components/social-links.astro` |
| Globe clock (cities, time zone, colors) | `apps/website/src/components/globe-clock.astro` |

> **TODO for Umang:** Update `identity` in `lib/person.ts` when the final domain is
> chosen. The `Soehne` fonts in `public/fonts` are commercially licensed to the
> original author — swap them (e.g. for Inter) before publishing.
> (`public/photo-3x4.jpg` is the real photo with a dark-theme grade; the
> untouched original lives in `~/Downloads/IMG_8409.jpeg`.)

## Deploy

Push to GitHub and import into Vercel; the site lives in `apps/website`
(the `@astrojs/vercel` adapter is already configured).
