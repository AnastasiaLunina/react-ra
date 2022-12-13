import Store from './components/Store';
import products from './products';
import './App.css';


function App() {
  return (
    <div className="App">
      <Store products={products} />  
    </div>
  );
}

export default App;
