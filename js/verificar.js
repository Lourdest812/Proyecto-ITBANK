//Validación login

//Las siguientes constantes toman los elementos de los input del form de inicio de sesión
const user = document.getElementById('user');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('login-form');
const errorUser = document.getElementById('user-error')
const errorMail = document.getElementById('email-error');
const errorPassword = document.getElementById('password-error');

//Cuando se presiona el botón de tipo submit, verifica las condiciones
//En caso de que haya alguna condición de error, mensajes de error serán mostrados al usuario,
//caso contrario, quedarán ocultos

form.addEventListener('submit', (e)=>{

    let valid = true;

    if (user.value.length < 5) {
        user.style.border = '1px solid red';
        errorUser.style.display = 'block';
        errorUser.textContent = 'Su nombre de usuario debe contener al menos 5 caracteres';
        user.focus();
        valid = false;
    } else {
        user.style.borderBottomColor = "rgb(251, 137, 7)";
        errorUser.style.display = "none";
    }

    if (email.value.length < 9) {
        email.style.border = '1px solid red';
        errorMail.style.display = 'block';
        errorMail.textContent = "Su mail debe contener al menos 9 caracteres";
        email.focus();
        valid = false;
    } else if (encontrarArroba()) {
        email.style.border = '1px solid red';
        errorMail.style.display = 'block';
        errorMail.textContent = "Falta el '@' en su mail o tiene alguno de más";
        email.focus();
        valid = false;
    } else {
        email.style.borderBottomColor = "rgb(251, 137, 7)";
        errorMail.style.display = "none";
    }

    if (password.value.length < 6) {
        password.style.border = '1px solid red';
        errorPassword.style.display = 'block';
        errorPassword.textContent = "Su contraseña debe contener al menos 6 caracteres";
        password.focus();
        valid = false;
    } else {
        password.style.borderBottomColor = "rgb(251, 137, 7)";
        errorPassword.style.display = "none";
    }

    if (!valid) {
        e.preventDefault();
    }
});

var encontrarArroba = function() {
    var cont = email.value.split('').filter(char => char === '@').length;
    console.log(cont);
    return cont !== 1;
};
