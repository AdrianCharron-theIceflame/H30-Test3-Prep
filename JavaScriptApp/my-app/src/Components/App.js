import React, { useEffect, useState } from 'react';
import '../Styles/App.css';
import Store from './Store';

function App() {
  const [productsList, setProductList] = useState([])
  useEffect(() => {

    // IIFE: for those that remember Web II
    // function is defined and invoked at the same time
    (async function () {
      setProductList(await fetch(`products`)
        .then(res => res.json())
        .then(data => data)
      )
    })()

    // // Or: named function
    // // First, declare function
    // async function fetchProductList() {
    //   setProductList(await fetch(`products`)
    //     .then(res => res.json())
    //     .then(data => data)
    //   )
    // }
    // // Then call function
    // fetchProductList()

  }, []) // Must declare empty dependency array if you want to avoid infinite loop!
  return (
    <div className="App">
      <h1>Super Store</h1>
      <Store products={productsList} />
    </div>
  );
}

export default App;
