import Layout from "../Layout";
import Link from "next/link";
import { useEffect, useState } from "react";

function AccountsSection(){

    const [accounts, setAccounts] = useState([])
    
    function getAccounts() {
        fetch("/statics/accounts.json")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setAccounts(data)
        })
    }

    useEffect(() => {
        getAccounts()
    }, [])

    return(       
        <Layout sidebarActiveLink="accounts-section-link">
            <main id="main-section">
            <h2 id="main-section-title">CUENTAS</h2>
            <div id="main-section-content">
                <div className="accounts-container">
                    {
                        accounts.map(account => (
                            <div key={account.id} className="account-card">
                                <Link href={`/main/accounts/${account.id}`}>
                                    <div className="account-number">Cuenta: {account.id}</div>
                                    <div className="cbu">CBU: {account.cbu}</div>
                                    <div className="alias">Alias: {account.alias}</div>
                                    <div className="balance">Saldo: ${account.balance}</div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            </main>
        </Layout>
    );
}

export default AccountsSection;


