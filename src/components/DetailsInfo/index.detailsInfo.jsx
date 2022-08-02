/* eslint-disable react/prop-types */
import React from 'react';
import { BorderCountry } from '../BorderCountry/index.borderCountry';
import { calculteDot } from '../../Math/index.math';
import './detailsInfo.css';

export function DetailsInfo({ country, borderCounties, loading }) {
  const currencies = Object.values(country.currencies).map((item) => item.name);
  const languages = Object.values(country.languages);
  const languagesKey = Object.keys(country.languages);
  return (
    <div className="detail__info">
      <div className="detail__p">
        <h3 className="detail__title">{country.name.common}</h3>
        <p>
          <span>Native Name: </span>
          {country.name.nativeName[languagesKey[0]].common}
        </p>
        <p>
          <span>Population: </span>
          {calculteDot(country.population)}
        </p>
        <p>
          <span>Region: </span>
          {country.region}
        </p>
        <p>
          <span>Sub region: </span>
          {country.subregion}
        </p>
        <p>
          <span>Capital: </span>
          {country.capital}
        </p>
      </div>
      <div className="detail__p detail__p2">
        <p>
          <span>Top level Domain: </span>
          {country.tld.join(', ')}
        </p>
        <p>
          <span>Currencies: </span>
          {
            currencies.join(', ')
          }
        </p>
        <p>
          <span>Languages: </span>
          {languages.join(', ')}
        </p>
      </div>
      <BorderCountry borderCounties={borderCounties} loading={loading} />
    </div>
  );
}
