import React from 'react';
import './WishlistBody.css';
import LikeContext from '../../context/LikeContext';
import { useContext } from 'react';

const Wishlistbody = () => {
    const {liked, setLiked} = useContext(LikeContext);

    const remove = (likedItem) => {
        setLiked(
            liked.filter(function(item) {
                return (likedItem.id !== item.id)
            })
        )
    }

    const style = {
        boxShadow: '0px 5px 0px -4px rgba(221, 221, 221, 0.659)'
    }

    return (
        <div className='wishlist__body'>
            <div className="container">
                <h1 className="wishlist__header">Wishlist</h1>
                <div className={liked.length === 0 ? '' : 'displayNone'}>
                    <ul className='wishtable__list row justify-content-between'>
                        <li className='wishtable__header'>product name</li>
                        <li className='wishtable__header'>unit price</li>
                        <li className='wishtable__header'>stock status</li>
                    </ul>
                    <p className="wishtable__empty">No products were added to the wishlist</p>
                </div>
                <table className={liked.length === 0 ? 'displayNone' : 'table'}>
                    <tbody>
                        <tr className='wishtable__list' style={style}>
                            <td></td>
                            <td></td>
                            <td className='wishtable__header'>product name</td>
                            <td className='wishtable__header'>unit price</td>
                            <td className='wishtable__header'>stock status</td>
                            <td></td>
                        </tr>
                        {
                            liked.map(likedItem => (
                                <tr className="table__row" style={style} key={likedItem.id*9}>
                                    <td className="table__description">
                                        <button onClick={() => remove(likedItem)} className='table__remove'>
                                            <i className='bx bx-x'></i>
                                        </button>
                                    </td>
                                    <td className="table__description">
                                        <img
                                            className="table__image" 
                                            src={likedItem.image} 
                                            alt="liked-item" 
                                        />
                                    </td>
                                    <td className="table__description">
                                        <h2 className="table__title">{likedItem.name}</h2>
                                    </td>
                                    <td className="table__description">
                                        <p className="table__price">${likedItem.price}</p>
                                    </td>
                                    <td className="table__description">
                                        <span className="table__status">in stock</span>
                                    </td>
                                    <td className="table__description">
                                        <button className="table__btn">add to cart</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <ul className="wishtable__column">
                    {
                        liked.map(likedItem => (
                            <li className="wishtable__item liked" key={Math.random() * 12}>
                                <button onClick={() => remove(likedItem)} className='liked__remove table__remove'>
                                    <i className='bx bx-x'></i>
                                </button>
                                <div className="liked__image-wrap">
                                    <img src={likedItem.image} alt="image" className="liked__image" />
                                </div>
                                <div className="liked__item">
                                    <p className="liked__title">product name</p>
                                    <p className="liked__name table__title">{likedItem.name}</p>
                                </div>   
                                <div className="liked__item">
                                    <p className="liked__title">unit price</p>
                                    <p className="liked__price">${likedItem.price}</p>
                                </div>   
                                <div className="liked__item">
                                    <p className="liked__title">stock status</p>
                                    <p className="liked__status table__status">in stock</p>
                                </div>   
                                <div className="liked__btn-wrap">
                                    <button className="liked__btn table__btn">add to cart</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Wishlistbody;