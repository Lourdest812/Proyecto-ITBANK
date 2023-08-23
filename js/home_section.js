// Al cargarse por primera vez la pagina se carga por default la sección de inicio:
document.addEventListener("DOMContentLoaded", renderHomeSection());

document.getElementById("home-section-link").addEventListener("click", () => {
    renderHomeSection();
});

function renderHomeSection(){
    const mainSectionContent = document.getElementById("main-section-content");
    const homeSectionLink = document.getElementById("home-section-link");
    const accountsSectionLink = document.getElementById("accounts-section-link");
    const transfersSectionLink = document.getElementById("transfers-section-link");
    const paymentsSectionLink = document.getElementById("payments-section-link");

    // Seteo de link activo:
    homeSectionLink.classList.add("active");
    accountsSectionLink.classList.remove("active");
    transfersSectionLink.classList.remove("active");
    paymentsSectionLink.classList.remove("active");

    // Renderizado del contenido:
    const username = localStorage.getItem("username");

    mainSectionContent.innerHTML = `¡Bienvenido, ${capitalizeString(username)}!`
}

function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}