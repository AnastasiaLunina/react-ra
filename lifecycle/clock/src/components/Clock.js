import React from 'react';
import PropTypes from 'prop-types';
import ClockDisplay from './ClockDisplay';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            time: this.onOffsetDate(this.props.zone) 
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    onOffsetDate(zone) {
        const date = new Date();
        const hour = date.getUTCHours() + +zone;
        const minute = date.getUTCMinutes();
        const second = date.getUTCSeconds();
        return {hour, minute, second};
    }

    tick() {
        this.setState(
            { 
                time: this.onOffsetDate(this.props.zone) 
            }
        );
    }

    render() {
        return (
            <li className="clock-list-item">
                <div className="zone-title">{this.props.name}</div>
                <button onClick={() => this.props.onDelete(this.props.id)}>&#10005;</button>
                <div className="clock">
                    <ClockDisplay minute={this.state.time.minute} 
                                  hour={this.state.time.hour} 
                                  second={this.state.time.second}/>
                </div>
            </li>
        )
    }
}

Clock.propTypes = {
    props: PropTypes.object
}

export default Clock;