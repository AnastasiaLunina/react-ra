import { useState } from 'react';
import StepsList from './StepsList';
import AddSteps from './AddSteps';

function Steps() {
    const [steps, setSteps] = useState([]);
    const [edit, setEdit] = useState({});
    
    const handleAdd = (step) => {
        setEdit({})

        if (steps.some(item => item.date === step.date)) {
            setSteps(prev => prev.map(item => {
                if (item.date === step.date) {
                    return {id: step.id, date: item.date, distance: +item.distance + +step.distance}
                }
                return item
            }))   
        } else {
            setSteps(prev => [...prev, step])
        }
    };

    const onDelete = id => {
        setSteps(steps.filter(item => item.id !== id));
    }

    const onEdit = id => {
        const item = steps.find(item => item.id === id);
        setEdit(item);
        onDelete(id);
    }

    return (
        <>  
            <AddSteps handleAdd={handleAdd} edit={edit} />
            <StepsList steps={steps} onDelete={onDelete} onEdit={onEdit} />
        </>
    )
}

export default Steps;