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
        </div>
      </section>

      <Section eyebrow="Arbeitsweise" title="Genau · Diskret · Kompetent">
        <div className="mt-6 grid grid-cols-3 gap-8 max-[720px]:grid-cols-1">
          <FeatureRow layout="vertical" icon="ph-clock-countdown" title="Genau"     body="Bei staatenbildenden Insekten muss man sich Gedanken um das Warum und Wo machen." />
          <FeatureRow layout="vertical" icon="ph-shield-check"   title="Diskret"   body="Ameisen sind ein wichtiger Bestandteil unseres Ökosystems. Bekämpfung nur, wo wirklich Schädling." />
          <FeatureRow layout="vertical" icon="ph-sparkle"        title="Kompetent" body="Wissen über Biologie, Arten, Nahrungspräferenzen und Verhaltensmuster ist der entscheidende Faktor." />
        </div>
      </Section>

      <Section className="border-y border-line bg-bg-panel" eyebrow="Eine Welt der Gerüche" title="Warum Pheromone alles entscheiden." innerClassName="max-w-[48rem]">
        <Prose className="mt-5">
          <p>Der Ameisenstaat wird durch ein <strong>komplexes Netzwerk aus chemischen Signalen</strong> gesteuert. Über hochempfindliche Antennen nehmen Ameisen Pheromone wahr, die fast alle sozialen Prozesse regeln.</p>
        </Prose>
        <div className="mt-6 grid grid-cols-3 gap-8 max-[720px]:grid-cols-1">
          <FeatureRow layout="vertical" icon="ph-path"    title="Spuren" body="Kundschafterinnen markieren Wege zu Futter. Je ergiebiger die Quelle, desto stärker die Duftspur." />
          <FeatureRow layout="vertical" icon="ph-warning" title="Alarm"  body="Bei Gefahr werden Stoffe abgegeben, die den Staat in Kampfbereitschaft versetzen oder zur Flucht anregen." />
          <FeatureRow layout="vertical" icon="ph-map-pin" title="Geruch" body="Jeder Staat hat ein chemisches Profil am Panzer. So unterscheiden Ameisen in Sekundenbruchteilen Freund von Feind." />
        </div>
      </Section>

      <Section eyebrow="Die häufigste Art" title="Lasius niger – die schwarze Wegameise." innerClassName="max-w-[48rem]">
        <Prose className="mt-5">
          <p>Die Schwarze Wegameise (Lasius niger) ist der häufigste Vertreter ihrer Art in unseren Breiten. Man kennt sie aus Garten und Terrasse. Robust, in Stadt wie Wald zuhause. Ihr Nest legt sie meist <strong>unter Steinen oder im Boden</strong> an.</p>
          <p>Im Gegensatz zur Waldameise hat ein Volk fast immer <strong>nur eine Königin (monogyn)</strong> – die jedoch bis zu <strong>28 Jahre alt</strong> werden kann. Ein Weltrekord unter Insekten.</p>
          <p>Lasius niger betreibt <strong>„Viehwirtschaft"</strong>: Sie züchtet Blattläuse, ernährt sich vom Honigtau und verteidigt sie gegen Marienkäfer und deren Larven. Manchmal trägt sie die Läuse sogar zum Überwintern ins Nest.</p>
        </Prose>
      </Section>

      <Section className="border-y border-line bg-bg-panel" eyebrow="Methode" title="Trophallaxis: das soziale Magen-Prinzip." innerClassName="max-w-[48rem]">
        <Prose className="mt-5">
          <p>Ameisen nutzen den <strong>sozialen Magen (Trophallaxis)</strong>: Sie speichern Nahrung und teilen sie mit Artgenossen. Genau hier setze ich an. Kleine <strong>Fraßgelpunkte</strong> wandern von Ameise zu Ameise – sobald die Königin ebenfalls gefüttert wurde, stirbt der gesamte Staat ab.</p>
          <p>Damit das funktioniert, muss das Gel <strong>nahe am Nest</strong> ausgebracht werden (nicht zwingend an der Ameisenstraße) und in seiner Zusammensetzung <strong>frisch und attraktiv</strong> sein. An einem 10-m-Buffet greifen wir auch nicht zur trockenen Brezel. Die <strong>Entfernung alternativer Nahrung</strong> ist deshalb ein entscheidender Faktor.</p>
          <Callout>Sie können vorab Hausmittel versuchen – manchmal hilft das gründliche Abwischen mit Desinfektionsmittel entlang der Ameisenstraße. Falls das nicht funktioniert: rufen Sie mich an.</Callout>
        </Prose>
      </Section>

      <Section className="border-y border-line bg-bg-panel">
        <CTABlock variant="urgent" />
      </Section>

      <SiteFooter />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}
