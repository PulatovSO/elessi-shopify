import React from 'react';
import './Block.css';

const Block = ({color}) => {
    return (
        <div className={`${color}`}></div>
    );
}

export default Block;
