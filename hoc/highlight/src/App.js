import React, { useState } from 'react';
import List from './components/List';
import data from './data/data';

export default function App() {
    const [list] = useState(data);

    return (
        <List list={list} />
    );
}
