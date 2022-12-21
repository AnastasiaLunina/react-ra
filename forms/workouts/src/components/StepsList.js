import StepsItem from './StepsItem';
import dateSort from '../utilits/dateSort';
import PropTypes from 'prop-types';

function StepsList({ steps, onDelete, onEdit }) {

    return (
        <>
            <div className="list__title">
                <span>Дата</span>
                <span>Пройдено км</span>
                <span>Действия</span>
            </div>
            <ul className="list">
                {steps
                        .sort((a, b) => dateSort(a.date, b.date))
                        .map((step) => <StepsItem key={step.id} workout={step} onDelete={onDelete} onEdit={onEdit} />)}
            </ul>
        </>
    )    
}

StepsList.propTypes = {
    steps: PropTypes.array,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
}

export default StepsList;