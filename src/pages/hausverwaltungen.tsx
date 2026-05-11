import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { Section } from '@/components/site/Section';
import { CTABlock } from '@/components/site/CTABlock';
import { Eyebrow, Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';

const SERVICES: [string, string, string][] = [
  ['P', 'Rahmenvertrag', 'Konditionen fix vereinbart, auf Abruf verfügbar.'],
  ['D', 'Dokumentation', 'Einsatzberichte mit Fotos, Maßnahmen, Empfehlungen.'],
  ['S', 'Schnellreaktion', 'Bei Beschwerden von Bewohnern oder Gästen: gleicher Tag.'],
  ['H', 'Monitoring', 'Köderstationen, Fallen & regelmäßige Kontrollgänge.'],
  ['B', 'Bettwanzen-Protokoll', 'Speziell für Hotels: Demontage, Behandlung, Reassembly.'],
  ['A', 'Abrechnung', 'Sauber auf Objekt/Top/Einheit – direkt buchbar.'],
  ['E', 'Einzelerstattung', 'Direkt mit dem Bewohner abrechenbar – ohne Ihren Aufwand.'],
  ['V', 'Vertraulichkeit', 'Diskret im Einsatz. Niemand sieht, wozu ich da war.'],
];

export default function HausverwaltungenPage() {
  return (
    <BaseLayout title="Hausverwaltungen &amp; Hotellerie · GDK Service" description="Rahmenverträge, dokumentierte Einsätze und Schnellreaktion für Hausverwaltungen, Hotels und Gastronomiebetriebe in Niederösterreich.">
      <SiteHeader active="hausverwaltungen" />

      <section className={PAGE_HERO} data-screen-label="Hausverwaltungen · Hero">
        <div className={WRAP}>
          <Crumbs items={[{ href: '/index.html', label: 'Start' }, { label: 'Hausverwaltungen' }]} />
          <Eyebrow>Für Hausverwaltungen &amp; Hotellerie</Eyebrow>
          <h1 className="mt-3 max-w-[18ch] text-[clamp(36px,5vw,56px)]">
            Ein verlässlicher Partner –<br />
            <em className="italic text-[color-mix(in_oklch,var(--brand)_80%,var(--accent))]">für Ihre Objekte.</em>
          </h1>
          <p className="mt-4 max-w-[52ch] text-[17px] text-ink-soft">Diskret, dokumentiert, abrechenbar. Ich arbeite mit Verwaltungen, Hotels und Gastronomiebetrieben in ganz Niederösterreich.</p>
        </div>
      </section>

      <Section eyebrow="Leistungen für B2B" title="Was Sie von mir bekommen.">
        <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
          {SERVICES.map(([sym, head, body]) => (
            <div key={head} className="rounded-lg border border-line bg-bg-raised p-6">
              <span className="mb-3 inline-grid h-9 w-9 place-items-center rounded-sm bg-accent-soft font-mono text-sm text-accent" aria-hidden="true">{sym}</span>
              <h3 className="text-lg">{head}</h3>
              <p className="mt-1.5 text-sm text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-y border-line bg-bg-panel">
        <CTABlock variant="standard" />
      </Section>

      <SiteFooter />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}
