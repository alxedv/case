import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { arrayCards } from '../services/Utils';
import '../styles/Cards.css';
import MyContext from '../context/MyContext';

const cardText = "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."

export default function Cards() {
  const [cards, setCards] = useState([]);
  const { filter, category, setDetailsCard } = useContext(MyContext);

  useEffect(() => {
    if (filter === 'Preço' ) {
      return setCards(arrayCards.slice().sort((a, b) => a.value - b.value));
    }
    return setCards(arrayCards);
  }, [filter]);

  useEffect(() => {
    if (category !== 'Todos') {
      return setCards(arrayCards.filter((element) => element.name === category));
    }
    return setCards(arrayCards);
  }, [category])

  function onDetailsClick (obj) {
    setDetailsCard(obj);
  }

  return (
    <div className="cards">
        {
          cards.map((element, index) => (
            <div key={ index } className="card">
              <img 
                src={ element.icon }
                alt={ element.name }
                width="30"
                className="card-icon"
              />
              { element.name }
              <p className="card-text">{ element.name !== 'Profissional' && cardText}</p>
              <div className="know-more">
                <span>{ `R$${element.value},00` }</span>
                <Link className="details-button" to="/details" onClick={ () => onDetailsClick(element) }>
                  Saiba mais
                </Link>
              </div>
            </div>
          ))
        }
      </div>
  );
}
