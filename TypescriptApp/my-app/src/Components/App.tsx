import { useEffect, useState } from 'react';
import '../Styles/App.css';
import Store from './Store';

type ProductListType = {
  ProductId: number,
  StockNumber: string,
  Description: string,
  Inventory: number,
  Cost: number
}[]

export default function App() {
  const [productsList, setProductsList] = useState<ProductListType | null>(null)
  useEffect(() => {
    (async function () {
      setProductsList(await fetch(`/products`)
        .then(res => res.json())
        .then(data => data)
      )
    })()
  }, [])
  return (
    <div className="App">
      <h1>Super Store</h1>
      {productsList != null ? <Store products={productsList as ProductListType} /> : <h2>We're sorry, we could not find the list of products!</h2>}
    </div>
  );
}
