import React from "react";
import '../css/mainPage.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer =()=>{
    return(
        <div className="footer">
            <div className="footer-section-padding">
                <div className="footer-links">
                    <div className="footer-links-div">
                        <h4>Negocios</h4>
                        <a href="#"><p>Empleador</p></a>
                        <a href="#"><p>Clientes</p></a>
                        <a href="#"><p>Seguros</p></a>
                    </div>
                    <div className="footer-links-div">
                        <h4>Recursos</h4>
                        <a href="#"><p>Empleador</p></a>
                        <a href="#"><p>Clientes</p></a>
                        <a href="#"><p>Seguros</p></a>
                    </div>
                    <div className="footer-links-div">
                        <h4>Partners</h4>
                        <a href="#"><p>ITBA</p></a>
                        <a href="#"><p></p></a>
                        <a href="#"><p></p></a>
                        <a href="#"><p></p></a>
                    </div>
                    <div className="footer-links-div">
                        <h4>Banco</h4>
                        <a href="#"><p>Sobre nosotros</p></a>
                        <a href="#"><p>Nuestra historia</p></a>
                        <a href="#"><p></p></a>
                        <a href="#"><p></p></a>
                    </div>
                    
                </div>
                <div className="footer-links-div">
                        <h4>Redes sociales</h4>
                        <div className="social-media">
                            <p><FaFacebook className="media-icon"/></p>
                            <p><FaTwitter className="media-icon"/></p>
                            <p><FaInstagram className="media-icon"/></p>
                            <p><FaLinkedin className="media-icon"/></p>
                        </div>
                    </div>
                <hr className="division"/>
                <div className="footer-below">
                    <div className="footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Derechos reservados
                        </p>
                    </div>
                    <div className="footer-below-links">
                        <a href="#"><div><p>Términos y condiciones</p></div></a>
                        <a href="#"><div><p>Privacidad</p></div></a>
                        <a href="#"><div><p>Seguridad</p></div></a>
                        <a href="#"><div><p>Cookies</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;