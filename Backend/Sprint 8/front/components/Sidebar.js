import { useRouter } from 'next/router'; // Usamos useRouter en lugar de useNavigate

function Sidebar({ selectedSection }){
    const router = useRouter(); // Usamos useRouter para la navegación
    
    const sections = [
        {
            id: "home-section-link",
            text: "Inicio",
            path:"/main/"
        },
        {
            id: "accounts-section-link",
            text: "Cuentas",
            path:"/main/accounts"
        },
        {
            id: "cards-section-link",
            text: "Tarjetas",
            path:"/main/cards"
        },
        {
            id: "transfers-section-link",
            text: "Transferencias",
            path:"/main/transfers"
        },
        {
            id: "payments-section-link",
            text: "Pagos",
            path:"/main/payments"
        },
        {
            id: "loans-section-link",
            text: "Prestamos",
            path:"/main/loans"
        },
        {
            id: "dollars-section-link",
            text: "Compra y venta de dolares",
            path:"/main/dollars"
        },
    ]

    function handleSectionClick(sectionPath){
        router.push(sectionPath); // Usamos router.push para la navegación en Next.js
    }

    const listItems = sections.map((section) => (
        <div
            key={section.id}
            className={`section-link ${section.id === selectedSection ? "active" : ""}`}
            onClick={() => handleSectionClick(section.path)}
        >
            {section.text}
        </div>
    ))

    return(
        <aside className="sidebar">               
            {listItems}
        </aside>
    )
}

export default Sidebar;

