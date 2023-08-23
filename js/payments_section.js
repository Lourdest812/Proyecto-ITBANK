document.getElementById("payments-section-link").addEventListener("click", () => {
    renderPaymentsSection();
});

function renderPaymentsSection(){
    const mainSectionContent = document.getElementById("main-section-content");
    const homeSectionLink = document.getElementById("home-section-link");
    const accountsSectionLink = document.getElementById("accounts-section-link");
    const transfersSectionLink = document.getElementById("transfers-section-link");
    const paymentsSectionLink = document.getElementById("payments-section-link");

    // Seteo de link activo:
    accountsSectionLink.classList.remove("active");
    homeSectionLink.classList.remove("active");
    transfersSectionLink.classList.remove("active");
    paymentsSectionLink.classList.add("active");

    // Renderizado del contenido:
    mainSectionContent.innerHTML = "Pagos";
}