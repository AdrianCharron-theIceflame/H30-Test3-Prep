import '../Styles/App.css';
import Store from './Store';
import productsList from '../data/product.json';

export default function App() {
  return (
    <div className="App">
      <h1>Super Store</h1>
      <Store products={productsList} />
    </div>
  );
}
