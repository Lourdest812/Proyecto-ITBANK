import React from 'react'
import Logo from '../assets/img/bxs-bank.svg'
import Form from './Form';
import '../css/login.css'
import LoginPicture from './LoginPicture';

function Login(){
  return (
          <div className="container">
          <h1>Inicio de sesión</h1>
          <LoginPicture/>
          <Form />
          </div>
  );
}

export default Login;


