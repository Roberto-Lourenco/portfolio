/*
  ========== Scripts Página Acadêmica ==========
  Sumário
    - Manipula o sub-menu da página.
    - Ao usuario clicar em uma opção do sub-menu, o evento remove todos as classes .active dentro dos parametros de todos os {.academic menu a}.
    - Logo após, ele adiciona a classe .active no alvo clicado e também adiciona ao href do link.
 */
document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll(".academic-menu a");
  const contents = document.querySelectorAll(".academic-content");

  menuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // remover ativo
      menuLinks.forEach(l => l.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      // ativar atual
      link.classList.add("active");
      const target = document.querySelector(link.getAttribute("href"));
      target.classList.add("active");
    });
  });
});
