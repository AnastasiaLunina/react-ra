import Stock from './Stock';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function Stocks({ stocks }) {
    return (
        <ul className="stocks">
            {stocks.map((stock) => <Stock key={uuidv4()} stock={stock} />)}
            <li className="stock__value-change">...</li>
        </ul>
    )
}

Stocks.propTypes = {
    stocks: PropTypes.array.isRequired
}

export default Stocks;