// script.js
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
