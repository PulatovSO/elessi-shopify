import React, { useState } from 'react';
import './Product.css';
import { useParams } from 'react-router-dom';
import api from '../assets/api/api';
import Header from '../containers/Header/Header';
import Footer from '../containers/Footer/Footer';
import Counter from '../components/Counter/Counter';
import Modalbuttons from '../components/ModalButtons/ModalButtons';
import ModalBody from '../components/ModalBody/ModalBody';
import Productdesc from '../components/ProductDesc/ProductDesc';

const Product = () => {
    const value = useParams()
    const [slideImage, setSlideImage] = useState(true);

    const style = {
        border: '1px solid #aaa'
    }

    return (
        <>
            <Header />
            <div className="product-info">
                <div className="container">
                    {
                        api.map(item => (
                            item.id == value.id ? (
                                <div className="product-info__inner row" key={item.id}>
                                    <div className="product-info__img modal__image-wrap col-lg-6 col-md-12 col-sm-12">
                                        <div className="product-info__slide">
                                            <button 
                                                onClick={() => setSlideImage(true)} 
                                                className='product-info__slide-btn'
                                                style={slideImage ? style : null} >
                                                <img src={item.image} alt="button-image" />
                                            </button>
                                            <button 
                                                onClick={() => setSlideImage(false)}
                                                className='product-info__slide-btn'
                                                style={slideImage ? null : style} >
                                                <img src={item.imageHover} alt="button-image" />
                                            </button>
                                        </div>
                                        <img className="product-info__image modal__image" src={slideImage ? item.image : item.imageHover} alt="current-image" />
                                    </div>
                                    <div className="product-info__desc col-lg-6 col-md-12 col-sm-12">
                                        <h2 className="modal__header">{item.name}</h2>
                                        <span className="modal__price">${item.price}</span>
                                        <p className="modal__paragraph">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                                        <p className="modal__quantity">hurry! only <span>11</span> left in stock</p>
                                        <div className="modal__progress">
                                            <div className="modal__progress-inner"></div>
                                        </div>
                                        <Counter />
                                        <Modalbuttons current={item}/>
                                        <ModalBody />
                                        <ul className='share row'>
                                            <li className='share-title' >Share on:</li>
                                            <li>
                                                <a className='product-info__social modal__social' href='#'><i class='bx bxl-facebook'></i></a>
                                            </li>
                                            <li>
                                                <a className='product-info__social modal__social' href='#'><i class='bx bxl-twitter' ></i></a>
                                            </li>
                                            <li>
                                                <a className='product-info__social modal__social' href='#'><i class='bx bxl-google-plus' ></i></a>
                                            </li>
                                            <li>
                                                <a className='product-info__social modal__social' href='#'><i class='bx bxs-envelope' ></i></a>
                                            </li>
                                            <li>
                                                <a className='product-info__social modal__social' href='#'><i class='bx bxl-pinterest' ></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (null)               
                        ))
                    }
                <Productdesc />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Product;
