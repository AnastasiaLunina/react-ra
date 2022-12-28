import React from 'react'

function Cards(props) {
  return (
    <div className="card" style={{width: '18rem', marginTop: '2rem'}}>
        {props.children}
        <div className='card-body'>
            <h5 className='card-title'>{props.title}</h5>
            <p className='card-text'>{props.text}</p>
            <button className='btn btn-primary'>Go somewhere</button>
        </div>
    </div>
  )
}

export default Cards;
