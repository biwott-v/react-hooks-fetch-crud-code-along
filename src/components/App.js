
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';
import Filter from './Filter';

function App() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="App">
      <Header />
      <Filter onFilterChange={setFilter} />
      <ShoppingList filter={filter} />
    </div>
  );
}

export default App;
