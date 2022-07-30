import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Flag } from '../Flag/index.flag';
import { context } from '../../Context/index.context';
import { stylessBtn } from '../../Theme/theme';
import './countryDetail.css';

export function CountryDetail() {
  const params = useParams();
  const { stateCountries, optionsTheme } = useContext(context);
  const country = stateCountries.countries.find((item) => item.name.official === params.id);
  console.log('este: ', country);
  const currencies = Object.values(country.currencies).map((item) => item.name);
  const languages = Object.keys(country.languages);
  const { styleLink } = stylessBtn(optionsTheme.theme);
  console.log('currencie', currencies);
  return (
    <article className="detail">
      <Link to="/" className="detail__btn" style={styleLink}>
        <AiOutlineArrowLeft />
        <span>Back</span>
      </Link>
      <Flag flagImg={country.flags.svg} />
      <div className="detail__info">
        <h3 className="detail__title">{country.name.common}</h3>
        <div className="detail__p">
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
        <div className="detail__p">
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
            <span style={styleLink} className="detail__btn">1</span>
            <span style={styleLink} className="detail__btn">1</span>
            <span style={styleLink} className="detail__btn">1</span>
          </div>
        </div>
      </div>
    </article>
  );
}
