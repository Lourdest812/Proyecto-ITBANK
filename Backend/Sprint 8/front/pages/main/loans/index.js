import Layout from "../Layout";
import Link from "next/link";
import { useEffect, useState } from "react";

function LoansSection() {
  const [client, setClient] = useState("");  
  const [loans, setLoans] = useState([]);
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [startDate, setStartDate] = useState("");
  const [loanType, setLoanType] = useState("");

  function getLoans() {
    const userData = JSON.parse(sessionStorage.getItem('userData'))
    const credentials = btoa(`${userData.username}:${userData.password}`)
    fetch(
        `http://localhost:8000/api/loans/?cliente=${userData.id}`,
        {
            headers: {
                'Authorization': `Basic ${credentials}`
            }
        }
    )
    .then(response => {
        return response.json()
    })
    .then(data => {
        setLoans(data)
    })
}

useEffect(() => {
    getLoans()
}, [])

  const handleCalculate = () => {
    if (loanAmount && interestRate && loanTerm) {
      const monthlyInterestRate = interestRate / 12;
      const monthlyPaymentValue = (
        (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -loanTerm))
      ).toFixed(2);

      setMonthlyPayment(`$${monthlyPaymentValue}`);
    } else {
      setMonthlyPayment("Error en el cálculo, datos incompletos");
    }
  };

  const handleLoanRequest = () => {
    // Crear un objeto con los datos del préstamo
    const userData = JSON.parse(sessionStorage.getItem('userData'))
    const credentials = btoa(`${userData.username}:${userData.password}`)
    const loanData = {
      cliente: client,
      monto_aprobado: loanAmount,
      tipo_prestamo: loanType,
      fecha_inicio:startDate
    };

    console.log(loanData)

    // Enviar la solicitud de préstamo a la API
    fetch("http://localhost:8000/api/loans/", {
      method: "POST",
      headers: {
        'Authorization': `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loanData),
    })
      .then(response => response.json())
      .then(data => {
        // Manejar la respuesta (puede ser útil actualizar el estado o realizar alguna acción)
        console.log("Préstamo solicitado con éxito:", data);
      })
      .catch(error => {
        // Manejar errores (puedes mostrar un mensaje de error al usuario)
        console.error("Error al solicitar el préstamo:", error);
      });
  };

  const handleDelete = (event) =>{
    const userData = JSON.parse(sessionStorage.getItem('userData'))
    const credentials = btoa(`${userData.username}:${userData.password}`)
    const btn = event.target
    const loanId = btn.getAttribute("data-loan-id")

    console.log(loanId)

    // Enviar la solicitud de préstamo a la API
    fetch(`http://localhost:8000/api/loans/${loanId}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .catch(error => {
        // Manejar errores (puedes mostrar un mensaje de error al usuario)
        console.error("Error al eliminar el préstamo:", error);
      });
  };

  return (
    <Layout sidebarActiveLink="loans-section-link">
      <main id="main-section">
        <h2 id="main-section-title">PRÉSTAMOS</h2>
        <div id="main-section-content">
          {/* Loans list */}
          <div className="loan-container">
            <h3>Listado de préstamos</h3>
            {loans.map(loan => (
              <div key={loan.id} className="account-card">
                <Link href={`/main/loans/${loan.id}`}>
                  <div className="account-number">Id de Cliente: {loan.cliente}</div>
                  <div className="cbu">Tipo: {loan.tipo_prestamo}</div>
                  <div className="alias">Fecha de inicio: {loan.fecha_inicio}</div>
                  <div className="balance">Monto: {loan.monto_aprobado}</div>
                </Link>
                <button data-loan-id={loan.id}
                className="button"
                onClick={handleDelete}>DELETE</button>
              </div>
            ))}
          </div>
          <div className="loan-container">
          <br></br>
          <h3>Calculadora de Préstamos</h3>
              <div className="loan-card">
              <div className="form-group">
                  <label htmlFor="loan-amount" className="label">
                    Monto del préstamo
                  </label>
                  <input
                    type="number"
                    id="loan-amount"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="interest-rate" className="label">
                    Tasa de interés anual (%)
                  </label>
                  <input
                    type="number"
                    id="interest-rate"
                    step="0.01"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="loan-term" className="label">
                    Plazo del préstamo (meses)
                  </label>
                  <input
                    type="number"
                    id="loan-term"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    required
                  />
                </div>
              <div className="form-group">
                <button
                  type="button"
                  id="calculate"
                  className="button"
                  onClick={handleCalculate}
                >
                  Calcular
                </button>
              </div>
              <div>
                Pago mensual: <span className="result" id="result">{monthlyPayment}</span>
              </div>
            </div>
            <br></br>
          <h3>Solicitud de Préstamos</h3>
          <div className="loan-card">
              <div className="form-group">
                <label htmlFor="loan-amount" className="label">
                    Cliente
                </label>
                <input
                  type="number"
                  id="client"
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="loan-amount" className="label">
                  Monto del préstamo
                </label>
                <input
                  type="number"
                  id="loan-amount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="interest-rate" className="label">
                  Tipo
                </label>
                <input
                  type="number"
                  id="interest-rate"
                  value={loanType}
                  onChange={(e) => setLoanType(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="loan-term" className="label">
                  Fecha de inicio
                </label>
                <input
                  type="date"
                  id="loan-term"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <button
                  type="button"
                  id="request-loan"
                  className="button"
                  onClick={handleLoanRequest}
                >
                  Solicitar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default LoansSection;

