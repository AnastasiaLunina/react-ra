import PropTypes from 'prop-types';

const MonthGrid = ({fullDate}) => {
    const currentMonthStart = new Date(fullDate.year, fullDate.month);
    const nextMonthDays = new Date(fullDate.year, fullDate.month + 1);
    const previousMonthDays = new Date(fullDate.year, fullDate.month - 1);
    const currentMonthDays = (nextMonthDays - currentMonthStart) / (1000 * 3600 * 24);
    const daysInNextMonth = Math.round((currentMonthStart - previousMonthDays) / (1000 * 3600 * 24));
    const index = (currentMonthStart.getDay() + 6) % 7;

    let id = 1;
    let activeDay = 1 - index;
    let notActiveDay = 1;

    const table = [];

    for (let i = 0; i < 5; i++) {
        let tableRow = [];

        for (let j = 0; j < 7; j++) {
            if (activeDay === fullDate.day) {
                tableRow.push(<td key={id} className="ui-datepicker-today">{activeDay}</td>)
                id++
            } else if (activeDay > 0 && activeDay <= currentMonthDays) {
                tableRow.push(<td key={id}>{activeDay}</td>)
                id++
            } else {
                tableRow.push(<td key={id} className="ui-datepicker-other-month">
                            {activeDay <= 0 ? daysInNextMonth + activeDay : (notActiveDay, notActiveDay++)}
                        </td>);
                id++
            }            
            activeDay++;
        }
        table.push(<tr key={id}>{tableRow}</tr>)
        id++
    }

    return (
        <tbody>{table}</tbody>
    )
}

MonthGrid.propTypes = {
    fullDate: PropTypes.shape({
        year: PropTypes.number,
        month: PropTypes.number,
        weekday: PropTypes.number,
        currentDay: PropTypes.number,
    })
}

export default MonthGrid;