import React, { useState, useContext } from 'react';

export const CountryListContext = createContext();

export const CountryListProvider = props => {
  const [countries, setCountries] = useState([]);

  return (
    <CountryListContext.Provider value={[countries, setCountries]}>
      {props.children}
    </CountryListContext.Provider>
  );
};
