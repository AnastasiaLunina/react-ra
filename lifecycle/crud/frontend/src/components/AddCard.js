import { useState } from 'react';
import PropTypes from 'prop-types';

function AddCard({ onAdd }) {
    const [text, setText] = useState({value: ''});

    const onAddText = (e) => {
        setText({ value: e.target.value });
    }

    const handleClick = (e) => {
        if (text.value.trim() === '') return null

        onAdd(text.value);
        setText({ value: '' });
    }

    return (
        <div className="add-card">
            <h2>New Note</h2>
            <div className="textarea-container">
                <textarea className="textarea" value={text.value} onChange={onAddText}></textarea>
                <button type="button" className="add-btn" onClick={handleClick}></button>
            </div>
        </div>
    )
}

AddCard.propTypes = {
    onAdd: PropTypes.func
}

export default AddCard;