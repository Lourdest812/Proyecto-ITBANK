import Layout from "../../Layout";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";


function Account(){

    const router = useRouter();
    const accountId = parseInt(router.query.accountId);

    const [account, setAccount] = useState([])
    
    useEffect(() => {
        getAccount(accountId, setAccount)
    }, [])

    return(       
        <Layout sidebarActiveLink="accounts-section-link">
            <main id="main-section">
            <h2 id="main-section-title">CUENTA</h2>
            <div id="main-section-content">
                <div className="accounts-container">
                    {
                        <div className="account-card">
                            <div className="account-number">Cliente: {account.cliente}</div>
                            <div className="cbu">Balance: {account.balance}</div>
                            <div className="alias">Iban: {account.iban}</div>
                            <div className="balance"><b>Tipo:</b> {account.tipo}</div>
                        </div>
                    }
                </div>
            </div>
            </main>
        </Layout>
    );
}

export default Account;

function getAccount(accountId, setAccount) {
    const userData = JSON.parse(sessionStorage.getItem('userData'))
    const credentials = btoa(`${userData.username}:${userData.password}`)
    fetch(`http://localhost:8000/api/accounts/${accountId}`,
    {
        headers: {
            'Authorization': `Basic ${credentials}`
        }
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        setAccount(data)
    })
}
