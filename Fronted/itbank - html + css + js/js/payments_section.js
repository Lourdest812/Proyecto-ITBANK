document.getElementById("payments-section-link").addEventListener("click", () => {
    renderPaymentsSection();

    // Seteo de evento para boton de pago:
    document.getElementById("pay").addEventListener("click", function() {
        const paymentCode = document.getElementById("payment-code");
        const paymentAmount = document.getElementById("payment-amount");
        const paymentResultMessage = document.getElementById("payment-result");

        if (paymentCode.value !== "" && paymentAmount.value !== ""){
            paymentResultMessage.textContent = `¡Pago exitoso!`;
        }
        else{
            paymentResultMessage.textContent = "Error en el pago, datos inválidos";
        }

    });
});

function renderPaymentsSection(){
    const mainSectionTitle = document.getElementById("main-section-title");
    const mainSectionContent = document.getElementById("main-section-content");

    // Seteo de link activo:
    setMenuActiveLink("payments-section-link");

    // Renderizado del contenido:
    mainSectionTitle.innerText = "PAGOS"
    mainSectionContent.innerHTML = `
    <div class="payments-container">
        <h3>Pago de cuentas y servicios</h3>
        <div class="payments-card">
            <div class="form-group">
                <label for="amount" class="label">Código de pago electrónico</label>
                <input type="text" id="payment-code" required>
            </div>
            <div class="form-group">
                <label for="amount" class="label">Monto a pagar</label>
                <input type="number step="0.01" id="payment-amount" required>
            </div>
            <div class="form-group">
                <button type="button" class="button" id="pay">Pagar</button>
            </div>
        </div>
    </div>

    
    <div id="payment-result">
    </div>
    `;
}