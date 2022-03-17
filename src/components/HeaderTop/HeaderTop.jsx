import React from 'react';
import './HeaderTop.css';
import Language from '../Language/Language';

const HeaderTop = () => {
    return (
        <div className='header__top header-top'>
            <div className="container">
                <div className="header-top__inner">
                    <div className="header-top__inner-wrap">
                        <ul className="header-top__links">
                            <li className="top__link">
                                <a href="#">
                                    <i className='top__icon bx bxl-facebook'></i>
                                </a>
                            </li>
                            <li className="top__link">
                                <a href="#">
                                    <i className='top__icon bx bxl-twitter' ></i>
                                </a>
                            </li>
                            <li className="top__link">
                                <a href="#">
                                    <i className='top__icon bx bxl-google-plus' ></i>
                                </a>
                            </li>
                            <li className="top__link">
                                <a href="#">
                                    <i className='top__icon bx bxl-pinterest-alt' ></i>
                                </a>
                            </li>
                            <li className="top__link">
                                <a href="#">
                                    <i className='top__icon bx bxl-instagram' ></i>
                                </a>
                            </li>
                        </ul>
                        <p className='header-top__info'>
                            <span> Call:</span> +01 23456789
                        </p>
                    </div>
                    <Language />
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;
