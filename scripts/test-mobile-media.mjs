import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { extname, resolve } from 'node:path';
import { chromium } from 'playwright';

const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };
const server = createServer(async (req, res) => {
  try {
    const path = resolve('out', '.' + (new URL(req.url, 'http://localhost').pathname === '/' ? '/index.html' : new URL(req.url, 'http://localhost').pathname));
    res.setHeader('Content-Type', types[extname(path)] || 'application/octet-stream');
    res.end(await readFile(path));
  } catch { res.writeHead(404).end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const browser = await chromium.launch({ channel: 'chrome' });
await mkdir('.impeccable/review/mobile-media', { recursive: true });
try {
  for (const width of [320, 390, 767, 768, 844, 1280]) {
    const page = await browser.newPage({ viewport: { width, height: width === 844 ? 390 : 900 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(process.env.DECK_URL || `http://127.0.0.1:${server.address().port}`, { waitUntil: 'networkidle' });
    const sections = page.locator('.portrait-media');
    assert.equal(await sections.count(), 7);
    for (let i = 0; i < 7; i++) {
      const section = sections.nth(i);
      await section.locator('.media-stage').scrollIntoViewIfNeeded();
      await section.locator('picture img').evaluate(img => img.decode());
      const data = await section.evaluate(el => {
        const image = el.querySelector('picture img');
        const art = el.querySelector('.media-art').getBoundingClientRect();
        const heading = el.querySelector('.media-heading').getBoundingClientRect();
        return { src: image.currentSrc, width: art.width, height: art.height, separated: heading.bottom <= art.top + 1 };
      });
      assert.equal(data.src.includes('/media/mobile/'), width < 768);
      if (width < 768) {
        assert.ok(Math.abs(data.width / data.height - 9 / 16) < 0.01);
        assert.ok(data.separated, `Heading overlaps portrait at ${width}px`);
      }
      if (width === 390 || (width === 1280 && i === 0)) {
        await section.locator('.media-stage').evaluate(el => window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'instant' }));
        if (width === 390) {
          assert.ok(await section.locator('.media-heading').evaluate(el => el.getBoundingClientRect().top >= document.querySelector('header').getBoundingClientRect().bottom));
          await page.screenshot({ path: `.impeccable/review/mobile-media/${width}-${i}-entry.png` });
        }
        await section.locator('.media-stage').screenshot({ path: `.impeccable/review/mobile-media/${width}-${i}.png` });
      }
    }
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    assert.deepEqual(errors, []);
    console.log(`PASS ${width}px: seven sources, image decoding, aspect ratios, heading separation, overflow, runtime`);
    await page.close();
  }
} finally {
  await browser.close();
  await new Promise(resolve => server.close(resolve));
}
