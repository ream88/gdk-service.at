import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader, PHONE, PHONE_HREF, WHATSAPP_HREF } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
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

export default function AmeisenPage() {
  return (
    <BaseLayout title="Ameisen · Ameisenbekämpfung in NÖ · GDK Service" description="Ameisen im Haus oder Garten? Pheromon-basierte Bekämpfung mit Fraßgel-Methode (Trophallaxis) – nachhaltig statt Symptombekämpfung.">
      <SiteHeader active="ameisen" />

      <section className={PAGE_HERO} data-screen-label="Ameisen · Hero">
        <div className={WRAP}>
          <Crumbs items={[{ href: '/index.html', label: 'Start' }, { href: '/schaedlingsbekaempfung.html', label: 'Schädlingsbekämpfung' }, { label: 'Ameisen' }]} />
          <Eyebrow>Ameisenbekämpfung</Eyebrow>
          <h1 className="mt-3 max-w-[18ch] text-[clamp(36px,5vw,56px)]">
            Die Ameise –<br />
            <em className="italic text-[color-mix(in_oklch,var(--brand)_80%,var(--accent))]">ein Superhirn auf 6 Beinen.</em>
          </h1>
          <p className="mt-4 max-w-[52ch] text-[17px] text-ink-soft">Strukturiert wie das Volk selbst muss auch die Bekämpfung sein. Nahrungspräferenzen, Duftspuren, Arten-Wissen – das entscheidet über Erfolg oder Misserfolg.</p>
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
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>⏱</div><h3 className="text-xl">Genau</h3><p className="mt-1.5 text-ink-soft">Bei staatenbildenden Insekten muss man sich Gedanken um das Warum und Wo machen.</p></div>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>◆</div><h3 className="text-xl">Diskret</h3><p className="mt-1.5 text-ink-soft">Ameisen sind ein wichtiger Bestandteil unseres Ökosystems. Bekämpfung nur, wo wirklich Schädling.</p></div>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>✦</div><h3 className="text-xl">Kompetent</h3><p className="mt-1.5 text-ink-soft">Wissen über Biologie, Arten, Nahrungspräferenzen und Verhaltensmuster ist der entscheidende Faktor.</p></div>
        </div>
      </Section>

      <Section className="border-b border-t border-line bg-bg-panel" innerClassName="max-w-[48rem]">
        <Eyebrow>Eine Welt der Gerüche</Eyebrow>
        <h2 className="mt-2 text-[clamp(26px,3vw,34px)]">Warum Pheromone alles entscheiden.</h2>
        <div className={`${PROSE} mt-5`}>
          <p>Der Ameisenstaat wird durch ein <strong>komplexes Netzwerk aus chemischen Signalen</strong> gesteuert. Über hochempfindliche Antennen nehmen Ameisen Pheromone wahr, die fast alle sozialen Prozesse regeln.</p>
        </div>
        <div className={PRINCIPLE_GRID}>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>↗</div><h3 className="text-xl">Spuren</h3><p className="mt-1.5 text-ink-soft">Kundschafterinnen markieren Wege zu Futter. Je ergiebiger die Quelle, desto stärker die Duftspur.</p></div>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>!</div><h3 className="text-xl">Alarm</h3><p className="mt-1.5 text-ink-soft">Bei Gefahr werden Stoffe abgegeben, die den Staat in Kampfbereitschaft versetzen oder zur Flucht anregen.</p></div>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>◉</div><h3 className="text-xl">Geruch</h3><p className="mt-1.5 text-ink-soft">Jeder Staat hat ein chemisches Profil am Panzer. So unterscheiden Ameisen in Sekundenbruchteilen Freund von Feind.</p></div>
        </div>
      </Section>

      <Section innerClassName="max-w-[48rem]">
        <Eyebrow>Die häufigste Art</Eyebrow>
        <h2 className="mt-2 text-[clamp(26px,3vw,34px)]">Lasius niger – die schwarze Wegameise.</h2>
        <div className={`${PROSE} mt-5`}>
          <p>Die Schwarze Wegameise (Lasius niger) ist der häufigste Vertreter ihrer Art in unseren Breiten. Man kennt sie aus Garten und Terrasse. Robust, in Stadt wie Wald zuhause. Ihr Nest legt sie meist <strong>unter Steinen oder im Boden</strong> an.</p>
          <p>Im Gegensatz zur Waldameise hat ein Volk fast immer <strong>nur eine Königin (monogyn)</strong> – die jedoch bis zu <strong>28 Jahre alt</strong> werden kann. Ein Weltrekord unter Insekten.</p>
          <p>Lasius niger betreibt <strong>„Viehwirtschaft"</strong>: Sie züchtet Blattläuse, ernährt sich vom Honigtau und verteidigt sie gegen Marienkäfer und deren Larven. Manchmal trägt sie die Läuse sogar zum Überwintern ins Nest.</p>
        </div>
      </Section>

      <Section className="border-b border-t border-line bg-bg-panel" innerClassName="max-w-[48rem]">
        <Eyebrow>Methode</Eyebrow>
        <h2 className="mt-2 text-[clamp(26px,3vw,34px)]">Trophallaxis: das soziale Magen-Prinzip.</h2>
        <div className={`${PROSE} mt-5`}>
          <p>Ameisen nutzen den <strong>sozialen Magen (Trophallaxis)</strong>: Sie speichern Nahrung und teilen sie mit Artgenossen. Genau hier setze ich an. Kleine <strong>Fraßgelpunkte</strong> wandern von Ameise zu Ameise – sobald die Königin ebenfalls gefüttert wurde, stirbt der gesamte Staat ab.</p>
          <p>Damit das funktioniert, muss das Gel <strong>nahe am Nest</strong> ausgebracht werden (nicht zwingend an der Ameisenstraße) und in seiner Zusammensetzung <strong>frisch und attraktiv</strong> sein. An einem 10-m-Buffet greifen wir auch nicht zur trockenen Brezel. Die <strong>Entfernung alternativer Nahrung</strong> ist deshalb ein entscheidender Faktor.</p>
          <p className={CALLOUT}>Sie können vorab Hausmittel versuchen – manchmal hilft das gründliche Abwischen mit Desinfektionsmittel entlang der Ameisenstraße. Falls das nicht funktioniert: rufen Sie mich an.</p>
        </div>
      </Section>

      <Section>
        <CTABlock variant="urgent" />
      </Section>

      <SiteFooter />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}
