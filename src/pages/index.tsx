import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader, PHONE, PHONE_HREF, WHATSAPP_HREF } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { CTABlock } from '@/components/site/CTABlock';
import { Section } from '@/components/site/Section';
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
        <div className={`${WRAP} flex flex-wrap justify-between gap-2.5 border-t border-dashed border-line pt-5 text-[11px] text-ink-mute`}>
          <span className="font-mono tracking-mono">AT · NIEDERÖSTERREICH · EST. 2024</span>
          <span className="font-mono tracking-mono">Sitz 3041 Siegersdorf · 24+ Jahre Einsatz</span>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-b border-line bg-bg py-8" data-screen-label="Home · Trust">
        <div className={`${WRAP} grid grid-cols-4 gap-5 text-center max-[720px]:grid-cols-2`}>
          {[
            ['24+', 'Jahre Erfahrung'],
            ['4,9 / 5', 'Über 60 Aufträge / Jahr'],
            ['Same-day', 'Einsatz möglich'],
            ['Fixpreis', 'schon am Telefon'],
          ].map(([big, small], i) => (
            <div
              key={small}
              className={`p-4 ${i < 3 ? 'border-r border-line max-[720px]:[&:nth-child(2)]:border-r-0' : ''}`}
            >
              <strong className="block font-display text-[clamp(28px,3vw,40px)] font-[550] leading-none text-brand">{big}</strong>
              <span className="mt-2 block text-xs uppercase tracking-[0.16em] text-ink-mute">{small}</span>
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
              badge="Hauptleistung"
              badgeAccent
              photoTone="dark"
              photoLabel="Schädlingsbekämpfung"
              title="Schädlingsbekämpfung"
              lede="Wespen, Ameisen, Bettwanzen, Mäuse, Ratten – präzise, sicher, diskret. Mit Fixpreis nach Bezirk."
              ticks={['Same-day Service möglich', 'Punktgenau, minimal toxisch', 'Inkl. Anfahrt & Material']}
            />
            <ServiceCard
              href="/moebelmontage.html"
              badge="Komfort-Service"
              photoLabel="Möbelmontage"
              title="Möbelmontage"
              lede="Schränke, Küchen, Regale – fachgerecht aufgebaut, sauber hinterlassen. Sie sparen Stunden, Nerven und Werkzeug."
              ticks={['IKEA & Co. erfahren', 'Sauberes Arbeiten', 'Faire Stundensätze']}
            />
        </div>
      </Section>

      {/* PROBLEM */}
      <Section
        cols="1.2fr 1fr"
        data-screen-label="Home · Problem"
        className="border-b border-t border-line bg-bg-panel"
        eyebrow="Sie haben ein Problem?"
        title={<>Ungeziefer entdeckt?<br /><em>Schnelle Hilfe in Ihrer Nähe.</em></>}
        primary={
          <>
            <p className="mt-4 max-w-[48ch] text-ink-soft">
              Ratten in der Garage, Wespen am Balkon, Bettwanzen im Hotelzimmer:
              Schädlinge warten nicht – ich auch nicht. Ein Telefonat genügt, um Lage und Fixpreis zu klären.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              {[
                { icon: 'ph-clock-countdown', title: 'Schnell vor Ort',      body: 'In ganz Niederösterreich – meist innerhalb 24 Std.' },
                { icon: 'ph-shield-check',   title: 'Sicher & sauber',       body: 'Mensch, Tier und Möbel bleiben unbeschadet.' },
                { icon: 'ph-tag',            title: 'Fixpreis transparent',  body: 'Ein Auftrag = ein Preis. Ohne Kleingedrucktes.' },
              ].map(p => (
                <div key={p.title} className="flex min-h-[84px] items-center gap-4 rounded-lg border border-line bg-bg-raised px-6 py-[18px]">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-accent-soft text-accent" aria-hidden="true">
                    <i className={`ph-fill ${p.icon} text-[22px] leading-none`} />
                  </span>
                  <div>
                    <strong className="font-semibold text-brand">{p.title}</strong><br />
                    <span className="text-ink-soft">{p.body}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={PHONE_HREF} variant="cta">Sofort anrufen</Button>
              <Button href="/schaedlingsbekaempfung.html" variant="ghost">Leistungen ansehen</Button>
            </div>
          </>
        }
      >
        <div className="grid grid-cols-2 content-start gap-3">
            {[
              ['Wespen',     '/schaedlingsbekaempfung.html#wespen'],
              ['Ameisen',    '/schaedlingsbekaempfung.html#ameisen'],
              ['Bettwanzen', '/schaedlingsbekaempfung.html#bettwanzen'],
              ['Nager',      '/schaedlingsbekaempfung.html#maeuse'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="flex min-h-[84px] items-center rounded-lg border border-line bg-bg-raised px-6 py-5 font-display text-[22px] font-[550] text-brand transition-[transform,border-color,box-shadow] duration-200 active:scale-[0.97] hover:border-[color-mix(in_oklch,var(--brand)_35%,var(--line))] hover:shadow-card"
              >
                {label}
              </a>
            ))}
        </div>
      </Section>

      {/* PORTRAIT */}
      <Section
        cols="0.85fr 1.1fr"
        reverse
        data-screen-label="Home · Portrait"
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
              <Button href="/kontakt.html" variant="ghost">Termin vereinbaren</Button>
            </div>
          </>
        }
      >
        <figure className="relative m-0">
          <Placeholder ratio="3/4" tone="dark" label="Portrait · Gerhard Klosterer" />
          <div className="absolute -right-3 -top-3 rounded-[18px] bg-brand px-[18px] py-[14px] text-center text-brand-ink shadow-lift">
            <strong className="block font-display text-[36px] font-[550] leading-none">24<span className="text-accent">+</span></strong>
            <span className="text-[10px] uppercase tracking-[0.18em] opacity-75">Jahre im Einsatz</span>
          </div>
        </figure>
      </Section>

      {/* TESTIMONIALS */}
      <Section
        data-screen-label="Home · Stimmen"
        className="border-b border-t border-line bg-bg-panel"
        eyebrow="Stimmen aus der Region"
        title="Was Kunden sagen."
        aside={
          <>
            <span className="inline-flex gap-1 align-middle text-accent" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => <i key={i} className="ph-fill ph-star" />)}
            </span>{' '}
            <strong className="text-brand">4,9 / 5</strong> · über 60 Aufträge im letzten Jahr
          </>
        }
      >
        <div className="grid grid-cols-3 gap-5 max-[800px]:grid-cols-1">
            {[
              { quote: 'Wespennest am Dachvorsprung – am selben Nachmittag erledigt. Freundlich, schnell, der Preis war wie am Telefon angekündigt.', who: 'Familie Hofer', where: 'St. Pölten' },
              { quote: 'Wir hatten Bettwanzen im Hotelzimmer. Diskret abgewickelt, Möbel demontiert und wieder zusammengebaut – alles aus einer Hand.',     who: 'Hotel Z.',      where: 'Tullnerfeld' },
              { quote: 'Drei IKEA-Schränke an einem Vormittag montiert. Sauber gearbeitet, kein Krümel am Boden. Klare Empfehlung.',                       who: 'Lisa K.',       where: 'Krems' },
            ].map(q => (
              <figure key={q.who} className="m-0 flex flex-col rounded-lg border border-line bg-bg-raised p-7">
                <p className="float-left mr-3.5 mt-1.5 font-display text-[44px] font-bold leading-none text-accent">„</p>
                <blockquote className="mb-5 font-display text-xl leading-[1.35] text-brand after:block after:clear-both after:content-['']">
                  {q.quote}
                </blockquote>
                <figcaption className="text-[13px] text-ink-mute"><strong className="font-semibold text-brand">{q.who}</strong> · {q.where}</figcaption>
              </figure>
            ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section>
        <CTABlock variant="urgent" />
      </Section>

      <SiteFooter />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}

interface ServiceCardProps {
  href: string;
  badge: string;
  badgeAccent?: boolean;
  photoTone?: 'default' | 'dark' | 'accent';
  photoLabel: string;
  title: string;
  lede: string;
  ticks: string[];
}

function ServiceCard({ href, badge, badgeAccent, photoTone = 'default', photoLabel, title, lede, ticks }: ServiceCardProps) {
  return (
    <a
      href={href}
      className="group relative block overflow-hidden rounded-xl border border-line bg-bg-raised transition-[transform,box-shadow,border-color] duration-300 active:scale-[0.98] hover:border-[color-mix(in_oklch,var(--brand)_30%,var(--line))] hover:shadow-lift"
    >
      <Placeholder ratio="16/10" tone={photoTone} label={photoLabel} className="!rounded-none" />
      <span
        className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-semibold ${
          badgeAccent ? 'bg-accent text-accent-ink' : 'bg-bg-raised text-brand'
        }`}
      >
        {badge}
      </span>
      <div className="p-7">
        <h3 className="mb-2.5 text-[28px]">{title}</h3>
        <p className="text-ink-soft">{lede}</p>
        <ul className="m-0 mt-4 flex list-none flex-col gap-2 p-0 text-sm">
          {ticks.map(t => (
            <li key={t} className="flex items-baseline gap-2 text-ink">
              <i className="ph-fill ph-check text-accent" aria-hidden="true" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <span className="mt-6 inline-block text-sm font-semibold text-brand group-hover:text-accent">Mehr erfahren</span>
      </div>
    </a>
  );
}
