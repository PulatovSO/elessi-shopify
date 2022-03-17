import React, { useState, useEffect } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(14350);
    const [hourState, setHourState] = useState(0);
    const [minuteState, setMinuteState] = useState(0);
    const [secondState, setSecondState] = useState(0);

    setTimeout(() => {
        setCount(count - 1)
    }, 1000);
    
    useEffect(() => {
        setHourState(Math.floor(count / 3600));
        setMinuteState(Math.floor((count - (hourState * 3600)) / 60));
        setSecondState(count - (hourState * 3600) - (minuteState * 60));
    }, [count]);

    return (
        <div className='counter'>
            <div className="counter__block">0 <span>days</span></div>
            <div className="counter__block">{hourState} <span>hr</span></div>
            <div className="counter__block">{minuteState} <span>min</span></div>
            <div className="counter__block">{secondState === -1 ? '60' : secondState} <span>sc</span></div>
        </div>
    );
}

export default Counter;
