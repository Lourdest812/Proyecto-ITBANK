import Layout from "../Layout";
import Link from "next/link";
import { useEffect, useState } from "react";

function BanksSection(){

    const [banks, setBanks] = useState([])
    
    function getBanks() {
        const userData = JSON.parse(sessionStorage.getItem('userData'))
        const credentials = btoa(`${userData.username}:${userData.password}`)
        fetch(
            `http://localhost:8000/api/banks/`,
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
            setBanks(data)
        })
    }

    useEffect(() => {
        getBanks()
    }, [])

    return(       
        <Layout sidebarActiveLink="banks-section-link">
            <main id="main-section">
            <h2 id="main-section-title">SUCURSALES</h2>
            <div id="main-section-content">
                <div className="banks-container">
                    {
                        banks.map(bank => (
                            <div key={bank.id} className="banks-card">
                                <div className="bank-expiration"><b>Nombre:</b> {bank.nombre}</div>
                                <div className="bank-amount"><b>Dirección:</b> {bank.direccion}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            </main>
        </Layout>
    );
}

export default BanksSection;
