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
          <button key={item.name.common} className="search__cta" type="button" onClick={() => handlesetCountry([item], toEmpty)}>
            <div className="search__item">
              <span>{item.name.common}</span>
            </div>
          </button>
        ))
      }
    </div>
  );
}
