import { BaseLayout } from '@/layouts/BaseLayout';
import { SiteHeader, EMAIL, EMAIL_HREF, ADDRESS, HOURS, PHONE, PHONE_HREF, WHATSAPP_HREF } from '@/components/site/SiteHeader';
import { SiteFooter, MobileSticky } from '@/components/site/SiteFooter';
import { Eyebrow, Crumbs } from '@/components/ui/Primitives';

const WRAP    = 'mx-auto max-w-wrap px-7 max-[640px]:px-5';
const SECTION = 'py-20';
const PAGE_HERO =
  'border-b border-line pt-[72px] pb-12 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--bg-panel)_80%,transparent),transparent_60%),linear-gradient(180deg,var(--bg)_0%,var(--bg-panel)_100%)]';

const CONTACT_CARD = 'block rounded-lg border border-line bg-bg-raised p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[color-mix(in_oklch,var(--brand)_30%,var(--line))] hover:shadow-card';
const FIELD       = 'block w-full rounded-sm border border-line bg-bg px-3 py-2.5 text-sm text-ink focus:border-brand focus:outline-none';
const LABEL       = 'mb-1.5 block text-sm font-medium text-brand';

export default function ContactPage() {
  return (
    <BaseLayout title="Kontakt · Termin & Anfrage · GDK Service" description="Schnellster Weg: Anruf oder WhatsApp – verbindlicher Fixpreis schon am Telefon. Termine meist am gleichen Tag in Niederösterreich.">
      <SiteHeader active="contact" />

      <section className={PAGE_HERO} data-screen-label="Contact · Hero">
        <div className={WRAP}>
          <Crumbs items={[{ href: '/index.html', label: 'Start' }, { label: 'Kontakt' }]} />
          <Eyebrow>Termin &amp; Kontakt</Eyebrow>
          <h1 className="mt-3 max-w-[18ch] text-[clamp(36px,5vw,56px)]">Ein Anruf reicht.</h1>
          <p className="mt-4 max-w-[52ch] text-[17px] text-ink-soft">Persönlich erreichbar. Diskret. Mit verbindlichem Fixpreis schon am Telefon.</p>
        </div>
      </section>

      <section className={SECTION}>
        <div className={`${WRAP} grid grid-cols-[1fr_1.4fr] gap-10 max-[800px]:grid-cols-1`}>
          <div className="flex flex-col gap-3">
            <a href={PHONE_HREF} className={`${CONTACT_CARD} border-accent bg-accent-soft`}>
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-accent">📞 Direkt anrufen (empfohlen)</div>
              <h3 className="mt-2 text-2xl">{PHONE}</h3>
              <div className="mt-1.5 text-sm text-ink-soft">Schnellster Weg – meist Termin am gleichen Tag.</div>
            </a>
            <a href={WHATSAPP_HREF} className={CONTACT_CARD}>
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-wa">💬 WhatsApp</div>
              <h3 className="mt-2 text-xl">Foto schicken, Fixpreis bekommen</h3>
              <div className="mt-1.5 text-sm text-ink-soft">Ideal für Wespennester, Spuren, IKEA-Karton.</div>
            </a>
            <a href={EMAIL_HREF} className={CONTACT_CARD}>
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-ink-mute">✉ E-Mail</div>
              <h3 className="mt-2 break-all text-lg">{EMAIL}</h3>
            </a>
            <div className="rounded-lg border border-line bg-bg-panel p-6">
              <strong className="text-brand">Einsatzgebiet</strong>
              <p className="mt-1.5 text-sm text-ink-soft">Ganz Niederösterreich – Sitz: {ADDRESS}</p>
              <p className="mt-2.5 text-sm text-ink-soft">{HOURS}</p>
            </div>
          </div>

          <form className="rounded-lg border border-line bg-bg-raised p-8" action="mailto:gerhard@gdk-service.at" method="post" encType="text/plain">
            <Eyebrow>Unverbindlich anfragen</Eyebrow>
            <h2 className="mt-2 text-[clamp(24px,2.4vw,30px)]">Termin per Formular</h2>
            <p className="mt-1 text-sm text-ink-soft">Antwort meist innerhalb weniger Stunden – werktags.</p>
            <div className="mt-5 grid grid-cols-2 gap-4 max-[480px]:grid-cols-1">
              <div className="col-span-2">
                <label className={LABEL}>Vor- &amp; Nachname *</label>
                <input className={FIELD} name="name" required />
              </div>
              <div>
                <label className={LABEL}>Telefon</label>
                <input className={FIELD} name="phone" type="tel" />
              </div>
              <div>
                <label className={LABEL}>Leistung *</label>
                <select className={FIELD} name="leistung" defaultValue="Schädlingsbekämpfung">
                  <option>Schädlingsbekämpfung</option>
                  <option>Schädlingsbestimmung</option>
                  <option>Möbelmontage</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className={LABEL}>Adresse (Einsatzort)</label>
                <input className={FIELD} name="adresse" />
              </div>
              <div>
                <label className={LABEL}>Wunschtermin</label>
                <input className={FIELD} name="termin" type="date" />
              </div>
              <div>
                <label className={LABEL}>Zeitfenster</label>
                <select className={FIELD} name="fenster" defaultValue="">
                  <option value="">Bitte wählen…</option>
                  <option>06–10 Uhr</option>
                  <option>10–14 Uhr</option>
                  <option>14–18 Uhr</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className={LABEL}>Nachricht</label>
                <textarea className={`${FIELD} min-h-[120px]`} name="nachricht" placeholder="Was haben Sie beobachtet? Wo? Seit wann?"></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-[18px] text-base font-semibold text-accent-ink shadow-cta transition-[transform,box-shadow,background] duration-200 hover:-translate-y-px hover:bg-[color-mix(in_oklch,var(--accent)_92%,black)]"
            >
              Anfrage senden
            </button>
            <p className="mt-4 text-xs text-ink-mute">Mit Absenden erklären Sie sich mit der Verarbeitung Ihrer Daten zur Bearbeitung der Anfrage einverstanden.</p>
          </form>
        </div>
      </section>

      <SiteFooter />
      <MobileSticky />
      <script src="/chrome.js" />
    </BaseLayout>
  );
}
