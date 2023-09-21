import Layout from "../Layout";
import Link from "next/link";
import { useEffect, useState } from "react";

function CardsSection(){

    const [cards, setCards] = useState([])
    
    function getCards() {
        fetch("/statics/cards.json")
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
                                    <div className="card-number">{card.number}</div>
                                    <div className="emition">DESDE: {card.emitionDate}</div>
                                    <div className="expiration">HASTA: {card.expirationDate}</div>
                                    <div className="owner">{card.owner}</div>
                                    <div className="company">{card.company}</div>
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


