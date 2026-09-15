import assert from 'node:assert/strict';
import { readFileSync, mkdirSync } from 'node:fs';
import { chromium } from 'playwright';

const url = process.env.DECK_URL || 'http://127.0.0.1:3013/';
const browser = await chromium.launch(process.env.PDF_BROWSER_CHANNEL ? { channel: process.env.PDF_BROWSER_CHANNEL } : {});
mkdirSync('.impeccable/review', { recursive: true });
try {
  for (const width of [1280, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(url, { waitUntil: 'networkidle' });
    const link = page.getByRole('link', { name: 'Download PDF', exact: true });
    await link.waitFor({ state: 'visible' });
    assert.equal(await link.getAttribute('href'), new URL(url).pathname.replace(/\/$/, '') + '/downloads/rhapsody-program-overview.pdf');
    const [download] = await Promise.all([page.waitForEvent('download'), link.click()]);
    assert.equal(download.suggestedFilename(), 'Project-Rhapsody-Program-Overview.pdf');
    assert.equal(await download.failure(), null);
    assert.equal(readFileSync(await download.path()).subarray(0, 5).toString(), '%PDF-');
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    assert.deepEqual(errors, []);
    await page.screenshot({ path: `.impeccable/review/${width === 1280 ? 'desktop' : 'mobile'}.png` });
    console.log(`PASS ${width}px: download, filename, PDF signature, base path, overflow, runtime`);
    await page.close();
  }
} finally { await browser.close(); }
