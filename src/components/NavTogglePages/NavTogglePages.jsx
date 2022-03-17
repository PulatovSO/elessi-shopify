import React from 'react';
import './NavTogglePages.css';
import '../NavToggleDemo/NavToggleDemo.css';
import { Link } from 'react-router-dom';

const Navtogglepages = () => {
    return (
        <div className='nav__pages pages nav__toggle'>
             <ul className='pages__list nav__toggle-list'>
                <li className="pages__item nav__toggle-item nav__toggle-title">pages</li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">about us</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">contact us</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">designers</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">FAQ</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">terms & conditions</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">return & exchanges</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">shipping & delivery</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">privacy policy</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">shortcode page</Link>
                </li>
             </ul>
             <ul className='pages__list nav__toggle-list pages__list'>
                <li className="pages__item nav__toggle-item nav__toggle-title">header</li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">header design 1</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">header design 2</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">header design 3</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">header design 4 <span className='new pages-badge'>new</span></Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">header transparent</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">vertical menu</Link>
                </li>
            </ul>
            <ul className='pages__list nav__toggle-list'>
                <li className="pages__item nav__toggle-item nav__toggle-title">shops</li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/"><i className='pages__icon bx bxs-cart-alt'></i> shopping cart</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/"><i className='pages__icon bx bxs-user'></i> my account</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">track order</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">password page</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">404 not found</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">with product listing</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">with instagram shop</Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">with lookbook <span className='hot'>Hot</span></Link>
                </li>
                <li className="pages__item nav__toggle-item">
                    <Link className='pages__link nav__toggle-link' to="/">with gallery</Link>
                </li>
                
            </ul>
        </div>
    );
}

export default Navtogglepages;
