const projects = {
    omnis: {
        title: "Projeto Omnis",
        desc: "Website de seguros desenvolvido em Django, com cotação de seguros automática e organizado em módulos seguindo boas práticas de desenvolvimento.",
        img: "assets/img/projects/omnis_preview.png",
        link: "https://github.com/Roberto-Lourenco/django_projeto_omnis"
    },
    feedtoken: {
        title: "FeedToken Backend v1.0-beta",
        img: "assets/img/projects/fbtk_api_doc1_preview.png",
        desc: "Primeira versão estável da API backend do FeedToken, liderada por mim. Desenvolvemos mais de 40 endpoints, com integração de token blockchain, autenticação JWT e testes unitários.",
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
        modalDesc.textContent = project.desc;
        modalImg.src = project.img;
        modalLink.href = project.link;

        modal.style.display = "flex";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
