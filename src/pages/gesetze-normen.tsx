import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { CTABlock } from '@/components/site/CTABlock';
import { Section } from '@/components/site/Section';
import { FeatureRow } from '@/components/site/FeatureRow';
import { Prose, Callout } from '@/components/site/Prose';
import { Eyebrow, Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';
const PRINCIPLE_GRID = 'mt-6 grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1';

export default function GesetzeNormenPage() {
  return (
    <BaseLayout title="Gesetze &amp; Normen · Schädlingsbekämpfung · GDK Service" description="Biozidproduktegesetz, EU-BPV, EN 16636 und IPM. Warum Regulierung gut ist – und warum Sie deshalb den Profi ranlassen sollten.">
      <SiteHeader active="gesetze-normen" />

      <section className={PAGE_HERO} data-screen-label="Gesetze · Hero">
        <div className={WRAP}>
          <Crumbs items={[{ href: '/index.html', label: 'Start' }, { label: 'Gesetze & Normen' }]} />
          <Eyebrow>Fachwissen · Compliance</Eyebrow>
          <h1 className="mt-3 max-w-[18ch] text-[clamp(36px,5vw,56px)]">
            Gesetze, Normen –<br />
            <em className="italic text-[color-mix(in_oklch,var(--brand)_80%,var(--accent))]">und ihre Folgen.</em>
          </h1>
          <p className="mt-4 max-w-[52ch] text-[17px] text-ink-soft">Warum Regulierung in der Schädlingsbekämpfung gut ist. Und warum Sie genau deshalb den Profi ranlassen sollten.</p>
        </div>
      </section>

      <Section innerClassName="max-w-[50rem]">
        <Prose>
          <p>„Gut, dass es sie gibt." Regulierung trennt die Spreu vom Weizen, den Cowboy vom Banditen, den Fahrlässigen vom Profi. Genau das ist beim Einsatz toxischer Stoffe – im Lebensmittelbetrieb wie bei Ihnen zuhause – von höchster Wichtigkeit.</p>
          <p>Diese Regulierungen sind manchmal schwer nachzuvollziehen. Aber der Ansatz, persistente und sich anreichernde toxische Stoffe zu minimieren, <strong>ist kein schlechter Plan</strong>.</p>
          <h3>Biozidproduktegesetz &amp; EU-BPV</h3>
          <p>Das <strong>Biozidproduktegesetz (BGBL 105 idgF)</strong> und in der Folge die <strong>EU-Biozidprodukteverordnung (EU 528/2012)</strong> regelt den Einsatz „lebenabtötender Stoffe" sehr genau – und das ist gut so. Für Österreich gibt es eine Liste zugelassener Produkte, die Mutter aller Dinge in Sachen Biozide.</p>
          <p>Für jedes Produkt gibt es spezifische Anwendungsbestimmungen: was darf wann, wo, wie und in welcher Menge ausgebracht werden. Ziel: <strong>Sekundärvergiftungen reduzieren</strong>, Nichtzieltiere (Haustiere, Bienen, Greifvögel) schützen.</p>
          <p>Das Verbot der Abgabe von Mäuse- und Rattenmitteln (Rodentiziden) für den privaten Gebrauch ist ein Einschnitt – aber am Ende vom Tag besser, als wenn Mitbürger wahllos Gift kaufen, irgendwo auslegen und vergessen, dass Hunde es sehr attraktiv finden.</p>
          <Callout>Wer's noch genauer haben will: <a href="https://www.biozide.at/bp" target="_blank" rel="noreferrer" className="underline hover:text-brand">biozide.at</a> ist eine gute Plattform zum Nachlesen.</Callout>
        </Prose>
      </Section>

      <Section className="bg-brand text-brand-ink" innerClassName="max-w-[50rem]">
        <Eyebrow accent>EN 16636</Eyebrow>
        <h2 className="mt-2 text-[clamp(26px,3vw,36px)] text-brand-ink">Die Norm für professionelle Schädlingsbekämpfung.</h2>
        <div className="mt-4 flex flex-col gap-3.5 text-base leading-[1.75] text-white/[0.78] [&_strong]:font-semibold [&_strong]:text-brand-ink">
          <p><strong>An deren Erstellung durfte ich 5 Jahre lang als Vorsitzender der Gruppe am österreichischen Normungsinstitut mitarbeiten.</strong> Nach Veröffentlichung war das Unternehmen, für das ich tätig war, eines der ersten weltweit zertifizierten – natürlich erfolgreich. Zusammen mit Kollegen aus ganz Europa haben wir einen Standard entwickelt, der klare Richtlinien <em className="not-italic">und</em> ein praktisches Handbuch ist.</p>
          <p>Ziel: Schutz öffentlicher Gesundheit, Sachwerte und Umwelt durch professionelle Abläufe und fachliche Kompetenz.</p>
        </div>
        <div className="mt-8 flex flex-col gap-8 max-w-[48rem]">
          <FeatureRow step={1} tone="dark" title="Ursachenforschung"      body="Vor jeder Maßnahme: gründliche Inspektion. Schädlinge, Befallsstärke, Ursachen identifizieren." />
          <FeatureRow step={2} tone="dark" title="Gefährdungsbeurteilung" body="Bewertung der Risiken für Menschen (insbesondere Kinder), Haustiere, Umwelt, Lebensmittel." />
          <FeatureRow step={3} tone="dark" title="Aktionsplan"            body="Definiert Bekämpfungsschritte, eingesetzte Mittel, Präventionsmaßnahmen." />
          <FeatureRow step={4} tone="dark" title="Durchführung"           body="Fachgerechte Anwendung – unter Einhaltung von Tierschutz und Chemikaliengesetz (BPV)." />
          <FeatureRow step={5} tone="dark" title="Bewertung & Bestätigung" body="Überprüfung des Erfolgs, formeller Abschluss der Dienstleistung." />
        </div>
      </Section>

      <Section innerClassName="max-w-[50rem]" eyebrow="IPM" title="Integrated Pest Management." titleSize="compact">
        <Prose className="mt-5">
          <p>Wenn man das alles drauf hat, ergänzt man es noch durch die <strong>Prinzipien des IPM</strong>:</p>
          <ul>
            <li>Kann ich durch <strong>präventive (vorbeugende)</strong> Maßnahmen den Befall bereits reduzieren? Bauliche oder hygienische Maßnahmen?</li>
            <li>Kann ich mit <strong>nicht-toxischen Substanzen</strong> (Schlagfallen, Hitze, Absaugen) den Befall tilgen?</li>
            <li>Wenn nicht: Einsatz von Bioziden auf <strong>notwendiges Mindestmaß</strong> reduzieren.</li>
          </ul>
        </Prose>
      </Section>

      <Section className="border-b border-t border-line bg-bg-panel" innerClassName="max-w-[50rem]" eyebrow="Fazit" title="Darum den Profi ranlassen." titleSize="compact">
        <div className={PRINCIPLE_GRID}>
          <FeatureRow layout="vertical" icon="ph-leaf"        title="Umwelt"         body="Reduzierung der Giftbelastung in Boden, Wasser, Luft." />
          <FeatureRow layout="vertical" icon="ph-heartbeat"   title="Gesundheit"     body="Minimierung des Risikos von Pestizidrückständen für Bewohner & Mitarbeiter." />
          <FeatureRow layout="vertical" icon="ph-recycle"     title="Nachhaltigkeit" body="Verhindert Resistenzbildung bei Schädlingen." />
          <FeatureRow layout="vertical" icon="ph-currency-eur" title="Kosten"        body="Langfristig günstiger – Massenbefall verhindert, Ursachen beseitigt." />
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
