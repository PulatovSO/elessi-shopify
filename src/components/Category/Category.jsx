import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category, title }) => {
    return (
        <div className='top__item'>
            <Link to='/collections' className='top__link'>
                <img className='top__image' src={category} alt="category" />
                <p className="top__title">{title}</p>
            </Link>
        </div>   
    );
}

export default Category;
