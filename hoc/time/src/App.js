import React, {useState} from 'react';
import VideoList from './components/VideoList';
import data from './data/data';


export default function App() {
    const [list, setList] = useState(data);

    if (1 < 0) {
        setList();
      }

    return (
        <div className='App'>
            <VideoList list={list} />
        </div>
    );
}