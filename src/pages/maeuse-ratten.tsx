import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader, PHONE, PHONE_HREF, WHATSAPP_HREF } from '@/components/site/SiteHeader';
import { SiteFooter, MobileSticky } from '@/components/site/SiteFooter';
import { CTABlock } from '@/components/site/CTABlock';
import { Section } from '@/components/site/Section';
import { Button, PhoneIcon, WhatsAppIcon } from '@/components/ui/Button';
import { Eyebrow, Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';
const PRINCIPLE_GRID = 'mt-6 grid grid-cols-3 gap-4 max-[720px]:grid-cols-1';
const PRINCIPLE_CARD = 'rounded-lg border border-line bg-bg-raised p-6';
const ICON_BOX = 'mb-3 grid h-10 w-10 place-items-center rounded-sm bg-accent-soft font-mono text-base text-accent';

const VERSUS_GRID = 'mt-6 grid grid-cols-2 gap-8 max-[720px]:grid-cols-1';
const VERSUS_CARD = 'rounded-sm border border-line bg-bg-panel p-7';
const VS_LABEL = 'mb-2 inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-accent';
const VS_HEADING = 'mb-4.5 font-display text-2xl leading-[1.2] text-brand [&_em]:text-[0.82em] [&_em]:font-normal [&_em]:not-italic [&_em]:text-ink-mute';
const VS_STATS = 'm-0 mb-4 flex list-none flex-col gap-2 border-t border-line p-0 pt-3.5';
const VS_LI = 'flex items-baseline justify-between gap-3 text-sm [&_span]:font-mono [&_span]:text-xs [&_span]:tracking-[0.06em] [&_span]:text-ink-mute [&_strong]:text-right [&_strong]:font-semibold [&_strong]:text-brand';

const NUMLIST = 'm-0 mt-6 flex list-none flex-col gap-3.5 p-0';
const NUMLIST_LI = 'grid grid-cols-[44px_1fr] items-start gap-4 rounded-sm border border-line bg-bg-panel px-4.5 py-4 [&_strong]:mb-1 [&_strong]:block [&_strong]:font-display [&_strong]:text-[17px] [&_strong]:text-brand';
const NUMLIST_NUM = 'pt-0.5 font-display text-[22px] leading-none text-accent';

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
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={PHONE_HREF} variant="cta" size="xl"><PhoneIcon />{PHONE}</Button>
            <Button href={WHATSAPP_HREF} variant="wa"><WhatsAppIcon /> WhatsApp</Button>
          </div>
        </div>
      </section>

      <Section>
        <Eyebrow>Arbeitsweise</Eyebrow>
        <h2 className="mt-2 text-[clamp(26px,3vw,36px)]">Genau · Diskret · Kompetent</h2>
        <div className={PRINCIPLE_GRID}>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>⏱</div><h3 className="text-xl">Genau</h3><p className="mt-1.5 text-ink-soft">Präzise und auf das Zieltier abgestimmt – minimaler Einsatz toxischer Stoffe.</p></div>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>◆</div><h3 className="text-xl">Diskret</h3><p className="mt-1.5 text-ink-soft">Man bemerkt mich kaum. Ich gehe erst, wenn der Schädling das auch tut.</p></div>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>✦</div><h3 className="text-xl">Kompetent</h3><p className="mt-1.5 text-ink-soft">Laufwege, Schmierspuren, Nagespuren – richtig gedeutet, führen sie zum Erfolg.</p></div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Spezies-Vergleich</Eyebrow>
        <h2 className="mt-2 text-[clamp(26px,3vw,34px)]">Hausmaus vs. Wanderratte.</h2>
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
            <p className="text-ink-soft [&_strong]:font-semibold [&_strong]:text-brand">Klein, flink, extrem anpassungsfähig. Ursprünglich Steppen Zentralasiens, heute weltweit Begleiter des Menschen. Kommuniziert im <strong>Ultraschall</strong>, ausgezeichneter Geruchssinn, sehr <strong>neugierig (Neophilie)</strong>. Markiert mit Urin, verliert Kot beim Laufen.</p>
            <p className="mt-2 text-ink-soft">Frisst alles. Wasserbedarf aus der Nahrung. Nistet nahe der Nahrungsquelle. Schon Öffnungen von wenigen Millimetern reichen zum Durchschlüpfen.</p>
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
            <p className="text-ink-soft [&_strong]:font-semibold [&_strong]:text-brand">Größer, kräftiger, oft aggressiver. Hochintelligent, komplexe soziale Strukturen. Exzellenter <strong>Schwimmer</strong>, hervorragender Gräber – findet sich an Bachläufen, im Komposter, unter Sträuchern.</p>
            <p className="mt-2 text-ink-soft [&_strong]:font-semibold [&_strong]:text-brand">Misstrauisch gegenüber Neuem (<strong>Neophobie</strong>) – meidet Fallen oft tagelang. Lernfähig. Bevorzugt feuchte, kühle Umgebungen, in Städten Kanalisation, Keller, Mülldeponien. Der „Vorkoster" ist ein Mythos – die zeitverzögerte Wirkung dient dem Schutz von Nichtzieltieren.</p>
          </article>
        </div>
      </Section>

      <Section className="border-b border-t border-line bg-bg-panel" innerClassName="max-w-[48rem]">
        <Eyebrow>Methode</Eyebrow>
        <h2 className="mt-2 text-[clamp(26px,3vw,34px)]">In dieser Reihenfolge.</h2>
        <ol className={NUMLIST}>
          <li className={NUMLIST_LI}><span className={NUMLIST_NUM}>1</span><div><strong>Warum?</strong><p className="text-ink-soft">Ursache finden – Nahrungsmittelreste, offene Eindringmöglichkeiten, passende Nistplätze. Gegenmaßnahmen: Nahrungsquelle weg, Eindringstellen abdichten.</p></div></li>
          <li className={NUMLIST_LI}><span className={NUMLIST_NUM}>2</span><div><strong>Wieviele?</strong><p className="text-ink-soft">Populationsstärke abschätzen – danach richtet sich, ob eine oder mehrere Bekämpfungen, und welche Methoden.</p></div></li>
          <li className={NUMLIST_LI}><span className={NUMLIST_NUM}>3</span><div><strong>Womit?</strong><p className="text-ink-soft">Lebendfallen, Schlagfallen, toxische Köder oder Kombinationen. Lebend-/Schlagfallen werden mehrmals täglich kontrolliert (oft von Ihnen).</p></div></li>
          <li className={NUMLIST_LI}><span className={NUMLIST_NUM}>4</span><div><strong>Rodentizide.</strong><p className="text-ink-soft [&_strong]:font-semibold [&_strong]:text-brand">Wenn nötig: zugriffsgeschützte <strong>Köderboxen</strong> entlang der Laufwege. Köder im Inneren gegen Herausfallen gesichert. Nager nimmt auf, stirbt einige Tage später.</p></div></li>
          <li className={NUMLIST_LI}><span className={NUMLIST_NUM}>5</span><div><strong>Nachbehandlung.</strong><p className="text-ink-soft [&_strong]:font-semibold [&_strong]:text-brand">Köder ergänzen oder erneuern. Nach Erfolg: Köderstellen entfernen, Reste ordnungsgemäß entsorgen. Im Wohnbereich ergänzend <strong>Desinfektion</strong>, damit Kot &amp; Urin kein Risiko darstellen.</p></div></li>
        </ol>
      </Section>

      <Section>
        <CTABlock
          eyebrow="Persönlich erreichbar"
          title="Ein Anruf reicht."
          description="Mo–Fr 8:00–17:00. In dringenden Fällen auch außerhalb. Sie sprechen mit mir – nicht mit einem Callcenter."
          actions={(
            <>
              <Button href={PHONE_HREF} variant="cta" size="xl"><PhoneIcon />{PHONE}</Button>
              <Button href={WHATSAPP_HREF} variant="wa"><WhatsAppIcon /> WhatsApp</Button>
              <Button href="/kontakt.html" variant="ghost">Termin per Formular</Button>
            </>
          )}
        />
      </Section>

      <SiteFooter />
      <MobileSticky />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}
