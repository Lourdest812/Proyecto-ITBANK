document.getElementById("transfers-section-link").addEventListener("click", () => {
    renderTransfersSection();
});

function renderTransfersSection(){
    const mainSectionContent = document.getElementById("main-section-content");
    const homeSectionLink = document.getElementById("home-section-link");
    const accountsSectionLink = document.getElementById("accounts-section-link");
    const transfersSectionLink = document.getElementById("transfers-section-link");
    const paymentsSectionLink = document.getElementById("payments-section-link");

    // Seteo de link activo:
    accountsSectionLink.classList.remove("active");
    homeSectionLink.classList.remove("active");
    transfersSectionLink.classList.add("active");
    paymentsSectionLink.classList.remove("active");

    // Renderizado del contenido:
    mainSectionContent.innerHTML = "Transferencias";
}