import ShopCard from './ShopCard';
import PropTypes from 'prop-types';

function CardsView({ cards }) {
    return (
        <ul className='cards'>
            {cards.map((card, index) => <ShopCard key={index} card={card} />)}
        </ul>
    )
}

export default CardsView;

CardsView.propTypes = {
    cards: PropTypes.array.isRequired
}
