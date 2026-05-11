import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter, MobileSticky } from '@/components/site/SiteFooter';
import { Section } from '@/components/site/Section';
import { CTABlock } from '@/components/site/CTABlock';
import { Eyebrow, Placeholder, Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';

const WHY: [string, string, string][] = [
  ['⏱', 'Schnell', 'Bis zu 4× schneller als Eigenmontage.'],
  ['🔧', 'Fachgerecht', 'Stabil verschraubt, Türen perfekt eingestellt.'],
  ['✦', 'Sauber', 'Verpackung mitgenommen, Boden sauber.'],
  ['+', 'Komplettservice', 'Auf Wunsch Demontage & Wandmontage.'],
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
        gap="gap-12"
        collapseBelow={800}
        eyebrow="Warum mit mir?"
        title={<>Zeit sparen.<br />Nerven sparen.<br /><em>Ergebnis behalten.</em></>}
        primary={
          <>
            <p className="mt-4 text-ink-soft">
              Ein IKEA-Schrank kostet Sie selbst 3–5 Stunden – und manchmal eine Beziehungskrise. Ich montiere ihn in einem Bruchteil der Zeit, mit dem richtigen Werkzeug und dem Auge eines Profis.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 max-[520px]:grid-cols-1">
              {WHY.map(([icon, head, body]) => (
                <div key={head} className="flex gap-3 rounded-lg border border-line bg-bg-raised p-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-accent-soft font-mono text-base text-accent" aria-hidden="true">{icon}</div>
                  <div>
                    <strong className="block font-semibold text-brand">{head}</strong>
                    <span className="text-sm text-ink-soft">{body}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        }
      >
        <Placeholder ratio="4/3" tone="dark" label="Möbelmontage · heller Raum" />
      </Section>

      <Section className="border-b border-t border-line bg-bg-panel">
        <div className="max-w-[36rem]">
          <Eyebrow>Typische Aufträge</Eyebrow>
          <h2 className="mt-2 text-[clamp(28px,3.2vw,40px)]">Das baue ich am häufigsten auf.</h2>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3 max-[720px]:grid-cols-2 max-[480px]:grid-cols-1">
          {JOBS.map(j => (
            <div key={j} className="rounded-sm border border-line bg-bg-raised px-4 py-3.5 text-sm text-ink-soft">{j}</div>
          ))}
        </div>
      </Section>

      <Section>
        <CTABlock variant="standard" />
      </Section>

      <SiteFooter />
      <MobileSticky />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}
