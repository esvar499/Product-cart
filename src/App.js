import React from 'react';
import ShoppingCart from './components/ShoppingCart';
import Cards from './components/Cards';
import productsData from './data/productsData';
import './App.css';  // Import the global App.css

function App() {
  return (
    <div className="App">
      <h1>Product Cart</h1>

      {/* Display Products as Cards */}
      <div className="product-list">
        {productsData.map((product) => (
          <Cards key={product.id} product={product} />
        ))}
      </div>

      {/* Shopping Cart Component */}
      <ShoppingCart />
    </div>
  );
}

export default App;
