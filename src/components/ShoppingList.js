import { useState, useEffect } from 'react';
import Item from './Item';
import ItemForm from './ItemForm';

function ShoppingList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then(r => r.json())
      .then(data => setItems(data));
  }, []);

  const handleAddItem = (newItem) => {
    fetch('http://localhost:3000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then(r => r.json())
      .then(newItem => setItems([...items, newItem]));
  };

  const handleUpdateItem = (updatedItem) => {
    fetch(`http://localhost:3000/items/${updatedItem.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })
      .then(r => r.json())
      .then(updatedItem => {
        setItems(items.map(item => 
          item.id === updatedItem.id ? updatedItem : item
        ));
      });
  };

  const handleDeleteItem = (id) => {
    fetch(`http://localhost:3000/items/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setItems(items.filter(item => item.id !== id));
      });
  };

  return (
    <div className="ShoppingList">
      <ItemForm onAddItem={handleAddItem} />
      <ul className="Items">
        {items.map(item => (
          <Item
            key={item.id}
            item={item}
            onUpdateItem={handleUpdateItem}
            onDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;