import PropTypes from 'prop-types';

export default function ShopItem({ card }) {
    const { name, color, price, img } = card;

    const styles = {
        backgroundImage: `url(${img})`
    }

    return (
        <li className='item' style={styles}>
            <div className='img'></div>
            <h2 className='card__name'>{name}</h2>
            <div className='card__color'>{color}</div>
            <span className='price'>${price}</span>
            <button className='btn'>ADD TO CARD</button>
        </li>
    )
}

ShopItem.propTypes = {
    card: PropTypes.object.isRequired
}