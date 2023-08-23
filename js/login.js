document.getElementById("login-form").addEventListener("submit", function() {
    // Obtener el valor del campo de usuario
    const username = document.getElementById("user").value;

    // Guardar el nombre del usuario en el Local Storage
    localStorage.setItem("username", username);
})