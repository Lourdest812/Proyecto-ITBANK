import React, { useState } from "react";

function LoansSection() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

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

  return (
    <main id="main-section">
      <h2 id="main-section-title">PRESTAMOS</h2>
      <div id="main-section-content">
        <div className="loan-container">
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
              <button type="button" id="calculate" className="button" onClick={handleCalculate}>
                Calcular
              </button>
            </div>
            <div>
              Pago mensual: <span className="result" id="result">{monthlyPayment}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoansSection;
