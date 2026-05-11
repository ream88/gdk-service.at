// Dev server: builds dist/, watches src/ + public/, serves dist/ with auto-reload.
// Run via `bun dev.mjs` (uses Bun.serve + native WebSocket).

import { watch } from 'node:fs';
import { existsSync, statSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(root, 'dist');
const port = Number(process.env.PORT ?? 5173);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.mjs':  'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.txt':  'text/plain; charset=utf-8',
};

const RELOAD_SNIPPET = `<script>(()=>{let r=()=>{try{let s=new WebSocket((location.protocol==='https:'?'wss':'ws')+'://'+location.host+'/__dev');s.onmessage=e=>{if(e.data==='reload')location.reload()};s.onclose=()=>setTimeout(r,500)}catch{setTimeout(r,500)}};r()})();</script>`;

const sockets = new Set();
let building = false;
let pending = false;

function runBuild() {
  if (building) { pending = true; return; }
  building = true;
  console.log('\n[dev] build…');
  const proc = spawn('node', ['build.mjs'], { cwd: root, stdio: 'inherit' });
  proc.on('exit', (code) => {
    building = false;
    if (code === 0) {
      console.log(`[dev] ready · http://localhost:${port}`);
      for (const ws of sockets) try { ws.send('reload'); } catch {}
    } else {
      console.log('[dev] build failed (code', code + ')');
    }
    if (pending) { pending = false; runBuild(); }
  });
}

let debounceTimer;
function scheduleBuild() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(runBuild, 150);
}

for (const dir of ['src', 'public']) {
  const full = path.join(root, dir);
  if (existsSync(full)) watch(full, { recursive: true }, scheduleBuild);
}

runBuild();

Bun.serve({
  port,
  fetch(req, server) {
    const url = new URL(req.url);

    if (url.pathname === '/__dev') {
      if (server.upgrade(req)) return undefined;
      return new Response('upgrade required', { status: 426 });
    }

    let rel = decodeURIComponent(url.pathname);
    if (rel.endsWith('/')) rel += 'index.html';
    let filePath = path.join(distDir, rel);

    if (!existsSync(filePath) && !path.extname(filePath)) {
      filePath += '.html';
    }
    if (!existsSync(filePath) || !statSync(filePath).isFile()) {
      const fallback = path.join(distDir, 'index.html');
      if (existsSync(fallback)) filePath = fallback;
      else return new Response('Not found', { status: 404 });
    }

    return serveFile(filePath);
  },
  websocket: {
    open(ws)  { sockets.add(ws); },
    close(ws) { sockets.delete(ws); },
    message() {},
  },
});

async function serveFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const type = MIME[ext] ?? 'application/octet-stream';
  if (ext === '.html') {
    const html = (await readFile(filePath, 'utf8'))
      .replace(/<\/body>/i, RELOAD_SNIPPET + '</body>');
    return new Response(html, { headers: { 'content-type': type, 'cache-control': 'no-store' } });
  }
  const buf = await readFile(filePath);
  return new Response(buf, { headers: { 'content-type': type, 'cache-control': 'no-store' } });
}
