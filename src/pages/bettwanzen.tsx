import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { CTABlock } from '@/components/site/CTABlock';
import { Section } from '@/components/site/Section';
import { FeatureRow } from '@/components/site/FeatureRow';
import { Prose } from '@/components/site/Prose';
import { TipList } from '@/components/site/TipList';
import { Eyebrow, Placeholder, Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';

export default function BettwanzenPage() {
  return (
    <BaseLayout title="Bettwanzen · Bettwanzenbekämpfung NÖ · GDK Service" description="Bettwanzen in Wohnung oder Hotel? Punktgenaue Bekämpfung mit Demontage, Thermo & Insektizid – inkl. eigener gdk ThermoFlexBox. Diskret und resistenzsicher.">
      <SiteHeader active="bettwanzen" />

      <section className={PAGE_HERO} data-screen-label="Bettwanzen · Hero">
        <div className={WRAP}>
          <Crumbs items={[{ href: '/index.html', label: 'Start' }, { href: '/schaedlingsbekaempfung.html', label: 'Schädlingsbekämpfung' }, { label: 'Bettwanzen' }]} />
          <Eyebrow>Bettwanzenbekämpfung · Hotels &amp; Privat</Eyebrow>
          <h1 className="mt-3 max-w-[18ch] text-[clamp(36px,5vw,56px)]">
            Bettwanzen –<br />
            <em className="italic text-[color-mix(in_oklch,var(--brand)_80%,var(--accent))]">Feinde in Ihrem Bett.</em>
          </h1>
          <p className="mt-4 max-w-[52ch] text-[17px] text-ink-soft">Punktgenau, Schädlings-spezifisch, mit allen verfügbaren Methoden – inkl. eigener gdk ThermoFlexBox. Schädlingsbekämpfung trifft Möbeldemontage. Alles aus einer Hand.</p>
        </div>
      </section>

      <Section eyebrow="Arbeitsweise" title="Genau · Diskret · Kompetent">
        <div className="mt-6 grid grid-cols-3 gap-8 max-[720px]:grid-cols-1">
          <FeatureRow layout="vertical" icon="ph-clock-countdown" title="Genau"     body="Bettwanzen sind nicht einfach zu bekämpfen. Punktgenau und mit allen verfügbaren Methoden." />
          <FeatureRow layout="vertical" icon="ph-shield-check"   title="Diskret"   body="Bei blutsaugenden Parasiten in Wohnung oder Hotel ist Diskretion höchstes Gebot." />
          <FeatureRow layout="vertical" icon="ph-sparkle"        title="Kompetent" body="Verhaltensmuster und Suchraster der Bettwanze sind die Basis erfolgreicher Bekämpfung." />
        </div>
      </Section>

      <Section className="border-y border-line bg-bg-panel" eyebrow="Biologie kurz" title="Cimex lectularius – ein perfekter Mitreisender." innerClassName="max-w-[48rem]">
        <Prose className="mt-5">
          <p>Bettwanzen sind <strong>obligate Blutsauger</strong>. Sie begleiten den Menschen seit Jahrtausenden und haben sich perfekt an unsere mobile Lebensweise angepasst. Man findet sie in Wohnungen, Hotels, Hostels, Jugendherbergen und Berghütten.</p>
          <p>Sie sind <strong>papierdünn, oval, ca. 4–6 mm lang</strong>. Im 1. von 5 Larvenstadien fast durchsichtig weiß und kaum erkennbar. Nach der Blutmahlzeit dunkelrot bis schwarzbraun. Die unvollständige Entwicklung dauert mehrere Wochen, abhängig von Nahrung und Temperatur.</p>
          <p>Sie sind flugunfähig (verkümmerte Flügelansätze) und lassen sich notfalls von der Decke aufs Bett fallen. Das Weibchen legt <strong>mehrere hundert Eier</strong> ab – bis zu 5 pro Tag, geschützt und nahe am Wirt. Auf Reisen werden sie meist im Gepäck verschleppt.</p>
          <p>Angelockt werden sie durch <strong>Körperwärme, -geruch und CO₂-Ausstoß</strong>. Lichtscheu – kommen meist nachts. Bei hoher Populationsdichte auch tagsüber. Die Stiche erfolgen <strong>in einer Reihe</strong>, bis die richtige Kapillare gefunden ist.</p>
        </Prose>
      </Section>

      <Section eyebrow="Bekämpfung" title={<>Der gezielte Einsatz <em>aller</em> verfügbaren Methoden.</>}>
        <Prose className="mt-4 max-w-[48rem]">
          <p>Bettwanzen leben <strong>in Ihrer Nähe</strong>, nicht direkt auf Ihnen. Verstecke: Steckdosen, Holzverbindungen, Bilderrahmen, am Betthaupt zwischen Stoff und Trägerplatte, hinter Sockelleisten – die Liste ist lang. Ohne Demontage keine vernünftige Bekämpfung.</p>
          <p>Viele Bettwanzen-Stämme sind heute <strong>resistent</strong> gegen gängige Insektizide. Bekämpfung scheitert oft nicht am Wirkstoff, sondern an der mangelnden Erreichbarkeit der Verstecke. Meine Methode löst genau dieses Kernproblem – durch Integration von <strong>Handwerk und präziser Thermotechnik.</strong></p>
        </Prose>
        <div className="mt-7 flex flex-col gap-8 max-w-[48rem]">
          <FeatureRow step={1} title="Demontage"                 body="Aller notwendigen Möbel und Einrichtungsgegenstände – nur was wirklich nötig ist." />
          <FeatureRow step={2} title="Thermische Bekämpfung"     body="Mit Heizkanonen oder gezielt mit der gdk-ThermoFlexBox. Tötet alle Stadien – als einzige Methode auch die Eier." />
          <FeatureRow step={3} title="Sprühbelag (Insektizid)"   body="Erfasst alles, was die Hitze nicht erreicht – tiefer in der Bausubstanz oder im Inneren von Stoffverkleidungen." />
          <FeatureRow step={4} title="Stäubebelag (Diatomeenerde)" body="Dringt in Hohlräume ein, ohne toxischen Wirkstoff. Ritzt den Panzer an, fügt Wunden zu, trocknet aus." />
          <FeatureRow step={5} title="Heißdampf"                 body="Aktiviert die Bettwanzen und zeigt so weitere Verstecke an." />
          <FeatureRow step={6} title="Abdichtung"                body="Spalten und Fugen verschließen – die Bettwanzen müssen längere Wege über den Insektizid-Belag nehmen." />
          <FeatureRow step={7} title="Wieder-Zusammenbau"        body="Komplette Möbel-Reassembly – ich verlasse den Raum bewohnbar." />
        </div>
      </Section>

      <Section
        id="thermoflex"
        cols="1.3fr 1fr"
        gap="gap-12"
        collapseBelow={800}
        className="bg-brand text-brand-ink"
        primary={
          <>
            <Eyebrow accent>Eigenentwicklung</Eyebrow>
            <h2 className="mt-2 text-[clamp(26px,3vw,36px)] text-brand-ink">Die gdk ThermoFlexBox.</h2>
            <p className="mt-4 max-w-[48ch] opacity-85">
              <span>Statt sperrige Möbel durch das ganze Haus zu schleppen (Verschleppungsgefahr!), bringe ich die Lösung <strong>direkt zum Befallsherd.</strong> Mein mobiles Hochleistungssystem ist in der Größe variabel, umschließt demontierte Möbelstücke lückenlos und garantiert durch kontrollierte Hitze die <strong>vollständige Eliminierung aller Bettwanzenstadien</strong> – diskret, chemiefrei, direkt in Ihren Räumlichkeiten.</span>
            </p>
          </>
        }
      >
        <Placeholder ratio="4/5" tone="dark" label="Foto · ThermoFlexBox im Einsatz" />
      </Section>

      <Section eyebrow="Tipps am Rande" title="Was Sie nicht tun sollten." innerClassName="max-w-[48rem]">
        <TipList
          items={[
            <><strong>Nicht selbst versuchen</strong> – verlieren Sie keine Zeit mit Eigenexperimenten.</>,
            <><strong>Niemals in ein anderes Zimmer umziehen</strong> – die Bettwanzen folgen Ihnen mit Sicherheit.</>,
            <>Auf Reisen: Gepäck ins <strong>Badezimmer</strong>, Lattenrost &amp; Steckdosen prüfen.</>,
            <>Blutspuren am Bettbezug? <strong>Hotel wechseln.</strong></>,
            <>Im Internet angebotene Detektoren oder DNA-Tests: <strong>funktionieren nicht.</strong> Selbst getestet.</>,
          ]}
        />
      </Section>

      <Section className="border-y border-line bg-bg-panel">
        <CTABlock variant="urgent" />
      </Section>

      <SiteFooter />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}
