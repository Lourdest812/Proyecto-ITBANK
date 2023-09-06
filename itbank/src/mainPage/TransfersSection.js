import React from "react";
import '../css/mainPage.css'

function TransfersSection() {
  return (
    <div className="content">
        <div className="transfers-container" id="blur">
        <h2 id="main-section-title" className="transfers-titulo">TRANSFERENCIAS</h2>
        <form action="#" className="transfers-form">
            <div id="popup" className="popup-form">
            <h2 className="transfers-titulo">Solicitud de Transferencia</h2>
            <div className="transfers-form-group">
                <label htmlFor="date">Fecha de transferencia:
                <input type="date" name="date" id="date" className="transfers-form-control" />
                </label>
            </div>
            <div className="transfers-form-group">
                <label htmlFor="monto">Monto:
                <input type="number" name="monto" id="monto" className="transfers-form-control" />
                </label>
            </div>
            <div className="transfers-form-group">
                <label htmlFor="motive">Motivos:
                <input type="text" name="motive" id="motive" className="transfers-form-control" />
                </label>
            </div>
            <div className="transfers-form-group">
                <label htmlFor="mail">Email:
                <input type="email" name="mail" id="mail" className="transfers-form-control" />
                </label>
            </div>
            <div className="transfers-form-group">
                <label htmlFor="phone-number">Teléfono:
                <input type="number" name="phone-number" id="phone-number" className="transfers-form-control" />
                </label>
            </div>
            <button className="button" onClick={toggle}>Enviar</button>
            </div>
        </form>
        </div>
        <main className="cuerpo" id="blur">
        <h2 className="transfers-titulo">¿Qué necesitas hacer?</h2>
        <section className="transfers-options">
            <div className="transfers-option button-class">
            <a href="#"><button className="button" onClick={toggle}>Transferir a un alias, CBU o CVU</button></a>
            </div>
            <div className="transfers-option button-class">
            <a href="#"><button className="button">Extraer efectivo</button></a>
            </div>
            <div className="transfers-option button-class">
            <a href="#"><button className="button">Ingresar dinero</button></a>
            </div>
        </section>
        <hr />
        <h2 className="transfers-titulo">Transferir a un contacto</h2>
        <section className="contactos">
            <div className="contacto">
            <a href="#"><button className="add button-contacto"><i className="fa-solid fa-user-plus"></i><p>Agregar contacto</p></button></a>
            </div>
            <div className="contacto">
            <a href="#"><button className="button-contacto"><p>Contacto 1</p></button></a>
            </div>
            <div className="contacto">
            <a href="#"><button className="button-contacto"><p>Contacto 2</p></button></a>
            </div>
            <div className="contacto">
            <a href="#"><button className="button-contacto"><p>Contacto 3</p></button></a>
            </div>
            <div className="contacto">
            <a href="#"><button className="button-contacto"><p>Contacto 4</p></button></a>
            </div>
            <div className="contacto">
            <a href="#"><button className="see-more button-contacto"><p>Ver más</p></button></a>
            </div>
        </section>
        </main>
        </div>
  );
}

function toggle() {
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  var popup = document.getElementById('popup');
  popup.classList.toggle('active');
}

export default TransfersSection;
