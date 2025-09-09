/*
  ========== Scripts Projetos & Modal Portfólio ==========
  Sumário
    - Objeto com dados dos projetos (título, desc, imagem, link).
    - Abre o modal ao clicar em um card do portfólio.
    - Renderiza dinamicamente os dados do projeto no modal.
    - Fecha o modal ao clicar no botão, fora do modal ou no overlay.
*/

const projects = {
    omnis: {
        title: "Projeto Omnis",
        desc: "Projeto pessoal de um website de seguros com cotação rápida que calcula o preço da mensalidade com base nos dados informados, e organizado em módulos MVT."+
        "<br><strong>Tecnologias utilizadas</strong>: Django",
        img: "assets/img/projects/omnis_preview.png",
        link: "https://github.com/Roberto-Lourenco/django_projeto_omnis"
    },
    feedtoken: {
        title: "Projeto Acadêmico: FeedToken",
        img: "assets/img/projects/fbtk_api_doc1_preview.png",
        desc: "Participei do desenvolvimento da API backend do FeedToken, uma plataforma B2B2C com recompensa de tokens a usuarios que completarem missões."+
        "<br>Desenvolvemos mais de 30 endpoints, com integração de token blockchain, autenticação JWT e testes unitários."+
        "<br><strong>Tecnologias utilizadas</strong>: Django, React e Solid.",
        link: "https://github.com/TransferoNovaIguacu/feedback-company-backend"
    },

};

const modal = document.getElementById("portfolio-modal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");
const modalLink = document.getElementById("modal-link");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".portfolio-card").forEach(card => {
    card.addEventListener("click", () => {
        const projectKey = card.getAttribute("data-project");
        const project = projects[projectKey];

        modalTitle.textContent = project.title;
        modalDesc.innerHTML = project.desc;
        modalImg.src = project.img;
        modalLink.href = project.link;

        modal.style.display = "flex";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Se clicar no overlay (modal) ele seta para display none.
window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
