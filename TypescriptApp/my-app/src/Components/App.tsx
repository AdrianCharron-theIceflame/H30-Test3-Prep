import '../Styles/App.css';
import Store from './Store';

export default function App() {
  return (
    <div className="App">
      <h1>Super Store</h1>
      <Store products={productsList} />
    </div>
  );
}
