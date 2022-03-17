import React from 'react';
import './WishlistBody.css';

const Wishlistbody = () => {
    return (
        <div className='wishlist__body'>
            <div className="container">
                <h1 className="wishlist__header">Wishlist</h1>
                <ul className='wishtable__list row justify-content-between'>
                    <li className='wishtable__header'>product name</li>
                    <li className='wishtable__header'>unit price</li>
                    <li className='wishtable__header'>stock status</li>
                </ul>
                <p className="wishtable__empty">No products were added to the wishlist</p>
            </div>
        </div>
    );
}

export default Wishlistbody;
