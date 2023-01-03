import { useState } from "react";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function ClockForm({ onAdd }) {
    const [form, setForm] = useState({ name: '', zone: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.name.trim() === '' || form.zone.trim() === '') return null

        const clock = { id: uuidv4(), ...form };
        onAdd(clock)

        setForm({ name: '', zone: '' });
    }

    const onAddClock = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({...prevForm, [name]: value }));
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>
                <input name="name" 
                       value={form.name} 
                       onChange={onAddClock}
                       placeholder="Time zone name"></input>
            </label>
            <label>
                <input name="zone" 
                       type="number" 
                       value={form.zone} 
                       onChange={onAddClock}
                       placeholder="Time zone difference from GMT"></input>
            </label>
            <button type="submit">Add</button>
        </form>
    )
}

ClockForm.propTypes = {
    onAdd: PropTypes.func
}

export default ClockForm;