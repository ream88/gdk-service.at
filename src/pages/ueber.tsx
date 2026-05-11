import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { CTABlock } from '@/components/site/CTABlock';
import { Section } from '@/components/site/Section';
import { Eyebrow, Placeholder, Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';

type StatSym = { text: string } | { icon: string };
const STATS: [StatSym, string, string][] = [
  [{ text: '24+' }, 'Jahre Erfahrung', 'Ausgebildet im internationalen Konzern.'],
  [{ icon: 'ph-shield-check' }, 'Diskretion garantiert', 'Nachbarn merken nichts. Hotels schätzen das.'],
  [{ icon: 'ph-phone' }, 'Persönlich', 'Sie sprechen mit mir – nicht mit einem Callcenter.'],
  [{ icon: 'ph-crosshair' }, 'Lokal verankert', 'Niederösterreich kenne ich wie meine Werkzeugkiste.'],
];

export default function AboutPage() {
  return (
    <BaseLayout title="Über mich · Gerhard Klosterer · GDK Service" description="Schädlingsbekämpfer seit 2002. Über zwei Jahrzehnte Erfahrung in einem internationalen Konzern – jetzt persönlich für Sie in Niederösterreich.">
      <SiteHeader active="about" />

      <section className={PAGE_HERO} data-screen-label="About · Hero">
        <div className={WRAP}>
          <Crumbs items={[{ href: '/index.html', label: 'Start' }, { label: 'Über mich' }]} />
          <Eyebrow>Über mich</Eyebrow>
          <h1 className="mt-3 max-w-[18ch] text-[clamp(36px,5vw,56px)]">
            Gerhard Klosterer –<br />
            <em className="italic text-[color-mix(in_oklch,var(--brand)_80%,var(--accent))]">der, der's macht.</em>
          </h1>
          <p className="mt-4 max-w-[52ch] text-[17px] text-ink-soft">Schädlingsbekämpfer seit 2002. Über zwei Jahrzehnte Konzernerfahrung, jetzt persönlich für Sie in Niederösterreich.</p>
        </div>
      </section>

      <Section
        cols="0.85fr 1.1fr"
        reverse
        align="stretch"
        gap="gap-12"
        primary={
          <>
            <div className="flex flex-col gap-3.5 text-base leading-[1.75] text-ink-soft [&_strong]:font-semibold [&_strong]:text-brand">
              <p>Ich heiße <strong>Gerhard Klosterer</strong>. Bis vor Kurzem war ich in einem der größten Schädlingsbekämpfungsunternehmen auf diesem Planeten tätig. Heute bürgt mein eigener Name für Qualität.</p>
              <p>Mein Ziel ist einfach: Ihnen eine <strong>rasche und unkomplizierte Lösung</strong> Ihres Problems zu bieten. Sicherheit und Sauberkeit dürfen dabei nie zu kurz kommen.</p>
              <p>Die Preisgestaltung ist <strong>klar und transparent</strong> – ohne Kleingedrucktes, ohne versteckte Kosten. Ein Auftrag = ein Fixpreis.</p>
              <p>Ergänzend dazu biete ich <strong>Möbelmontage</strong> – eine Disziplin, die mir nicht zuletzt bei Bettwanzeneinsätzen täglich begegnet und in der ich genauso präzise arbeite.</p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 max-[520px]:grid-cols-1">
              {STATS.map(([sym, head, body]) => (
                <div key={head} className="rounded-lg border border-line bg-bg-raised p-5">
                  <span className="mb-2 inline-grid h-9 w-9 place-items-center rounded-sm bg-accent-soft font-mono text-base text-accent" aria-hidden="true">
                    {'icon' in sym ? <i className={`ph-fill ${sym.icon}`} /> : sym.text}
                  </span>
                  <strong className="block font-semibold text-brand">{head}</strong>
                  <span className="text-sm text-ink-soft">{body}</span>
                </div>
              ))}
            </div>
          </>
        }
      >
        <Placeholder fill tone="dark" label="Portrait · Gerhard Klosterer" />
      </Section>

      <Section className="border-y border-line bg-bg-panel">
        <CTABlock variant="standard" />
      </Section>

      <SiteFooter />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}
