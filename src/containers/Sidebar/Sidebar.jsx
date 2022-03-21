import React, { useState } from 'react';
import './Sidebar.css';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';

const Sidebar = ({ style, setDrag, display }) => {
    const {cart, setCart} = useContext(CartContext);

    const remove = (item) => {
        setCart(
            cart.filter(function(cartItem) {
                return (item.id !== cartItem.id)
            })
        )
    }

    const totalPrice = cart.map(item => +item.price)
    
    const sumTotalPrice = totalPrice.reduce(
        (previousValue, currentValue) => previousValue + currentValue, 0
    );

    const percentage = sumTotalPrice * 100 / 200;

    const shipping = {
        width: `${percentage <= 100 ? percentage : 100}%`
    }

    const reachedStyle = {
        background: percentage >= 100 ? "#6bad0d" : "#e7ba3d"
    }

    return (
        <div className="sidebar__wrap">
            <div 
                className="sidebar__bg" 
                style={display} 
                onClick={() => setDrag(100)}
            >
            </div>
            <div className='sidebar' style={style} >
                <div className="sidebar__top">
                    <h2 className="sidebar__title">your cart</h2>
                    <button onClick={() => setDrag(100)} className='sidebar__close'><i className='bx bx-x'></i></button>
                </div>
                <div className="sidebar__body">
                    <div className={cart.length !== 0 ? "sidebar__products" : 'displayNone'}>
                        {
                            cart.map(item => (
                                <div className="cart-item" key={item.id + 123 / 84}>
                                    <img className='cart-item__image' src={item.image} alt="item-image" />
                                    <div className="cart-item__desc">
                                        <h3 className="cart-item__name">{item.name}</h3>
                                        <span className="cart-item__price">${item.price}</span>
                                    </div>
                                    <div className="cart-item__buttons">
                                        <div className="cart-item__counter count">
                                            <span>1</span>
                                            <div className="count__btn">
                                                <button>+</button>
                                                <button>-</button>
                                            </div>
                                        </div>
                                        <button onClick={() => remove(item)} className="cart-item__remove">Remove</button>
                                    </div>
                                </div>
                            ))
                        }
                        <form>
                            <label className='sidebar__instruction' htmlFor="instruction">Special instructions for seller</label>
                            <textarea 
                                className='sidebar__textarea' 
                                name="instruction" 
                                id="instruction" 
                                rows="7">    
                            </textarea>
                        </form>
                    </div>
                    <div className={cart.length !== 0 ? "sidebar__desc desc" : 'displayNone'}>
                        <div className="desc__price-wrap">
                            <h3 className="desc__subtotal">Subtotal</h3>
                            <span className="desc__price">${sumTotalPrice}.00</span>
                        </div>
                        <div className="desc__free">
                            <div className="desc__free-wrap">
                                <span className='desc__free-percentage' style={shipping}></span>
                                <p className="desc__free-text">{percentage >= 100 ?  "Congratulations! You've got free shipping!" : 'Spend $165.00 more to reach FREE SHIPPING!'}</p>
                            </div>
                            <span className="desc__free-icon" style={reachedStyle}>
                                <i className='bx bx-car'></i>
                            </span>
                        </div>
                        <div className="desc__checkbox">
                            <input type="checkbox" id="checkTerm" />
                            <label className='desc__label' htmlFor="checkTerm"> I agree with the terms and conditions.</label>
                        </div>
                        <div className="desc__buttons">
                            <button className='desc__btn view-btn'>view cart</button>
                            <button className='desc__btn check-btn'>check out</button>
                        </div>
                    </div>

                    <div className={cart.length === 0 ? "sidebar__empty empty" : 'displayNone'}>
                        <p className="empty__text">
                            No products in the cart.
                        </p>
                        <div className="empty__bottom">
                            <span>Free Shipping on All Orders Over $200</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
