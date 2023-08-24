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
    mainSectionContent.innerHTML = `
    
    <h2>¿Qué necesitas hacer?</h2>
    <section class="transfers-options">
        <div class="transfers-option button-class">
            <a href="#"><button class="button">Transferir a un alias, CBU o CVU</button></a>
        </div>
        <div class="transfers-option button-class">
            <a href="#"><button class="button">Extraer efectivo</button></a>
        </div>
        <div class="transfers-option button-class">
            <a href="#"><button class="button">Ingresar dinero</button></a>
        </div>
    </section>
    <hr>
    <h2 class="transfers-titulo">Transferir a un contacto</h2>
    <section class="contactos">
        <div class="contacto">
            <a href="#"><button class="add button-contacto"><i class="fa-solid fa-user-plus"></i><p>Agregar contacto</p></button></a>
        </div>
        <div class="contacto">
            <a href="#"><button class="button-contacto"><p>Contacto 1</p></button></a>
        </div>
        <div class="contacto">
            <a href="#"><button class="button-contacto"><p>Contacto 2</p></button></a>
        </div>
        <div class="contacto">
            <a href="#"><button class="button-contacto"><p>Contacto 3</p></button></a>
        </div>
        <div class="contacto">
            <a href="#"><button class="button-contacto"><p>Contacto 4</p></button></a>
        </div>
        <div class="contacto">
            <a href="#"><button class="see-more button-contacto"><p>Ver más</p></button></a>
        </div>
    </section>

    `;
}

