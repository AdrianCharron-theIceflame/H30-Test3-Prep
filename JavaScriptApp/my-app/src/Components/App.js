import React from 'react';
import '../Styles/App.css';
import Store from './Store';
import productsList from "../data/product.json"

function App() {
  return (
    <div className="App">
      <h1>Super Store</h1>
      <Store products={productsList} />
    </div>
  );
}

export default App;
