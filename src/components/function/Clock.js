import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [date,setDate] = useState(new Date());
    useEffect(() => {
        const timerId =  setInterval(() => {
            setDate(new Date())
            console.log('cliked')
        }, 1000);
        return () => {
            clearInterval(timerId)
        }
    },[])
    return (
        <div>
            <h1>date : {date.toLocaleTimeString()}</h1>
        </div>
    );
};

export default Clock;