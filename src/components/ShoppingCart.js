import React, { useReducer } from 'react';
import CartForm from './CartForm';
import CartList from './CartList';
import '../App.css'; // Remove individual CSS import and use global App.css

const initialCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.quantity;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.payload.quantity,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case 'REMOVE_ITEM':
      const updatedItemsAfterRemoval = state.items.filter(
        (item) => item.id !== action.payload
      );

      const updatedTotalAmountAfterRemoval = updatedItemsAfterRemoval.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      return {
        items: updatedItemsAfterRemoval,
        totalAmount: updatedTotalAmountAfterRemoval,
      };

    case 'CLEAR_CART':
      return initialCartState;

    default:
      return state;
  }
}

const ShoppingCart = () => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCartHandler = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <CartForm onAddItem={addItemToCartHandler} />
      <CartList items={cartState.items} onRemove={removeItemFromCartHandler} />
      <p>Total Amount: ${cartState.totalAmount.toFixed(2)}</p>
      <button className="clear-cart-btn" onClick={clearCartHandler}>Clear Cart</button>
    </div>
  );
};

export default ShoppingCart;
