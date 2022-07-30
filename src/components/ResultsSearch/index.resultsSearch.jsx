/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { context } from '../../Context/index.context';
import './resultsSearch.css';

// eslint-disable-next-line react/prop-types

export function ResultsSearch({ input, toEmpty }) {
  const { handlesetCountry } = useContext(context);
  return (
    <div className="search__results">
      {
        input.map((item) => (
          <div className="search__item" key={item.name.common}>
            <span>{item.name.common}</span>
            <button className="search__cta" type="button" onClick={() => handlesetCountry([item], toEmpty)}>Ir</button>
          </div>
        ))
      }
    </div>
  );
}
