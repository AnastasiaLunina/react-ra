import PropTypes from 'prop-types';

function Card({ note, onDelete }) {
    return (
        <div className="card">
            <button className="delete-btn" onClick={() => onDelete(note.id)}>&#10005;</button>
            <div className="text">{note.content}</div>
        </div>
    )
}

Card.propTypes = {
    note: PropTypes.object,
    onDelete: PropTypes.func
}

export default Card;