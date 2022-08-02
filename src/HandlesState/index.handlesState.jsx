import { getSearch } from '../servicies/index.servicies';

export function configState(states) {
  const {
    setCountries,
    setCountriesFilter,
    countries,
    countriesFilter,
    setTheme,
    theme,
  } = states;

  function hadnleTheme() {
    const opTheme = theme === 'Dark' ? 'Ligth' : 'Dark';
    setTheme(opTheme);
  }

  function handleCountries(input) {
    return getSearch(input).then((data) => {
      setCountriesFilter(false);
      setCountries(data);
    });
  }

  function handleCountryShow(input) {
    setCountries(input);
  }

  function handlesetCountry(input, toEmpty) {
    setCountriesFilter(false);
    handleCountryShow(input);
    toEmpty();
  }

  function hadnleFilter(newFilter) {
    setCountriesFilter(newFilter);
  }
  const value = {
    optionsTheme: {
      hadnleTheme,
      theme,
    },
    stateCountries: {
      countries,
      handleCountries,
    },
    handlesetCountry,
    hadnleFilter,
    countriesFilter,
    handleCountryShow,

  };

  return value;
}
