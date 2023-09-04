import React from "react";
import loginPicture from '../assets/img/undraw_login_re_4vu2.svg'
import '../css/login.css'

function LoginPicture(){
    return (
      <div className="login-picture">
        <img src={loginPicture} alt="login-picture" />
      </div>
    );
}

export default LoginPicture;