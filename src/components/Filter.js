
import React from 'react';

function Filter({ onFilterChange }) {
  return (
    <div className="filter">
      <button onClick={() => onFilterChange('all')}>All</button>
      <button onClick={() => onFilterChange('inCart')}>In Cart</button>
      <button onClick={() => onFilterChange('notInCart')}>Not In Cart</button>
    </div>
  );
}

export default Filter;
