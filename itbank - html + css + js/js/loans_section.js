document.getElementById("loans-section-link").addEventListener("click", () => {
    renderLoansSection();

    // Seteo de evento para boton de calculo de prestamo:
    document.getElementById("calculate").addEventListener("click", function() {
        const loanAmount = parseFloat(document.getElementById("loan-amount").value);
        const interestRate = parseFloat(document.getElementById("interest-rate").value) / 100;
        const loanTerm = parseInt(document.getElementById("loan-term").value);
  
        const monthlyPayment = calculateLoanmonthlyPayment(loanAmount, interestRate, loanTerm);
  
        document.getElementById("result").textContent = `$${monthlyPayment}`;
    });
});

function renderLoansSection(){
    const mainSectionTitle = document.getElementById("main-section-title");
    const mainSectionContent = document.getElementById("main-section-content");

    // Seteo de link activo:
    setMenuActiveLink("loans-section-link");

    // Renderizado del contenido:
    mainSectionTitle.innerText = "PRESTAMOS"
    mainSectionContent.innerHTML = `
    <div class="loan-container">
        <h3>Calculadora de Préstamos</h3>
        <div class="loan-card">
            <div class="form-group">
                <label for="loan-amount" class="label">Monto del préstamo</label>
                <input type="number" id="loan-amount" required>
            </div>
                <div class="form-group">
                <label for="interest-rate" class="label">Tasa de interés anual (%)</label>
                <input type="number" id="interest-rate" step="0.01" required>
            </div>
            <div class="form-group">
                <label for="loan-term" class="label">Plazo del préstamo (meses)</label>
                <input type="number" id="loan-term" required>
            </div>
            <div class="form-group">
                <button type="button" id="calculate" class="button">Calcular</button>
            </div>
            <div>
                Pago mensual: <span class="result" id="result"></span>
            </div>
        </div>
    </div>
    `;
}


function calculateLoanmonthlyPayment(loanAmount, interestRate, loanTerm){

    if (!(loanAmount && interestRate && loanTerm)){
        return 0;
    }

    const monthlyInterestRate = interestRate / 12;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, - loanTerm));

    return monthlyPayment.toFixed(2);
}