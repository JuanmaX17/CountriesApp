import React, { useState, useCallback } from 'react';
import Search from '../Search/index.search';
import Filter from '../Filter/index.filter';
import Searches from '../Searches/index.searches';
import { Country } from '../Country/index.country';
import { Container } from '../Container/index.container';
import './home.css';

export function Home() {
  const [countriesFilter, setCountriesFilter] = useState(false);

  const handleFilter = useCallback((filter) => setCountriesFilter(filter), []);
  return (
    <section className="home">
      <Searches>
        <Search handleFilter={handleFilter} />
        <Filter handleFilter={handleFilter} />
      </Searches>
      <Container>
        <Country countriesFilter={countriesFilter} />
      </Container>
    </section>
  );
}
