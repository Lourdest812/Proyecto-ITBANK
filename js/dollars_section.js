const dollarCotization = 350; // Cotización fija

document.getElementById("dollars-section-link").addEventListener("click", () => {
    renderDollarsSection();

    document.getElementById("calculate").addEventListener("click", function() {
        const amount = parseFloat(document.getElementById("amount").value) || 0;
        const operation = document.getElementById("operation").value;    
        const result = calculateDollarEquivalence(amount, operation);
        document.getElementById("result").textContent = `$${result}`;
    });
});

function renderDollarsSection(){
    const mainSectionTitle = document.getElementById("main-section-title");
    const mainSectionContent = document.getElementById("main-section-content");

    // Seteo de link activo:
    setMenuActiveLink("dollars-section-link");

    // Renderizado del contenido:
    mainSectionTitle.innerText = "COMPRA / VENTA DE DOLARES"
    mainSectionContent.innerHTML = `
    <div class="converter-container">
        <h3>Calculo de cotización para compra / venta</h3>
        <div class="converter-card">
            <div class="cotization">
                Cotización Dolar: $${dollarCotization}
            </div>
            <div class="form-group">
                <label for="amount" class="label">Cantidad de dólares</label>
                <input type="number" id="amount" step="0.01" required>
            </div>
            <div class="form-group">
                <label for="operation" class="label">Operación</label>
                <select id="operation" class="select" required>
                    <option value="compra">Compra</option>
                    <option value="venta">Venta</option>
                </select>
            </div>
            <div class="form-group">
                <button type="button" class="button" id="calculate">Calcular</button>
            </div>

            <div>
                Resultado: <span class="result" id="result"></span>
            </div>
        </div>
    </div>
    `;
}


function calculateDollarEquivalence(amount, operation){

    let result;
    if (operation === "compra") {
        result = (amount * dollarCotization).toFixed(2);
    } else if (operation === "venta") {
        result = (amount / dollarCotization).toFixed(2);
    }
    
    return result;
}