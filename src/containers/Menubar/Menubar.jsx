import React, { useState } from 'react';
import './Menubar.css';

const Menubar = ({ menuStyle, menuDisplay, setMenuDrag }) => {
    

    return (
        <div className='menubar'>
            <div  
                onClick={() => setMenuDrag(100)}
                className="menubar__bg" 
                style={menuDisplay}>
            </div>
            <div className="menubar__inner" style={menuStyle}>
                <div className="menubar__top">
                    <button className='menubar__btn'>menu</button>
                    <button className='menubar__btn'>categories</button>
                </div>
            </div>
        </div>
    );
}

export default Menubar;
