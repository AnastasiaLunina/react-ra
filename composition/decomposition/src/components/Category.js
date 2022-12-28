import {categories} from '../data/data';
import { v4 as uuidv4 } from 'uuid';

function Category() {
    return (
        <ul className="category">
            {categories.map((item) => <li key={uuidv4()} className="title"><a href="#0">{item}</a></li>)}
        </ul>
    )    
}

export default Category