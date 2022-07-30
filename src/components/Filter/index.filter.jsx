import React, { useContext } from 'react';
import { stylessFilter } from '../../Theme/theme';
import { context } from '../../Context/index.context';
import './filter.css';

export function Filter() {
  const { optionsTheme, hadnleFilter, stateCountries } = useContext(context);
  const { theme } = optionsTheme;
  const { styleSelect } = stylessFilter(theme);
  const { backgroundColor, color } = styleSelect;
  const styleAux = { backgroundColor, color };

  function onFilter(e) {
    const { countries } = stateCountries;
    const region = e.target.value;
    const newFilter = countries.filter((item) => item.region === region);
    hadnleFilter(newFilter);
  }

  return (
    <div className="filter">
      <div className="wrapper" style={styleSelect}>
        <select onChange={(e) => onFilter(e)} name="region" className="filter__box" style={styleAux}>
          <option className="filter__title">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}
