import React, { useState } from 'react';
import './ProductDesc.css';

const Productdesc = () => {
    const [active, setActive] = useState('description');

    return (
        <div className='product-desc'>
            <ul className='product-desc__nav desc-nav'>
                <li className="desc-nav__item">
                    <button 
                        onClick={() => setActive('description')}
                        className={active === 'description' ? 'desc-nav__btn button-active' : 'desc-nav__btn'}>
                        description
                    </button> 
                </li>
                <li className="desc-nav__item">
                    <button 
                        onClick={() => setActive('review')}
                        className={active === 'review' ? 'desc-nav__btn button-active' : 'desc-nav__btn'}>
                        reviews
                    </button> 
                </li>
                <li className="desc-nav__item">
                    <button 
                        onClick={() => setActive('shipping')}
                        className={active === 'shipping' ? 'desc-nav__btn button-active' : 'desc-nav__btn'}>
                        shipping
                    </button> 
                </li>
                <li className="desc-nav__item">
                    <button 
                        onClick={() => setActive('custom')}
                        className={active === 'custom' ? 'desc-nav__btn button-active' : 'desc-nav__btn'}>
                        custom tab
                    </button> 
                </li>
            </ul>
            <p className="product-desc__paragraph">
                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
            </p>
            <p className="product-desc__paragraph">
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.
            </p>
            <p className="product-desc__paragraph">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    );
}

export default Productdesc;
