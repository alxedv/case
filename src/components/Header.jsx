import React from 'react';
import Upminer from '../assets/upminer-logo.png';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="banner1">
      <div className="upminer">
        <div>
          <img width="100px" className="upminer-logo" src={ Upminer } alt="" />
        </div>
        <div className="vertical-line" />
        <div>
          <h2>Histórico Empresarial</h2>
        </div>
      </div>
      <div className="text">
        <p>
          O aplicativo Histórico Empresarial permite ao usuario
          ter acesso a todos<br />os fatos e acontecimentos relevantes
          de uma empresa desde o seu ano <br />de fundação.
        </p>
      </div>
      <div className="details">
        R$40,00
        <button>Saiba Mais</button>
      </div>
    </header>
  );
}
