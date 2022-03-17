import React, { useState } from 'react';
import './ModalButtons.css';

const Modalbuttons = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='modal__buttons buttons'>
            <div className="buttons__inner">
                <div className="buttons__count">
                    <button className="buttons__btn" onClick={() => count > 0 ? setCount(count - 1) : null}>-</button>
                    <p>{count}</p>
                    <button className="buttons__btn" onClick={() => setCount(count + 1)}>+</button>
                </div>
                <button className="buttons__add">add to cart</button>
            </div>
            <p className="buttons__or">or</p>
            <button className="buttons__buy">Buy it now</button>
        </div>
    );
}

export default Modalbuttons;
