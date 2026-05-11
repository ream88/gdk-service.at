import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter, MobileSticky } from '@/components/site/SiteFooter';
import { Section } from '@/components/site/Section';
import { Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';

export default function ImpressumPage() {
  return (
    <BaseLayout title="Impressum · GDK Service" description="Angaben gemäß § 5 ECG & § 25 MedienG zu GDK Service e.U., Gerhard Klosterer.">
      <SiteHeader />
      <section className={PAGE_HERO} data-screen-label="Impressum · Hero">
        <div className={WRAP}>
          <Crumbs items={[{ href: '/index.html', label: 'Start' }, { label: 'Impressum' }]} />
          <h1 className="mt-3 max-w-[18ch] text-[clamp(36px,5vw,56px)]">Impressum</h1>
        </div>
      </section>
      <Section innerClassName="max-w-tight">
        <h2 className="mb-5 text-2xl">Angaben gem. § 5 ECG &amp; § 25 MedienG</h2>
        <dl className="grid grid-cols-[180px_1fr] gap-x-6 gap-y-3 max-[640px]:grid-cols-1">
          <dt className="font-semibold text-brand">Firma</dt><dd className="m-0 text-ink-soft">GDK Service e.U.</dd>
          <dt className="font-semibold text-brand">Inhaber</dt><dd className="m-0 text-ink-soft">Gerhard Klosterer</dd>
          <dt className="font-semibold text-brand">Adresse</dt><dd className="m-0 text-ink-soft">Weidengasse 11, 3041 Siegersdorf, Österreich</dd>
          <dt className="font-semibold text-brand">Telefon</dt><dd className="m-0 text-ink-soft">+43 670 199 55 44</dd>
          <dt className="font-semibold text-brand">E-Mail</dt><dd className="m-0 text-ink-soft">gerhard@gdk-service.at</dd>
          <dt className="font-semibold text-brand">UID</dt><dd className="m-0 text-ink-soft">ATU00000000</dd>
          <dt className="font-semibold text-brand">Firmenbuch</dt><dd className="m-0 text-ink-soft">FN 000000x, LG St. Pölten</dd>
          <dt className="font-semibold text-brand">Gewerbe</dt><dd className="m-0 text-ink-soft">Schädlingsbekämpfer, Möbelmonteur</dd>
          <dt className="font-semibold text-brand">Aufsichtsbehörde</dt><dd className="m-0 text-ink-soft">Bezirkshauptmannschaft St. Pölten</dd>
          <dt className="font-semibold text-brand">Kammer</dt><dd className="m-0 text-ink-soft">Wirtschaftskammer Niederösterreich</dd>
        </dl>
        <h2 className="mb-3 mt-10 text-xl">Haftungsausschluss</h2>
        <p className="text-sm text-ink-soft">Die Inhalte dieser Seite wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.</p>
        <h2 className="mb-3 mt-8 text-xl">Urheberrecht</h2>
        <p className="text-sm text-ink-soft">Alle Inhalte dieser Website unterliegen dem österreichischen Urheberrecht. Jede Verwendung außerhalb der engen Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung.</p>
      </Section>
      <SiteFooter />
      <MobileSticky />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}
