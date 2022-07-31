/* eslint-disable react/prop-types */
import React from 'react';
import './detailsInfo.css';

export function DetailsInfo({ country, borderCounties, styleLink }) {
  const currencies = Object.values(country.currencies).map((item) => item.name);
  const languages = Object.keys(country.languages);
  return (
    <div className="detail__info">
      <div className="detail__p">
        <h3 className="detail__title">{country.name.common}</h3>
        <p>
          <span>Native Name: </span>
          {country.name.nativeName[languages[0]].common}
        </p>
        <p>
          <span>Population: </span>
          {country.population}
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
      <div className="detail__borderCountries">
        <p>Border Countries</p>
        <div className="detail__borders">
          {
            borderCounties.map((item) => (
              <span key={item[0].name.common} style={styleLink} className="detail__btn detail__border">{item[0].name.common}</span>
            ))
          }
          {
            borderCounties.length === 0 && <span>without borders</span>
          }
        </div>
      </div>
    </div>
  );
}
