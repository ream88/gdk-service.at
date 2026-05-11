import type { ReactNode } from 'react';

interface BaseLayoutProps {
  title: string;
  description?: string;
  activePage?: string;
  children: ReactNode;
}

const FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,550;9..144,600;9..144,700&family=Inter+Tight:wght@400;500;600;700&family=Instrument+Serif&family=JetBrains+Mono:wght@400;500&display=swap';

export function BaseLayout({ title, description, children }: BaseLayoutProps) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={FONTS_HREF} rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" />
        <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body data-theme="werkstatt" className="m-0 bg-bg font-sans text-base leading-[1.55] text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
