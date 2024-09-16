import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Product Cart</h1>

        {/* Navigation Links */}
        <nav>
          <Link to="/">Products</Link> | 
          <Link to="/cart">Cart</Link>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={
            <div className="product-list">
              {productsData.map((product) => (
                <Cards key={product.id} product={product} />
              ))}
            </div>
          }/>
          
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
