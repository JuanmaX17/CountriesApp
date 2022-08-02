import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { configState } from './HandlesState/index.handlesState';
import { Navbar } from './components/Navbar/index.navbar';
import { context } from './Context/index.context';
import { stylessApp } from './Theme/theme';
import { CountryDetail } from './components/CountryDetail/index.countryDetail';
import { Home } from './components/Home/index.home';
import { Footer } from './components/Footer/index.footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('Dark');
  const [countries, setCountries] = useState([]);
  const [countriesFilter, setCountriesFilter] = useState(false);
  const { styleApp } = stylessApp(theme);
  const config = {
    countries,
    setCountries,
    countriesFilter,
    setCountriesFilter,
    setTheme,
    theme,
  };
  const value = configState(config);

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
        <Footer />
      </context.Provider>
    </div>
  );
}

export default App;
