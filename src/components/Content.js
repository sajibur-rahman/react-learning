import React, { useContext } from 'react';
import { CountContext } from '../App';

const Content = () => {
    const [count,setCount] =  useContext(CountContext);
    return (
        <div>
            <h1>this is content {count}</h1>
            <button onClick={() => setCount((prevState) => prevState + 1)}>increase++</button>
        </div>
    );
};

export default Content;