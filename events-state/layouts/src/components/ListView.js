import ShopItem from './ShopItem';
import PropTypes from 'prop-types';

function ListView ({ cards }) {
    return (
        <ul className='list'>
            {cards.map((card, index) => <ShopItem key={index} card={card} />)}
        </ul>    
    )
}

export default ListView;

ListView.propTypes = {
    cards: PropTypes.array.isRequired
}