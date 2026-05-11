import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter, MobileSticky } from '@/components/site/SiteFooter';
import { Section } from '@/components/site/Section';
import { Faq, FaqQuestion, FaqAnswer } from '@/components/site/Faq';
import { Eyebrow, Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';

const GROUPS: { id: string; title: string; qa: [string, string][] }[] = [
  {
    id: 'preis',
    title: 'Preis & Fixpreis',
    qa: [
      ['Wie viel kostet ein Einsatz?', 'Der Fixpreis richtet sich nach Schädling, Umfang und Bezirk. Sie erhalten ihn verbindlich am Telefon – inklusive Anfahrt, Präparate, Arbeitszeit und MwSt.'],
      ['Gibt es versteckte Zusatzkosten?', 'Nein. Der am Telefon genannte Preis ist der Endpreis. Wenn während des Einsatzes wider Erwarten mehr nötig sein sollte, sprechen wir das vorher ab.'],
      ['Was ist im Fixpreis enthalten?', 'An- und Abfahrt, alle eingesetzten Präparate, Arbeitszeit, gesetzliche MwSt.'],
      ['Zahlungsmöglichkeiten?', 'Bar, Bankomat oder Rechnung per Überweisung.'],
    ],
  },
  {
    id: 'termin',
    title: 'Termin & Ablauf',
    qa: [
      ['Wie schnell bekomme ich einen Termin?', 'Bei akuten Fällen meist am selben Tag. Reguläre Termine innerhalb von 1–3 Tagen.'],
      ['Wie lange dauert ein Einsatz?', 'Wespen: 30–60 Minuten. Ameisen: 1–2 Stunden. Bettwanzen inkl. Möbelarbeit: 3–6 Stunden. Möbelmontage nach Aufwand.'],
      ['Muss ich anwesend sein?', 'Für die Besprechung ja, danach nicht zwingend. Bei Hausverwaltungen auch ohne Anwesenheit möglich.'],
    ],
  },
  {
    id: 'methoden',
    title: 'Methoden',
    qa: [
      ['Welche Mittel setzen Sie ein?', 'Nur behördlich zugelassene, professionelle Biozide. Immer so wenig wie möglich, so gezielt wie nötig.'],
      ['Sind die Mittel umweltschonend?', 'Ich arbeite mit dem Prinzip „minimaler toxischer Einsatz, maximale Wirkung" – abgestimmt auf das jeweilige Zieltier.'],
    ],
  },
  {
    id: 'hygiene',
    title: 'Haustiere & Hygiene',
    qa: [
      ['Können Haustiere im Haus bleiben?', 'Das hängt vom Mittel und Zieltier ab. Ich berate Sie vor Ort und gebe eine klare Empfehlung zu Sperrfristen.'],
      ['Können Kinder zuhause sein?', 'Nach einem Einsatz empfehlen wir meist einige Stunden Lüften, bevor Kinder wieder in den behandelten Raum kommen.'],
    ],
  },
  {
    id: 'moebel',
    title: 'Möbelmontage',
    qa: [
      ['Welche Möbel montieren Sie?', 'Alles mit Bauanleitung: IKEA, XXXLutz, Mömax, Maßmöbel, Küchenmodule. Auch Wandmontagen.'],
      ['Entsorgen Sie auch das Verpackungsmaterial?', 'Auf Wunsch, gegen einen kleinen Aufpreis, nehme ich Kartons & Styropor mit.'],
      ['Können Sie auch Möbel demontieren?', 'Ja. Vor allem bei Umzügen oder Bettwanzeneinsätzen gehört das Abbauen, Behandeln und Wieder-Aufbauen zum Standard.'],
    ],
  },
];

export default function FaqPage() {
  return (
    <BaseLayout title="FAQ · Häufige Fragen · GDK Service" description="Antworten auf die häufigsten Fragen zu Preis, Ablauf, Methoden, Haustieren und Möbelmontage – schnell und transparent.">
      <SiteHeader active="faq" />

      <section className={PAGE_HERO} data-screen-label="FAQ · Hero">
        <div className={WRAP}>
          <Crumbs items={[{ href: '/index.html', label: 'Start' }, { label: 'FAQ' }]} />
          <Eyebrow>Häufige Fragen</Eyebrow>
          <h1 className="mt-3 max-w-[18ch] text-[clamp(36px,5vw,56px)]">
            Was <em className="italic text-[color-mix(in_oklch,var(--brand)_80%,var(--accent))]">oft gefragt</em> wird.
          </h1>
          <p className="mt-4 max-w-[52ch] text-[17px] text-ink-soft">Die Antworten auf die häufigsten Fragen zu Preis, Ablauf und Methoden.</p>
        </div>
      </section>

      <Section
        cols="200px 1fr"
        align="start"
        gap="gap-12"
        collapseBelow={800}
        primary={
          <nav className="sticky top-24 flex flex-col gap-2 self-start text-sm max-[800px]:static max-[800px]:flex-row max-[800px]:flex-wrap">
            {GROUPS.map(g => (
              <a key={g.id} href={`#${g.id}`} className="text-ink-soft hover:text-brand">{g.title}</a>
            ))}
          </nav>
        }
      >
        <div>
          {GROUPS.map(g => (
            <div key={g.id} className="mb-12" id={g.id}>
              <h2 className="mb-4 text-[clamp(24px,2.4vw,30px)]">{g.title}</h2>
              {g.qa.map(([q, a]) => (
                <Faq key={q}>
                  <FaqQuestion>{q}</FaqQuestion>
                  <FaqAnswer>{a}</FaqAnswer>
                </Faq>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <SiteFooter />
      <MobileSticky />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}
