function Item({ item, onUpdateItem, onDeleteItem }) {
  const { id, name, category, isInCart } = item;

  const handleAddToCartClick = () => {
    onUpdateItem({
      ...item,
      isInCart: !isInCart
    });
  };

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        className={isInCart ? 'remove' : 'add'}
        onClick={handleAddToCartClick}
      >
        {isInCart ? 'Remove From' : 'Add to'} Cart
      </button>
      <button 
        className="delete" 
        onClick={() => onDeleteItem(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Item;