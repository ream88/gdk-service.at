import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { Section } from '@/components/site/Section';
import { CTABlock } from '@/components/site/CTABlock';
import { FeatureRow } from '@/components/site/FeatureRow';
import { Eyebrow, Placeholder, Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';

const WHY: [string, string, string][] = [
  ['ph-clock-countdown', 'Schnell', 'Bis zu 4× schneller als Eigenmontage.'],
  ['ph-wrench', 'Fachgerecht', 'Stabil verschraubt, Türen perfekt eingestellt.'],
  ['ph-sparkle', 'Sauber', 'Verpackung mitgenommen, Boden sauber.'],
  ['ph-plus', 'Komplettservice', 'Auf Wunsch Demontage & Wandmontage.'],
];

const JOBS = [
  'Kleiderschränke (PAX & Co.)',
  'Küchen & Küchenmodule',
  'Regalsysteme & Bücherwände',
  'Betten inkl. Lattenrost',
  'Schreibtische & Büromöbel',
  'Kommoden & Sideboards',
  'TV-Möbel & Lowboards',
  'Garderoben & Flurmöbel',
  'Kinder- & Babyzimmer',
];

export default function FurniturePage() {
  return (
    <BaseLayout title="Möbelmontage NÖ · Schränke, Küchen, Regale fachgerecht aufgebaut · GDK Service" description="Professionelle Möbelmontage in Niederösterreich: IKEA-Schränke, Küchen, Regale, Betten – schnell, sauber, fachgerecht. Auf Wunsch inkl. Demontage und Entsorgung.">
      <SiteHeader active="furniture" />

      <section className={PAGE_HERO} data-screen-label="Furniture · Hero">
        <div className={WRAP}>
          <Crumbs items={[{ href: '/index.html', label: 'Start' }, { label: 'Möbelmontage' }]} />
          <Eyebrow>Möbelmontage</Eyebrow>
          <h1 className="mt-3 max-w-[18ch] text-[clamp(36px,5vw,56px)]">
            Schränke, Küchen, Regale – <em className="italic text-[color-mix(in_oklch,var(--brand)_80%,var(--accent))]">fachgerecht aufgebaut.</em>
          </h1>
          <p className="mt-4 max-w-[52ch] text-[17px] text-ink-soft">Sie sparen Stunden, vermeiden falsche Schrauben und bekommen am Ende ein Möbel, das hält. Sauber gearbeitet, alles entsorgt.</p>
        </div>
      </section>

      <Section
        cols="1fr 1.2fr"
        reverse
        align="stretch"
        gap="gap-12"
        collapseBelow={800}
        eyebrow="Warum mit mir?"
        title={<>Zeit sparen.<br />Nerven sparen.<br /><em>Ergebnis behalten.</em></>}
        primary={
          <>
            <p className="mt-4 text-ink-soft">
              Ein IKEA-Schrank kostet Sie selbst 3–5 Stunden – und manchmal eine Beziehungskrise. Ich montiere ihn in einem Bruchteil der Zeit, mit dem richtigen Werkzeug und dem Auge eines Profis.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-8 max-[520px]:grid-cols-1">
              {WHY.map(([icon, head, body]) => (
                <FeatureRow key={head} layout="horizontal" icon={icon} title={head} body={body} />
              ))}
            </div>
          </>
        }
      >
        <Placeholder fill tone="dark" label="Möbelmontage · heller Raum" />
      </Section>

      <Section
        className="border-b border-t border-line bg-bg-panel"
        eyebrow="Typische Aufträge"
        title="Das baue ich am häufigsten auf."
      >
        <div className="grid grid-cols-3 gap-4 max-[720px]:grid-cols-2 max-[480px]:grid-cols-1">
          {JOBS.map(j => (
            <div key={j} className="rounded-lg border border-line bg-bg-raised px-6 py-5 font-display text-[18px] font-[550] text-brand">{j}</div>
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
