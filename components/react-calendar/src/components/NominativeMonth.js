import PropTypes from 'prop-types';

const NominativeMonth = ({month}) => {
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    return (
        <span className="ui-datepicker-month">
            {months[month]}
        </span>
    )
}

NominativeMonth.propTypes = {
    month: PropTypes.number
}

export default NominativeMonth;