import './App.css';
import Cards from './components/Cards';
import { cardWithImage, cardWithoutImage } from './data';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="cards">
      <Cards {...cardWithImage}>{<img src={cardWithImage.img} className='card-img-top' alt={cardWithImage.title}/>}</Cards>
      <Cards {...cardWithoutImage} />
    </div>
  );
}

export default App;
