import React, { useContext, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { stylessSearch } from '../../Theme/theme';
import { context } from '../../Context/index.context';
import { getSearch } from '../../servicies/index.servicies';
import { ResultsSearch } from '../ResultsSearch/index.resultsSearch';
import './search.css';

function handleInput(element, setSearches) {
  const input = element.current.value;
  if (input.length < 3 && input.length !== 0) return;
  if (input.length < 1) {
    setSearches([]);
    return;
  }
  getSearch(input).then((data) => setSearches(data.slice(0, 10)));
}

function handleSearch(element, toSearch, setSearches, e) {
  e?.preventDefault();
  const elementCurrent = element.current ?? { value: element };
  toSearch(elementCurrent.value);
  elementCurrent.value = '';
  setSearches([]);
}
function toEmpty(element, reset) {
  const elementCurrent = element.current;
  elementCurrent.value = '';
  reset([]);
}

export function Search() {
  const refInput = useRef();
  const [searches, setSearches] = useState([]);
  const { optionsTheme, stateCountries } = useContext(context);
  const { theme } = optionsTheme;
  const { handleCountries: toSearch } = stateCountries;
  const { styleBox, styleInput } = stylessSearch(theme);
  window.onclick = () => {
    if (refInput?.current?.value < 3) return;
    setSearches([]);
  };
  return (
    <>
      <form className="box shadow" style={styleBox} onSubmit={(e) => handleSearch(refInput, toSearch, setSearches, e)}>
        <BsSearch className="box__icon" onClick={() => handleSearch(refInput, toSearch, setSearches)} />
        <input
          onChange={() => handleInput(refInput, setSearches)}
          ref={refInput}
          style={styleInput}
          className="box__search"
          placeholder="Search for a country in english..."
        />
      </form>
      <ResultsSearch input={searches} toEmpty={() => toEmpty(refInput, setSearches)} />
    </>
  );
}
