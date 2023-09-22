import { useRef, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Layout from "../../Layout";


function PaymentsSection() {

    const router = useRouter();
    const paymentId = parseInt(router.query.paymentId);

    const [payment, setPayment] = useState([])
    
    useEffect(() => {
        getPayment(paymentId, setPayment)
    }, [])

    const paymentAmountRef = useRef(null);
    const paymentResultMessageRef = useRef(null);

    function onPayment() {
        const paymentAmount = paymentAmountRef.current.value;
        const paymentResultMessage = paymentResultMessageRef.current;

        if (paymentAmount !== "") {
          paymentResultMessage.textContent = "¡Pago exitoso!";
        } else {
          paymentResultMessage.textContent = "Error en el pago, monto inválido";
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
                    <div className="payment-company">{payment.company}</div>
                    <div className="payment-expiration">Vencimiento: {payment.expiration}</div>
                    <div className="payment-amount">Monto: ${payment.amount}</div>
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


function getPayment(paymentId, setPayment) {
  fetch("/statics/payments.json")
  .then(response => {
      return response.json()
  })
  .then(data => {
      const payment = data.find(payment => payment.id === paymentId)
      setPayment(payment)
  })
}
