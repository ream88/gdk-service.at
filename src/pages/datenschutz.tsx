import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter, MobileSticky } from '@/components/site/SiteFooter';
import { Section } from '@/components/site/Section';
import { Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';
const PROSE   = 'flex flex-col gap-3.5 text-base leading-[1.75] text-ink-soft [&_strong]:font-semibold [&_strong]:text-brand';

export default function DatenschutzPage() {
  return (
    <BaseLayout title="Datenschutzerklärung · GDK Service" description="Datenschutzerklärung gemäß DSGVO. Verantwortlicher, Zwecke der Verarbeitung, Server-Logs, Google Ads / Consent Mode V2 und Ihre Rechte.">
      <SiteHeader />
      <section className={PAGE_HERO} data-screen-label="Datenschutz · Hero">
        <div className={WRAP}>
          <Crumbs items={[{ href: '/index.html', label: 'Start' }, { label: 'Datenschutz' }]} />
          <h1 className="mt-3 max-w-[18ch] text-[clamp(36px,5vw,56px)]">Datenschutz&shy;erklärung</h1>
          <p className="mt-2 text-sm text-ink-mute">Stand: 04/2026</p>
        </div>
      </section>
      <Section innerClassName="max-w-[48rem]">
        <div className={PROSE}>
            <h3>1. Verantwortlicher</h3>
            <p>Gerhard Klosterer, Weidengasse 11, 3041 Siegersdorf<br />Telefon: 0670/199 55 44 · E-Mail: gerhard@gdk-service.at</p>
            <h3>2. Zwecke und Rechtsgrundlagen der Verarbeitung</h3>
            <p>Personenbezogene Daten werden zur Terminplanung, Angebotslegung und Leistungserbringung gemäß Art. 6 Abs. 1 lit. b DSGVO sowie zur Beantwortung von Anfragen verarbeitet. Auf Basis berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) erfolgt Verarbeitung etwa zur Sicherstellung des IT-Betriebs. Bei erteilter Einwilligung liegt Art. 6 Abs. 1 lit. a DSGVO zugrunde.</p>
            <h3>3. Bereitgestellte Daten</h3>
            <p>Das Kontakt-/Terminformular erfasst Name, Telefonnummer, E-Mail, gewünschte Leistung, Adresse des Einsatzorts, Wunschtermin, Zeitfenster, Nachricht sowie hochgeladene Dateien. Übermittelte Fotos von Räumen, Befallsstellen oder Schädlingen dienen ausschließlich der Problemidentifikation und Angebotserstellung. Fotografien am Einsatzort werden zur rechtssicheren Dokumentation der Befallssituation und ordnungsgemäßen Durchführung von Maßnahmen angefertigt und nur so lange gespeichert, wie die Vertragsabwicklung und Erfüllung gesetzlicher Nachweispflichten dies erfordern.</p>
            <h3>4. Server-Logfiles</h3>
            <p>Beim Website-Aufruf speichert der Hosting-Provider automatisch Zugriffsdaten (IP-Adresse, Datum und Uhrzeit, aufgerufene Seiten, Referrer-URL, Browsertyp) in Logfiles. Die Verarbeitung dient gemäß Art. 6 Abs. 1 lit. f DSGVO der technischen Bereitstellung, Sicherheit und Fehleranalyse.</p>
            <h3>5. Art und Umfang der Verarbeitung</h3>
            <p>Die Website nutzt „Google Ads" der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland mit Conversion-Tracking. Ein Cookie wird beim Klick auf Google-Anzeigen gesetzt, um nachfolgende Aktionen auf der Website zu erkennen. „Google Consent Mode V2" wurde implementiert, um den Zustimmungsstatus an Google-Dienste zu übermitteln. Bei verweigerter Einwilligung werden keine personenbezogenen Daten mit Werbe-Cookies gespeichert; stattdessen werden anonyme „pings" für aggregierte Conversions-Modellierung gesendet.</p>
            <h3>6. Empfänger / Auftragsverarbeiter</h3>
            <p>Daten werden an IT- und Hosting-Dienstleister übermittelt, die weisungsgebunden tätig sind.</p>
            <h3>7. Speicherdauer</h3>
            <p>Personenbezogene Daten werden nur so lange gespeichert, wie für die jeweiligen Zwecke erforderlich oder gesetzliche Aufbewahrungspflichten bestehen. Anfragen werden grundsätzlich nach Bearbeitungsabschluss gelöscht. Conversion-Tracking-Cookies verlieren in der Regel nach 30 bis 90 Tagen ihre Gültigkeit und dienen nicht der persönlichen Identifizierung.</p>
            <h3>8. Ihre Rechte</h3>
            <p>Ihnen stehen die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen Verarbeitungen auf Basis berechtigter Interessen sowie auf Datenübertragbarkeit zu. Erteilte Einwilligungen können jederzeit mit Wirkung für die Zukunft widerrufen werden.</p>
            <h3>9. Beschwerderecht</h3>
            <p>Sie haben das Recht, bei einer Aufsichtsbehörde Beschwerde einzulegen. In Österreich: Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030 Wien, www.dsb.gv.at.</p>
            <h3>10. Datensicherheit</h3>
            <p>Geeignete technische und organisatorische Maßnahmen schützen Ihre Daten vor Verlust, Zugriff und Missbrauch und werden laufend dem Stand der Technik angepasst.</p>
            <h3>11. Kontakt</h3>
            <p>Bei Fragen zur Datenverarbeitung kontaktieren Sie bitte die oben genannten Kontaktdaten.</p>
        </div>
      </Section>
      <SiteFooter />
      <MobileSticky />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}
