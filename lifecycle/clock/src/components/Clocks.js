import Clock from './Clock';
import PropTypes from 'prop-types';

function Clocks({ clocks, onDelete }) {
    return (
        <ul className="clock-list">
            {clocks.map(clock => <Clock key={clock.id} {...clock} onDelete={onDelete} />)}
        </ul>
    )
}

Clocks.propTypes = {
    clocks: PropTypes.array,
    onDelete: PropTypes.func
}

export default Clocks;