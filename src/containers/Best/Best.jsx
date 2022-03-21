import React, { useState } from 'react';
import './Best.css';
import api from '../../assets/api/api';
import { Link } from 'react-router-dom';
import BestTop from '../../components/BestTop/BestTop';
import ModalPop from '../../components/Modal/Modal';
import LikeContext from '../../context/LikeContext';
import { useContext } from 'react';

const Best = () => {
    const [products, setProducts] = useState(api);
    const {liked, setLiked} = useContext(LikeContext);
    const [type, setType] = useState('fruits');
    const [current, setCurrent] = useState(1);
    const [open, setOpen] = React.useState(false);

    const handleOpen = (item) => {
        setOpen(true)
        setCurrent(item)
    }

    const handleClose = () => setOpen(false);

    const addLike = (item) => {
        if(item.liked) {
            item.liked = false
        } else {
            item.liked = true
        }
        setLiked(
            products.filter(item => {
                return item.liked
            })
        )
    }

    const likedStyle = {
        color: 'red'
    }

    return (
        <div className='best'>
            <div className="container">
                <div className="best__top">
                    <div className="best__header">Best seller product</div>
                    <BestTop type={type} setType={setType} />
                </div>

                <ModalPop 
                    open={open} 
                    handleOpen={handleOpen} 
                    handleClose={handleClose} 
                    current={current}
                />

                <div className="best__products row">
                    {
                        products.map((item) => {
                            if (item.category === type) {
                                return (
                                    <div className={`product col-lg-3 col-md-4 col-sm-6 col-xs-6`} key={item.id * 100}> 
                                        <div className="product__inner">
                                            <Link to={`/product/${item.id}`}>
                                                <img className='product__image' src={item.image} alt="product" />
                                                <img className='product__image-hover' src={item.imageHover} alt="product" />
                                                <h1 className='product__title'>{item.name}</h1>
                                                <span className='product__price'>${item.price}</span>
                                            </Link>
                                            <button
                                                id={`id${item.id}`}
                                                onClick={() => addLike(item)}
                                                className='product__like'
                                            >
                                                <i className={item.liked ? 'bx bxs-heart liked': 'bx bx-heart'}></i>
                                            </button>
                                            <button 
                                                className='product__view product__btn' 
                                                onClick={() => handleOpen(item)}
                                            >
                                                <i className='bx bx-low-vision'></i>
                                            </button>
                                            <button 
                                                className='product__add product__btn'
                                            >
                                                <i className='bx bx-shopping-bag'></i>
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                        }                            
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Best;
