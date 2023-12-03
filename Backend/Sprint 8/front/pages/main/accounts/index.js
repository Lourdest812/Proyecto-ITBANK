import Layout from "../Layout";
import Link from "next/link";
import { useEffect, useState } from "react";


function AccountsSection(){

    const [accounts, setAccounts] = useState([])
    
    function getAccounts() {
        const userData = JSON.parse(sessionStorage.getItem('userData'))
        const credentials = btoa(`${userData.username}:${userData.password}`)
        fetch(
            `http://localhost:8000/api/accounts/?cliente=${userData.id}`,
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
                                    <div className="account-number">Cliente: {account.cliente}</div>
                                    <div className="cbu">Balance: {account.balance}</div>
                                    <div className="alias">Iban: {account.iban}</div>
                                    <div className="balance"><b>Tipo:</b> {account.tipo}</div>
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


