import React from 'react';
import './NavToggleShop.css';
import '../NavToggleDemo/NavToggleDemo.css';
import { Link } from 'react-router-dom';

const Navtoggleshop = () => {
    return (
        <div className='nav__shop shop shop__toggle'>
            <div className="shop__toggle-inner">
                <ul className='shop__list'>
                    <li className="shop__item nav__toggle-item nav__toggle-title">shop styles</li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">grid layout</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">masonry layout</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">right sidebar</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">left sidebar</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">listing collecting</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">infinit scrolling</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">load more button</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">filters area</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">header transparent</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">RTL shop page</Link>
                    </li>
                </ul>
                <ul className='shop__list'>
                    <li className="shop__item nav__toggle-item nav__toggle-title">product page styles</li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">product detail layout 1</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">product detail layout 2</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">product detail layout 3</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">product thumb at bottom</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">product thumb on right</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">lookbook description</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">gallery description</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">product videos</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">product countdown</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">tabs full width</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">tabs accordion full width</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">sticky description</Link>
                    </li>
                </ul>
                <ul className='shop__list'>
                    <li className="shop__item nav__toggle-item nav__toggle-title">product types</li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">product - simple</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">product - variable <br /> (color/Size/etc)</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">product - digital</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">download <span className='new'>new</span></Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">product - grouped</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">product - pre-orders <span className='hot'>Hot</span></Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">product - external / affiliate</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">product - on sale</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">product - out of stock</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">variant images grouped <span className='hot'>Hot</span></Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">back in stock notification <span className='hot'>Hot</span></Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">with 360 degree view</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">with instagram</Link>
                    </li>
                </ul>
                <ul className='shop__list'>
                    <li className="shop__item nav__toggle-item nav__toggle-title">product feature</li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">swatch with circle</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">swatch with radio</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">swatch with radio 2</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">swatch with radio 3</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">swatch with radio 4</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">swatch with rectangle</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">swatch with rectangle 2</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">swatch with simple</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">swatch with simple 2</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">with images swatch</Link>
                    </li>
                    <li className="shop__item nav__toggle-item">
                        <Link className='shop__link nav__toggle-link' to="/">sticky add to cart</Link>
                    </li>
                </ul>
            </div>
            <div className="shop__toggle-bottom toggle-bottom">
                <div className="toggle__item">
                    <i className='toggle__icon bx bx-car'></i>
                    <div className="toggle__inner">
                        <h3 className="toggle__header">Free shipping</h3>
                        <p className="toggle__paragraph">Lorem ipsum dolor elit</p>
                    </div>
                </div>
                <div className="toggle__item">
                    <i className='toggle__icon bx bx-loader-circle'></i>
                    <div className="toggle__inner">
                        <h3 className="toggle__header">awesome support</h3>
                        <p className="toggle__paragraph">Lorem ipsum dolor elit</p>
                    </div>
                </div>
                <div className="toggle__item">
                    <i className='toggle__icon bx bx-lock-open-alt'></i>
                    <div className="toggle__inner">
                        <h3 className="toggle__header">free return</h3>
                        <p className="toggle__paragraph">Lorem ipsum dolor elit</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navtoggleshop;
