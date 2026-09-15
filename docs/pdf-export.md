# Landscape PDF

The downloadable edition contains a cover plus 19 core sections. Appendices are intentionally excluded. It uses the IAM reference's editorial pacing with Rhapsody's identity and approved content.

## Rebuild

```sh
npm ci
npx playwright install chromium
npm run build:firebase
npm run build:pdf
npm run build:firebase
```

The first web build provides the embedded brand fonts. PDF export writes
`output/pdf/rhapsody-program-overview.pdf`, an HTML proof, review screenshots,
and the shipped copy at `public/downloads/rhapsody-program-overview.pdf`.
The last build includes the new PDF in `out/`. On a workstation with Chrome
installed, `PDF_BROWSER_CHANNEL=chrome npm run build:pdf` avoids downloading
another browser.

Deploy with `firebase deploy --only hosting:deck --project project-rhapsody-eb1bc`.
The committed PDF also ships through the existing GitHub Pages workflow.

## Content and verification

`scripts/pdf/deck.mjs` is the editorial layout and abridged narrative.
Factual lists (team, funds, offer, dates, and program rules) are read directly
from section components using TypeScript's parser. Review narrative edits in
both the web deck and PDF template when content changes.

Export checks all 20 pages, loaded images, text bounds, required financial
qualifiers, contact details, and absence of appendix references or stale labels.
Open rendered pages before publishing; automated bounds checks do not replace
visual review. To test the download against a running site:

```sh
DECK_URL=http://127.0.0.1:3013/ PDF_BROWSER_CHANNEL=chrome node scripts/test-pdf-download.mjs
```

All pictures are incumbent approved assets. `pdf-market-frame.jpg` is a still
extracted at 00:03 from the existing `09_market.mp4`, used to avoid an empty
opening frame. The first-generation artwork is uncropped and retains its
original credit. Images represent creative references, not claims of flown
Rhapsody hardware or third-party endorsement.
