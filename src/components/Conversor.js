import React, { useState } from 'react';
import './css/bootstrap.min.css';
import './css/Conversor.css';

export default function Conversor(props) {

    const [coinA, setCoinA] = useState(0.0);
    const [coinB, setCoinB] = useState(0.0);

    // I chose to use fixed values because the free API's that provide currency quotes in real time are unstable.
    // optei por usar valores fixos pois as API's grátis que fornecem a cotação das moedas em tempo real são instáveis.
    const [coins] = useState({
        "USD": "5.62",
        "EUR": "6.63", 
        "CAD": "4.26", 
        "AUD": "4.00",
        "SGD": "4.13",
        "ARS": "0.07"
    });

    const convert = () => {
        let to = coins[props.coinA];
        let value = Number(to) * Number(coinA['coinA']);
        setCoinB(value.toFixed(2));
    };

    return (
        <div className="conversor container mt-2">
            <h2>{props.coinA} para {props.coinB}</h2>
            <input type="text" className="mt-3" onChange={event => { setCoinA({ coinA: event.target.value }) }}></input>
            <button className="btn btn-success mt-3" type="button" value="Converter" onClick={convert}>Converter</button>
            <h2 className="mt-4">R$ {coinB}</h2>
        </div>
    );
}