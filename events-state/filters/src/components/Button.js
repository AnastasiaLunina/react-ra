import React from 'react';
import PropTypes from 'prop-types';


export default function Button({ button, index, selected, onSelectFilter }) {
    let isDone = false;

    if (button === selected) {
        isDone = true;
    }

    return (
    <>
        <button key={index}
                className={isDone ? 'done btn' : 'btn'}
                onClick={() => onSelectFilter(button)}>
            {button}
        </button>
    </>
  )
}

Button.propTypes = {
    button: PropTypes.string, 
    index: PropTypes.number,
    selected: PropTypes.string,
    onSelectFilter: PropTypes.func
}
