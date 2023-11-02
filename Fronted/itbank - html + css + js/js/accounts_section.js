document.getElementById("accounts-section-link").addEventListener("click", () => {
    renderAccountsSection();
});

function renderAccountsSection(){
    const mainSectionTitle = document.getElementById("main-section-title");
    const mainSectionContent = document.getElementById("main-section-content");

    // Seteo de link activo:
    setMenuActiveLink("accounts-section-link");

    // Renderizado del contenido:
    mainSectionTitle.innerText = "CUENTAS";
    mainSectionContent.innerHTML = `
    
    <div class="accounts-container">
                
        <div class="account-card">
            <div class="account-number">Cuenta: 00001</div>
            <div class="cbu">CBU: 0123456789012345678901</div>
            <div class="alias">Alias: mi.cuenta.banco</div>
            <div class="balance">Saldo: $1,234.56</div>
        </div>

        <div class="account-card">
            <div class="account-number">Cuenta: 00002</div>
            <div class="cbu">CBU: 1234567890123456789012</div>
            <div class="alias">Alias: cuenta.amiga</div>
            <div class="balance">Saldo: $2,345.67</div>
        </div>
        
    </div>

    `;
}