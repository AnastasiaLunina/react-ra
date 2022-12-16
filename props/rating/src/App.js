import './App.css';
import Stars from './components/Stars';

function App() {

  let count = 5;

  return (
    <div className="App">
      <Stars count={count}/>
    </div>
  );
}

export default App;
