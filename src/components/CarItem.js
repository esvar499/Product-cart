import React from 'react';
import '../App.css'; // Import global styles

const CartItem = ({ item, onRemove }) => {
  return (
    <li className="cart-item">
      {item.name} - {item.quantity} x ${item.price.toFixed(2)}
      <button className="remove-btn" onClick={() => onRemove(item.id)}>Delete</button>
    </li>
  );
};

export default CartItem;
