import React from 'react';
import './searches.css';

// eslint-disable-next-line react/prop-types
function Searches({ children }) {
  return (
    <div className="searches">
      {children}
    </div>
  );
}

export default React.memo(Searches);
