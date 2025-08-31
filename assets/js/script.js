// Cria um rastro de glow effect ao mover o mouse sobre o site
// Utiliza o evento mousemove pra receber a posição X & Y do mouse e substitui o translate com o valor
const glow = document.querySelector(".mouse-glow");
document.addEventListener("mousemove", (e) => {
  glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
});

// Menu mobile
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.nav-toggle');
  const mobile = document.getElementById('mobile-menu');

  if (!btn || !mobile) return "Error ao carregar o Menu mobile";

  function openMenu() {
    btn.classList.add('open');
    mobile.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    mobile.setAttribute('aria-hidden', 'false');
    btn.setAttribute('aria-label', 'Fechar menu');
  }

  function closeMenu() {
    btn.classList.remove('open');
    mobile.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    mobile.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-label', 'Abrir menu');
  }

  btn.addEventListener('click', function (e) {
    if (btn.classList.contains('open')) closeMenu();
    else openMenu();
  });

  // fechar ao clicar em um link do menu mobile
  mobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => closeMenu());
  });

  // fechar ao pressionar Esc
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') closeMenu();
  });

  // fechar ao clicar fora do header
  document.addEventListener('click', (ev) => {
    if (!ev.target.closest('#header_top') && mobile.classList.contains('open')) {
      closeMenu();
    }
  });
});
