import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ClockDisplay from './ClockDisplay';

function Clock(props) {

    const [time, setTime] = useState(onOffsetDate(props.zone));

    useEffect(() => {
        const timerID = setInterval(() => {
          tick();
        }, 1000);
        return () => clearInterval(timerID);
      // eslint-disable-next-line
      }, []);

    function onOffsetDate(zone) {
        const date = new Date();
        const hour = date.getUTCHours() + +zone;
        const minute = date.getUTCMinutes();
        const second = date.getUTCSeconds();
        return {hour, minute, second};
    }

    function tick() {
        setTime(
            {time: onOffsetDate(props.zone)}
        );
    }

    return (
            <li className="clock-list-item">
                <div className="zone-title">{props.name}</div>
                <button onClick={() => props.onDelete(props.id)}>&#10005;</button>
                <div className="clock">
                    <ClockDisplay minute={time.minute} 
                                  hour={time.hour} 
                                  second={time.second}/>
                </div>
            </li>
        )
}

Clock.propTypes = {
    props: PropTypes.object
}

export default Clock;