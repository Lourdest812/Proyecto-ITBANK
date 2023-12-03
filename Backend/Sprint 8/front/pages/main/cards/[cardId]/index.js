import Layout from "../../Layout";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";


function Card(){

    const router = useRouter();
    const cardId = parseInt(router.query.cardId);

    const [card, setCard] = useState([])
    
    useEffect(() => {
        getCard(cardId, setCard)
    }, [])

    return(       
        <Layout sidebarActiveLink="cards-section-link">
            <main id="main-section">
            <h2 id="main-section-title">TARJETA</h2>
            <div id="main-section-content">
                <div className="cards-container">
                    {
                        <div className="card-card">
                            <div className="account-number">Id de Cliente: {card.cliente}</div>
                            <div className="card-number">{card.numero_tarjeta}</div>
                            <div className="emition">DESDE: {card.fecha_emision}</div>
                            <div className="expiration">HASTA: {card.fecha_vencimiento}</div>
                            <div className="company">{card.company}</div>
                        </div>
                    }
                </div>
            </div>
            </main>
        </Layout>
    );
}

export default Card;

function getCard(cardId, setCard) {
    const userData = JSON.parse(sessionStorage.getItem('userData'))
    const credentials = btoa(`${userData.username}:${userData.password}`)
    fetch(`http://localhost:8000/api/cards/${cardId}`,
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
        setCard(data)
    })
}