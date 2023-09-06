import React, { useState } from "react";
import Button from "../components/Button";
import { FaUser, FaEnvelope, FaLock} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'
import '../css/mainPage.css'

function Form(){
  const navigate = useNavigate();
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  const handleClick = () => {
    navigate('./registro');
  };

  const encontrarArroba = function() {
    const cont = email.split('').filter(char => char === '@').length;
    console.log(cont);
    return cont !== 1;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    console.log(Object.keys(errors).length);

    if(Object.keys(errors).length===0){
      alert('Ingreso exitoso');
      console.log('Ingreso exitoso');
      navigate('./inicio');
    }
  }

  const validate = () => {
    const error = {};

    if(!user){
      error.user = "Ingrese su nombre de usuario";
      console.log("Ingrese su nombre de usuario");
    } else if(user.length < 5){
      error.user = "Su nombre de usuario debe contener al menos 5 caracteres";
      console.log("Su nombre de usuario debe contener al menos 5 caracteres");
    }

    if(!email){
      error.email = "Ingrese su dirección de mail";
      console.log("Ingrese su dirección de mail");
    } else if(encontrarArroba()){
      error.email = "Falta el arroba en su mail";
      console.log("Falta el arroba en su mail");
    }

    if(!password){
      error.password = "Ingrese su contraseña";
      console.log("Ingrese su contraseña");
    } else if(password.length < 6){
      error.password = "Su contraseña debe contener al menos 6 caracteres";
      console.log("Su contraseña debe contener al menos 6 caracteres");
    }
    
    console.log('Validation logic executed');
    return error;
  }

  return (
    <div className="container">
      <form
        id="login-form"
        action="./test.js"
        name="login-form"
        method="POST"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="form-gr">
          <label htmlFor="user">
            <FaUser className="icon"/>
            <input
              type="text"
              name="user"
              id="user"
              className="form-c"
              placeholder="Usuario"
              onChange={(e) => setUser(e.target.value)}
            />
            {errors.user && <div className="error">{errors.user}</div>}
          </label>
        </div>
        <div className="form-gr">
          <label htmlFor="email">
            <FaEnvelope className="icon"/>
            <input
              type="email"
              name="email"
              id="email"
              className="form-c"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </label>
        </div>
        <div className="form-gr">
          <label htmlFor="password">
            <FaLock className="icon"/>
            <input
              type="password"
              name="password"
              id="password"
              className="form-c"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
             {errors.password && <div className="error">{errors.password}</div>}
          </label>
        </div>
        <div className="olvido">
                    <a href="./registro"><p>¿Olvidaste tu contraseña?</p></a>
        </div>
        <Button type="submit" action="Ingresar"></Button>
        <div className="register">
                <p>¿No tenés cuenta?</p>
                    <div className="button-class">
                        <a><button className="button" onClick={handleClick}>Registrate</button></a>
                    </div>
            </div>
      </form>
    </div>
  );
}

export default Form;