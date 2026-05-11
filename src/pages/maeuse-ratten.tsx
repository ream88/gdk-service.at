import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { CTABlock } from '@/components/site/CTABlock';
import { Section } from '@/components/site/Section';
import { FeatureRow } from '@/components/site/FeatureRow';
import { Prose } from '@/components/site/Prose';
import { Eyebrow, Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';

const VERSUS_GRID = 'mt-6 grid grid-cols-2 gap-8 max-[720px]:grid-cols-1';
const VERSUS_CARD = 'rounded-sm border border-line bg-bg-panel p-7';
const VS_LABEL = 'mb-2 inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-accent';
const VS_HEADING = 'mb-4.5 font-display text-2xl leading-[1.2] text-brand [&_em]:text-[0.82em] [&_em]:font-normal [&_em]:not-italic [&_em]:text-ink-mute';
const VS_STATS = 'm-0 mb-4 flex list-none flex-col gap-2 border-t border-line p-0 pt-3.5';
const VS_LI = 'flex items-baseline justify-between gap-3 text-sm [&_span]:font-mono [&_span]:text-xs [&_span]:tracking-[0.06em] [&_span]:text-ink-mute [&_strong]:text-right [&_strong]:font-semibold [&_strong]:text-brand';

export default function MaeuseRattenPage() {
  return (
    <BaseLayout title="Mäuse &amp; Ratten · Bekämpfung in NÖ · GDK Service" description="Mäuse oder Ratten im Haus, Keller oder Garten? Aufspüren, abdichten, bekämpfen – mit Köderboxen, Fallen und punktgenauem Vorgehen.">
      <SiteHeader active="maeuse-ratten" />

      <section className={PAGE_HERO} data-screen-label="Mäuse-Ratten · Hero">
        <div className={WRAP}>
          <Crumbs items={[{ href: '/index.html', label: 'Start' }, { href: '/schaedlingsbekaempfung.html', label: 'Schädlingsbekämpfung' }, { label: 'Mäuse & Ratten' }]} />
          <Eyebrow>Mäuse- &amp; Rattenbekämpfung</Eyebrow>
          <h1 className="mt-3 max-w-[18ch] text-[clamp(36px,5vw,56px)]">
            Mäuse &amp; Ratten –<br />
            <em className="italic text-[color-mix(in_oklch,var(--brand)_80%,var(--accent))]">aufspüren, abdichten, bekämpfen.</em>
          </h1>
          <p className="mt-4 max-w-[52ch] text-[17px] text-ink-soft">Eingeprägte Laufwege, Schmierspuren, Nagespuren – ich finde, wo die Nager eindringen, dichte ab und bekämpfe gezielt. So bleibt der Erfolg dauerhaft.</p>
        </div>
      </section>

      <Section eyebrow="Arbeitsweise" title="Genau · Diskret · Kompetent">
        <div className="mt-6 grid grid-cols-3 gap-8 max-[720px]:grid-cols-1">
          <FeatureRow layout="vertical" icon="ph-clock-countdown" title="Genau"     body="Präzise und auf das Zieltier abgestimmt – minimaler Einsatz toxischer Stoffe." />
          <FeatureRow layout="vertical" icon="ph-shield-check"   title="Diskret"   body="Man bemerkt mich kaum. Ich gehe erst, wenn der Schädling das auch tut." />
          <FeatureRow layout="vertical" icon="ph-sparkle"        title="Kompetent" body="Laufwege, Schmierspuren, Nagespuren – richtig gedeutet, führen sie zum Erfolg." />
        </div>
      </Section>

      <Section eyebrow="Spezies-Vergleich" title="Hausmaus vs. Wanderratte.">
        <div className={VERSUS_GRID}>
          <article className={VERSUS_CARD}>
            <span className={VS_LABEL}>No. 01</span>
            <h3 className={VS_HEADING}>Hausmaus<br /><em>(Mus musculus)</em></h3>
            <ul className={VS_STATS}>
              <li className={VS_LI}><span>Körper</span><strong>7–10 cm + Schwanz</strong></li>
              <li className={VS_LI}><span>Gewicht</span><strong>12–30 g</strong></li>
              <li className={VS_LI}><span>Würfe/Jahr</span><strong>bis 8 (4–8 Junge)</strong></li>
              <li className={VS_LI}><span>Suchradius</span><strong>wenige Meter</strong></li>
            </ul>
            <Prose>
              <p>Klein, flink, extrem anpassungsfähig. Ursprünglich Steppen Zentralasiens, heute weltweit Begleiter des Menschen. Kommuniziert im <strong>Ultraschall</strong>, ausgezeichneter Geruchssinn, sehr <strong>neugierig (Neophilie)</strong>. Markiert mit Urin, verliert Kot beim Laufen.</p>
              <p>Frisst alles. Wasserbedarf aus der Nahrung. Nistet nahe der Nahrungsquelle. Schon Öffnungen von wenigen Millimetern reichen zum Durchschlüpfen.</p>
            </Prose>
          </article>
          <article className={VERSUS_CARD}>
            <span className={VS_LABEL}>No. 02</span>
            <h3 className={VS_HEADING}>Wanderratte<br /><em>(Rattus norvegicus)</em></h3>
            <ul className={VS_STATS}>
              <li className={VS_LI}><span>Körper</span><strong>20–27 cm</strong></li>
              <li className={VS_LI}><span>Gewicht</span><strong>200–500 g</strong></li>
              <li className={VS_LI}><span>Würfe/Jahr</span><strong>3–6 (8–12 Junge)</strong></li>
              <li className={VS_LI}><span>Sozial</span><strong>Rudel bis 200</strong></li>
            </ul>
            <Prose>
              <p>Größer, kräftiger, oft aggressiver. Hochintelligent, komplexe soziale Strukturen. Exzellenter <strong>Schwimmer</strong>, hervorragender Gräber – findet sich an Bachläufen, im Komposter, unter Sträuchern.</p>
              <p>Misstrauisch gegenüber Neuem (<strong>Neophobie</strong>) – meidet Fallen oft tagelang. Lernfähig. Bevorzugt feuchte, kühle Umgebungen, in Städten Kanalisation, Keller, Mülldeponien. Der „Vorkoster" ist ein Mythos – die zeitverzögerte Wirkung dient dem Schutz von Nichtzieltieren.</p>
            </Prose>
          </article>
        </div>
      </Section>

      <Section className="border-y border-line bg-bg-panel" eyebrow="Methode" title="In dieser Reihenfolge." innerClassName="max-w-[48rem]">
        <div className="mt-6 grid grid-cols-1 gap-8">
          <FeatureRow
            step={1}
            title="Warum?"
            body="Ursache finden – Nahrungsmittelreste, offene Eindringmöglichkeiten, passende Nistplätze. Gegenmaßnahmen: Nahrungsquelle weg, Eindringstellen abdichten."
          />
          <FeatureRow
            step={2}
            title="Wieviele?"
            body="Populationsstärke abschätzen – danach richtet sich, ob eine oder mehrere Bekämpfungen, und welche Methoden."
          />
          <FeatureRow
            step={3}
            title="Womit?"
            body="Lebendfallen, Schlagfallen, toxische Köder oder Kombinationen. Lebend-/Schlagfallen werden mehrmals täglich kontrolliert (oft von Ihnen)."
          />
          <FeatureRow
            step={4}
            title="Rodentizide."
            body={
              <>
                Wenn nötig: zugriffsgeschützte <strong className="font-semibold text-brand">Köderboxen</strong> entlang der Laufwege. Köder im Inneren gegen Herausfallen gesichert. Nager nimmt auf, stirbt einige Tage später.
              </>
            }
          />
          <FeatureRow
            step={5}
            title="Nachbehandlung."
            body={
              <>
                Köder ergänzen oder erneuern. Nach Erfolg: Köderstellen entfernen, Reste ordnungsgemäß entsorgen. Im Wohnbereich ergänzend <strong className="font-semibold text-brand">Desinfektion</strong>, damit Kot &amp; Urin kein Risiko darstellen.
              </>
            }
          />
        </div>
      </Section>

      <Section className="border-y border-line bg-bg-panel">
        <CTABlock variant="urgent" />
      </Section>

      <SiteFooter />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}
