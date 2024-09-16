import React, { useState } from 'react';
import '../App.css'; // Remove individual CSS import and use global App.css

const CartForm = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);

  const submitHandler = (event) => {
    event.preventDefault();

    const newItem = {
      id: Math.random().toString(),
      name: itemName,
      price: parseFloat(itemPrice),
      quantity: parseInt(itemQuantity, 10),
    };

    onAddItem(newItem);
    setItemName('');
    setItemPrice('');
    setItemQuantity(1);
  };

  return (
    <form onSubmit={submitHandler} className="cart-form">
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Item Price"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
      />
      <input
        type="number"
        min="1"
        placeholder="Quantity"
        value={itemQuantity}
        onChange={(e) => setItemQuantity(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default CartForm;
