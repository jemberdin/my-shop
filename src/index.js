import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products-context';
import { FilterProvider } from './context/filter-context';

const app = (
  <BrowserRouter>
    <ProductsProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ProductsProvider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
