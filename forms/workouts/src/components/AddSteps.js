import { useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

function AddSteps({ handleAdd, edit }) {

    const [form, setForm] = useState({ date: '', distance: '' });

    if (Object.keys(edit).length !== 0 && form.id !== edit.id) {
        setForm({ id: edit.id, date: edit.date, distance: edit.distance})
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.date.trim() === '' || form.date.length !== 10 || form.distance.trim() === '' || !Number(form.distance)) {
            return null;    
        }
        
        const workout = { id: uuid(), ...form };
        handleAdd(workout)
        setForm({ date: '', distance: '' })
    }

    const onAddSteps = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({...prevForm, [name]: value})); 
    }

    return (
            <form className="form" onSubmit={onSubmit}>
                <label>
                    <span>Дата</span>
                    <input className="input" name="date" type="date"  value={form.date} onChange={onAddSteps}></input>
                </label>
                <label>
                    <span>Пройдено км</span>
                    <input className="input" name="distance" value={form.distance} onChange={onAddSteps}></input>
                </label>
                <button className="submit-button" type="submit">OK</button>    
            </form>
    )    
}

AddSteps.propTypes = {
    onAdd: PropTypes.func,
    workoutEdit: PropTypes.object
}

export default AddSteps