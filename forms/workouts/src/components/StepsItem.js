import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faXmark } from '@fortawesome/free-solid-svg-icons'

function StepsItem({ workout, onDelete, onEdit }) {
    const { id, date, distance } = workout;

    return (
        <li className="item">
            <span>{date}</span>
            <span>{distance}</span>
            <div>
                <button onClick={() => onEdit(id)}>
                    <FontAwesomeIcon icon={faPencil} />
                </button>
                <button onClick={() => onDelete(id)}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
        </li>
    )   
}

StepsItem.propTypes = {
    workout: PropTypes.object,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
}

export default StepsItem