import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

export default function Toolbar(props) {
    const { filters, selected } = props;

  return (
    <div className='toolbar'>
        {
            filters.map((button, index) => 
                <Button 
                    key={index}
                    button={button}
                    index={index}
                    selected={selected}
                    onSelectFilter={props.onSelectFilter}/>
            )
        }
    </div>
  )
}

Toolbar.propTypes = {
    filters: PropTypes.array,
    selected: PropTypes.string
}

