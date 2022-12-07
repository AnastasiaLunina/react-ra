import './App.css';
import Calendar from './components/Calendar';

function App() {

  const date = new Date()

  return (
    <div className="App">
      <Calendar date={date}/>
    </div>
  );
}

export default App;
