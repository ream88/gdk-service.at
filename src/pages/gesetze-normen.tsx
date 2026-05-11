import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter, MobileSticky } from '@/components/site/SiteFooter';
import { CTABlock } from '@/components/site/CTABlock';
import { Section } from '@/components/site/Section';
import { Eyebrow, Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';
const PROSE = 'flex flex-col gap-3.5 text-base leading-[1.75] text-ink-soft [&_strong]:font-semibold [&_strong]:text-brand [&_ul]:m-0 [&_ul]:flex [&_ul]:list-none [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:p-0 [&_li]:relative [&_li]:pl-6 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:font-bold [&_li]:before:text-accent [&_li]:before:content-["•"] [&_h3]:mt-4 [&_h3]:text-xl';
const CALLOUT = 'rounded-sm border-l-[3px] border-accent bg-accent-soft px-5 py-4 text-[15px]';
const PRINCIPLE_GRID = 'mt-6 grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1';
const PRINCIPLE_CARD = 'rounded-lg border border-line bg-bg-raised p-6';
const ICON_BOX = 'mb-3 grid h-10 w-10 place-items-center rounded-sm bg-accent-soft font-mono text-base text-accent';

const NUMLIST = 'm-0 mt-6 flex list-none flex-col gap-3.5 p-0';
const NUMLIST_LI_LIGHT = 'grid grid-cols-[44px_1fr] items-start gap-4 rounded-sm border border-white/10 bg-white/[0.04] px-4.5 py-4';
const NUMLIST_NUM = 'pt-0.5 font-display text-[22px] leading-none text-accent';

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
        <div className={PROSE}>
          <p>„Gut, dass es sie gibt." Regulierung trennt die Spreu vom Weizen, den Cowboy vom Banditen, den Fahrlässigen vom Profi. Genau das ist beim Einsatz toxischer Stoffe – im Lebensmittelbetrieb wie bei Ihnen zuhause – von höchster Wichtigkeit.</p>
          <p>Diese Regulierungen sind manchmal schwer nachzuvollziehen. Aber der Ansatz, persistente und sich anreichernde toxische Stoffe zu minimieren, <strong>ist kein schlechter Plan</strong>.</p>
          <h3>Biozidproduktegesetz &amp; EU-BPV</h3>
          <p>Das <strong>Biozidproduktegesetz (BGBL 105 idgF)</strong> und in der Folge die <strong>EU-Biozidprodukteverordnung (EU 528/2012)</strong> regelt den Einsatz „lebenabtötender Stoffe" sehr genau – und das ist gut so. Für Österreich gibt es eine Liste zugelassener Produkte, die Mutter aller Dinge in Sachen Biozide.</p>
          <p>Für jedes Produkt gibt es spezifische Anwendungsbestimmungen: was darf wann, wo, wie und in welcher Menge ausgebracht werden. Ziel: <strong>Sekundärvergiftungen reduzieren</strong>, Nichtzieltiere (Haustiere, Bienen, Greifvögel) schützen.</p>
          <p>Das Verbot der Abgabe von Mäuse- und Rattenmitteln (Rodentiziden) für den privaten Gebrauch ist ein Einschnitt – aber am Ende vom Tag besser, als wenn Mitbürger wahllos Gift kaufen, irgendwo auslegen und vergessen, dass Hunde es sehr attraktiv finden.</p>
          <p className={CALLOUT}>Wer's noch genauer haben will: <a href="https://www.biozide.at/bp" target="_blank" rel="noreferrer" className="underline hover:text-brand">biozide.at</a> ist eine gute Plattform zum Nachlesen.</p>
        </div>
      </Section>

      <Section className="bg-brand text-brand-ink" innerClassName="max-w-[50rem]">
        <Eyebrow accent>EN 16636</Eyebrow>
        <h2 className="mt-2 text-[clamp(28px,3.4vw,40px)] text-brand-ink">Die Norm für professionelle Schädlingsbekämpfung.</h2>
        <div className="mt-4 flex flex-col gap-3.5 text-base leading-[1.75] text-white/[0.78] [&_strong]:font-semibold [&_strong]:text-brand-ink">
          <p><strong>An deren Erstellung durfte ich 5 Jahre lang als Vorsitzender der Gruppe am österreichischen Normungsinstitut mitarbeiten.</strong> Nach Veröffentlichung war das Unternehmen, für das ich tätig war, eines der ersten weltweit zertifizierten – natürlich erfolgreich. Zusammen mit Kollegen aus ganz Europa haben wir einen Standard entwickelt, der klare Richtlinien <em className="not-italic">und</em> ein praktisches Handbuch ist.</p>
          <p>Ziel: Schutz öffentlicher Gesundheit, Sachwerte und Umwelt durch professionelle Abläufe und fachliche Kompetenz.</p>
        </div>
        <ol className={`${NUMLIST} mt-8`}>
          <li className={NUMLIST_LI_LIGHT}><span className={NUMLIST_NUM}>1</span><div><strong className="mb-1 block font-display text-[17px] text-brand-ink">Ursachenforschung</strong><p className="text-white/70">Vor jeder Maßnahme: gründliche Inspektion. Schädlinge, Befallsstärke, Ursachen identifizieren.</p></div></li>
          <li className={NUMLIST_LI_LIGHT}><span className={NUMLIST_NUM}>2</span><div><strong className="mb-1 block font-display text-[17px] text-brand-ink">Gefährdungsbeurteilung</strong><p className="text-white/70">Bewertung der Risiken für Menschen (insbesondere Kinder), Haustiere, Umwelt, Lebensmittel.</p></div></li>
          <li className={NUMLIST_LI_LIGHT}><span className={NUMLIST_NUM}>3</span><div><strong className="mb-1 block font-display text-[17px] text-brand-ink">Aktionsplan</strong><p className="text-white/70">Definiert Bekämpfungsschritte, eingesetzte Mittel, Präventionsmaßnahmen.</p></div></li>
          <li className={NUMLIST_LI_LIGHT}><span className={NUMLIST_NUM}>4</span><div><strong className="mb-1 block font-display text-[17px] text-brand-ink">Durchführung</strong><p className="text-white/70">Fachgerechte Anwendung – unter Einhaltung von Tierschutz und Chemikaliengesetz (BPV).</p></div></li>
          <li className={NUMLIST_LI_LIGHT}><span className={NUMLIST_NUM}>5</span><div><strong className="mb-1 block font-display text-[17px] text-brand-ink">Bewertung &amp; Bestätigung</strong><p className="text-white/70">Überprüfung des Erfolgs, formeller Abschluss der Dienstleistung.</p></div></li>
        </ol>
      </Section>

      <Section innerClassName="max-w-[50rem]">
        <Eyebrow>IPM</Eyebrow>
        <h2 className="mt-2 text-[clamp(26px,3vw,34px)]">Integrated Pest Management.</h2>
        <div className={`${PROSE} mt-5`}>
          <p>Wenn man das alles drauf hat, ergänzt man es noch durch die <strong>Prinzipien des IPM</strong>:</p>
          <ul>
            <li>Kann ich durch <strong>präventive (vorbeugende)</strong> Maßnahmen den Befall bereits reduzieren? Bauliche oder hygienische Maßnahmen?</li>
            <li>Kann ich mit <strong>nicht-toxischen Substanzen</strong> (Schlagfallen, Hitze, Absaugen) den Befall tilgen?</li>
            <li>Wenn nicht: Einsatz von Bioziden auf <strong>notwendiges Mindestmaß</strong> reduzieren.</li>
          </ul>
        </div>
      </Section>

      <Section className="border-b border-t border-line bg-bg-panel" innerClassName="max-w-[50rem]">
        <Eyebrow>Fazit</Eyebrow>
        <h2 className="mt-2 text-[clamp(26px,3vw,34px)]">Darum den Profi ranlassen.</h2>
        <div className={PRINCIPLE_GRID}>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>U</div><h3 className="text-lg">Umwelt</h3><p className="mt-1.5 text-sm text-ink-soft">Reduzierung der Giftbelastung in Boden, Wasser, Luft.</p></div>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>G</div><h3 className="text-lg">Gesundheit</h3><p className="mt-1.5 text-sm text-ink-soft">Minimierung des Risikos von Pestizidrückständen für Bewohner &amp; Mitarbeiter.</p></div>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>N</div><h3 className="text-lg">Nachhaltigkeit</h3><p className="mt-1.5 text-sm text-ink-soft">Verhindert Resistenzbildung bei Schädlingen.</p></div>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>€</div><h3 className="text-lg">Kosten</h3><p className="mt-1.5 text-sm text-ink-soft">Langfristig günstiger – Massenbefall verhindert, Ursachen beseitigt.</p></div>
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
