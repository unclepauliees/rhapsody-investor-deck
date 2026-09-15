# Mobile Artwork

The September 15, 2026 user-supplied portrait artwork appears below 768px.
Desktop imagery and the landscape PDF remain unchanged. Native picture
sources select the portrait without downloading a hidden desktop duplicate.
All 18 content stages fill the mobile viewport with edge-to-edge images or
videos using object-cover. Portrait sources remain selected below 768px;
landscape sources crop centrally. Headlines use Bodoni at 32px over the media
with the existing contrast treatment. The stage stays sticky while the media
zooms inside a clipped frame and the headline fades. The frame never shrinks
or fades into empty margins. Original artwork lettering and credits remain
part of the source assets, though cover cropping varies by screen shape.

| Section | Supplied source in Downloads |
| --- | --- |
| Highlights | cosmos_324186223_9_16.png |
| Why Now | cosmos_134875125_9_16.png |
| Problem | cosmos_1924549645_9_16.png |
| First Generation | cosmos_1041230996_9_16.png |
| Economics | cosmos_983883891_9_16.png |
| Roadmap | 0cbb1762_e44b_497b_b4b5_349a1f516b65_9_16.png |
| Team | cosmos_41249041_9_16.png |

WebP assets are full-resolution conversions at quality 88, without alterations.
They are creative imagery, not evidence of partnerships or flown hardware.
Run `node scripts/test-mobile-media.mjs` after a root-path static build to check
source selection, framing, title overlays, sticky scroll motion, and overflow.
