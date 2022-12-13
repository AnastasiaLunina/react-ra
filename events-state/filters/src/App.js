import Portfolio from './components/Portfolio';
import data from './components/data';

import './App.css';

function App() {

  return (
    <div className='App'>
      <Portfolio data={data} />
    </div>
  );
}

export default App;
