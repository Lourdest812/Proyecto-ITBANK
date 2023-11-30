import Layout from "../Layout";
import Link from "next/link";
import { useEffect, useState } from "react";

function PaymentsSection(){

    const [payments, setPayments] = useState([])
    
    function getPayments() {
        fetch("/statics/payments.json")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setPayments(data)
        })
    }

    useEffect(() => {
        getPayments()
    }, [])

    return(       
        <Layout sidebarActiveLink="payments-section-link">
            <main id="main-section">
            <h2 id="main-section-title">PAGOS</h2>
            <div id="main-section-content">
                <div className="payments-container">
                    {
                        payments.map(payment => (
                            <div key={payment.id} className="payments-card">
                                <Link href={`/main/payments/${payment.id}`}>
                                    <div className="payment-company">{payment.company}</div>
                                    <div className="payment-expiration">Vencimiento: {payment.expiration}</div>
                                    <div className="payment-amount">Monto: ${payment.amount}</div>
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

export default PaymentsSection;
