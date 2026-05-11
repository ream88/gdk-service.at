import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter, MobileSticky } from '@/components/site/SiteFooter';
import { Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';
const PROSE   = 'flex flex-col gap-3.5 text-base leading-[1.75] text-ink-soft [&_strong]:font-semibold [&_strong]:text-brand';

export default function AGBPage() {
  return (
    <BaseLayout title="AGB · GDK Service" description="Allgemeine Geschäftsbedingungen für Schädlingsbekämpfung & Möbelmontage durch GDK Service e.U.">
      <SiteHeader />
      <section className={PAGE_HERO} data-screen-label="AGB · Hero">
        <div className={WRAP}>
          <Crumbs items={[{ href: '/index.html', label: 'Start' }, { label: 'AGB' }]} />
          <h1 className="mt-3 max-w-[18ch] text-[clamp(36px,5vw,56px)]">Allgemeine Geschäfts&shy;bedingungen</h1>
          <p className="mt-2 text-sm text-ink-mute">Stand: 03/2026</p>
        </div>
      </section>
      <section className={SECTION}>
        <div className={`${WRAP} max-w-[48rem]`}>
          <div className={PROSE}>
            <h3>1. Geltungsbereich</h3>
            <p>Diese AGB gelten für alle Verträge zwischen Gerhard Klosterer e.U. / Weidengasse 11 / 3041 Siegersdorf (nachfolgend „Anbieter") und seinen Kunden über Leistungen in den Bereichen Schädlingsbekämpfung und Möbelmontage.</p>
            <h3>2. Vertragsschluss</h3>
            <p>Angebote des Anbieters sind freibleibend. Ein Vertrag kommt zustande, wenn der Anbieter die Anfrage des Kunden schriftlich (z.&nbsp;B. per E-Mail) bestätigt oder mit der Leistungserbringung beginnt.</p>
            <h3>3. Leistungen &amp; Mitwirkungspflichten</h3>
            <p>Der Leistungsumfang ergibt sich aus dem Angebot bzw. der Auftragsbestätigung. Der Kunde hat alle für die Leistungserbringung erforderlichen Informationen rechtzeitig bereitzustellen und den Zugang zu räumlichen Gegebenheiten sicherzustellen. Bauliche Veränderungen und Anpassungen sind vom Kunden zu erbringen.</p>
            <h3>4. Preise &amp; Zahlung</h3>
            <p>Sofern nicht anders vereinbart, verstehen sich Preise brutto inkl. gesetzlicher USt. Zahlungen sind sofort nach Rechnungsstellung ohne Abzug fällig. Skonto wird nicht gewährt.</p>
            <h3>5. Termine &amp; Stornierung</h3>
            <p>Vereinbarte Termine sind verbindlich. Stornokosten werden nur verrechnet, falls die Anfahrt bereits erfolgt ist.</p>
            <h3>6. Gewährleistung</h3>
            <p>Der Anbieter verpflichtet sich zur fachgerechten Durchführung der Maßnahmen. Im Bereich der Schädlingsbekämpfung im speziellen zur Einhaltung anerkannter Regeln und Techniken sowie der Biozid-Verordnung und anderer geltender Rechtsgrundlagen. Offensichtliche Mängel sind unverzüglich, spätestens jedoch binnen 7 Tagen nach Leistungserbringung schriftlich zu melden. Es gibt bei Schädlingen keine Erfolgsgarantie.</p>
            <h3>7. Haftung</h3>
            <p>Der Anbieter haftet für Vorsatz und grobe Fahrlässigkeit unbeschränkt. Eine Haftung für Sach- oder Gesundheitsschäden ist ausgeschlossen, wenn diese darauf beruhen, dass der Kunde Sicherheitshinweise, Lüftungszeiten, Warnhinweise, Betretungsverbote u.&nbsp;dgl. missachtet. Des Weiteren, wenn Köderstationen eigenmächtig geöffnet, beschädigt oder entfernt werden und dadurch Gefährdungen für Haustiere oder Menschen entstehen. Der Kunde verpflichtet sich, Dritte (Mitarbeiter, Untermieter, Besucher), die die behandelten Räume betreten könnten, über die durchgeführten Maßnahmen und die bestehenden Sicherheitsvorkehrungen zu informieren.</p>
            <h3>8. Eigentumsvorbehalt / Materialien</h3>
            <p>Gelieferte Waren, Köderstationen und verbaute Materialien bleiben bis zur vollständigen Bezahlung Eigentum des Anbieters oder gelten für die Dauer einer Schädlingsbekämpfungsmaßnahme als Leihgegenstände, welche nicht in das Eigentum des Kunden übergehen.</p>
            <h3>9. Widerrufsrecht für Verbraucher</h3>
            <p>Bei außerhalb von Geschäftsräumen geschlossenen Verträgen und Fernabsatzverträgen besteht ein 14-tägiges Widerrufsrecht. Beginnt die Ausführung der Dienstleistung auf ausdrücklichen Wunsch des Kunden vor Ablauf der Widerrufsfrist, kann das Widerrufsrecht erlöschen; der Kunde hat ggf. Wertersatz für bereits erbrachte Leistungen zu leisten.</p>
            <h3>10. Datenschutz</h3>
            <p>Hinweise zur Verarbeitung personenbezogener Daten finden Sie in unserer <a href="/datenschutz.html" className="underline hover:text-brand">Datenschutzerklärung</a>.</p>
            <h3>11. Anwendbares Recht &amp; Gerichtsstand</h3>
            <p>Es gilt das Recht der Republik Österreich unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist, soweit zulässig, der Sitz des Anbieters.</p>
            <h3>12. Schlussbestimmungen</h3>
            <p>Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Änderungen und Ergänzungen bedürfen der Textform.</p>
          </div>
        </div>
      </section>
      <SiteFooter />
      <MobileSticky />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}
