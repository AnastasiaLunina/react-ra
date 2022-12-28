import PropTypes from 'prop-types';

function Stock({ stock }) {
    return (
        <li>
            <span>{stock.title}</span>
            <span className="stock__value">{stock.value}</span>
            <span className="stock__value-change">{stock.change}</span>
        </li>
    )
}

Stock.propTypes = {
    stock: PropTypes.object.isRequired
}

export default Stock