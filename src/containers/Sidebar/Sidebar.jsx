import React from 'react';
import './Sidebar.css';

const Sidebar = ({ style, setDrag, display }) => {
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
                    <button onClick={() => setDrag(100)} className='sidebar__close'><i class='bx bx-x'></i></button>
                </div>
                <div className="sidebar__body">
                    <div className="sidebar__empty empty">
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
