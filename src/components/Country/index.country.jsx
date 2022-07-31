import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Flag } from '../Flag/index.flag';
import { context } from '../../Context/index.context';
import { CountryInfo } from '../CountryInfo/index.countryInfo';
import { stylessCountry } from '../../Theme/theme';
import './country.css';

export function Country() {
  const { optionsTheme, stateCountries, countriesFilter } = useContext(context);
  const { theme } = optionsTheme;
  const { countries, handleCountries } = stateCountries;
  const { styleCard } = stylessCountry(theme);

  const countriesMap = { countries };

  if (countriesFilter) {
    countriesMap.countries = countriesFilter;
  }

  useEffect(() => {
    if (countries.length === 0) {
      handleCountries('uni');
    }
  }, []);

  return (
    <>
      {
        countriesMap.countries.length === 0 && <p>Not found</p>
      }
      {
        countriesMap.countries.map((item) => (
          <article key={item.name.common} className="country__card" style={styleCard}>
            <Flag flagImg={item.flags.svg} />
            <CountryInfo data={item} />
            <Link className="country__cta" to={`/detail/${item.name.official}`}>Ver</Link>
          </article>
        ))
      }
    </>
  );
}
