import React from "react";
import '../App.css'; // Only need App.css for styling

const Cards = ({ product }) => {
  return (
    <div className="card">
      <p className="product-name">{product.name}</p>
      <p className="product-description">{product.shortDescription}</p>
      <p className="product-rating">Rating: {product.rating}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default Cards;
