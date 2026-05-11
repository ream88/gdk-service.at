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

export default function WespenPage() {
  return (
    <BaseLayout title="Wespen · Wespenbekämpfung in Niederösterreich · GDK Service" description="Wespennest am Haus oder im Dachstuhl? Punktgenaue Wespenbekämpfung in NÖ – Same-day möglich, mit Fixpreis und Schutzkleidung.">
      <SiteHeader active="wespen" />

      <section className={PAGE_HERO} data-screen-label="Wespen · Hero">
        <div className={WRAP}>
          <Crumbs items={[{ href: '/index.html', label: 'Start' }, { href: '/schaedlingsbekaempfung.html', label: 'Schädlingsbekämpfung' }, { label: 'Wespen' }]} />
          <Eyebrow>Wespenbekämpfung NÖ</Eyebrow>
          <h1 className="mt-3 max-w-[18ch] text-[clamp(36px,5vw,56px)]">
            Wespen –<br />
            <em className="italic text-[color-mix(in_oklch,var(--brand)_80%,var(--accent))]">der ungebetene Gast.</em>
          </h1>
          <p className="mt-4 max-w-[52ch] text-[17px] text-ink-soft">Ob Nest tief in der Bausubstanz oder frei am Dachstuhl – ich arbeite präzise. Nicht jede Wespe ist ein Schädling. Aber wenn nötig, dann richtig.</p>
        </div>
      </section>

      <Section eyebrow="Arbeitsweise" title="Genau · Diskret · Kompetent">
        <div className="mt-6 grid grid-cols-3 gap-8 max-[720px]:grid-cols-1">
          <FeatureRow layout="vertical" icon="ph-clock-countdown" title="Genau"     body="Egal ob Nest tief in der Bausubstanz versteckt oder frei zugänglich – ich arbeite punktgenau." />
          <FeatureRow layout="vertical" icon="ph-shield-check"   title="Diskret"   body="Diskretion ist immer wichtig. Bei Wespen zählt zudem die rasche, unkomplizierte Bekämpfung." />
          <FeatureRow layout="vertical" icon="ph-sparkle"        title="Kompetent" body="Nicht jede Wespe ist auch wirklich ein Schädling. Aber wenn notwendig, dann richtig." />
        </div>
      </Section>

      <Section className="border-y border-line bg-bg-panel" eyebrow="Biologie kurz" title="Wer nistet hier eigentlich?" innerClassName="max-w-[48rem]">
        <Prose className="mt-5">
          <p>In unserer Region nistet sich meist die <strong>Gemeine Wespe</strong> (Vespula vulgaris) oder die <strong>Deutsche Wespe</strong> (Vespula germanica) ein. Beide bauen papierähnliche Nester in Hohlräumen oder in Erdlöchern – je nachdem, was gerade verfügbar und passend ist.</p>
          <p>Wespen sind <strong>wechselwarm (poikilotherm)</strong> – sie brauchen Wärme, um aktiv zu werden. Deshalb startet die Saison im Frühling: junge Königinnen beginnen das Nest zu bauen, indem sie Eier in die Wabenzellen legen. Am Ende der Saison kann ein Volk <strong>mehrere tausend Individuen</strong> zählen. Es überwintern danach nur die jungen Königinnen, der Rest stirbt ab.</p>
          <Callout>Genau aus diesem Grund empfiehlt es sich, die Saison einfach abzuwarten und im Oktober/November an einem kühlen Tag das Einflugloch mit Silikon o.ä. gut zu verschließen. Falls das nicht möglich ist, weil <strong>Gefahr in Verzug</strong> ist, sollten Sie eine Bekämpfung in Erwägung ziehen.</Callout>
        </Prose>
      </Section>

      <Section eyebrow="Methode" title="Wo sie nisten – und wie ich vorgehe.">
        <div className="mt-6 grid grid-cols-2 gap-8 max-[720px]:grid-cols-1">
          <FeatureRow
            layout="vertical"
            icon="ph-house-line"
            title="Direkt am Haus"
            body={
              <>
                Wespen bevorzugen <strong className="font-semibold text-brand">Rollkästen</strong> oder die Anschlussfugen vom Dachstuhl zur Fassade. Bei Holzfassaden tragen sie das Holz selbst ab, speicheln es ein und bauen daraus ihr Nest. Meist ist nur eine Ein-/Ausflugöffnung sichtbar; die Königin sitzt tief in der Baustruktur. Ich bringe ein <strong className="font-semibold text-brand">granulatartiges Stäubepulver mit Hochdruck</strong> direkt in die Öffnung ein – es verteilt sich in den von Wespen angelegten Gängen bis zur Königin. Arbeiterinnen tragen es weiter ins Nest. Heimkehrende Wespen sind irritiert und versuchen andere Wege; vor dem Einflugloch entsteht ein <strong className="font-semibold text-brand">„Stau"</strong>, der je nach Population mehrere Stunden bis 1–2 Tage dauert. Diesen Bereich in der Zeit bitte meiden.
              </>
            }
          />
          <FeatureRow
            layout="vertical"
            icon="ph-tree"
            title="Frei hängend"
            body={
              <>
                Am Dachstuhl oder unter Balken arbeite ich mit einem <strong className="font-semibold text-brand">Knock-Down-Präparat</strong> und entsorge das Nest anschließend. Auch hier kehren Einzeltiere zurück, wenn das Nest schon weg ist – Zuflugbereich kurzzeitig meiden. Termine in den <strong className="font-semibold text-brand">frühen Morgenstunden</strong> oder am Abend sind die beste Wahl, weil dann die meisten Wespen im Nest sind.
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
