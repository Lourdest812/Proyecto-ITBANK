// Al cargarse por primera vez la pagina se carga por default la sección de inicio:
document.addEventListener("DOMContentLoaded", renderHomeSection());

document.getElementById("home-section-link").addEventListener("click", () => {
    renderHomeSection();
});

function renderHomeSection(){
    const mainSectionTitle = document.getElementById("main-section-title");
    const mainSectionContent = document.getElementById("main-section-content");

    // Seteo de link activo:
    setMenuActiveLink("home-section-link");

    // Renderizado del contenido:
    mainSectionTitle.innerText = "INICIO";

    const username = localStorage.getItem("username");
    mainSectionContent.innerHTML = `
    <p class="home-user-welcome">
        ¡Te damos la bienvenida, ${capitalizeString(username)}!
    </p>
    <div class="home-user-welcome-img">
        <img src="../img/home_welcome.svg" alt="welcome-picture"></img>
    </div>  
    `
}

function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}