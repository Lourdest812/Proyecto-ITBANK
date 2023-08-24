document.getElementById("payments-section-link").addEventListener("click", () => {
    renderPaymentsSection();
});

function renderPaymentsSection(){
    const mainSectionTitle = document.getElementById("main-section-title");
    const mainSectionContent = document.getElementById("main-section-content");

    // Seteo de link activo:
    setMenuActiveLink("payments-section-link");

    // Renderizado del contenido:
    mainSectionTitle.innerText = "PAGOS"
    mainSectionContent.innerHTML = "Pagos";
}