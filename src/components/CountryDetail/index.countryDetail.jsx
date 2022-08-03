import React, { useContext } from 'react';
import { context } from '../../Context/index.context';
import { useCountries } from '../../CustomHooks/useCountries';
import { Detail } from './countryDetail';
import { Loading } from '../Loading/index.loading';
import './countryDetail.css';

export function CountryDetail() {
  const { stateCountries, optionsTheme, handlesetCountry } = useContext(context);
  const { countries } = stateCountries;
  const [country, loadingRoute] = useCountries({ countries, handlesetCountry });

  return (
    <article className="detail">
      {
        loadingRoute
          ? <Loading />
          : <Detail country={country} optionsTheme={optionsTheme} />
      }
    </article>
  );
}
