import { readFileSync, readdirSync, mkdirSync, writeFileSync, copyFileSync } from 'node:fs';
import { resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import ts from 'typescript';
import { deck } from './pdf/deck.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'output/pdf');
const review = resolve(root, '.impeccable/review/pdf');
mkdirSync(output, { recursive: true });
mkdirSync(review, { recursive: true });

// Reuse factual lists directly from the web sections without evaluating TSX.
function literal(node) {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  if (ts.isArrayLiteralExpression(node)) return node.elements.map(literal);
  if (ts.isObjectLiteralExpression(node)) return Object.fromEntries(node.properties.map(p => {
    if (!ts.isPropertyAssignment(p)) throw new Error('Only literal properties are supported');
    return [p.name.text, literal(p.initializer)];
  }));
  throw new Error(`Unsupported content expression: ${node.getText()}`);
}
function constant(section, name) {
  const file = resolve(root, `components/sections/${section}.tsx`);
  const source = ts.createSourceFile(file, readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  let value;
  const visit = node => {
    if (ts.isVariableDeclaration(node) && node.name.getText(source) === name) value = literal(node.initializer);
    ts.forEachChild(node, visit);
  };
  visit(source);
  if (!value) throw new Error(`Missing ${section}:${name}`);
  return value;
}
const assets = new Map();
function asset(name) {
  if (!assets.has(name)) {
    const type = { '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml' }[extname(name)];
    if (!type) throw new Error(`Unsupported asset ${name}`);
    assets.set(name, `data:${type};base64,${readFileSync(resolve(root, 'public', name)).toString('base64')}`);
  }
  return assets.get(name);
}

// Embed the same self-hosted brand fonts produced by the existing Next build.
const chunks = resolve(root, 'out/_next/static/chunks');
const fontFaces = new Set();
for (const filename of readdirSync(chunks).filter(f => f.endsWith('.css'))) {
  const css = readFileSync(resolve(chunks, filename), 'utf8');
  for (let face of css.match(/@font-face\{[^}]+\}/g) || []) {
    if (!face.includes('src:url(') || !/Bodoni Moda|Space Mono/.test(face)) continue;
    face = face.replace(/font-family:Bodoni Moda;/g, 'font-family:Display;').replace(/font-family:Space Mono;/g, 'font-family:Mono;');
    face = face.replace(/url\(([^)]+)\)/g, (_, path) => `url(data:font/woff2;base64,${readFileSync(resolve(chunks, path.replaceAll('"', ''))).toString('base64')})`);
    fontFaces.add(face);
  }
}
if (!fontFaces.size) throw new Error('Build the site first to provide brand fonts');
const css = readFileSync(resolve(root, 'scripts/pdf/deck.css'), 'utf8');
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Project Rhapsody - Program Overview</title><style>${[...fontFaces].join('\n')}\n${css}</style></head><body>${deck({ asset, constant })}</body></html>`;
writeFileSync(resolve(output, 'rhapsody-program-overview.html'), html);
const browser = await chromium.launch(process.env.PDF_BROWSER_CHANNEL ? { channel: process.env.PDF_BROWSER_CHANNEL } : {});
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 810 }, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map(i => i.decode()));
  });
  const report = await page.evaluate(() => {
    const slides = [...document.querySelectorAll('.slide')];
    const problems = [];
    for (const slide of slides) {
      const bounds = slide.getBoundingClientRect();
      const walker = document.createTreeWalker(slide, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (!node.textContent.trim()) continue;
        const range = document.createRange(); range.selectNodeContents(node);
        for (const r of range.getClientRects()) {
          const limit = node.parentElement.closest('footer') ? 801 : slide.classList.contains('bookend') ? 780 : 749;
          if (r.left < bounds.left - 1 || r.right > bounds.right + 1 || r.top < bounds.top - 1 || r.bottom > bounds.top + limit) {
            problems.push({ slide: slide.getAttribute('aria-label'), text: node.textContent.slice(0, 100), top: r.top - bounds.top, bottom: r.bottom - bounds.top });
          }
        }
      }
    }
    return { pages: slides.length, problems, images: [...document.images].every(i => i.complete && i.naturalWidth > 0), text: document.body.innerText };
  });
  writeFileSync(resolve(review, 'layout-report.json'), JSON.stringify(report, null, 2));
  if (report.pages !== 20 || !report.images || report.problems.length) throw new Error(`PDF layout failed: ${JSON.stringify(report.problems)}`);
  for (const phrase of ['Kate Nelson', 'President & Co-Founder', '$58.3M', '$1.075M', '$360,000', 'merry@symphony-space.com']) {
    if (!report.text.includes(phrase)) throw new Error(`Missing required copy: ${phrase}`);
  }
  if (/Appendix|\[email\]|\[name\]|10.40×|subsidiary/.test(report.text)) throw new Error('Stale copy in PDF');
  if (await page.locator('figcaption').count()) throw new Error('Image captions must not appear in the PDF');
  if (await page.locator('.bookend-lockup').count() !== 2) throw new Error('Both bookends require the full brand lockup');
  const pdf = resolve(output, 'rhapsody-program-overview.pdf');
  await page.pdf({ path: pdf, printBackground: true, preferCSSPageSize: true, tagged: true, outline: true });
  for (let i = 0; i < report.pages; i++) await page.locator('.slide').nth(i).screenshot({ path: resolve(review, `page-${String(i + 1).padStart(2, '0')}.png`) });
  const downloads = resolve(root, 'public/downloads');
  mkdirSync(downloads, { recursive: true });
  copyFileSync(pdf, resolve(downloads, 'rhapsody-program-overview.pdf'));
  console.log(`Exported ${report.pages} pages. Fonts embedded; all images decoded; text bounds passed.\n${pdf}`);
} finally { await browser.close(); }
