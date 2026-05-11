import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader, PHONE, PHONE_HREF, WHATSAPP_HREF } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { CTABlock } from '@/components/site/CTABlock';
import { Section } from '@/components/site/Section';
import { ServiceCard } from '@/components/site/ServiceCard';
import { FeatureRow } from '@/components/site/FeatureRow';
import { Button, PhoneIcon, WhatsAppIcon } from '@/components/ui/Button';
import { Eyebrow, Placeholder, Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';
const PRINCIPLE_GRID = 'mt-6 grid grid-cols-3 gap-4 max-[720px]:grid-cols-1';
const PEST_BLOCK = 'mt-8 grid grid-cols-2 gap-6 max-[800px]:grid-cols-1';

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
        </div>
      </section>

      {/* Principles */}
      <Section eyebrow="Prinzipien" title="Drei Worte. Drei Versprechen." titleSize="compact">
        <div className={PRINCIPLE_GRID}>
          <FeatureRow layout="vertical" icon="ph-clock-countdown" title="Genau"     body="Auf das Zieltier abgestimmt – minimaler Einsatz toxischer Stoffe." />
          <FeatureRow layout="vertical" icon="ph-shield-check"   title="Diskret"   body="Man bemerkt mich kaum. Ich gehe erst, wenn der Schädling das auch tut." />
          <FeatureRow layout="vertical" icon="ph-sparkle"        title="Kompetent" body="24+ Jahre Praxis, ausgebildet im weltweit tätigen Konzern." />
        </div>
      </Section>

      {/* Pest blocks */}
      <Section
        className="border-b border-t border-line bg-bg-panel"
        eyebrow="Spezialisierungen"
        title="Welcher Schädling plagt Sie?"
        aside="Jede Art braucht ihre eigene Methode. Hier die häufigsten Einsätze:"
      >
        <div className={PEST_BLOCK}>
          {PESTS.map(p => (
            <ServiceCard
              key={p.id}
              id={p.id}
              href={`/${p.id === 'maeuse' ? 'maeuse-ratten' : p.id}.html`}
              glyph={p.glyph}
              title={p.name}
              lede={p.body}
              bullets={p.bullets}
            />
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section
        cols="1.2fr 1fr"
        align="stretch"
        gap="gap-12"
        eyebrow="So läuft's ab"
        title="In 4 Schritten zur Lösung."
        primary={
          <ol className="m-0 mt-6 flex list-none flex-col gap-3.5 p-0">
            {PROCESS.map(([title, body], i) => (
              <li key={title} className="grid grid-cols-[56px_1fr] items-center gap-4 rounded-lg border border-line bg-bg-panel px-5 py-4">
                <span className="pl-3 font-display text-[40px] font-bold leading-none text-accent tabular-nums">{i + 1}</span>
                <div>
                  <strong className="mb-1 block font-display text-[17px] text-brand">{title}</strong>
                  <p className="text-ink-soft">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        }
      >
        <Placeholder fill tone="dark" label="Einsatz-Foto · Profil mit Werkzeug" />
      </Section>

      {/* Knowledge cross-link */}
      <Section className="border-b border-t border-line bg-bg-panel">
        <div className="flex flex-col gap-5">
          <ServiceCard
            href="/wirkungsweise.html"
            eyebrow="Fachwissen"
            title="Wirkungsweise von Schädlingsbekämpfungsmitteln"
            lede="Was wirkt wie – und warum es Profis braucht."
          />
          <ServiceCard
            href="/gesetze-normen.html"
            eyebrow="Compliance"
            title="Gesetze, Normen & ihre Folgen"
            lede="EN 16636, BPV, IPM – Standards, an denen ich mitgearbeitet habe."
          />
          <ServiceCard
            href="/faq.html"
            eyebrow="Antworten"
            title="Häufige Fragen"
            lede="Preis, Ablauf, Methoden, Haustiere – die häufigsten Fragen, kurz beantwortet."
          />
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="border-y border-line bg-bg-panel">
        <CTABlock variant="urgent" />
      </Section>

      <SiteFooter />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}
