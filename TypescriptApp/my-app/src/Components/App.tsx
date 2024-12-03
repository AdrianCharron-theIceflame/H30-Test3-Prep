import '../Styles/App.css';
import Store from './Store';
import productsList from '../data/product.json';

function App() {
  return (
    <div className="App">
      <Store products={productsList} />
    </div>
  );
}

export default App;
