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
const PROSE = 'flex flex-col gap-3.5 text-base leading-[1.75] text-ink-soft [&_strong]:font-semibold [&_strong]:text-brand';
const CALLOUT = 'rounded-sm border-l-[3px] border-accent bg-accent-soft px-5 py-4 text-[15px]';
const PEST_BLOCK = 'mt-6 grid grid-cols-2 gap-6 max-[800px]:grid-cols-1';
const PEST_ARTICLE = 'rounded-lg border border-line bg-bg-raised p-7';
const PEST_EMOJI = 'mr-2 inline-grid h-8 w-8 place-items-center rounded-sm bg-accent-soft align-middle font-mono text-sm text-accent';

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
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>⏱</div><h3 className="text-xl">Genau</h3><p className="mt-1.5 text-ink-soft">Egal ob Nest tief in der Bausubstanz versteckt oder frei zugänglich – ich arbeite punktgenau.</p></div>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>◆</div><h3 className="text-xl">Diskret</h3><p className="mt-1.5 text-ink-soft">Diskretion ist immer wichtig. Bei Wespen zählt zudem die rasche, unkomplizierte Bekämpfung.</p></div>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>✦</div><h3 className="text-xl">Kompetent</h3><p className="mt-1.5 text-ink-soft">Nicht jede Wespe ist auch wirklich ein Schädling. Aber wenn notwendig, dann richtig.</p></div>
        </div>
      </Section>

      <Section className="border-b border-t border-line bg-bg-panel" innerClassName="max-w-[48rem]">
        <Eyebrow>Biologie kurz</Eyebrow>
        <h2 className="mt-2 text-[clamp(26px,3vw,34px)]">Wer nistet hier eigentlich?</h2>
        <div className={`${PROSE} mt-5`}>
          <p>In unserer Region nistet sich meist die <strong>Gemeine Wespe</strong> (Vespula vulgaris) oder die <strong>Deutsche Wespe</strong> (Vespula germanica) ein. Beide bauen papierähnliche Nester in Hohlräumen oder in Erdlöchern – je nachdem, was gerade verfügbar und passend ist.</p>
          <p>Wespen sind <strong>wechselwarm (poikilotherm)</strong> – sie brauchen Wärme, um aktiv zu werden. Deshalb startet die Saison im Frühling: junge Königinnen beginnen das Nest zu bauen, indem sie Eier in die Wabenzellen legen. Am Ende der Saison kann ein Volk <strong>mehrere tausend Individuen</strong> zählen. Es überwintern danach nur die jungen Königinnen, der Rest stirbt ab.</p>
          <p className={CALLOUT}>Genau aus diesem Grund empfiehlt es sich, die Saison einfach abzuwarten und im Oktober/November an einem kühlen Tag das Einflugloch mit Silikon o.ä. gut zu verschließen. Falls das nicht möglich ist, weil <strong>Gefahr in Verzug</strong> ist, sollten Sie eine Bekämpfung in Erwägung ziehen.</p>
        </div>
      </Section>

      <Section>
        <Eyebrow>Methode</Eyebrow>
        <h2 className="mt-2 text-[clamp(26px,3vw,34px)]">Wo sie nisten – und wie ich vorgehe.</h2>
        <div className={PEST_BLOCK}>
          <article className={PEST_ARTICLE}>
            <h3 className="text-xl"><span className={PEST_EMOJI}>D</span>Direkt am Haus</h3>
            <p className="mt-3 text-ink-soft">Wespen bevorzugen <strong className="font-semibold text-brand">Rollkästen</strong> oder die Anschlussfugen vom Dachstuhl zur Fassade. Bei Holzfassaden tragen sie das Holz selbst ab, speicheln es ein und bauen daraus ihr Nest.</p>
            <p className="mt-3 text-ink-soft">Meist ist nur eine Ein-/Ausflugöffnung sichtbar; die Königin sitzt tief in der Baustruktur. Ich bringe ein <strong className="font-semibold text-brand">granulatartiges Stäubepulver mit Hochdruck</strong> direkt in die Öffnung ein – es verteilt sich in den von Wespen angelegten Gängen bis zur Königin. Arbeiterinnen tragen es weiter ins Nest.</p>
            <p className="mt-3 text-ink-soft">Heimkehrende Wespen sind irritiert und versuchen andere Wege; vor dem Einflugloch entsteht ein <strong className="font-semibold text-brand">„Stau"</strong>, der je nach Population mehrere Stunden bis 1–2 Tage dauert. Diesen Bereich in der Zeit bitte meiden.</p>
          </article>
          <article className={PEST_ARTICLE}>
            <h3 className="text-xl"><span className={PEST_EMOJI}>F</span>Frei hängend</h3>
            <p className="mt-3 text-ink-soft">Am Dachstuhl oder unter Balken arbeite ich mit einem <strong className="font-semibold text-brand">Knock-Down-Präparat</strong> und entsorge das Nest anschließend. Auch hier kehren Einzeltiere zurück, wenn das Nest schon weg ist – Zuflugbereich kurzzeitig meiden.</p>
            <p className="mt-3 text-ink-soft">Termine in den <strong className="font-semibold text-brand">frühen Morgenstunden</strong> oder am Abend sind die beste Wahl, weil dann die meisten Wespen im Nest sind.</p>
          </article>
        </div>
      </Section>

      <Section>
        <CTABlock variant="urgent" />
      </Section>

      <SiteFooter />
      <MobileSticky />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}
