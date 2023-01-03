import PropTypes from 'prop-types';

function ClockDisplay({ hour, minute, second }) {

    const hourAngle = hour * 30 + (minute * 6 / 12);
    const minuteAngle = minute * 6;
    const secondAngle = second * 6;

    return (
        <>
            <div className="hour-hand-container">
                <div className="hour-hand" style={{transform: `rotateZ(${hourAngle}deg)`}}></div>
            </div>
            <div className="min-hand-container">
                <div className="min-hand" style={{transform: `rotateZ(${minuteAngle}deg)`}}></div>
            </div>
            <div className="sec-hand-container">
                <div className="sec-hand" style={{transform: `rotateZ(${secondAngle}deg)`}}></div>
            </div>
        </>
    )
}

ClockDisplay.propTypes ={
    h: PropTypes.number,
    min: PropTypes.number,
    sec: PropTypes.number    
}

export default ClockDisplay;