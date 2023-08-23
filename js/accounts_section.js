document.getElementById("accounts-section-link").addEventListener("click", () => {
    renderAccountsSection();
});

function renderAccountsSection(){
    const mainSectionContent = document.getElementById("main-section-content");
    const homeSectionLink = document.getElementById("home-section-link");
    const accountsSectionLink = document.getElementById("accounts-section-link");
    const transfersSectionLink = document.getElementById("transfers-section-link");
    const paymentsSectionLink = document.getElementById("payments-section-link");

    // Seteo de link activo:
    homeSectionLink.classList.remove("active");
    accountsSectionLink.classList.add("active");
    transfersSectionLink.classList.remove("active");
    paymentsSectionLink.classList.remove("active");

    // Renderizado del contenido:
    mainSectionContent.innerHTML = "Cuentas"
}