/* eslint-disable react/prop-types */
import React from 'react';
import { calculteDot } from '../../Math/index.math';
import './countryInfo.css';

// eslint-disable-next-line react/prop-types
export function CountryInfo({ data }) {
  return (
    <div className="info">
      <h2 className="info__title">{data.name.common}</h2>
      <div className="info__text">
        <p>
          <span>Population: </span>
          {calculteDot(data.population)}
        </p>
        <p>
          <span>Region: </span>
          {data.region}
        </p>
        <p>
          <span>Capital:  </span>
          {data.capital?.join(', ')}
        </p>
      </div>
    </div>
  );
}
