import React from 'react';
import './Table.css';
import api from '../../assets/api/api';

const Table = () => {
    return (
        <div className="table">
            <div className="container">
                <div className="table__inner row">
                    <ul className="table__list col-lg-4 col-md-6 col-sm-12">
                        <li className='table__header'>Top rated</li>
                        {
                            api.map(item => (
                                item.popularity === 'top' ? 
                                (
                                    <li className='table__item item' key={item.id * 5}>
                                        <img className='item__image' src={item.image} alt="product image" />
                                        <div className="item__info">
                                            <p className="item__name">{item.name}</p>
                                            <span className="item__price">${item.price}</span>
                                        </div>
                                    </li>
                                ) : null
                            ))
                        }
                    </ul>
                    <ul className="table__list col-lg-4 col-md-6 col-sm-12">
                        <li className='table__header'>best selling</li>
                        {
                            api.map(item => (
                                item.popularity === 'best' ? 
                                (
                                    <li className='table__item item' key={item.id * 9}>
                                        <img className='item__image' src={item.image} alt="product image" />
                                        <div className="item__info">
                                            <p className="item__name">{item.name}</p>
                                            <span className="item__price">${item.price}</span>
                                        </div>
                                    </li>
                                ) : null
                            ))
                        }
                    </ul>
                    <ul className="table__list col-lg-4 col-md-6 col-sm-12">
                        <li className='table__header'>on sale</li>
                        {
                            api.map(item => (
                                item.popularity === 'sale' ? 
                                (
                                    <li className='table__item item' key={item.id * 3}>
                                        <img className='item__image' src={item.image} alt="product image" />
                                        <div className="item__info">
                                            <p className="item__name">{item.name}</p>
                                            <span className="item__price">${item.price}</span>
                                        </div>
                                    </li>
                                ) : null
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Table;
