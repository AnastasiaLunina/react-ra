import PropTypes from 'prop-types';
import moment from 'moment';

function DateTimePretty(Component) {
    return function(props) {
        const date = moment(props.date, 'YYYYMMDDhhmm').fromNow();

        return <Component {...props} date={date} />
    }
}

DateTimePretty.propTypes = {
    date: PropTypes.string
}

export default DateTimePretty;