import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { CTABlock } from '@/components/site/CTABlock';
import { Section } from '@/components/site/Section';
import { Faq, FaqQuestion, FaqAnswer } from '@/components/site/Faq';
import { Prose, Callout } from '@/components/site/Prose';
import { Eyebrow, Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';

export default function WirkungsweisePage() {
  return (
    <BaseLayout title="Wirkungsweise · Schädlingsbekämpfungsmittel · GDK Service" description="Was wirkt wie – Antikoagulanzien, Pyrethroide, Neonicotinoide, IGRs und Diatomeenerde. Ein Blick hinter die Methoden, von einem konzessionierten Schädlingsbekämpfer.">
      <SiteHeader active="wirkungsweise" />

      <section className={PAGE_HERO} data-screen-label="Wirkungsweise · Hero">
        <div className={WRAP}>
          <Crumbs items={[{ href: '/index.html', label: 'Start' }, { label: 'Wirkungsweise' }]} />
          <Eyebrow>Fachwissen</Eyebrow>
          <h1 className="mt-3 max-w-[18ch] text-[clamp(36px,5vw,56px)]">
            Wirkungsweise von <em className="italic text-[color-mix(in_oklch,var(--brand)_80%,var(--accent))]">Schädlingsbekämpfungs&shy;mitteln.</em>
          </h1>
          <p className="mt-4 max-w-[52ch] text-[17px] text-ink-soft">Was wirkt wie – und warum es Profis braucht. Ein Blick hinter die Methoden.</p>
        </div>
      </section>

      <Section innerClassName="max-w-[50rem]" eyebrow="Gruppeneinteilung" title="Die zwei wichtigsten Klassen." titleSize="compact">
        <Prose className="mt-5">
          <h3>1. Rodentizide (Nagetierbekämpfungsmittel)</h3>
          <p>Die moderne Nagetierbekämpfung stützt sich primär auf <strong>Antikoagulanzien</strong> (Blutgerinnungshemmer). Die Köderformulierung besteht meist zu <strong>99,995&nbsp;%</strong> aus Lock- und Zusatzstoffen, <strong>0,005&nbsp;%</strong> sind reiner Wirkstoff – Difenacoum, Brodifacoum, Bromadiolon.</p>
          <p>Sie wirken als Vitamin-K-Antagonisten und blockieren das Enzym Vitamin-K-Epoxid-Reduktase. Der Tod tritt <strong>zeitverzögert nach 3–7 Tagen</strong> ein, um Köderscheu bei sozialen Nagern zu vermeiden.</p>
          <Callout><strong>Antidot:</strong> Vitamin K1 dient als wirksames Gegengift bei Fehlvergiftungen.</Callout>
          <h3>2. Insektizide</h3>
          <p>Insektizide greifen meist das Nervensystem oder die körperliche Entwicklung (Häutung) an.</p>
          <ul>
            <li><strong>Pyrethroide</strong> (Permethrin, Deltamethrin): halten die Natriumkanäle offen → Dauererregung, Krämpfe, Tod („Knock-down-Effekt").</li>
            <li><strong>Neonicotinoide:</strong> binden an Acetylcholin-Rezeptoren, blockieren die Reizübertragung zwischen Nervenzellen.</li>
            <li><strong>Carbamate &amp; Organophosphate:</strong> hemmen das Enzym Acetylcholinesterase – Acetylcholin wird nicht mehr abgebaut.</li>
            <li><strong>IGRs (Insect Growth Regulators):</strong> Chitinsynthesehemmer verhindern den neuen Panzer während der Häutung.</li>
            <li><strong>Physikalisch wirkende Mittel</strong> wie Kieselgur (Diatomeenerde): scharfkantige Partikel verletzen die Wachsschicht – die Insekten trocknen aus.</li>
          </ul>
        </Prose>
      </Section>

      <Section className="border-b border-t border-line bg-bg-panel" innerClassName="max-w-[50rem]" eyebrow="FAQs" title="Häufig gefragt." titleSize="compact">
        <div className="mt-6">
          <Faq>
            <FaqQuestion>Ist das giftig?</FaqQuestion>
            <FaqAnswer>Ja, natürlich. Deshalb darf es nur von geschulten, fachkundigen Personen ausgebracht werden.</FaqAnswer>
          </Faq>
          <Faq>
            <FaqQuestion>Wie lange dauert es, bis es wirkt?</FaqQuestion>
            <FaqAnswer>Das alte Dosis-/Wirkungsprinzip. Je mehr und je öfter das Zieltier aufnimmt, desto schneller wirkt es. Ausbringort und Köderattraktivität sind ausschlaggebend.</FaqAnswer>
          </Faq>
          <Faq>
            <FaqQuestion>Was, wenn mein Haustier den Köder aufnimmt?</FaqQuestion>
            <FaqAnswer>Sofort die <strong>Vergiftungsinformationszentrale (VIZ) unter 01/406 43 43</strong> anrufen und den Tierarzt aufsuchen – mit der Information, welches Präparat aufgenommen wurde.</FaqAnswer>
          </Faq>
          <Faq>
            <FaqQuestion>Wenn ich die Köderbox berühre?</FaqQuestion>
            <FaqAnswer>Die Box selbst ist aus Kunststoff oder Metall – unbedenklich. Bei Kontakt mit dem Köder selbst: <strong>Hände waschen</strong> und mich verständigen.</FaqAnswer>
          </Faq>
          <Faq>
            <FaqQuestion>Darf ich nach einer Sprühbehandlung aufwischen?</FaqQuestion>
            <FaqAnswer>Aufwischen <strong>neutralisiert den Belag</strong> und macht ihn wirkungslos. Nach Abschluss der Behandlung ist das genau die Methode zum Neutralisieren.</FaqAnswer>
          </Faq>
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
