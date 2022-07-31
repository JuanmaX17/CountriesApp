import React from 'react';
import { Search } from '../Search/index.search';
import { Filter } from '../Filter/index.filter';
import { Searches } from '../Searches/index.searches';
import { Country } from '../Country/index.country';
import { Container } from '../Container/index.container';
import './home.css';

export function Home() {
  return (
    <section className="home">
      <Searches>
        <Search />
        <Filter />
      </Searches>
      <Container>
        <Country />
      </Container>
    </section>
  );
}
