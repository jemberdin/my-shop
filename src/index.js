import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products-context';
import { FilterProvider } from './context/filter-context';
import { CartProvider } from './context/cart-context';
import { AuthProvider } from './context/auth-context';

const app = (
  <BrowserRouter>
    <AuthProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </AuthProvider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
