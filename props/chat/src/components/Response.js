import PropTypes from 'prop-types';

function Response ({ from, message }) {
    return (
        <li>
            <div className="message-data">
            <span className="message-data-name"><i className="fa fa-circle online material-icons">circle</i>{from.name}</span>
            <span className="message-data-time">{message.time}</span>
            </div>
            <div className="message my-message">{message.text}</div>
        </li>
    )   
}

Response.propTypes = {
    from: PropTypes.object,
    message: PropTypes.object
}

export default Response;
