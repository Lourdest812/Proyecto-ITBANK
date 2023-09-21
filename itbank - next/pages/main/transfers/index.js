import { FaTimes, FaUserPlus } from "react-icons/fa";
import React, { useState } from "react";
import Layout from "../Layout";


function TransfersSection() {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <Layout sidebarActiveLink="transfers-section-link">
        <div id="main-section">
            <h2 id="main-section-title">TRANSFERENCIAS</h2>
            <form action="#" className="transfers-form">
                {isActive && (
                  <div id="popup" className="popup-form active">
                    <FaTimes onClick={toggle}/>
                    <h2 className="transfers-titulo">Solicitud de Transferencia</h2>
                    <div className="transfers-form-group">
                        <label htmlFor="date">Fecha de transferencia:</label>
                        <input type="date" name="date" id="date" className="transfers-form-control" />
                    </div>
                    <div className="transfers-form-group">
                        <label htmlFor="monto">Monto:</label>
                        <input type="number" name="monto" id="monto" className="transfers-form-control" />
                    </div>
                    <div className="transfers-form-group">
                        <label htmlFor="motive">Motivos:</label>
                        <input type="text" name="motive" id="motive" className="transfers-form-control" />
                    </div>
                    <div className="transfers-form-group">
                        <label htmlFor="mail">Email:</label>
                        <input type="email" name="mail" id="mail" className="transfers-form-control" />
                    </div>
                    <div className="transfers-form-group">
                        <label htmlFor="phone-number">Teléfono:</label>
                        <input type="number" name="phone-number" id="phone-number" className="transfers-form-control" />
                    </div>
                    <button className="button" type="button" onClick={toggle}>Enviar</button>
                  </div>
                )}
            </form>
            <div>
              <h2 className="transfers-titulo">¿Qué necesitas hacer?</h2>
              <section className="transfers-options">
                  <button type="button" className="button" onClick={toggle}>Transferir a un alias, CBU o CVU</button>
                  <button className="button" type="button">Extraer efectivo</button>
                  <button className="button" type="button">Ingresar dinero</button>
              </section>
              <hr />
              <h2 className="transfers-titulo">Transferir a un contacto</h2>
              <section className="contactos">
                  <div className="contacto">
                  <a href="#"><button className="add button-contacto"><FaUserPlus/><p>Agregar contacto</p></button></a>
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
            </div>
        </div>
    </Layout>
  );
}

export default TransfersSection;




