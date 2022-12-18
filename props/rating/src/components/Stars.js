import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Star from './Star';

export default function Stars({ count }) {

    let starsArray = [];

    if (count > 0 && count < 6 && parseInt(count)) {
        starsArray = Array(count).fill('star')
    } else {
        return null;
    }

    const starsArrayIndex = starsArray.map(star => (
        {id: uuidv4(), ...star})) 

    return (
        <ul className="card-body-stars u-clearfix">
            {starsArrayIndex.map((star) => <Star key={star.id}/>)}
        </ul>
    )
}
