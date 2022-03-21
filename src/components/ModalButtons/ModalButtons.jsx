import React, { useState } from 'react';
import './ModalButtons.css';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';

const Modalbuttons = ({ current, addedBadge, setAddedBadge }) => {
    const {cart, setCart} = useContext(CartContext);
    const [count, setCount] = useState(1);

    const addToCart = (count) => {
            setCart([...cart, current]);
            setAddedBadge(true)
    }

    return (
        <div className='modal__buttons buttons'>
            <div className="buttons__inner">
                <div className="buttons__count">
                    <button className="buttons__btn" onClick={() => count > 0 ? setCount(count - 1) : null}>-</button>
                    <p>{count}</p>
                    <button className="buttons__btn" onClick={() => setCount(count + 1)}>+</button>
                </div>
                <div className="buttons__wrap">
                    <button
                        onClick={() => addToCart(count)} 
                        className="buttons__add">
                            add to cart
                    </button>
                    <div className={addedBadge ? "alert" : "displayNone"}>
                        <i class='bx bx-check'></i>
                    </div>
                </div>
            </div>
            <p className="buttons__or">or</p>
            <button className="buttons__buy">Buy it now</button>
        </div>
    );
}

export default Modalbuttons;
