import React, { useState } from 'react';
import './Best.css';
import api from '../../assets/api/api';
import { Link } from 'react-router-dom';
import BestTop from '../../components/BestTop/BestTop';
import ModalPop from '../../components/Modal/Modal';

const Best = () => {
    const [type, setType] = useState('fruits');
    const [current, setCurrent] = useState(1);
    const [open, setOpen] = React.useState(false);

    const handleOpen = (id) => {
        setOpen(true)
        setCurrent(id)
    }
    const handleClose = () => setOpen(false);

    console.log(current)
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
                        api.map((item) => {
                            if (item.category === type) {
                                return (
                                    <div className={`product col-lg-3 col-md-4 col-sm-6 col-xs-6`} key={item.id * 100}> 
                                        <Link to='/' className="product__inner">
                                            <img className='product__image' src={item.image} alt="product" />
                                            <img className='product__image-hover' src={item.imageHover} alt="product" />
                                            <h1 className='product__title'>{item.name}</h1>
                                            <span className='product__price'>${item.price}</span>
                                            <button className='product__like'><i className='bx bx-heart'></i></button>
                                            <button 
                                                className='product__view product__btn' 
                                                onClick={() => handleOpen(item.id)}
                                            >
                                                <i className='bx bx-low-vision'></i>
                                            </button>
                                            <button 
                                                className='product__add product__btn'
                                            >
                                                <i className='bx bx-shopping-bag'></i>
                                            </button>
                                        </Link>
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
