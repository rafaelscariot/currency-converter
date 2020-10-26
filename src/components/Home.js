import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';

export default function Conversor() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Bem-vindo ao React Conversor de Moedas :)</p>
                <Link className="App-link" to='conversor' rel="noopener noreferrer">Converter!</Link>
            </header>
        </div>
    );
}