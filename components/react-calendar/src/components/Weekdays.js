import PropTypes from 'prop-types';

const Weekdays = ({day}) => {
    const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return (
        <div className="ui-datepicker-material-day">
            {weekdays[day]}
        </div>
    )
}
Weekdays.propTypes = {
    day: PropTypes.number
}

export default Weekdays;