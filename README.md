# GDK Service – static site

Static site for **GDK Service** (Schädlingsbekämpfung & Möbelmontage in Niederösterreich), authored as React/TypeScript components and rendered to plain HTML at build time. No client-side React, no hydration — what ships is fast, plain HTML + a tiny vanilla `chrome.js` (mobile nav drawer).

## Stack

- **React 18 + TypeScript** for components
- **Tailwind CSS** for utilities (with a small custom layer for tokens that need OKLCH / `color-mix`)
- **esbuild + react-dom/server** for static rendering
- **Vite** for local dev (`bun run dev`)
- **GitHub Actions → GitHub Pages** for deployment

## Project layout

```
src/
  components/
    ui/             # Button, Eyebrow, Placeholder, Crumbs
    site/           # SiteHeader, SiteFooter, MobileSticky, CTABlock
  layouts/
    BaseLayout.tsx  # <html>/<head>/<body> shell
  pages/            # one .tsx per route — exports { meta, default }
  styles/
    globals.css     # Tailwind + design tokens + component layer
  lib/              # tiny helpers (clsx, etc.)
build.mjs           # static renderer — discovers src/pages/*.tsx → dist/<name>.html
```

## Local development

```bash
bun install
bun run build      # static render → dist/
bun run preview    # serve dist/
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which runs `bun run build` and publishes `dist/` to GitHub Pages.

In **Settings → Pages** of the repo, set **Source = GitHub Actions** once.

## Adding a new page

1. Create `src/pages/<slug>.tsx`:
   ```tsx
   import { BaseLayout } from '@/layouts/BaseLayout';
   import { SiteHeader } from '@/components/site/SiteHeader';
   import { SiteFooter, MobileSticky } from '@/components/site/SiteFooter';

   export const meta = {
     title: 'Mein Titel · GDK Service',
     description: '…',
   };

   export default function Page() {
     return (
       <BaseLayout title={meta.title} description={meta.description}>
         <SiteHeader active="home" />
         <main>{/* … */}</main>
         <SiteFooter />
         <MobileSticky />
       </BaseLayout>
     );
   }
   ```
2. `bun run build` – it will be discovered automatically and emitted as `dist/<slug>.html`.
