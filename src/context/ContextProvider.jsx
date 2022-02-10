import React, { useState } from 'react';
import MyContext from './MyContext';

export default function ContextProvider({ children }) {
  const [filter, setFilter] = useState('Lançamento');
  const [category, setCategory] = useState('Todos')
  const [detailsCard, setDetailsCard] = useState({});
  
  const providerObj = {
    filter,
    category,
    detailsCard,
    setFilter,
    setCategory,
    setDetailsCard,
  }
  return (
    <MyContext.Provider value={ providerObj }>
      { children }
    </MyContext.Provider>
  );
}
