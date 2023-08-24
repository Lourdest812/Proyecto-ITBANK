document.getElementById("transfers-section-link").addEventListener("click", () => {
    renderTransfersSection();
});

function renderTransfersSection(){
    const mainSectionTitle = document.getElementById("main-section-title");
    const mainSectionContent = document.getElementById("main-section-content");

    // Seteo de link activo:
    setMenuActiveLink("transfers-section-link");

    // Renderizado del contenido:
    mainSectionTitle.innerText = "TRANSFERENCIAS"
    mainSectionContent.innerHTML = "Transferencias";
}