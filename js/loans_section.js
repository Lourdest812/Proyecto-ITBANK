document.getElementById("loans-section-link").addEventListener("click", () => {
    renderLoansSection();
});

function renderLoansSection(){
    const mainSectionTitle = document.getElementById("main-section-title");
    const mainSectionContent = document.getElementById("main-section-content");

    // Seteo de link activo:
    setMenuActiveLink("loans-section-link");

    // Renderizado del contenido:
    mainSectionTitle.innerText = "PRESTAMOS"
    mainSectionContent.innerHTML = "Simular prestamo";
}