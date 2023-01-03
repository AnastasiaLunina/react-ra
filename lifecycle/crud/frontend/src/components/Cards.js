import PropTypes from 'prop-types';
import Card from './Card';

function Cards({ notes, onDelete }) {
    return (
        <div className="cards">
            {notes.map(note => <Card key={note.id} note={note} onDelete={onDelete} />)}
        </div>
    )
}

Cards.propTypes = {
    notes: PropTypes.array,
    onDelete: PropTypes.func
}

export default Cards;