import PropTypes from 'prop-types';

function Typing({ from, message }) {
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online material-icons">circle</i>{from.name}</span>
                <span className="message-data-time">{message.time}</span>
                <div>
                    <i className="fa fa-circle online material-icons">circle</i>
                    <i className="fa fa1 fa-circle online material-icons">circle</i>
                    <i className="fa fa2 fa-circle online material-icons">circle</i>
                </div>
            </div>
        </li>
    )    
}

Typing.propTypes = {
    from: PropTypes.object,
    message: PropTypes.object
}

export default Typing;
