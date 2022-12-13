import React from 'react';
import PropTypes from 'prop-types';


export default function ProjectList({ projects }) {

  return (
    <div className='project-list'>
        {projects.map((item, id) => <img key={id} 
                                      src={item.img} 
                                      alt={item.category} />)}
    </div>
  )
}

ProjectList.propTypes = {
    projects: PropTypes.array
}
