import React from 'react';
import PropTypes from 'prop-types';
import Weekdays from './Weekdays';
import GenitiveMonths from './GenitiveMonths';
import NominativeMonth from './NominativeMonth';
import MonthGrid from './MonthGrid';

const Calendar = ({date}) => {
    const fullDate = {
        year: date.getFullYear(),
        month: date.getMonth(),
        weekday: date.getDay(),
        currentDay: date.getDate(),
    }
    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <Weekdays day={fullDate.dayWeek}/>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{fullDate.day}</div>
                    <GenitiveMonths month={fullDate.month} />
                    <div className="ui-datepicker-material-year">{fullDate.year}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <NominativeMonth month={fullDate.month} />&nbsp;<span className="ui-datepicker-year">{fullDate.year}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="ui-datepicker-week-end" />
                    <col className="ui-datepicker-week-end" />
                </colgroup>
                <thead>
                <tr>
                    <th scope="col" title="Понедельник">Пн</th>
                    <th scope="col" title="Вторник">Вт</th>
                    <th scope="col" title="Среда">Ср</th>
                    <th scope="col" title="Четверг">Чт</th>
                    <th scope="col" title="Пятница">Пт</th>
                    <th scope="col" title="Суббота">Сб</th>
                    <th scope="col" title="Воскресенье">Вс</th>
                </tr>
                </thead>
                    <MonthGrid fullDate={fullDate} />   
            </table>
        </div>
    );
}

Calendar.proptTypes = {
    date: PropTypes.instanceOf(Date)
}

export default Calendar;