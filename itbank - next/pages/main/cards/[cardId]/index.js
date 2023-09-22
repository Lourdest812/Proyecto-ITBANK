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
                            <div className="card-number">{card.number}</div>
                            <div className="emition">DESDE: {card.emitionDate}</div>
                            <div className="expiration">HASTA: {card.expirationDate}</div>
                            <div className="owner">{card.owner}</div>
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
    fetch("/statics/cards.json")
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);

        const card = data.find(card => card.id === cardId)
        setCard(card)
    })
}