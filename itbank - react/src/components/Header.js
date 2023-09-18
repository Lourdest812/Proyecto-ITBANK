import React from "react";
import logo from '../assets/img/bxs-bank.svg'

function Header(){
    return(
        <header>
            <div className="logo">
                {/*Imagen del logo va acá*/}
                <a href="/inicio">
                    <img src={logo} alt="llogo" />
                </a>
                <a href="/inicio">
                    <h2 className="nombre-banco">ITBANK</h2>
                </a>
            </div>
        </header>
    );
}

export default Header;