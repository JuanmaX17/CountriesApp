import React from 'react';
import './container.css';

// eslint-disable-next-line react/prop-types
export function Container({ children }) {
  return (
    <section className="container">
      {children}
    </section>
  );
}
