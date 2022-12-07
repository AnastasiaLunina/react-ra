import PropTypes from 'prop-types';

const GenitiveMonths = ({month}) => {
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    return (
        <div className="ui-datepicker-material-month">
            {months[month]}
        </div>
    )
}

GenitiveMonths.propTypes = {
    month: PropTypes.number
}

export default GenitiveMonths;