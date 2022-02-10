import React, { useContext } from 'react';
import Header from '../components/Header';
import '../styles/MainPage.css';
import { icons } from '../services/Utils';
import Cards from '../components/Cards';
import MyContext from '../context/MyContext';

export const filterNames = ['Todos', 'Profissional', 'Reguladores', 'Sócio Ambiental', 'Jurídico', 'Listas Restritivas', 'Mídia / Internet', 'Bens e Imóveis', 'Cadastro', 'Financeiro']

export default function MainPage() {
  const { setFilter, setCategory } = useContext(MyContext);
  
  function renderFilters() {
    const buttons = [];
    for (let i = 0; i < filterNames.length; i += 1) {
      buttons.push(
        <button
          className="filter"
          key={ filterNames[i] }
          onClick={ () => setCategory(filterNames[i]) }
        >
          <img
            width="30"  
            src={ icons[i] }
            alt={ filterNames[i] }
            className="icon"
          />
          {`${filterNames[i]}`}
        </button>
        )
    }
    return buttons;
  }

  function selectHandler({ target }) {
    setFilter(target.value)
  }

  return (
    <>
      <Header />
      <div className="filter-buttons">
        { renderFilters() }
      </div>
      <div className="input-select">
        <label htmlFor="Ordenar">ORDENAR</label>
        <select id="Ordenar" onChange={ selectHandler }>
          <option value="Lançamento">Lançamento</option>
          <option value="Preço">Preço</option>
        </select>
      </div>
      <div className="cards">
        <Cards />
      </div>
    </>
  )
  
}
