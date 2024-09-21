import React from 'react';
import ShoppingCart from './components/ShoppingCart';
import Cards from './components/Cards';
import productsData from './data/productsData';
import './App.css';  
import Layout from './components/layout';
function App() {
  return (
    <div className="App">
      <h1>Product Cart</h1>
      <div className="product-list">
        {productsData.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>
      <ShoppingCart />
    </div>
  );
}

export default App;
