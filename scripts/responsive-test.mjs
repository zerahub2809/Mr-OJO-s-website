/**
 * Responsive/overflow test: loads every route at many viewport widths in
 * headless Chrome and reports:
 *   - document-level horizontal scrolling
 *   - elements extending beyond the viewport that are NOT inside an
 *     intentionally clipped/scrollable container
 *   - overflow while the mobile menu is open
 * Run: node scripts/responsive-test.mjs
 */
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'http://localhost:4175';

const BROWSERS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
];

const routes = [
  '/',
  '/about',
  '/products',
  '/how-it-works',
  '/delivery-pricing',
  '/quality-standards',
  '/demand-insights',
  '/gallery',
  '/testimonials',
  '/contact',
  '/does-not-exist',
];

// Small phones → large phones → tablets → laptops → desktops → wide screens
const widths = [320, 360, 375, 390, 414, 480, 540, 600, 680, 768, 800, 820, 900, 1024, 1180, 1280, 1300, 1321, 1366, 1440, 1600, 1920, 2560];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForServer(url, tries = 60) {
  for (let i = 0; i < tries; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch {
      /* not up yet */
    }
    await sleep(500);
  }
  return false;
}

const executablePath = BROWSERS.find((p) => existsSync(p));
if (!executablePath) {
  console.error('No Chrome/Edge executable found.');
  process.exit(1);
}

const server = spawn('cmd.exe', ['/c', 'npx vite preview --port 4175 --strictPort'], {
  cwd: root,
  stdio: 'ignore',
});

const serverUp = await waitForServer(`${BASE}/`);
if (!serverUp) {
  console.error('Preview server failed to start.');
  server.kill();
  process.exit(1);
}
const browser = await puppeteer.launch({
  executablePath,
  headless: true,
  args: ['--disable-gpu', '--no-sandbox'],
});

let totalIssues = 0;
let checked = 0;

try {
  for (const width of widths) {
    const height = width >= 900 ? 900 : 740;
    const page = await browser.newPage();
    await page.setViewport({ width, height, deviceScaleFactor: 1 });

    for (const route of routes) {
      await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle0', timeout: 20000 });
      const issues = await page.evaluate(() => {
        const vw = window.innerWidth;
        const found = [];

        // Authoritative horizontal-scroll test: try to scroll and see if
        // the page actually moves (clip/hidden overflow must stay at 0).
        // `behavior: instant` overrides the CSS smooth-scroll setting.
        const yBefore = window.scrollY;
        window.scrollTo({ left: 4000, top: yBefore, behavior: 'instant' });
        const sx = window.scrollX;
        if (sx > 0) {
          window.scrollTo({ left: 0, top: yBefore, behavior: 'instant' });
          found.push(`page actually scrolls horizontally (scrollX=${sx} of attempted 4000)`);
        } else {
          window.scrollTo({ left: 0, top: yBefore, behavior: 'instant' });
        }

        // Sticky header must stay pinned after vertical scrolling.
        window.scrollTo({ left: 0, top: 1200, behavior: 'instant' });
        const header = document.querySelector('.header');
        if (header) {
          const ht = header.getBoundingClientRect().top;
          if (Math.abs(ht) > 1) {
            found.push(`sticky header not pinned after scroll (top=${Math.round(ht)})`);
          }
        }
        window.scrollTo({ left: 0, top: yBefore, behavior: 'instant' });

        for (const el of document.body.querySelectorAll('*')) {
          const cs = getComputedStyle(el);
          if (cs.display === 'none' || cs.visibility === 'hidden' || cs.position === 'fixed') continue;
          if (el.classList.contains('mobile-nav')) continue;

          // Skip elements inside intentionally scrollable/clipped containers
          // (tables, carousels, decorative glows) — but not via body/html.
          let p = el.parentElement;
          let skip = false;
          while (p && p !== document.body) {
            const ox = getComputedStyle(p).overflowX;
            if (ox === 'auto' || ox === 'scroll' || ox === 'hidden' || ox === 'clip') {
              skip = true;
              break;
            }
            p = p.parentElement;
          }
          if (skip) continue;

          const r = el.getBoundingClientRect();
          if (r.width < 2 || r.height < 2) continue;
          if (r.right > vw + 1 || r.left < -1) {
            const cls = (typeof el.className === 'string' ? el.className : '').slice(0, 70);
            found.push(
              `overflows viewport: <${el.tagName.toLowerCase()} class="${cls}"> ` +
                `[left=${Math.round(r.left)}, right=${Math.round(r.right)}, vw=${vw}]`
            );
          }
        }
        return found;
      });

      checked += 1;
      if (issues.length > 0) {
        totalIssues += issues.length;
        console.log(`\nFAIL ${route} @ ${width}px:`);
        for (const issue of issues.slice(0, 8)) console.log(`   - ${issue}`);
        if (issues.length > 8) console.log(`   ... and ${issues.length - 8} more`);
      }
    }

    // Interaction check: open the mobile menu, then re-test for overflow.
    if (width <= 1320) {
      await page.goto(`${BASE}/`, { waitUntil: 'networkidle0' });
      const hamburger = await page.$('.hamburger');
      if (hamburger) {
        await hamburger.click();
        await sleep(450);
        const menuIssues = await page.evaluate(() => {
          const vw = window.innerWidth;
          const found = [];
          const yBefore = window.scrollY;
          window.scrollTo({ left: 4000, top: yBefore, behavior: 'instant' });
          const sx = window.scrollX;
          if (sx > 0) {
            window.scrollTo({ left: 0, top: yBefore, behavior: 'instant' });
            found.push(`menu open: page scrolls horizontally (scrollX=${sx})`);
          } else {
            window.scrollTo({ left: 0, top: yBefore, behavior: 'instant' });
          }
          const drawer = document.querySelector('.mobile-nav');
          if (drawer) {
            const r = drawer.getBoundingClientRect();
            if (r.left < -1 || r.right > vw + 1) {
              found.push(
                `menu open: drawer spans [${Math.round(r.left)}, ${Math.round(r.right)}] vs vw=${vw}`
              );
            }
          }
          return found;
        });
        checked += 1;
        if (menuIssues.length > 0) {
          totalIssues += menuIssues.length;
          console.log(`\nFAIL mobile menu open @ ${width}px:`);
          for (const issue of menuIssues) console.log(`   - ${issue}`);
        }
      }
    }

    await page.close();
    console.log(`checked ${width}px — running total: ${totalIssues} issue(s)`);
  }
} finally {
  await browser.close();
  server.kill();
}

console.log(`\n==== ${checked} checks, ${totalIssues} issue(s) ====`);
process.exit(totalIssues === 0 ? 0 : 1);

