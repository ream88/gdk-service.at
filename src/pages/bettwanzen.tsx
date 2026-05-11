import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader, PHONE, PHONE_HREF, WHATSAPP_HREF } from '@/components/site/SiteHeader';
import { SiteFooter, MobileSticky } from '@/components/site/SiteFooter';
import { CTABlock } from '@/components/site/CTABlock';
import { Section } from '@/components/site/Section';
import { Button, PhoneIcon, WhatsAppIcon } from '@/components/ui/Button';
import { Eyebrow, Placeholder, Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';
const PRINCIPLE_GRID = 'mt-6 grid grid-cols-3 gap-4 max-[720px]:grid-cols-1';
const PRINCIPLE_CARD = 'rounded-lg border border-line bg-bg-raised p-6';
const ICON_BOX = 'mb-3 grid h-10 w-10 place-items-center rounded-sm bg-accent-soft font-mono text-base text-accent';
const PROSE = 'flex flex-col gap-3.5 text-base leading-[1.75] text-ink-soft [&_strong]:font-semibold [&_strong]:text-brand';

const BW_METHODS: [string, string, string][] = [
  ['1', 'Demontage', 'Aller notwendigen Möbel und Einrichtungsgegenstände – nur was wirklich nötig ist.'],
  ['2', 'Thermische Bekämpfung', 'Mit Heizkanonen oder gezielt mit der gdk-ThermoFlexBox. Tötet alle Stadien – als einzige Methode auch die Eier.'],
  ['3', 'Sprühbelag (Insektizid)', 'Erfasst alles, was die Hitze nicht erreicht – tiefer in der Bausubstanz oder im Inneren von Stoffverkleidungen.'],
  ['4', 'Stäubebelag (Diatomeenerde)', 'Dringt in Hohlräume ein, ohne toxischen Wirkstoff. Ritzt den Panzer an, fügt Wunden zu, trocknet aus.'],
  ['5', 'Heißdampf', 'Aktiviert die Bettwanzen und zeigt so weitere Verstecke an.'],
  ['6', 'Abdichtung', 'Spalten und Fugen verschließen – die Bettwanzen müssen längere Wege über den Insektizid-Belag nehmen.'],
  ['7', 'Wieder-Zusammenbau', 'Komplette Möbel-Reassembly – ich verlasse den Raum bewohnbar.'],
];

const TIP_LI =
  "relative rounded-sm border border-line bg-bg-panel py-3.5 pl-11 pr-4 text-[15px] text-ink-soft before:absolute before:left-4 before:top-3.5 before:font-bold before:text-accent before:content-['✕'] [&_strong]:text-brand";

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
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>⏱</div><h3 className="text-xl">Genau</h3><p className="mt-1.5 text-ink-soft">Bettwanzen sind nicht einfach zu bekämpfen. Punktgenau und mit allen verfügbaren Methoden.</p></div>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>◆</div><h3 className="text-xl">Diskret</h3><p className="mt-1.5 text-ink-soft">Bei blutsaugenden Parasiten in Wohnung oder Hotel ist Diskretion höchstes Gebot.</p></div>
          <div className={PRINCIPLE_CARD}><div className={ICON_BOX}>✦</div><h3 className="text-xl">Kompetent</h3><p className="mt-1.5 text-ink-soft">Verhaltensmuster und Suchraster der Bettwanze sind die Basis erfolgreicher Bekämpfung.</p></div>
        </div>
      </Section>

      <Section className="border-b border-t border-line bg-bg-panel" innerClassName="max-w-[48rem]">
        <Eyebrow>Biologie kurz</Eyebrow>
        <h2 className="mt-2 text-[clamp(26px,3vw,34px)]">Cimex lectularius – ein perfekter Mitreisender.</h2>
        <div className={`${PROSE} mt-5`}>
          <p>Bettwanzen sind <strong>obligate Blutsauger</strong>. Sie begleiten den Menschen seit Jahrtausenden und haben sich perfekt an unsere mobile Lebensweise angepasst. Man findet sie in Wohnungen, Hotels, Hostels, Jugendherbergen und Berghütten.</p>
          <p>Sie sind <strong>papierdünn, oval, ca. 4–6 mm lang</strong>. Im 1. von 5 Larvenstadien fast durchsichtig weiß und kaum erkennbar. Nach der Blutmahlzeit dunkelrot bis schwarzbraun. Die unvollständige Entwicklung dauert mehrere Wochen, abhängig von Nahrung und Temperatur.</p>
          <p>Sie sind flugunfähig (verkümmerte Flügelansätze) und lassen sich notfalls von der Decke aufs Bett fallen. Das Weibchen legt <strong>mehrere hundert Eier</strong> ab – bis zu 5 pro Tag, geschützt und nahe am Wirt. Auf Reisen werden sie meist im Gepäck verschleppt.</p>
          <p>Angelockt werden sie durch <strong>Körperwärme, -geruch und CO₂-Ausstoß</strong>. Lichtscheu – kommen meist nachts. Bei hoher Populationsdichte auch tagsüber. Die Stiche erfolgen <strong>in einer Reihe</strong>, bis die richtige Kapillare gefunden ist.</p>
        </div>
      </Section>

      <Section>
        <Eyebrow>Bekämpfung</Eyebrow>
        <h2 className="mt-2 text-[clamp(28px,3.4vw,40px)]">
          Der gezielte Einsatz <em className="italic text-[color-mix(in_oklch,var(--brand)_80%,var(--accent))]">aller</em> verfügbaren Methoden.
        </h2>
        <div className={`${PROSE} mt-4 max-w-[48rem]`}>
          <p>Bettwanzen leben <strong>in Ihrer Nähe</strong>, nicht direkt auf Ihnen. Verstecke: Steckdosen, Holzverbindungen, Bilderrahmen, am Betthaupt zwischen Stoff und Trägerplatte, hinter Sockelleisten – die Liste ist lang. Ohne Demontage keine vernünftige Bekämpfung.</p>
          <p>Viele Bettwanzen-Stämme sind heute <strong>resistent</strong> gegen gängige Insektizide. Bekämpfung scheitert oft nicht am Wirkstoff, sondern an der mangelnden Erreichbarkeit der Verstecke. Meine Methode löst genau dieses Kernproblem – durch Integration von <strong>Handwerk und präziser Thermotechnik.</strong></p>
        </div>
        <div className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {BW_METHODS.map(([num, head, body]) => (
            <div key={num} className="relative rounded-sm border border-line bg-bg-panel px-5 py-4.5">
              <span className="mb-2 block font-mono text-xs tracking-[0.12em] text-accent">{num}</span>
              <strong className="mb-1.5 block font-display text-lg text-brand">{head}</strong>
              <p className="text-sm text-ink-soft">{body}</p>
            </div>
          ))}
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
            <h2 className="mt-2 text-[clamp(28px,3.4vw,42px)] text-brand-ink">Die gdk ThermoFlexBox.</h2>
            <p className="mt-4 max-w-[48ch] opacity-85">Statt sperrige Möbel durch das ganze Haus zu schleppen (Verschleppungsgefahr!), bringe ich die Lösung <strong>direkt zum Befallsherd.</strong> Mein mobiles Hochleistungssystem ist in der Größe variabel, umschließt demontierte Möbelstücke lückenlos und garantiert durch kontrollierte Hitze die <strong>vollständige Eliminierung aller Bettwanzenstadien</strong> – diskret, chemiefrei, direkt in Ihren Räumlichkeiten.</p>
          </>
        }
      >
        <Placeholder ratio="4/5" tone="dark" label="Foto · ThermoFlexBox im Einsatz" />
      </Section>

      <Section innerClassName="max-w-[48rem]">
        <Eyebrow>Tipps am Rande</Eyebrow>
        <h2 className="mt-2 text-[clamp(24px,2.8vw,30px)]">Was Sie nicht tun sollten.</h2>
        <ul className="m-0 mt-5 flex list-none flex-col gap-2.5 p-0">
          <li className={TIP_LI}><strong>Nicht selbst versuchen</strong> – verlieren Sie keine Zeit mit Eigenexperimenten.</li>
          <li className={TIP_LI}><strong>Niemals in ein anderes Zimmer umziehen</strong> – die Bettwanzen folgen Ihnen mit Sicherheit.</li>
          <li className={TIP_LI}>Auf Reisen: Gepäck ins <strong>Badezimmer</strong>, Lattenrost &amp; Steckdosen prüfen.</li>
          <li className={TIP_LI}>Blutspuren am Bettbezug? <strong>Hotel wechseln.</strong></li>
          <li className={TIP_LI}>Im Internet angebotene Detektoren oder DNA-Tests: <strong>funktionieren nicht.</strong> Selbst getestet.</li>
        </ul>
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
