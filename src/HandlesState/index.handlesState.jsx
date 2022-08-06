import { getSearch } from '../servicies/index.servicies';

export function configState(states) {
  const {
    setCountries,
    countries,
    setTheme,
    theme,
  } = states;

  function hadnleTheme() {
    const opTheme = theme === 'Dark' ? 'Ligth' : 'Dark';
    setTheme(opTheme);
  }

  function handleCountries(input) {
    return getSearch(input).then((data) => {
      setCountries(data);
    });
  }

  function handleCountryShow(input) {
    setCountries(input);
  }

  function handlesetCountry(input, toEmpty) {
    handleCountryShow(input);
    toEmpty();
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
    handleCountryShow,

  };

  return value;
}
