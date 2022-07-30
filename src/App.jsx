import React, { useState, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Navbar } from './components/Navbar/index.navbar';
import { context } from './Context/index.context';
import { stylessApp } from './Theme/theme';
import { getSearch } from './servicies/index.servicies';
import { CountryDetail } from './components/CountryDetail/index.countryDetail';
import { Home } from './components/Home/index.home';
import './App.css';

function App() {
  const [theme, setTheme] = useState('Dark');
  const [countries, setCountries] = useState([]);
  const [countriesFilter, setCountriesFilter] = useState(false);
  const { styleApp } = stylessApp(theme);

  function hadnleTheme() {
    const opTheme = theme === 'Dark' ? 'Ligth' : 'Dark';
    setTheme(opTheme);
  }

  function handleCountries(input) {
    getSearch(input).then((data) => {
      setCountriesFilter(false);
      setCountries(data);
    });
  }

  function handlesetCountry(input, toEmpty) {
    setCountriesFilter(false);
    setCountries(input);
    toEmpty();
  }

  function hadnleFilter(newFilter) {
    setCountriesFilter(newFilter);
  }

  const value = useMemo(() => ({
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

  }));

  return (
    <div className="app" style={styleApp}>
      <context.Provider value={value}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<CountryDetail />} />
          </Routes>
        </Router>
      </context.Provider>
    </div>
  );
}

export default App;
