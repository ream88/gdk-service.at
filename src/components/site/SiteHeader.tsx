import { clsx } from '@/lib/clsx';
import { Button, PhoneIcon } from '@/components/ui/Button';

export const PHONE = '0670 199 55 44';
export const PHONE_HREF = 'tel:+436701995544';
export const WHATSAPP_HREF = 'https://wa.me/436701995544';
export const EMAIL = 'gerhard@gdk-service.at';
export const EMAIL_HREF = 'mailto:gerhard@gdk-service.at';
export const ADDRESS = 'Weidengasse 11, 3041 Siegersdorf';
export const HOURS = 'Mo–Fr 8:00–17:00 · Notfälle nach Vereinbarung';
export const COMPANY = 'Gerhard Klosterer e.U.';

export type PageKey =
  | 'home' | 'pest' | 'furniture' | 'about' | 'faq' | 'contact'
  | 'wespen' | 'ameisen' | 'bettwanzen' | 'maeuse-ratten'
  | 'wirkungsweise' | 'gesetze-normen' | 'einsatzgebiet' | 'hausverwaltungen'
  | 'impressum' | 'datenschutz' | 'agb';

export const NAV_LINKS: { href: string; label: string; key: PageKey }[] = [
  { href: '/index.html', label: 'Start', key: 'home' },
  { href: '/schaedlingsbekaempfung.html', label: 'Schädlingsbekämpfung', key: 'pest' },
  { href: '/moebelmontage.html', label: 'Möbelmontage', key: 'furniture' },
  { href: '/ueber.html', label: 'Über mich', key: 'about' },
  { href: '/faq.html', label: 'FAQ', key: 'faq' },
  { href: '/kontakt.html', label: 'Kontakt', key: 'contact' },
];

const WRAP = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';

export function SiteHeader({ active }: { active?: PageKey }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[color-mix(in_oklch,var(--bg)_88%,transparent)] backdrop-saturate-[1.2] backdrop-blur-[10px]">
      <div className={clsx(WRAP, 'flex h-[76px] items-center justify-between gap-4')}>
        <a href="/index.html" className="inline-flex items-center" aria-label="GDK Service Startseite">
          <img
            src="/logos/logo-horizontal.png"
            alt="GDK Service – Klosterer, Niederösterreich"
            className="block h-11 w-auto max-w-full"
            width="175"
            height="44"
          />
        </a>

        <nav className="flex gap-1 max-[1000px]:hidden" aria-label="Hauptnavigation">
          {NAV_LINKS.map(l => (
            <a
              key={l.key}
              href={l.href}
              className={clsx(
                'rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-150 hover:text-brand',
                active === l.key ? 'bg-bg-panel text-brand' : 'text-ink-soft',
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Button href={PHONE_HREF} variant="cta" size="sm" aria-label="Jetzt anrufen" className="max-[640px]:!p-2.5 [&_span]:max-[640px]:hidden">
            <PhoneIcon />
            <span>{PHONE}</span>
          </Button>
          <button
            type="button"
            id="__nav_toggle"
            aria-label="Menü öffnen"
            aria-expanded="false"
            className="hidden h-10 w-10 place-items-center rounded-sm border border-line p-2.5 max-[1000px]:grid"
          >
            <span className="mx-auto block h-0.5 w-[18px] bg-brand transition-[transform,opacity] duration-150" />
            <span className="mx-auto my-[3px] block h-0.5 w-[18px] bg-brand transition-[transform,opacity] duration-150" />
            <span className="mx-auto block h-0.5 w-[18px] bg-brand transition-[transform,opacity] duration-150" />
          </button>
        </div>
      </div>

      <div id="__nav_drawer" hidden className="hidden border-t border-line bg-bg px-7 pb-5 pt-3">
        {NAV_LINKS.map(l => (
          <a
            key={l.key}
            href={l.href}
            className={clsx(
              'block rounded-sm px-3 py-3.5 text-base font-medium',
              active === l.key ? 'bg-bg-panel text-brand' : 'text-ink',
            )}
          >
            {l.label}
          </a>
        ))}
        <Button href="/kontakt.html" variant="primary" size="xl" className="mt-4 justify-center">
          Termin anfragen
        </Button>
      </div>
    </header>
  );
}
