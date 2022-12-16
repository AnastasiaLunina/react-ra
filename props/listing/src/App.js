import './App.css';
import data from './data/data.json';
import Listing from './components/Listing';

function App() {

  // const obj = JSON.parse(data);

  return (
    <div className="item-list">
      <Listing items={data}/>
    </div>
  );
}

export default App;
