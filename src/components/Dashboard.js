import React, { useContext } from 'react';
import { CountContext } from '../App';

const Dashboard = () => {
    const [count,setCount] = useContext(CountContext);
    return (
        <div>
            <h1>this is dashboard {count}</h1>
        </div>
    );
};

export default Dashboard;