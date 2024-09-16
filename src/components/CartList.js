import React from 'react';
import CartItem from './CarItem';
import '../App.css'; 

const CartList = ({ items, onRemove }) => {
  return (
    <ul className="cart-list">
      {items.map((item) => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default CartList;
