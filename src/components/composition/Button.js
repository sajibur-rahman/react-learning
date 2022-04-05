import React from 'react';

const Button = ({children}) => {
    const text = 'click me'
    return (
        <button>{children(text)}</button>
    );
};

export default Button;