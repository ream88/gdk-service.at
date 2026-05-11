import { COMPANY } from './SiteHeader';

const FOOTER_GROUPS = [
  {
    title: 'Leistungen',
    links: [
      { href: '/schaedlingsbekaempfung.html', label: 'Schädlingsbekämpfung' },
      { href: '/wespen.html', label: 'Wespen' },
      { href: '/ameisen.html', label: 'Ameisen' },
      { href: '/bettwanzen.html', label: 'Bettwanzen' },
      { href: '/maeuse-ratten.html', label: 'Mäuse & Ratten' },
      { href: '/moebelmontage.html', label: 'Möbelmontage' },
      { href: '/hausverwaltungen.html', label: 'Hausverwaltungen' },
    ],
  },
  {
    title: 'Fachwissen',
    links: [
      { href: '/wirkungsweise.html', label: 'Wirkungsweise' },
      { href: '/gesetze-normen.html', label: 'Gesetze & Normen' },
      { href: '/einsatzgebiet.html', label: 'Einsatzgebiet' },
      { href: '/faq.html', label: 'FAQ' },
    ],
  },
];

const WRAP = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const H4   = 'mb-3.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent';
const UL   = 'm-0 flex list-none flex-col gap-2.5 p-0 text-sm';

export function SiteFooter() {
  return (
    <footer
      className="bg-[linear-gradient(180deg,var(--dark)_0%,color-mix(in_oklch,var(--dark)_92%,black)_100%)] py-[72px] text-dark-ink"
    >
      <div className={WRAP}>
        <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          <div>
            <a href="/index.html" className="inline-flex items-center" aria-label="GDK Service Startseite">
              <img
                src="/logos/logo-horizontal-white.png"
                alt="GDK Service – Klosterer, Niederösterreich"
                className="block h-[57px] w-auto max-w-full max-[480px]:h-[54px]"
                width="226"
                height="57"
              />
            </a>
            <p className="mt-5 max-w-[280px] text-sm leading-[1.6] opacity-[0.72]">
              Diskrete Schädlingsbekämpfung &amp; saubere Möbelmontage in Niederösterreich. Persönlich. Fix. Kompetent.
            </p>
          </div>

          {FOOTER_GROUPS.map(group => (
            <div key={group.title}>
              <h4 className={H4}>{group.title}</h4>
              <ul className={UL}>
                {group.links.map(l => (
                  <li key={l.href}><a href={l.href} className="hover:text-accent">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className={H4}>Unternehmen</h4>
            <ul className={UL}>
              <li><a href="/ueber.html" className="hover:text-accent">Über mich</a></li>
              <li><a href="/kontakt.html" className="hover:text-accent">Termin &amp; Kontakt</a></li>
              <li><a href="/hausverwaltungen.html" className="hover:text-accent">Hausverwaltungen</a></li>
              <li><a href="/impressum.html" className="hover:text-accent">Impressum</a></li>
              <li><a href="/datenschutz.html" className="hover:text-accent">Datenschutz</a></li>
              <li><a href="/agb.html" className="hover:text-accent">AGB</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/[0.08] pt-5 text-xs opacity-50">
          © {new Date().getFullYear()} {COMPANY} · UID ATU82992549 · Schädlingsbekämpfung &amp; Möbelmontage in Niederösterreich
        </div>
      </div>
    </footer>
  );
}

