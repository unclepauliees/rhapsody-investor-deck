# Project Rhapsody — Program Overview

Single-page, scroll-driven program overview for Project Rhapsody: a scroll-locked
hero + 19 numbered slides + appendix, built in Next.js (App Router) +
TypeScript + Tailwind v4 + shadcn/ui, on the locked Rhapsody Brand OS v2
tokens (`app/globals.css`).

## Status vs. the build spec

This build followed `CLAUDE_CODE_PROMPT_rhapsody_investor_deck.md` §01–09.
Two things are **not** done, by spec design (§04, §03: "stop, report, and
wait" / "pause and report — never ship a section with a placeholder and call
it complete"):

1. **Vendored 21st.dev components.** Both registry URLs
   (`sunset-skyline-hero`, `text-parallax-content-scroll`) return
   `authentication_required` — the environment's 21st.dev token is invalid.
   `components/vendor/aperture-hero.tsx` and
   `components/vendor/sticky-media-section.tsx` are hand-rolled Framer
   Motion stand-ins implementing the same prop contract so the rest of the
   deck could be built and reviewed. See `components/vendor/README.md` for
   how to unblock and swap them in.
2. **Media matrix.** 2 of 21 assets are generated and accepted (Section 06,
   09 — both `gpt_image_2_5`). The other 19 (13 stills + 6 videos) are
   pending a go-ahead to spend the remaining Higgsfield credits. Sections
   without an asset render the "media pending" placeholder frame from
   `StickyMediaSection`.

Everything else — copy (verbatim from the locked outline), token layer,
fonts (Bodoni Moda + Space Mono via `next/font/google`), posture-weight
layout per section, persistent navbar with scroll-spy section index, mono
footer strip, appendix accordion, count-ups, and the Section 07 step ledger
— is built per spec.

## Media generation

`gpt_image_2_5` is the confirmed still-image model — it followed the full
editorial-restraint prompt (muted palette, negative space, single vermilion
accent) cleanly. `soul_location` was tried once for Section 09 and **failed**
the Spine test (produced a cluttered real-world workshop with a laptop glow
and colored plastic bins); do not use it for this deck's stills.

No video model has been tested yet. `seedance_2_0` is the higgsfield-generate
skill's default for serious/cinematic video and the spec's likely fit for
the 6 marked **V** rows — confirm with a test loop before running all 6.

See `public/media/manifest.json` for the full per-section shot list, the
base prompt template (with the load-bearing negative clause), and generation
status. There is no `scripts/generate-media.ts` yet — the two accepted
assets so far were generated interactively via the Higgsfield MCP tools, one
at a time, per the account's one-per-call batch cap; a resumable script can
be added once the remaining model choice (video) is confirmed.

## Development

```bash
npm install
npm run dev
```

## Deploy

```bash
npx vercel
```

Set the project's Vercel deployment protection (password or Vercel
Authentication) at the project level for the confidential link — this repo
does not implement a client-side password gate, per spec §08.

## Structure

```
app/page.tsx               # the presentation (hero + 19 sections + appendix)
app/globals.css            # Brand OS v2 tokens, mapped to Tailwind v4 @theme
components/vendor/         # aperture-hero + sticky-media-section (stand-ins, see above)
components/chrome/         # navbar (scroll-spy section index) + footer strip
components/deck/           # shared primitives: eyebrow, section shell, count-up
components/sections/       # one file per section, 01–19 + appendix
public/brand/              # emblem/wordmark SVGs (from Rhapsody_BrandOS_GitHub_Repo.zip)
public/media/              # Higgsfield assets + manifest.json
```

## PDF Download

The navigation has a disabled Download PDF button while the team reviews
the draft. The final, separately designed landscape PDF will be supplied
after content approval. Once provided, add it under `public/downloads`
and replace the disabled button with a download link using `withBasePath`.
