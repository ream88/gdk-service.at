// GDK Service — host for tweaks + shared helpers
(function () {
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "color": "moss",
    "type": "serif",
    "hero": "split",
    "photos": "placeholder",
    "density": "normal"
  }/*EDITMODE-END*/;

  function applyTweaks(state) {
    const b = document.body;
    b.dataset.color = state.color || "moss";
    b.dataset.type = state.type || "serif";
    b.dataset.hero = state.hero || "split";
    b.dataset.photos = state.photos || "placeholder";
    b.dataset.density = state.density || "normal";
  }

  const stored = JSON.parse(localStorage.getItem("gdk_tweaks") || "null");
  const state = Object.assign({}, TWEAK_DEFAULTS, stored || {});
  applyTweaks(state);

  let tweaksEnabled = false;

  function buildPanel() {
    if (document.getElementById("__tweaks")) return;
    const el = document.createElement("div");
    el.id = "__tweaks";
    el.className = "tweaks";
    el.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <strong style="font-family:var(--f-display);color:var(--brand);font-size:15px">Tweaks</strong>
        <button id="__tweaks_close" style="color:var(--ink-mute);font-size:18px;line-height:1">×</button>
      </div>
      ${group("Farbe", "color", [["moss","Moos"],["clay","Ton"],["cobalt","Kobalt"]])}
      ${group("Schrift", "type", [["serif","Fraunces"],["editorial","Editorial"],["grotesk","Grotesk"]])}
      ${group("Hero", "hero", [["split","Split"],["stacked","Stack"],["poster","Poster"]])}
      ${group("Fotos", "photos", [["placeholder","Platzhalter"],["off","Aus"],["on","Echt*"]])}
      ${group("Dichte", "density", [["compact","Kompakt"],["normal","Normal"],["airy","Luftig"]])}
      <p style="font-size:11px;color:var(--ink-mute);margin-top:8px;line-height:1.4">
        * „Echt“ fällt auf Platzhalter zurück, solange keine Fotos hochgeladen sind.
      </p>
    `;
    document.body.appendChild(el);

    function group(label, key, opts) {
      return `<h4>${label}</h4><div class="row" data-key="${key}">${opts.map(([v, l]) =>
        `<button class="opt" data-val="${v}" aria-pressed="${state[key] === v}">${l}</button>`
      ).join("")}</div>`;
    }

    el.addEventListener("click", (e) => {
      const b = e.target.closest(".opt");
      if (b) {
        const key = b.parentElement.dataset.key;
        const val = b.dataset.val;
        state[key] = val;
        applyTweaks(state);
        localStorage.setItem("gdk_tweaks", JSON.stringify(state));
        try {
          window.parent.postMessage({type:'__edit_mode_set_keys', edits:{ [key]: val }}, '*');
        } catch(_) {}
        el.querySelectorAll(`.row[data-key="${key}"] .opt`).forEach(x => {
          x.setAttribute("aria-pressed", x.dataset.val === val);
        });
      }
      if (e.target.id === "__tweaks_close") el.classList.remove("open");
    });
  }

  window.addEventListener("message", (e) => {
    if (!e.data || typeof e.data !== "object") return;
    if (e.data.type === "__activate_edit_mode") {
      tweaksEnabled = true;
      buildPanel();
      document.getElementById("__tweaks").classList.add("open");
    }
    if (e.data.type === "__deactivate_edit_mode") {
      const p = document.getElementById("__tweaks");
      if (p) p.classList.remove("open");
    }
  });

  try {
    window.parent.postMessage({type: '__edit_mode_available'}, '*');
  } catch(_) {}

  // Expose for pages
  window.GDK = { state, applyTweaks };
})();

// Fade-in on scroll
(function () {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("fade-up"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));
  });
})();
