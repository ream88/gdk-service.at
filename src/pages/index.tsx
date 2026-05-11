import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader, PHONE, PHONE_HREF, WHATSAPP_HREF } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { CTABlock } from '@/components/site/CTABlock';
import { Section } from '@/components/site/Section';
import { ServiceCard } from '@/components/site/ServiceCard';
import { FeatureRow } from '@/components/site/FeatureRow';
import { Button, PhoneIcon, WhatsAppIcon } from '@/components/ui/Button';
import { Eyebrow, Placeholder } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';

export default function HomePage() {
  return (
    <BaseLayout
      title="GDK Service · Schädlingsbekämpfung & Möbelmontage in NÖ"
      description="Diskreter, persönlicher Service vom Profi mit 24+ Jahren Erfahrung. Klare Fixpreise, kein Außendienst, keine Überraschungen."
    >
      <SiteHeader active="home" />

      {/* HERO */}
      <section
        className="relative overflow-hidden pb-8 pt-14 bg-[radial-gradient(ellipse_at_90%_-20%,color-mix(in_oklch,var(--accent-soft)_70%,transparent),transparent_55%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]"
        data-screen-label="Home · Hero"
      >
        <div className={`${WRAP} grid grid-cols-[1.1fr_1fr] items-center gap-16 pb-10 pt-6 max-[960px]:grid-cols-1 max-[960px]:gap-10`}>
          <div>
            <Eyebrow>Schädlingsbekämpfung &amp; Möbelmontage · NÖ</Eyebrow>
            <h1 className="mt-5 text-[clamp(40px,6.2vw,76px)] font-[550] leading-[0.98] tracking-[-0.028em]">
              Schädling im Haus?<br />
              <em className="font-display italic text-[color-mix(in_oklch,var(--brand)_75%,var(--accent)_25%)]">Heute noch erledigt.</em>
            </h1>
            <p className="mt-[22px] max-w-[50ch] text-[clamp(16px,1.4vw,19px)] leading-[1.55] text-ink-soft">
              Diskreter, persönlicher Service vom Profi mit 24+ Jahren Erfahrung.
              Klare Fixpreise, kein Außendienst, keine Überraschungen –
              nur ein Anruf zwischen Ihnen und der Lösung.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={PHONE_HREF} variant="cta" size="xl"><PhoneIcon />{PHONE}</Button>
              <Button href={WHATSAPP_HREF} variant="wa" size="xl"><WhatsAppIcon /> WhatsApp</Button>
            </div>
            <ul className="mt-[30px] grid max-w-[56ch] list-none grid-cols-2 gap-x-6 gap-y-2.5 p-0">
              {[
                ['Termin', 'meist heute oder morgen'],
                ['Fixpreis', 'inkl. Anfahrt, Material, MwSt.'],
                ['Diskret', '– Nachbarn merken nichts'],
                ['Direkt', '– Sie sprechen mit dem Profi'],
              ].map(([strong, rest]) => (
                <li
                  key={strong}
                  className="relative pl-5 text-sm text-ink-soft before:absolute before:left-0 before:top-[7px] before:h-2.5 before:w-2.5 before:rounded-full before:bg-accent before:shadow-[0_0_0_3px_color-mix(in_oklch,var(--accent)_30%,transparent)] before:content-['']"
                >
                  <strong className="font-semibold text-brand">{strong}</strong> {rest}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Placeholder ratio="5/4" tone="dark" label="Portrait · Gerhard am Kundenobjekt" className="rounded-xl shadow-lift" />
            <figure className="absolute -bottom-7 -left-5 m-0 max-w-[280px] rounded-lg border border-line bg-bg-raised p-[18px] shadow-lift">
              <div className="flex gap-1 text-accent" aria-label="5 von 5 Sternen">
                {Array.from({ length: 5 }, (_, i) => <i key={i} className="ph-fill ph-star" aria-hidden="true" />)}
              </div>
              <blockquote className="my-2.5 font-display text-[15px] leading-[1.3] text-brand">„War noch am selben Tag da. Problem gelöst, Preis exakt wie besprochen."</blockquote>
              <figcaption className="text-xs text-ink-mute">— Familie M., St. Pölten</figcaption>
            </figure>
            <div className="pointer-events-none absolute -right-7 -top-7 grid h-[140px] w-[140px] -rotate-12 place-items-center max-[960px]:hidden" aria-hidden="true">
              <span className="grid h-[140px] w-[140px] place-items-center rounded-full border-2 border-accent bg-[color-mix(in_oklch,var(--bg)_92%,transparent)] px-3.5 py-7 text-center font-display text-base font-semibold uppercase leading-[1.05] tracking-[0.08em] text-accent mix-blend-multiply">
                Fix­preis<br />Garantie
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-brand py-10 text-brand-ink" data-screen-label="Home · Trust">
        <div className={`${WRAP} grid grid-cols-4 gap-5 text-center max-[720px]:grid-cols-2`}>
          {[
            ['24+', 'Jahre Erfahrung'],
            ['4,9 / 5', 'Über 60 Aufträge / Jahr'],
            ['Same-day', 'Einsatz möglich'],
            ['Fixpreis', 'schon am Telefon'],
          ].map(([big, small], i) => (
            <div
              key={small}
              className={`p-4 ${i < 3 ? 'border-r border-white/15 max-[720px]:[&:nth-child(2)]:border-r-0' : ''}`}
            >
              <strong className="block font-display text-[clamp(28px,3vw,40px)] font-[550] leading-none">{big}</strong>
              <span className="mt-2 block text-xs uppercase tracking-[0.16em] opacity-60">{small}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <Section
        data-screen-label="Home · Leistungen"
        eyebrow="Leistungen"
        title={<>Zwei Leistungen.<br /><em>Beide auf höchstem Niveau.</em></>}
        aside="Spezialisiert statt Bauchladen – damit Sie genau das bekommen, wofür Sie zahlen."
      >
        <div className="grid grid-cols-2 gap-6 max-[800px]:grid-cols-1">
            <ServiceCard
              href="/schaedlingsbekaempfung.html"
              photo={{ tone: 'dark', label: 'Schädlingsbekämpfung' }}
              badge={{ label: 'Hauptleistung', accent: true }}
              title="Schädlingsbekämpfung"
              lede="Wespen, Ameisen, Bettwanzen, Mäuse, Ratten – präzise, sicher, diskret. Mit Fixpreis nach Bezirk."
              bullets={['Same-day Service möglich', 'Punktgenau, minimal toxisch', 'Inkl. Anfahrt & Material']}
            />
            <ServiceCard
              href="/moebelmontage.html"
              photo={{ label: 'Möbelmontage' }}
              badge={{ label: 'Komfort-Service' }}
              title="Möbelmontage"
              lede="Schränke, Küchen, Regale – fachgerecht aufgebaut, sauber hinterlassen. Sie sparen Stunden, Nerven und Werkzeug."
              bullets={['IKEA & Co. erfahren', 'Sauberes Arbeiten', 'Faire Stundensätze']}
            />
        </div>
      </Section>

      {/* PROBLEM */}
      <Section
        data-screen-label="Home · Problem"
        className="border-y border-line bg-bg-panel"
        eyebrow="Sie haben ein Problem?"
        title={<>Ungeziefer entdeckt?<br /><em>Schnelle Hilfe in Ihrer Nähe.</em></>}
        aside="Ratten in der Garage, Wespen am Balkon, Bettwanzen im Hotelzimmer: Schädlinge warten nicht – ich auch nicht. Ein Telefonat genügt, um Lage und Fixpreis zu klären."
      >
        <div className="grid grid-cols-3 gap-8 max-[800px]:grid-cols-1">
          {[
            { icon: 'ph-clock-countdown', title: 'Schnell vor Ort',      body: 'In ganz Niederösterreich – meist innerhalb 24 Std.' },
            { icon: 'ph-shield-check',   title: 'Sicher & sauber',       body: 'Mensch, Tier und Möbel bleiben unbeschadet.' },
            { icon: 'ph-tag',            title: 'Fixpreis transparent',  body: 'Ein Auftrag = ein Preis. Ohne Kleingedrucktes.' },
          ].map(p => (
            <FeatureRow key={p.title} icon={p.icon} title={p.title} body={p.body} />
          ))}
        </div>
      </Section>

      {/* PEST DIRECT */}
      <Section
        data-screen-label="Home · Direkt"
        eyebrow="Direkt zum Schädling"
        title="Welcher Schädling plagt Sie?"
        aside="Springe direkt zur Methode für deinen Fall – oder ruf an, wenn du unsicher bist."
      >
        <div className="grid grid-cols-4 gap-3 max-[800px]:grid-cols-2 max-[480px]:grid-cols-1">
          {[
            { title: 'Wespen',     lede: 'Nester · Akutfälle',  href: '/schaedlingsbekaempfung.html#wespen' },
            { title: 'Ameisen',    lede: 'Pheromon-Methode',    href: '/schaedlingsbekaempfung.html#ameisen' },
            { title: 'Bettwanzen', lede: 'Hotels & Privat',     href: '/schaedlingsbekaempfung.html#bettwanzen' },
            { title: 'Nager',      lede: 'Mäuse · Ratten',      href: '/schaedlingsbekaempfung.html#maeuse' },
          ].map(p => (
            <ServiceCard key={p.title} compact href={p.href} title={p.title} lede={p.lede} />
          ))}
        </div>
      </Section>

      {/* PORTRAIT */}
      <Section
        cols="0.85fr 1.1fr"
        reverse
        data-screen-label="Home · Portrait"
        className="border-y border-line bg-bg-panel"
        eyebrow="Der Mann hinter GDK"
        title={<>Gerhard Klosterer.<br /><em>Kein Callcenter.<br />Kein Subunternehmer.</em></>}
        primary={
          <>
            <p className="mt-6 text-ink-soft">
              Über zwei Jahrzehnte habe ich für einen der größten Schädlingsbekämpfer der Welt gearbeitet. Heute bürgt mein Name für die gleiche Qualität – nur direkter, persönlicher und ohne den Zwischenkostenaufschlag.
            </p>
            <p className="mt-3.5 text-ink-soft">
              Sie rufen an, ich gehe ran. Sie schildern das Problem, ich nenne den Fixpreis. Ich komme, löse das Problem sauber – und gehe erst, wenn der Schädling das auch getan hat.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/ueber.html" variant="primary">Mehr über mich</Button>
            </div>
          </>
        }
      >
        <figure className="relative m-0">
          <Placeholder ratio="3/4" tone="dark" label="Portrait · Gerhard Klosterer" />
          <div className="absolute -right-3 -top-3 rounded-[18px] bg-brand px-[18px] py-[14px] text-center text-brand-ink shadow-lift">
            <strong className="block font-display text-[36px] font-[550] leading-none">24+</strong>
            <span className="text-[10px] uppercase tracking-[0.18em] opacity-75">Jahre im Einsatz</span>
          </div>
        </figure>
      </Section>

      {/* TESTIMONIALS */}
      <Section
        data-screen-label="Home · Stimmen"
        eyebrow="Stimmen aus der Region"
        title="Was Kunden sagen."
        aside={
          <div className="text-right">
            <div className="flex items-center justify-end gap-2">
              <span className="inline-flex gap-1 text-accent" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => <i key={i} className="ph-fill ph-star" />)}
              </span>
              <strong className="text-brand">4,9 / 5</strong>
            </div>
            <div className="mt-1">über 60 Aufträge im letzten Jahr</div>
          </div>
        }
      >
        <div className="grid grid-cols-3 gap-5 max-[800px]:grid-cols-1">
            {[
              { quote: 'Wespennest am Dachvorsprung – am selben Nachmittag erledigt. Freundlich, schnell, der Preis war wie am Telefon angekündigt.', who: 'Familie Hofer', where: 'St. Pölten' },
              { quote: 'Wir hatten Bettwanzen im Hotelzimmer. Diskret abgewickelt, Möbel demontiert und wieder zusammengebaut – alles aus einer Hand.',     who: 'Hotel Z.',      where: 'Tullnerfeld' },
              { quote: 'Drei IKEA-Schränke an einem Vormittag montiert. Sauber gearbeitet, kein Krümel am Boden. Klare Empfehlung.',                       who: 'Lisa K.',       where: 'Krems' },
            ].map(q => (
              <figure key={q.who} className="m-0 flex flex-col rounded-lg border border-line bg-bg-raised p-7">
                <p className="float-left mr-3.5 -mt-1 font-display text-[56px] font-bold leading-none text-accent">“</p>
                <blockquote className="mb-5 font-display text-xl leading-[1.35] text-brand after:block after:clear-both after:content-['']">
                  {q.quote}
                </blockquote>
                <figcaption className="text-[13px] text-ink-mute"><strong className="font-semibold text-brand">{q.who}</strong> · {q.where}</figcaption>
              </figure>
            ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="border-y border-line bg-bg-panel">
        <CTABlock variant="urgent" />
      </Section>

      <SiteFooter />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}

