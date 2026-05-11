// Mobile nav drawer toggle — only piece of client-side JS the site needs.
(function () {
  const toggle = document.getElementById('__nav_toggle');
  const drawer = document.getElementById('__nav_drawer');
  if (!toggle || !drawer) return;
  toggle.addEventListener('click', () => {
    const open = !drawer.hasAttribute('hidden');
    if (open) {
      drawer.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('is-open');
    } else {
      drawer.removeAttribute('hidden');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.classList.add('is-open');
    }
  });
})();
