import React, { useState } from "react";
import { useContext } from 'react'
import { AppContext } from "../../AppContext"


function DollarsSection() {
    const {dollarCotization} = useContext(AppContext);
    const [amount, setAmount] = useState("");
    const [operation, setOperation] = useState("compra");
    const [result, setResult] = useState("");

    const handleCalculate = () => {
        const amountValue = parseFloat(amount) || 0;
        const calculatedResult = calculateDollarEquivalence(amountValue);
        setResult(`$${calculatedResult}`);
    };

    function calculateDollarEquivalence(amount){
        return (amount * dollarCotization).toFixed(2);
    }

    return (
        <main id="main-section">
            <h2 id="main-section-title">COMPRA / VENTA DE DOLARES</h2>
            <div id="main-section-content">
                <div className="converter-container">
                    <h3>Calculo de cotización para compra / venta</h3>
                    <div className="converter-card">
                        <div className="cotization">
                            Cotización Dolar: ${dollarCotization}
                        </div>
                        <div className="form-group">
                            <label htmlFor="amount" className="label">
                                Cantidad de dólares
                            </label>
                            <input
                                type="number"
                                id="amount"
                                step="0.01"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="operation" className="label">
                                Operación
                            </label>
                            <select
                                id="operation"
                                className="select"
                                value={operation}
                                onChange={(e) => setOperation(e.target.value)}
                                required
                            >
                            <option value="compra">Compra</option>
                            <option value="venta">Venta</option>
                        </select>
                        </div>
                        <div className="form-group">
                        <button type="button" className="button" id="calculate" onClick={handleCalculate}>
                            Calcular
                        </button>
                        </div>
                        <div>
                            Resultado: <span className="result" id="result">{result}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default DollarsSection;
