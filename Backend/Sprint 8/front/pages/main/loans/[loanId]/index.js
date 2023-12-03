import Layout from "../../Layout";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";


function Loan(){

    const router = useRouter();
    const loanId = parseInt(router.query.loanId);

    const [loan, setLoan] = useState([])
    
    useEffect(() => {
        getLoan(loanId, setLoan)
    }, [])

    return(       
        <Layout sidebarActiveLink="loans-section-link">
            <main id="main-section">
            <h2 id="main-section-title">PRÉSTAMO</h2>
            <div id="main-section-content">
                <div className="loan-container">
                    {
                        <div className="account-card">
                                <div className="account-number">Id de Cliente: {loan.cliente}</div>
                                <div className="cbu">Tipo: {loan.tipo_prestamo}</div>
                                <div className="alias">Fecha de inicio: {loan.fecha_inicio}</div>
                                <div className="balance">Monto: {loan.monto_aprobado}</div>
                        </div>
                    }
                </div>
            </div>
            </main>
        </Layout>
    );
}

export default Loan;

function getLoan(loanId, setLoan) {
    const userData = JSON.parse(sessionStorage.getItem('userData'))
    const credentials = btoa(`${userData.username}:${userData.password}`)

    fetch(`http://localhost:8000/api/loans/${loanId}`,
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
        setLoan(data)
    })
}