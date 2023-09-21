import React, { useRef } from "react";
import Layout from "../Layout";


function PaymentsSection() {
  const paymentCodeRef = useRef(null);
  const paymentAmountRef = useRef(null);
  const paymentResultMessageRef = useRef(null);

  function onPayment() {
    const paymentCode = paymentCodeRef.current.value;
    const paymentAmount = paymentAmountRef.current.value;
    const paymentResultMessage = paymentResultMessageRef.current;

    if (paymentCode !== "" && paymentAmount !== "") {
      paymentResultMessage.textContent = "¡Pago exitoso!";
    } else {
      paymentResultMessage.textContent = "Error en el pago, datos inválidos";
    }
  }

  return (
    <Layout sidebarActiveLink="payments-section-link">
        <main id="main-section">
          <h2 id="main-section-title">PAGOS</h2>
          <div id="main-section-content">
            <div className="payments-container">
              <h3>Pago de cuentas y servicios</h3>
              <div className="payments-card">
                <div className="form-group">
                  <label htmlFor="amount" className="label">
                    Código de pago electrónico
                  </label>
                  <input type="text" id="payment-code" ref={paymentCodeRef} required="" />
                </div>
                <div className="form-group">
                  <label htmlFor="amount" className="label">
                    Monto a pagar
                  </label>
                  <input type="number" step="0.01" id="payment-amount" ref={paymentAmountRef} required="" />
                </div>
                <div className="form-group">
                  <button type="button" className="button" onClick={onPayment}>
                    Pagar
                  </button>
                </div>
              </div>
            </div>
            <div id="payment-result" ref={paymentResultMessageRef}></div>
          </div>
        </main>
    </Layout>
  );
}

export default PaymentsSection;
