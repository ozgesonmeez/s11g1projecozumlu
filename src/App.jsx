import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { data } from './data';

import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContextProvider from './contexts/ProductContext';
import CartContextProvider from './contexts/CartContext';

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekle
  };

return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>

       
        <Navigation/>
        
        <main className="content">
         
          <Route exact path="/" component={Products}>
            <Products />
          </Route>

          <Route path="/cart" component={ShoppingCart}>
            <ShoppingCart/>
          </Route>
        </main>
         </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
