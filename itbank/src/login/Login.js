import React from 'react'
import Logo from '../assets/img/bxs-bank.svg'
import Form from './Form';
import '../css/login.css'
import '../css/mainPage.css'
import LoginPicture from './LoginPicture';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Login(){
  return (
    <>
    <Header/>
          <div className="container">
            
            <h1>Inicio de sesión</h1>
            <LoginPicture/>
            <Form />
            </div>
    <Footer/>
    </>
  );
}

export default Login;


