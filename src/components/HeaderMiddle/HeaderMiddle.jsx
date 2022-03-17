import React, { useState } from 'react';
import './HeaderMiddle.css';
import logo from '../../assets/images/logo.webp';
import { Link } from 'react-router-dom';
import Sidebar from '../../containers/Sidebar/Sidebar';
import Menubar from '../../containers/Menubar/Menubar';

const Headermiddle = () => {
    const [drag, setDrag] = useState(100);
    const [menuDrag, setMenuDrag] = useState(100);

    const menuStyle = {
        transform: `translateX(-${menuDrag}%)`
    }
    const style = {
        transform: `translateX(${drag}%)`
    }

    const menuDisplay = {
        display: `${menuDrag === 100 ? 'none' : 'inline-block'}`
    }
    const display = {
        display: `${drag === 100 ? 'none' : 'inline-block'}`
    }

    return (
        <div className='header__middle'>
            <div className="container">
                <div className="header__middle-inner">
                    <div className="header__menu-wrap">
                        <Menubar 
                            menuStyle={menuStyle} 
                            menuDisplay={menuDisplay} 
                            setMenuDrag={setMenuDrag} 
                        />
                        <button
                            onClick={() => setMenuDrag(0)} 
                            className='header__menu'
                        >
                            <i className='bx bx-menu'></i>
                        </button>
                        <button className='header__search-mobile'>
                            <i className='header__link-icon bx bx-search-alt-2' ></i>    
                        </button>
                    </div>
                    <Link to={'/'} className="header__logo">
                        <img src={logo} alt="logo" />
                    </Link>
                    <form className='header__searc search'>
                        <input className='search__input' type="search" placeholder='Search for products' />
                        <button className='search__btn'>
                            <i className="fa-solid fa-magnifying-glass"></i>  
                        </button>
                    </form>
                    <div className='header__links'>
                        <button className='search-btn'>
                            <i className='header__link-icon bx bx-search-alt-2' ></i>    
                        </button>
                        <Link className='header__link' to='/account'>
                            <i className='header__link-icon bx bx-user' ></i>
                        </Link>
                        <Link className='header__link wishlist' to='/wishlist'>
                            <i className='header__link-icon bx bx-heart'></i>
                            <span className="badge">0</span>
                        </Link>
                        <a href='#' onClick={() => setDrag(0)} className='header__link'>
                            <i className='header__link-icon bx bxs-shopping-bag-alt'></i>
                            <span className="badge">0</span>
                        </a>
                    </div>
                </div>
            </div>
            <Sidebar 
                style={style} 
                setDrag={setDrag} 
                display={display} 
            />
        </div>
    );
}

export default Headermiddle;
