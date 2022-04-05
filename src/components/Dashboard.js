import React, { useContext } from 'react';
import { CountContext } from '../App';
import Button from './composiotion/Button';
import Text from './composiotion/Text';

const Dashboard = () => {
    const [count,setCount] = useContext(CountContext);
    return (
        <div>
            <h1>this is dashboard {count}</h1>
            <Button>
                {
                    (text) => <Text text={text}/>
                }
            </Button>
        </div>
    );
};

export default Dashboard;