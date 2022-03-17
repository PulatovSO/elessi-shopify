import React from 'react';
import './BestTop.css';

const BestTop = ({ type, setType }) => {
    return (
        <ul className="best__nav-list">
        <li 
            onClick={() => setType('fruits')} 
            className={type === 'fruits' ? "best__item best-active" : "best__item"}>
                Fruits
        </li>
        <li 
            onClick={() => setType('vegetables')} 
            name='vegetables' 
            className={type === 'vegetables' ? "best__item best-active" : "best__item"}>
                vegetables
        </li>
        <li 
            onClick={() => setType('milk')} 
            name='milk' 
            className={type === 'milk' ? "best__item best-active" : "best__item"}>
                milk & cream
        </li>
        <li 
            onClick={() => setType('banana')} 
            name='banana' 
            className={type === 'banana' ? "best__item best-active" : "best__item"}>
                banana
        </li>
        <li 
            onClick={() => setType('sea')} 
            name='sea' 
            className={type === 'sea' ? "best__item best-active" : "best__item"}>
                sea food
        </li>
    </ul>
    );
}

export default BestTop;
