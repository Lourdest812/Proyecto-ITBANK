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
    <div class="container" id="blur>
    <form action="#" class="transfers-form">
        <div id="popup" class="popup-form">
            <h2 class="transfers-titulo">Solicitud de Transferencia</h2>
            <div class="form-group">
                <label for="date">Fecha de transferencia: 
                    <input type="date" name="date" id="date" class="form-control">
                </label>
            </div>
            <div class="form-group">
                <label for="phone-number">Monto: 
                    <input type="number" name="monto" id="monto" class="form-control">
                </label>
            </div>
            <div class="form-group">
                <label for="motive">Motivos:
                    <input type="text" name="motive" id="motive" class="form-control">
                </label>
            </div>
            <div class="form-group">
                <label for="mail">Email: 
                    <input type="email" name="mail" id="mail" class="form-control">
                </label>
            </div>
            <div class="form-group">
                <label for="phone-number">Teléfono: 
                    <input type="number" name="phone-number" id="phone-number" class="form-control">
                </label>
            </div>
            <a href="#" onclick="toggle()"><button class="button"><p>Enviar</p></button></a>
        </div>
    </form>
    </div>
    <main class="cuerpo" id="blur">
    <h2>¿Qué necesitas hacer?</h2>
    <section class="transfers-options">
        <div class="transfers-option button-class">
            <a href="#"><button class="button" onclick="toggle()">Transferir a un alias, CBU o CVU</button></a>
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
    </main>

    `;
}

function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

