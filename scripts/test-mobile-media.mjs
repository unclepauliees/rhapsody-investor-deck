import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { extname, resolve } from 'node:path';
import { chromium } from 'playwright';

const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.mp4': 'video/mp4', '.webm': 'video/webm' };
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
    const height = width === 844 ? 390 : 900;
    const fullBleed = width < 768 || (width < 1024 && height <= 500);
    const page = await browser.newPage({ viewport: { width, height } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(process.env.DECK_URL || `http://127.0.0.1:${server.address().port}`, { waitUntil: 'networkidle' });
    const sections = page.locator('.media-stage').locator('..');
    assert.equal(await sections.count(), 18);
    for (let i = 0; i < 18; i++) {
      const section = sections.nth(i);
      const top = await section.evaluate(el => el.getBoundingClientRect().top + window.scrollY);
      await page.evaluate(top => window.scrollTo({ top, behavior: 'instant' }), top);
      const image = section.locator('picture img');
      if (await image.count()) await image.evaluate(img => img.decode());
      else await section.locator('video').evaluate(async video => {
        await video.play();
        if (!video.videoWidth) throw new Error('Video has no decoded frame');
      });
      await page.waitForTimeout(100);
      const data = await section.evaluate(el => {
        const image = el.querySelector('picture img, video');
        const art = el.querySelector('.media-art').getBoundingClientRect();
        const heading = el.querySelector('.media-heading h2').getBoundingClientRect();
        return {
          src: image.currentSrc, width: art.width, height: art.height,
          portrait: el.classList.contains('portrait-media'),
          pinRange: el.offsetHeight - el.querySelector('.media-stage').offsetHeight,
          overlay: heading.top < art.bottom && heading.bottom > art.top,
          sticky: getComputedStyle(el.querySelector('.media-stage')).position,
          transform: getComputedStyle(el.querySelector(matchMedia('(max-width: 767px), (max-width: 1023px) and (max-height: 500px)').matches ? '.media-content' : '.media-art')).transform,
          opacity: Number(getComputedStyle(el.querySelector('.media-heading')).opacity),
        };
      });
      assert.equal(data.src.includes('/media/mobile/'), width < 768 && data.portrait);
      if (fullBleed) {
        assert.ok(Math.abs(data.width - width) < 1);
        assert.ok(Math.abs(data.height - height) < 1);
        assert.ok(data.overlay, `Missing title overlay at ${width}px`);
      }
      assert.equal(data.sticky, 'sticky');
      assert.ok(data.opacity > 0.95);
      if ((width === 390 && [0, 1, 7, 9].includes(i)) || (width === 1280 && i === 0)) {
        await section.locator('.media-stage').evaluate(el => window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'instant' }));
        if (width === 390) {
          assert.ok(await section.locator('.media-heading h2').evaluate(el => el.getBoundingClientRect().top >= document.querySelector('header').getBoundingClientRect().bottom));
          await page.screenshot({ path: `.impeccable/review/mobile-media/${width}-${i}-entry.png` });
        }
        await section.locator('.media-stage').screenshot({ path: `.impeccable/review/mobile-media/${width}-${i}.png` });
      }
      await page.evaluate(top => window.scrollTo({ top: top + 160, behavior: 'instant' }), top);
      await page.waitForTimeout(100);
      const scrolled = await section.evaluate(el => ({
        top: el.querySelector('.media-stage').getBoundingClientRect().top,
        transform: getComputedStyle(el.querySelector(matchMedia('(max-width: 767px), (max-width: 1023px) and (max-height: 500px)').matches ? '.media-content' : '.media-art')).transform,
        opacity: Number(getComputedStyle(el.querySelector('.media-heading')).opacity),
      }));
      assert.ok(Math.abs(scrolled.top) < 1, `Stage is not pinned at ${width}px`);
      assert.notEqual(scrolled.transform, data.transform, `Image is not scaling at ${width}px`);
      assert.ok(scrolled.opacity < data.opacity, `Title is not fading at ${width}px: ${JSON.stringify({ data, scrolled, top })}`);
      if (fullBleed) {
        for (const offset of [160, Math.min(675, data.pinRange - 1)]) {
          await page.evaluate(top => window.scrollTo({ top, behavior: 'instant' }), top + offset);
          await page.waitForTimeout(100);
          assert.ok(await section.evaluate(el => {
            const stage = el.querySelector('.media-stage').getBoundingClientRect();
            const media = el.querySelector('.media-content').getBoundingClientRect();
            return Math.abs(stage.top) < 1 && media.left <= 0 && media.right >= innerWidth && media.top <= 0 && media.bottom >= innerHeight && getComputedStyle(el.querySelector('.media-art')).opacity === '1';
          }), `Exposed media gap in section ${i + 1} at ${width}px / ${offset}px scroll`);
        }
      }
    }
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    assert.deepEqual(errors, []);
    console.log(`PASS ${width}px: all 18 images/videos, source selection, full-bleed coverage, title overlays, sticky pinning, zoom, title fading, overflow, runtime`);
    await page.close();
  }
} finally {
  await browser.close();
  await new Promise(resolve => server.close(resolve));
}
