import PropTypes from 'prop-types';

function Message({ from, message }) {
    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{from.name}</span>
                <i className="fa fa-circle me material-icons">circle</i>
            </div>
            <div className="message other-message float-right">{message.text}</div>
        </li>
    )
}

Message.propTypes = {
    from: PropTypes.object,
    message: PropTypes.object
}

export default Message;