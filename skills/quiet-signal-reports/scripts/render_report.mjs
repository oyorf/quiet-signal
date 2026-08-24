#!/usr/bin/env node

import { existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const HELP = `Render paged HTML to an A4 PDF.

Usage:
  node scripts/render_report.mjs --input <report.html> --output <report.pdf> [--expected-pages <count>]

Options:
  --input            HTML source containing one or more .page elements
  --output           Destination PDF path
  --expected-pages   Fail when the .page count differs from this integer
  --help             Show this help

Environment:
  CHROME_PATH             Override the Chrome/Chromium executable
  CODEX_PLAYWRIGHT_CORE   Override the playwright-core module directory
`;

function fail(message) {
  console.error(`Error: ${message}`);
  console.error('Run with --help for usage.');
  process.exit(1);
}

function parseArgs(argv) {
  const values = {};
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--help' || token === '-h') return { help: true };
    if (!['--input', '--output', '--expected-pages'].includes(token)) {
      fail(`unknown option: ${token}`);
    }
    const value = argv[index + 1];
    if (!value || value.startsWith('--')) fail(`missing value for ${token}`);
    values[token.slice(2)] = value;
    index += 1;
  }
  if (!values.input) fail('--input is required');
  if (!values.output) fail('--output is required');
  if (values['expected-pages']) {
    const parsed = Number(values['expected-pages']);
    if (!Number.isInteger(parsed) || parsed < 1) fail('--expected-pages must be a positive integer');
    values.expectedPages = parsed;
  }
  return values;
}

function loadChromium() {
  const require = createRequire(import.meta.url);
  const candidates = [
    process.env.CODEX_PLAYWRIGHT_CORE,
    'playwright-core',
    resolve(dirname(process.execPath), '../node_modules/playwright-core'),
  ].filter(Boolean);

  for (const candidate of candidates) {
    try {
      return require(candidate).chromium;
    } catch {
      // Try the next supported runtime location.
    }
  }
  fail('playwright-core was not found; install it locally or set CODEX_PLAYWRIGHT_CORE');
}

function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean);
  const found = candidates.find((candidate) => existsSync(candidate));
  if (!found) fail('Chrome/Chromium was not found; set CHROME_PATH to its executable');
  return found;
}

const args = parseArgs(process.argv.slice(2));
if (args.help) {
  console.log(HELP);
  process.exit(0);
}

const inputPath = resolve(args.input);
const outputPath = resolve(args.output);
if (!existsSync(inputPath)) fail(`input HTML does not exist: ${inputPath}`);
mkdirSync(dirname(outputPath), { recursive: true });

const chromium = loadChromium();
const browser = await chromium.launch({ headless: true, executablePath: findBrowser() });

try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 1800 }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(inputPath).href, { waitUntil: 'networkidle' });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(Array.from(document.images).map((img) => {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();
      return new Promise((resolveImage, rejectImage) => {
        img.addEventListener('load', resolveImage, { once: true });
        img.addEventListener('error', () => rejectImage(new Error(`Image failed: ${img.currentSrc || img.src}`)), { once: true });
      });
    }));
  });

  const audit = await page.evaluate(() => {
    const pages = Array.from(document.querySelectorAll('.page'));
    return {
      count: pages.length,
      overflows: pages.flatMap((item, index) => {
        const horizontal = item.scrollWidth - item.clientWidth;
        const vertical = item.scrollHeight - item.clientHeight;
        return horizontal > 2 || vertical > 2
          ? [{ page: index + 1, horizontal, vertical }]
          : [];
      }),
    };
  });

  if (audit.count === 0) fail('the document contains no .page elements');
  if (args.expectedPages && audit.count !== args.expectedPages) {
    fail(`expected ${args.expectedPages} .page elements, found ${audit.count}`);
  }
  if (audit.overflows.length > 0) {
    fail(`page overflow detected: ${JSON.stringify(audit.overflows)}`);
  }

  await page.emulateMedia({ media: 'print' });
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  console.log(`Rendered ${audit.count} pages: ${outputPath}`);
} finally {
  await browser.close();
}
