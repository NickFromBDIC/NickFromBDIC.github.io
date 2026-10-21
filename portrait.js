(() => {
  const portrait = document.querySelector('.portrait');
  if (!portrait) return;

  const illustration = portrait.querySelector('.portrait-illustration');
  const toggle = portrait.querySelector('.portrait-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false;

  function updateMotion() {
    portrait.dataset.animated = String(!reducedMotion.matches);
    toggle.hidden = reducedMotion.matches;
  }

  function enableAnimation() {
    if (!illustration.naturalWidth) return;
    updateMotion();
    reducedMotion.addEventListener('change', updateMotion);
    toggle.addEventListener('click', () => {
      paused = !paused;
      portrait.dataset.paused = String(paused);
      const label = paused ? 'Resume portrait animation' : 'Pause portrait animation';
      toggle.setAttribute('aria-label', label);
      toggle.title = label;
    });
  }

  if (illustration.complete) enableAnimation();
  else illustration.addEventListener('load', enableAnimation, { once: true });
})();
