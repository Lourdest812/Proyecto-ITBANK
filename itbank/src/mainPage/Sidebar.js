import React from "react";

function Sidebar({ selectedSection, setSelectedSection }){

    const sections = [
        {
            id: "home-section-link",
            text: "Inicio"
        },
        {
            id: "accounts-section-link",
            text: "Cuentas"
        },
        {
            id: "transfers-section-link",
            text: "Transferencias"
        },
        {
            id: "payments-section-link",
            text: "Pagos"
        },
        {
            id: "loans-section-link",
            text: "Prestamos"
        },
        {
            id: "dollars-section-link",
            text: "Compra y venta de dolares"
        },
    ]

    function handleSectionClick(sectionText){
        setSelectedSection(sectionText)
    }

    const listItems = sections.map((section) => (
        <div
            key={section.id}
            className={`section-link ${section.text === selectedSection ? "active" : ""}`}
            onClick={() => handleSectionClick(section.text)}
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

