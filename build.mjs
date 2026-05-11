// Static site renderer.
// 1. Bundle each src/pages/*.tsx with esbuild → in-memory ESM
// 2. Import the page module, render with react-dom/server
// 3. Build globals.css with Tailwind → dist/styles.css
// 4. Copy chrome.js (vanilla nav-drawer toggle) → dist/chrome.js
// 5. Write each page as dist/<name>.html

import { build as esbuild } from 'esbuild';
import { mkdir, readdir, writeFile, rm, readFile, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { renderToStaticMarkup } from 'react-dom/server';
import { execSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const pagesDir = path.join(root, 'src', 'pages');
const distDir  = path.join(root, 'dist');
const tmpDir   = path.join(root, '.build-tmp');

const ALIAS_EXTS = ['.tsx', '.ts', '.jsx', '.js', '/index.tsx', '/index.ts'];
const ALIAS_PLUGIN = {
  name: 'alias-at',
  setup(b) {
    b.onResolve({ filter: /^@\// }, (args) => {
      const base = path.join(root, 'src', args.path.slice(2));
      if (existsSync(base)) return { path: base };
      for (const ext of ALIAS_EXTS) {
        const p = base + ext;
        if (existsSync(p)) return { path: p };
      }
      return null;
    });
  },
};

async function bundlePage(file) {
  const out = path.join(tmpDir, file.replace(/\.tsx?$/, '.mjs'));
  await esbuild({
    entryPoints: [path.join(pagesDir, file)],
    outfile: out,
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node20',
    jsx: 'automatic',
    external: ['react', 'react-dom', 'react-dom/server'],
    plugins: [ALIAS_PLUGIN],
    logLevel: 'warning',
  });
  return out;
}

async function buildCss() {
  const css = await readFile(path.join(root, 'src', 'styles', 'globals.css'), 'utf8');
  // Tailwind CLI is the simplest reliable path
  execSync(
    `npx --yes tailwindcss -c ${path.join(root, 'tailwind.config.ts')} -i ${path.join(root, 'src', 'styles', 'globals.css')} -o ${path.join(distDir, 'styles.css')} --minify`,
    { stdio: 'inherit', cwd: root },
  );
  void css;
}

const BASE_PATH = (process.env.BASE_PATH ?? '').replace(/\/+$/, '');

function rewriteBase(html) {
  if (!BASE_PATH) return html;
  return html.replace(/\b(href|src|action)="\/(?!\/)/g, `$1="${BASE_PATH}/`);
}

async function main() {
  await rm(distDir, { recursive: true, force: true });
  await rm(tmpDir, { recursive: true, force: true });
  await mkdir(distDir, { recursive: true });
  await mkdir(tmpDir, { recursive: true });

  const files = (await readdir(pagesDir)).filter((f) => /\.tsx?$/.test(f));
  console.log(`Building ${files.length} page(s)${BASE_PATH ? ` · base=${BASE_PATH}` : ''}…`);

  const slugs = [];
  for (const file of files) {
    const slug = file.replace(/\.tsx?$/, '');
    slugs.push(slug);
    const bundled = await bundlePage(file);
    const mod = await import(pathToFileURL(bundled).href);
    const Page = mod.default;
    const html = rewriteBase('<!doctype html>\n' + renderToStaticMarkup(Page()));
    await writeFile(path.join(distDir, `${slug}.html`), html);
    console.log(`  ✓ ${slug}.html`);
  }

  await writeSitemap(slugs);
  await writeRobots();

  await buildCss();

  // ship vanilla chrome.js (mobile nav-drawer toggle) untouched
  const chromeJs = path.join(root, 'src', 'lib', 'chrome.client.js');
  try {
    await copyFile(chromeJs, path.join(distDir, 'chrome.js'));
  } catch { /* optional */ }

  // copy public/** → dist/** (logos, favicons, robots.txt, etc.)
  const publicDir = path.join(root, 'public');
  try {
    await copyTree(publicDir, distDir);
    console.log('  ✓ copied public/');
  } catch (e) {
    if (e?.code !== 'ENOENT') throw e;
  }

  await rm(tmpDir, { recursive: true, force: true });
  console.log('Done →', distDir);
}

const SITE_URL = (process.env.SITE_URL ?? 'https://gdk-service.at').replace(/\/+$/, '');

async function writeSitemap(slugs) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = slugs
    .sort((a, b) => (a === 'index' ? -1 : b === 'index' ? 1 : a.localeCompare(b)))
    .map((slug) => {
      const loc = slug === 'index' ? `${SITE_URL}/` : `${SITE_URL}/${slug}.html`;
      const priority = slug === 'index' ? '1.0' : '0.7';
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  await writeFile(path.join(distDir, 'sitemap.xml'), xml);
  console.log(`  ✓ sitemap.xml (${slugs.length} urls)`);
}

async function writeRobots() {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
  await writeFile(path.join(distDir, 'robots.txt'), body);
  console.log('  ✓ robots.txt');
}

async function copyTree(src, dest) {
  const entries = await readdir(src, { withFileTypes: true });
  await mkdir(dest, { recursive: true });
  for (const entry of entries) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) await copyTree(s, d);
    else if (entry.isFile()) await copyFile(s, d);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
