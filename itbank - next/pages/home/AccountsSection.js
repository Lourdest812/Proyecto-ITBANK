function AccountsSection(){
    return(
        <main id="main-section">
        <h2 id="main-section-title">CUENTAS</h2>
        <div id="main-section-content">
            <div className="accounts-container">
            <div className="account-card">
                <div className="account-number">Cuenta: 00001</div>
                <div className="cbu">CBU: 0123456789012345678901</div>
                <div className="alias">Alias: mi.cuenta.banco</div>
                <div className="balance">Saldo: $1,234.56</div>
            </div>
            <div className="account-card">
                <div className="account-number">Cuenta: 00002</div>
                <div className="cbu">CBU: 1234567890123456789012</div>
                <div className="alias">Alias: cuenta.amiga</div>
                <div className="balance">Saldo: $2,345.67</div>
            </div>
            </div>
        </div>
        </main>
    );
}

export default AccountsSection;

