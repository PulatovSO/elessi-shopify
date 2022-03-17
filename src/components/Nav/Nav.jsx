import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Navtoggledemo from '../NavToggleDemo/NavToggleDemo';
import Navtogglepages from '../NavTogglePages/NavTogglePages';
import Navtoggleshop from '../NavToggleShop/NavToggleShop';

const Nav = () => {
    return (
        <nav className='nav'>
            <div className="container">
                <div className="nav__inner">
                    <div className="nav__menu-wrap">
                        <div className="nav__menu">shop by categories</div>
                        <div className="nav__menu-bar menu">
                            <Link to='/' className="menu__item">fruits <i className='chevron bx bx-chevron-right'></i></Link>    
                            <Link to='/' className="menu__item">drinks <i className='chevron bx bx-chevron-right'></i></Link>    
                            <Link to='/' className="menu__item">butter & eggs</Link>    
                            <Link to='/' className="menu__item">trees</Link>    
                            <Link to='/' className="menu__item">cakes</Link>    
                            <Link to='/' className="menu__item">meats</Link>    
                            <Link to='/' className="menu__item">fish</Link>    
                            <Link to='/' className="menu__item">vegetables</Link>    
                            <Link to='/' className="menu__item">onions</Link>    
                            <Link to='/' className="menu__item">grapes</Link>    
                            <Link to='/' className="menu__item">bananas</Link>    
                        </div>
                    </div>
                    <ul className="nav__list">
                        <li className="nav__item demo-link">
                            <p>
                                demo 
                            </p>
                            <i className='bx bx-chevron-down'></i>
                            <Navtoggledemo />
                        </li>
                        <li className="nav__item shop-link">
                            <p>
                                shop 
                            </p>
                            <i className='bx bx-chevron-down'></i>
                            <span className="nav-badge">sale</span>
                            <Navtoggleshop />
                        </li>
                        <li className="nav__item">
                            <p>
                                blog 
                            </p>
                            <i className='bx bx-chevron-down'></i>
                        </li>
                        <li className="nav__item pages-link">
                            <p>
                                pages 
                            </p>
                            <i className='bx bx-chevron-down'></i>
                            <Navtogglepages />
                        </li>
                        <li className="nav__item">
                            <p>
                                buy theme
                            </p>
                            <span className="nav-badge second-badge">sale</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
