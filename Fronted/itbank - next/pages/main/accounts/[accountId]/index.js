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
                            <div className="account-number">Cuenta: {account.id}</div>
                            <div className="cbu">CBU: {account.cbu}</div>
                            <div className="alias">Alias: {account.alias}</div>
                            <div className="balance">Saldo: ${account.balance}</div>
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
    fetch("/statics/accounts.json")
    .then(response => {
        return response.json()
    })
    .then(data => {
        const account = data.find(account => account.id === accountId)
        setAccount(account)
    })
}
