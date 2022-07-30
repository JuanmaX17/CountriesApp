import React from 'react';
import './flag.css';

// eslint-disable-next-line react/prop-types
export function Flag({ flagImg }) {
  return (
    <figure className="flag">
      <img className="flag__img" src={flagImg} alt="flag" />
    </figure>
  );
}
