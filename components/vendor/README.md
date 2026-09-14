# Vendor components — STALLED

Per the build spec (§04), section motion should come from two 21st.dev
registry components:

```
npx shadcn@latest add "https://21st.dev/r/gughigug/sunset-skyline-hero"
npx shadcn@latest add "https://21st.dev/r/uniquesonu/text-parallax-content-scroll"
```

Both currently fail with `authentication_required` — the 21st.dev registry
token this environment has is not valid (the connected `magic` MCP server
reports the same "API key missing or was reset" condition). This is not an
approximation-and-ship situation per the spec; it's a real stall.

**`sticky-media-section.tsx`** and **`aperture-hero.tsx`** in this folder are
placeholders that implement the same prop contract described in the spec
(`imgUrl` / `videoUrl` / `subheading` / `heading` / `children` for the
parallax component; scroll-locked aperture + wordmark reveal for the hero)
so the rest of the deck — copy, layout, posture weight, tokens — can be
built and reviewed now. They are hand-rolled with Framer Motion, not the
vendored 21st.dev source, and do not satisfy the "both components vendored
and re-skinned" definition-of-done line until swapped.

**To unblock:** either

1. Re-authenticate the 21st.dev registry (get a fresh key at
   https://21st.dev/mcp, or however the `shadcn` CLI reads registry
   credentials for this environment) and re-run the two `add` commands above
   — they will overwrite the files in this folder — or
2. Paste the component source directly into this folder as
   `sunset-skyline-hero.tsx` / `text-parallax-content-scroll.tsx`, and this
   agent will re-skin those in place of the placeholders.
