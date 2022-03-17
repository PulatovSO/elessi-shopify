import React from 'react';
import { Link } from 'react-router-dom';
import './NavToggleDemo.css';

const Navtoggledemo = () => {
    return (
        <div className='nav__demo demo nav__toggle'>
             <ul className='demo__list nav__toggle-list'>
                <li className="demo__item nav__toggle-item nav__toggle-title">homepages</li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">home 1</Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">home 2</Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">home 3</Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">home 4</Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">home 5</Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">home 6</Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">home 7</Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">home 8</Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">home 9</Link>
                </li>
             </ul>
             <ul className='demo__list nav__toggle-list'>
                <li className="demo__item nav__toggle-item nav__toggle-title">niche layouts</li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">t-shirt <span className='new'>new</span></Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">cosmetic <span className='new'>new</span></Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">jewelry <span className='new'>new</span></Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">furniture <span className='new'>new</span></Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">organic <span className='new'>new</span></Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">electronics</Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">baby</Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">bike</Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">bag </Link>
                </li>
            </ul>
            <ul className='demo__list nav__toggle-list'>
                <li className="demo__item nav__toggle-item nav__toggle-title">niche layouts</li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">home boxed</Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">home fullwidth</Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">home wide 1600px</Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">RTL ready</Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">catalog mode</Link>
                </li>
                <li className="demo__item nav__toggle-item">
                    <Link className='demo__link nav__toggle-link' to="/">GDPR cookie</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navtoggledemo;
