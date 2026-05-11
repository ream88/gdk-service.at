import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { Section } from '@/components/site/Section';
import { CTABlock } from '@/components/site/CTABlock';
import { Eyebrow, Placeholder, Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';

export default function EinsatzgebietPage() {
  return (
    <BaseLayout title="Einsatzgebiet · Schädlingsbekämpfung in NÖ · GDK Service" description="Sitz in Siegersdorf, unterwegs im gesamten Niederösterreich. Schnelle Anfahrt in den Kernbezirken Baden, Mödling, Wiener Neustadt, Bruck/Leitha, Neunkirchen.">
      <SiteHeader active="einsatzgebiet" />

      <section className={PAGE_HERO} data-screen-label="Areas · Hero">
        <div className={WRAP}>
          <Crumbs items={[{ href: '/index.html', label: 'Start' }, { label: 'Einsatzgebiet' }]} />
          <Eyebrow>Einsatzgebiet</Eyebrow>
          <h1 className="mt-3 max-w-[18ch] text-[clamp(36px,5vw,56px)]">
            Ganz <em className="italic text-[color-mix(in_oklch,var(--brand)_80%,var(--accent))]">Niederösterreich.</em>
          </h1>
          <p className="mt-4 max-w-[52ch] text-[17px] text-ink-soft">Sitz in Siegersdorf, unterwegs im gesamten Bundesland. Schnelle Anfahrt in den gelb markierten Kernbezirken.</p>
        </div>
      </section>

      <Section
        cols={true}
        align="stretch"
        gap="gap-12"
        collapseBelow={800}
        eyebrow="Kernbezirke (< 45 min)"
        title="Wien-Umland & Industrieviertel"
        titleSize="compact"
        primary={
          <>
            <ul className="m-0 mt-5 grid list-none grid-cols-2 gap-2 p-0">
              {['Baden', 'Bruck an der Leitha', 'Mödling', 'Wiener Neustadt', 'Neunkirchen', 'Wien-Umgebung', 'Sankt Pölten', 'Tulln'].map(n => (
                <li key={n} className="flex items-center gap-2 rounded-sm border border-line bg-bg-raised px-3.5 py-2.5 text-sm"><i className="ph-fill ph-map-pin text-accent" aria-hidden="true" />{n}</li>
              ))}
            </ul>
            <div className="mt-10"><Eyebrow>Weitere Bezirke</Eyebrow></div>
            <ul className="m-0 mt-5 grid list-none grid-cols-3 gap-1.5 p-0 max-[480px]:grid-cols-2">
              {['Amstetten', 'Gänserndorf', 'Hollabrunn', 'Horn', 'Korneuburg', 'Krems', 'Lilienfeld', 'Melk', 'Mistelbach', 'Scheibbs', 'Waidhofen/Ybbs', 'Zwettl'].map(n => (
                <li key={n} className="flex items-center gap-1.5 rounded-sm border border-line bg-bg-raised px-2.5 py-1.5 text-[13px] text-ink-soft"><i className="ph-fill ph-map-pin text-xs text-accent/80" aria-hidden="true" />{n}</li>
              ))}
            </ul>
            <div className="mt-8 rounded-lg bg-bg-panel p-5 text-sm text-ink-soft [&_strong]:mb-1.5 [&_strong]:block [&_strong]:text-brand">
              <strong>Nicht aufgeführt?</strong>
              Rufen Sie trotzdem an – in begründeten Fällen komme ich auch über die Landesgrenze hinaus.
            </div>
          </>
        }
      >
        <Placeholder fill tone="dark" label="Karte · Niederösterreich mit Pins" />
      </Section>

      <Section className="border-y border-line bg-bg-panel">
        <CTABlock variant="standard" />
      </Section>

      <SiteFooter />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}
