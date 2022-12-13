import PropTypes from 'prop-types';

function ShopCard ({ card }) {
    const { name, color, price, img } = card;

    const styles = {
        backgroundImage: `url(${img})`
    }

    return (
        <li className='card' style={styles}>
            <h2 className='card__name'>{name}</h2>
            <div className='card__color'>{color}</div>
            <div className='card__price'>
                <span className='price'>${price}</span>
                <button className='btn'>ADD TO CARD</button>
            </div>
        </li>
    )
}

export default ShopCard;

ShopCard.propTypes = {
    card: PropTypes.object.isRequired
}