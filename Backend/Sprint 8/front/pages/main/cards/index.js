import Layout from "../Layout";
import Link from "next/link";
import { useEffect, useState } from "react";

function CardsSection(){

    const [cards, setCards] = useState([])
    
    function getCards() {
        const userData = JSON.parse(sessionStorage.getItem('userData'))
        const credentials = btoa(`${userData.username}:${userData.password}`)
        fetch(`http://localhost:8000/api/cards/?cliente=${userData.id}`,
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
            setCards(data)
        })
    }

    useEffect(() => {
        getCards()
    }, [])

    return(       
        <Layout sidebarActiveLink="cards-section-link">
            <main id="main-section">
            <h2 id="main-section-title">TARJETAS</h2>
            <div id="main-section-content">
                <div className="cards-container">
                    {
                        cards.map(card => (
                            <div key={card.id} className="card-card">
                                <Link href={`/main/cards/${card.id}`}>
                                    <div className="account-number">Cliente: {card.cliente}</div>
                                    <div className="card-number">{card.numero_tarjeta}</div>
                                    <div className="emition">DESDE: {card.fecha_emision}</div>
                                    <div className="expiration">HASTA: {card.fecha_vencimiento}</div>
                                    <div className="owner">{card.owner}</div>
                                    <div className="company">{card.banco_emisor}</div>
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

export default CardsSection;


