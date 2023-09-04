import React from "react";

function TransfersSection() {
  return (
    <main id="main-section">
    <h2 id="main-section-title">TRANSFERENCIAS</h2>
    <div id="main-section-content">
        <div className="container" id="blur">
        <form action="#" className="transfers-form">
            <div id="popup" className="popup-form">
            <h2 className="transfers-titulo">Solicitud de Transferencia</h2>
            <div className="form-group">
                <label htmlFor="date">Fecha de transferencia:
                <input type="date" name="date" id="date" className="form-control" />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="monto">Monto:
                <input type="number" name="monto" id="monto" className="form-control" />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="motive">Motivos:
                <input type="text" name="motive" id="motive" className="form-control" />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="mail">Email:
                <input type="email" name="mail" id="mail" className="form-control" />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="phone-number">Teléfono:
                <input type="number" name="phone-number" id="phone-number" className="form-control" />
                </label>
            </div>
            <button className="button" onClick={toggle}>Enviar</button>
            </div>
        </form>
        </div>
        <main className="cuerpo" id="blur">
        <h2>¿Qué necesitas hacer?</h2>
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
    </main>
  );
}

function toggle() {
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  var popup = document.getElementById('popup');
  popup.classList.toggle('active');
}

export default TransfersSection;
