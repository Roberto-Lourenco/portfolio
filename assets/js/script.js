/*
  ========== Scripts Página Layout Geral ==========
  Sumário
    - Cria efeito de rastro (glow) que segue o mouse pela tela
    - Implementa o menu mobile com acessibilidade (aria-*)
      - Abre e fecha o menu ao clicar no botão
      - Fecha ao clicar em um link do menu
      - Fecha ao pressionar a tecla Esc
      - Fecha ao clicar fora do header
*/

// ========== Glow Effect que segue o mouse ==========
const glow = document.querySelector(".mouse-glow");

// 1 - Evento que captura a posição do mouse (X e Y) em tempo real
document.addEventListener("mousemove", (e) => {
  // 2 - Atualiza a posição do .mouse-glow usando CSS transform
  //     O segundo translate (-50%, -50%) centraliza o glow no cursor
  glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
});


// ========== Menu Mobile ==========
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.nav-toggle');
  const mobile = document.getElementById('mobile-menu');

  // 3 - Early Return - Valida se os elementos existem no DOM
  if (!btn || !mobile) return "Erro ao carregar o Menu mobile";

  // --- Funções de controle do menu ---

  // 4 - Abre o menu adicionando classes e atributos ARIA
  function openMenu() {
    btn.classList.add('open');
    mobile.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    mobile.setAttribute('aria-hidden', 'false');
    btn.setAttribute('aria-label', 'Fechar menu');
  }

  // 5 - Fecha o menu removendo classes e atributos ARIA
  function closeMenu() {
    btn.classList.remove('open');
    mobile.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    mobile.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-label', 'Abrir menu');
  }

  // --- Eventos que controlam o menu ---

  // 6 - Clique no botão alterna entre abrir e fechar
  btn.addEventListener('click', function () {
    if (btn.classList.contains('open')) closeMenu();
    else openMenu();
  });

  // 7 - Fecha ao clicar em qualquer link dentro do menu
  mobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => closeMenu());
  });

  // 8 - Fecha ao pressionar a tecla "Esc"
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') closeMenu();
  });

  // 9 - Fecha ao clicar fora do menu (Quando tiver aberto)
  document.addEventListener('click', (ev) => {
    if (!ev.target.closest('#header_top') && mobile.classList.contains('open')) {
      closeMenu();
    }
  });
});
