import ClockForm from './ClockForm';
import Clocks from './Clocks';
import Samples from './Samples';
import { useState } from "react";

function WorldClock() {
    const [ clocks, setClocks ] = useState([]);

    const handleAdd = clock => {
        setClocks(prevClocks => [...prevClocks, clock]);
    }

    const onDelete = id => setClocks(clocks.filter(clock => clock.id !== id))

    return (
        <div> 
                        <Samples />

            <ClockForm onAdd={handleAdd} />
            <Clocks clocks={clocks} onDelete={onDelete} />
        </div>
    )
}

export default WorldClock;