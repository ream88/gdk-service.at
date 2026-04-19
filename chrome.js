// Shared chrome (header, footer, sticky mobile CTA) injected on every page.
// Pages call GDKChrome.mount({ activePage, direction }).

(function () {
  const PHONE = "0670 199 55 44";
  const PHONE_HREF = "tel:+436701995544";
  const WHATSAPP_HREF = "https://wa.me/436701995544";
  const EMAIL = "gerhard@gdk-service.at";
  const EMAIL_HREF = "mailto:gerhard@gdk-service.at";
  const ADDRESS = "Weidengasse 11, 3041 Siegersdorf";
  const HOURS = "Mo–Fr 8:00–17:00 · Notfälle nach Vereinbarung";
  const COMPANY = "Gerhard Klosterer e.U.";

  const LINKS = [
    { href: "index.html", label: "Start", key: "home" },
    { href: "schaedlingsbekaempfung.html", label: "Schädlingsbekämpfung", key: "pest" },
    { href: "moebelmontage.html", label: "Möbelmontage", key: "furniture" },
    { href: "einsatzgebiet.html", label: "Einsatzgebiet", key: "area" },
    { href: "ueber.html", label: "Über mich", key: "about" },
    { href: "faq.html", label: "FAQ", key: "faq" },
  ];

  function headerHTML(active, prefix) {
    const linksHTML = LINKS.map(l =>
      `<a href="${prefix}${l.href}" class="nav__link${active === l.key ? " is-active" : ""}">${l.label}</a>`
    ).join("");

    return `
    <header class="site-header">
      <div class="wrap site-header__inner">
        <a href="${prefix}index.html" class="logo" aria-label="GDK Service Startseite">
          <span class="logo__mark" aria-hidden="true">G</span>
          <span class="logo__text">
            <span class="logo__name">GDK Service</span>
            <span class="logo__sub">Klosterer · Niederösterreich</span>
          </span>
        </a>
        <nav class="nav" aria-label="Hauptnavigation">${linksHTML}</nav>
        <div class="site-header__cta">
          <a href="${PHONE_HREF}" class="btn btn-cta btn-sm" aria-label="Jetzt anrufen">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72c.13.96.38 1.9.72 2.79a2 2 0 0 1-.45 2.11L8.09 9.9a16 16 0 0 0 6 6l1.28-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.59 2.79.72A2 2 0 0 1 22 16.92z"/></svg>
            ${PHONE}
          </a>
          <button class="nav__toggle" aria-label="Menü öffnen" id="__nav_toggle" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div class="nav-drawer" id="__nav_drawer" hidden>
        ${LINKS.map(l => `<a href="${prefix}${l.href}" class="nav-drawer__link${active === l.key ? ' is-active' : ''}">${l.label}</a>`).join("")}
        <a href="${prefix}kontakt.html" class="btn btn-primary btn-xl" style="margin-top:16px;justify-content:center">Termin anfragen</a>
      </div>
    </header>`;
  }

  function footerHTML(prefix) {
    return `
    <footer class="site-footer">
      <div class="wrap">
        <div class="site-footer__grid">
          <div>
            <div class="logo" style="color:var(--dark-ink)">
              <span class="logo__mark logo__mark--dark" aria-hidden="true">G</span>
              <span class="logo__text">
                <span class="logo__name">GDK Service</span>
                <span class="logo__sub" style="opacity:.6">Klosterer · Niederösterreich</span>
              </span>
            </div>
            <p style="margin-top:20px;max-width:280px;opacity:.72;font-size:14px;line-height:1.6">
              Diskrete Schädlingsbekämpfung &amp; saubere Möbelmontage in Niederösterreich. Persönlich. Fix. Kompetent.
            </p>
          </div>
          <div>
            <h4 class="site-footer__h">Leistungen</h4>
            <ul class="site-footer__list">
              <li><a href="${prefix}schaedlingsbekaempfung.html">Schädlingsbekämpfung</a></li>
              <li><a href="${prefix}schaedlingsbekaempfung.html#wespen">Wespen</a></li>
              <li><a href="${prefix}schaedlingsbekaempfung.html#ameisen">Ameisen</a></li>
              <li><a href="${prefix}schaedlingsbekaempfung.html#bettwanzen">Bettwanzen</a></li>
              <li><a href="${prefix}schaedlingsbekaempfung.html#maeuse">Mäuse &amp; Ratten</a></li>
              <li><a href="${prefix}moebelmontage.html">Möbelmontage</a></li>
            </ul>
          </div>
          <div>
            <h4 class="site-footer__h">Direkt</h4>
            <ul class="site-footer__list">
              <li><a href="${PHONE_HREF}">${PHONE}</a></li>
              <li><a href="${EMAIL_HREF}">${EMAIL}</a></li>
              <li style="opacity:.7">${ADDRESS}</li>
              <li style="opacity:.55;margin-top:8px">${HOURS}</li>
            </ul>
          </div>
          <div>
            <h4 class="site-footer__h">Unternehmen</h4>
            <ul class="site-footer__list">
              <li><a href="${prefix}ueber.html">Über mich</a></li>
              <li><a href="${prefix}kontakt.html">Termin &amp; Kontakt</a></li>
              <li><a href="${prefix}faq.html">FAQ</a></li>
              <li><a href="${prefix}hausverwaltungen.html">Hausverwaltungen</a></li>
              <li><a href="${prefix}impressum.html">Impressum</a></li>
            </ul>
          </div>
        </div>
        <div class="site-footer__bottom">
          © ${new Date().getFullYear()} ${COMPANY} · UID ATU82992549 · Schädlingsbekämpfung &amp; Möbelmontage in Niederösterreich
        </div>
      </div>
    </footer>`;
  }

  function stickyHTML() {
    return `
    <div class="mobile-cta">
      <a href="${PHONE_HREF}" class="btn btn-cta btn-xl" style="flex:1;justify-content:center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72c.13.96.38 1.9.72 2.79a2 2 0 0 1-.45 2.11L8.09 9.9a16 16 0 0 0 6 6l1.28-1.27a2 2 0 0 1 2.11-.45c.89.34 1.83.59 2.79.72A2 2 0 0 1 22 16.92z"/></svg>
        Anrufen
      </a>
      <a href="${WHATSAPP_HREF}" target="_blank" rel="noreferrer" class="btn btn-wa btn-xl" style="flex:1;justify-content:center">WhatsApp</a>
    </div>`;
  }

  function mount(opts) {
    const activePage = (opts && opts.activePage) || "home";
    const prefix = (opts && opts.prefix) || "";
    document.body.insertAdjacentHTML("afterbegin", headerHTML(activePage, prefix));
    document.body.insertAdjacentHTML("beforeend", footerHTML(prefix));
    document.body.insertAdjacentHTML("beforeend", stickyHTML());

    const toggle = document.getElementById("__nav_toggle");
    const drawer = document.getElementById("__nav_drawer");
    if (toggle && drawer) {
      toggle.addEventListener("click", () => {
        const open = drawer.hasAttribute("hidden") ? false : true;
        if (open) { drawer.setAttribute("hidden", ""); toggle.setAttribute("aria-expanded", "false"); toggle.classList.remove("is-open"); }
        else { drawer.removeAttribute("hidden"); toggle.setAttribute("aria-expanded", "true"); toggle.classList.add("is-open"); }
      });
    }
  }

  window.GDKChrome = { mount, PHONE, PHONE_HREF, WHATSAPP_HREF, EMAIL, EMAIL_HREF, ADDRESS, HOURS, COMPANY };
})();
