import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader, PHONE, PHONE_HREF, WHATSAPP_HREF } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { CTABlock } from '@/components/site/CTABlock';
import { Section } from '@/components/site/Section';
import { Button, PhoneIcon, WhatsAppIcon } from '@/components/ui/Button';
import { Eyebrow, Placeholder, Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';
const PRINCIPLE_GRID = 'mt-6 grid grid-cols-3 gap-4 max-[720px]:grid-cols-1';
const PRINCIPLE_CARD = 'rounded-lg border border-line bg-bg-raised p-6';
const ICON_BOX = 'mb-3 grid h-10 w-10 place-items-center rounded-sm bg-accent-soft font-mono text-base text-accent';
const PEST_BLOCK = 'mt-8 grid grid-cols-2 gap-6 max-[800px]:grid-cols-1';
const PEST_ARTICLE = 'rounded-lg border border-line bg-bg-raised p-7';
const PEST_EMOJI = 'mr-2 inline-grid h-8 w-8 place-items-center rounded-sm bg-accent-soft align-middle font-mono text-sm text-accent';
const TICKS = 'm-0 mt-3.5 flex list-none flex-col gap-2 p-0 text-sm';
const TICK_LI = "relative pl-6 text-ink before:absolute before:left-0 before:font-bold before:text-accent before:content-['✓']";

const PESTS = [
  {
    id: 'wespen',
    glyph: 'W',
    name: 'Wespen',
    body: 'Ob Nest tief in der Bausubstanz oder frei zugänglich – ich arbeite präzise. Nicht jede Wespe ist ein Schädling, aber wenn nötig, dann richtig.',
    bullets: ['Schnelle Beruhigung in Akutfällen', 'Schutzkleidung & geprüfte Präparate', 'Fixpreis inkl. Anfahrt'],
  },
  {
    id: 'ameisen',
    glyph: 'A',
    name: 'Ameisen',
    body: 'Strukturiert wie das Volk selbst muss auch die Bekämpfung sein. Wissen über Biologie, Arten und Duftspuren entscheidet über den Erfolg.',
    bullets: ['Ursachenanalyse statt Symptombekämpfung', 'Pheromon-basiertes Vorgehen', 'Nachhaltige Wirkung'],
  },
  {
    id: 'bettwanzen',
    glyph: 'B',
    name: 'Bettwanzen',
    body: 'Blutsaugende Parasiten verlangen höchste Präzision und maximale Diskretion. Schädlingsbekämpfung trifft hier auf Möbeldemontage – alles aus einer Hand.',
    bullets: ['Demontage + Bekämpfung + Wiederaufbau', 'Speziell für Hotels', 'Mehrstufige Methodenkombination'],
  },
  {
    id: 'maeuse',
    glyph: 'M',
    name: 'Mäuse & Ratten',
    body: 'Laufwege, Schmierspuren, Nagespuren – ich finde, wo die Nager eindringen, dichte ab und bekämpfe gezielt. So bleibt der Erfolg dauerhaft.',
    bullets: ['Aufspüren von Eintrittsstellen', 'Abdichtung + Bekämpfung', 'Diskret & sauber abgewickelt'],
  },
];

const PROCESS: [string, string][] = [
  ['Anruf oder WhatsApp', 'Sie schildern das Problem. Ich höre zu und stelle die richtigen Fragen.'],
  ['Fixpreis am Telefon', 'Klare Konditionen nach Bezirk, inkl. Anfahrt, Material, Arbeitszeit, MwSt.'],
  ['Termin – meist heute oder morgen', 'Bei Akutfällen rücke ich noch am selben Tag aus.'],
  ['Saubere Bekämpfung', 'Diskret, sicher, nachhaltig. Sie werden den Schädling nicht mehr sehen.'],
];

export default function PestPage() {
  return (
    <BaseLayout title="Schädlingsbekämpfung NÖ · Diskret, punktgenau, mit Fixpreis · GDK Service" description="Schädlingsbekämpfung in Niederösterreich: Wespen, Ameisen, Bettwanzen, Mäuse, Ratten. 24+ Jahre Erfahrung, Same-day Service, Fixpreis am Telefon.">
      <SiteHeader active="pest" />

      <section className={PAGE_HERO} data-screen-label="Pest · Hero">
        <div className={WRAP}>
          <Crumbs items={[{ href: '/index.html', label: 'Start' }, { label: 'Schädlingsbekämpfung' }]} />
          <Eyebrow>Schädlingsbekämpfung NÖ</Eyebrow>
          <h1 className="mt-3 max-w-[18ch] text-[clamp(36px,5vw,56px)]">
            Diskret. Punktgenau.<br />
            <em className="font-display italic text-[color-mix(in_oklch,var(--brand)_80%,var(--accent))]">Mit Fixpreis.</em>
          </h1>
          <p className="mt-4 max-w-[52ch] text-[17px] text-ink-soft">Über 24 Jahre Erfahrung in einem der größten Schädlingsbekämpfungskonzerne der Welt – jetzt persönlich für Sie in Niederösterreich. Same-day Service möglich.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={PHONE_HREF} variant="cta" size="xl"><PhoneIcon />{PHONE}</Button>
            <Button href={WHATSAPP_HREF} variant="wa"><WhatsAppIcon /> WhatsApp</Button>
          </div>
        </div>
      </section>

      {/* Principles */}
      <Section>
        <Eyebrow>Prinzipien</Eyebrow>
        <h2 className="mt-2 text-[clamp(26px,3vw,36px)]">Drei Worte. Drei Versprechen.</h2>
        <div className={PRINCIPLE_GRID}>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>⏱</div><h3 className="text-xl">Genau</h3><p className="mt-1.5 text-ink-soft">Auf das Zieltier abgestimmt – minimaler Einsatz toxischer Stoffe.</p></div>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>◆</div><h3 className="text-xl">Diskret</h3><p className="mt-1.5 text-ink-soft">Man bemerkt mich kaum. Ich gehe erst, wenn der Schädling das auch tut.</p></div>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>✦</div><h3 className="text-xl">Kompetent</h3><p className="mt-1.5 text-ink-soft">24+ Jahre Praxis, ausgebildet im weltweit tätigen Konzern.</p></div>
        </div>
      </Section>

      {/* Pest blocks */}
      <Section className="border-b border-t border-line bg-bg-panel">
        <div className="max-w-[36rem]">
          <Eyebrow>Spezialisierungen</Eyebrow>
          <h2 className="mt-2 text-[clamp(28px,3.2vw,40px)]">Welcher Schädling plagt Sie?</h2>
          <p className="mt-3 text-ink-soft">Jede Art braucht ihre eigene Methode. Hier die häufigsten Einsätze:</p>
        </div>
        <div className={PEST_BLOCK}>
          {PESTS.map(p => (
            <article key={p.id} id={p.id} className={PEST_ARTICLE}>
              <h3 className="text-2xl"><span className={PEST_EMOJI}>{p.glyph}</span>{p.name}</h3>
              <p className="mt-3 text-ink-soft">{p.body}</p>
              <ul className={TICKS}>
                {p.bullets.map(b => <li key={b} className={TICK_LI}>{b}</li>)}
              </ul>
              <p className="mt-5">
                <a href={`/${p.id === 'maeuse' ? 'maeuse-ratten' : p.id}.html`} className="font-semibold text-accent hover:text-brand">
                  Detailseite {p.name} →
                </a>
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section
        cols="1.2fr 1fr"
        align="start"
        gap="gap-12"
        eyebrow="So läuft's ab"
        title="In 4 Schritten zur Lösung."
        primary={
          <ol className="m-0 mt-6 flex list-none flex-col gap-3.5 p-0">
            {PROCESS.map(([title, body], i) => (
              <li key={title} className="grid grid-cols-[44px_1fr] items-start gap-4 rounded-sm border border-line bg-bg-panel px-4.5 py-4">
                <span className="pt-0.5 font-display text-[22px] leading-none text-accent">{i + 1}</span>
                <div>
                  <strong className="mb-1 block font-display text-[17px] text-brand">{title}</strong>
                  <p className="text-ink-soft">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        }
      >
        <Placeholder ratio="4/5" tone="dark" label="Einsatz-Foto · Profil mit Werkzeug" />
      </Section>

      {/* Knowledge cross-link */}
      <Section className="border-b border-t border-line bg-bg-panel">
        <div className="grid grid-cols-2 gap-5 max-[720px]:grid-cols-1">
          <a href="/wirkungsweise.html" className="block rounded-lg border border-line bg-bg-raised p-7 transition-[transform,border-color,box-shadow] duration-200 active:scale-[0.98] hover:border-[color-mix(in_oklch,var(--brand)_30%,var(--line))] hover:shadow-card">
            <Eyebrow>Fachwissen</Eyebrow>
            <h3 className="mt-2 text-[22px]">Wirkungsweise von Schädlingsbekämpfungs&shy;mitteln →</h3>
            <p className="mt-2 text-ink-soft">Was wirkt wie – und warum es Profis braucht.</p>
          </a>
          <a href="/gesetze-normen.html" className="block rounded-lg border border-line bg-bg-raised p-7 transition-[transform,border-color,box-shadow] duration-200 active:scale-[0.98] hover:border-[color-mix(in_oklch,var(--brand)_30%,var(--line))] hover:shadow-card">
            <Eyebrow>Compliance</Eyebrow>
            <h3 className="mt-2 text-[22px]">Gesetze, Normen &amp; ihre Folgen →</h3>
            <p className="mt-2 text-ink-soft">EN 16636, BPV, IPM – Standards, an denen ich mitgearbeitet habe.</p>
          </a>
        </div>
      </Section>

      {/* Pricing band */}
      <Section
        cols="1.2fr 1fr"
        gap="gap-12"
        collapseBelow={800}
        className="bg-[radial-gradient(circle_at_85%_0%,color-mix(in_oklch,var(--accent)_28%,transparent),transparent_55%),linear-gradient(135deg,var(--dark),color-mix(in_oklch,var(--dark)_92%,black))] text-dark-ink"
        primary={
          <>
            <Eyebrow accent>Fixpreis-Garantie</Eyebrow>
            <h2 className="mt-2 text-[clamp(28px,3.4vw,42px)] text-dark-ink">Ein Auftrag. Ein Preis.<br />Ohne Kleingedrucktes.</h2>
            <p className="mt-4 max-w-[50ch] opacity-75">
              Transparent gestaffelt nach Bezirk, immer inklusive An- &amp; Abfahrt, Präparate, Arbeitszeit, MwSt. Den exakten Preis nenne ich Ihnen verbindlich am Telefon – bevor irgendetwas passiert.
            </p>
            <ul className="m-0 mt-5 flex list-none flex-col gap-2 p-0">
              {['Inklusive An- & Abfahrt', 'Inklusive aller Präparate', 'Inklusive Arbeitszeit', 'Inklusive MwSt.'].map(t => (
                <li key={t} className="relative pl-6 before:absolute before:left-0 before:font-bold before:text-accent before:content-['✓']">{t}</li>
              ))}
            </ul>
          </>
        }
      >
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">KONKRETES ANGEBOT IN 2 MINUTEN</span>
          <h3 className="mt-3 text-2xl text-dark-ink">Beschreiben Sie Ihr Problem – Sie erhalten den Fixpreis sofort.</h3>
          <div className="mt-5 flex flex-col gap-2.5">
            <Button href={PHONE_HREF} variant="cta" size="xl">Jetzt Fixpreis erfragen</Button>
            <Button href="/faq.html" variant="ghost" className="!text-dark-ink !border-white/20 hover:!border-white/60">Häufige Fragen →</Button>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <CTABlock variant="urgent" />
      </Section>

      <SiteFooter />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}
