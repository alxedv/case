import React, { useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../context/MyContext';
import banner from '../assets/banner.jpg';
import { Link } from 'react-router-dom';
import Arrow from '../assets/arrow.png';
import '../styles/Details.css';

export default function Details() {
  const { detailsCard } = useContext(MyContext);
  return (
    <div>
      <Header />
      <div className="card-details">
        <div className="details-name">
          <Link to="/">
            <img width="50px" src={ Arrow } alt="Botão para voltar" />
          </Link>
          <h2>{ detailsCard.name }</h2>
        </div>
        <div className="details-image">
          <img width="400px" src={ banner } alt="banner placeholder" />
          <p className="image-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis ducimus soluta omnis voluptatem rei.</p>
        </div>
        <div className="details-text">
          <p>
            O aplicativo { detailsCard.name } permite ao usuario
            ter acesso a todos os fatos e acontecimentos relevantes
            de uma empresa desde o seu ano de fundação. Tenha acesso
            aos principais eventos corporativos de uma empresa, como:
            marcos jurídicos, mudança no quadro societário, aumento de
            capital, reportagens e muito mais.
          </p>
          <p>
            Após realizar a consulta, o histórico é salvo automaticamente, tornando as informações acessíveis ao usuário. A linha do tempo pode também ser exportada no formato PDF.
          </p>
        </div>
        <div className="details-price">
          <h3>{`R$${detailsCard.value},00`}</h3>
          <button>Habilitar</button>
        </div>
      </div>
    </div>
  );
}
