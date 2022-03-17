import React, { useState, Component } from 'react';
import './Specific.css';
import Slider from "react-slick";
import { slide } from '../../assets/api/api';  

const Specific = () => {

    const [movement, setMovement] = useState(0);

    const slideRight = () => {
        if (movement !== 0) setMovement(movement - 100)
        else setMovement(300)
    }

    const slideLeft = () => {
        if (movement !== 300) setMovement(movement + 100)
        else setMovement(0)
    }

    const style = {
        transform: `translateX(-${movement}%)`
    }

    const styleTwo = {
        transform: `translateY(-${movement}%)`
    }

    return (
        <div className='specific'>
            <div className="container">
                <div className="specific__inner slide row">
                    <div className="slide__left">
                        {
                            slide.map((item) => (
                                <div style={style} key={item.id * 432} className="slide__page">
                                    <div className="slide__image-wrap">
                                        <img className='slide__image' src={item.img} alt="slide-image" />
                                        <button className='slide__like slide__button'><i className='bx bx-heart'></i></button>
                                        <button className='slide__view slide__button'><i className='bx bx-low-vision'></i></button>
                                        <button className='slide__add slide__button'><i className='bx bx-shopping-bag' ></i></button>
                                    </div>
                                    <div className="slide__inner">
                                        <div className="slide__inner-wrap">
                                            <h3 className="slide__name">{item.title}</h3>
                                            <p className='slide__price'><span>{item.discount}</span> {item.price}</p>
                                            <div className="slide__track track">
                                                <div className="track__top">
                                                    <p className="track__p">Available: <span>75</span></p>
                                                    <p className="track__p">Already Sold: <span>25</span></p>
                                                </div>
                                                <div className="track__outer">
                                                    <div className="track__inner"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slide__controlls">
                                            <button onClick={slideRight} className="slide__btn"><i className='bx bx-chevron-left' ></i> Prev deal</button>
                                            <button onClick={slideLeft} className="slide__btn">Next deal <i className='bx bx-chevron-right'></i></button>
                                        </div>
                                    </div>
                                </div> 
                            ))
                        }
                    </div>
                    <div className="slide__bottom">
                        {
                            slide.map((item) => (
                                <div key={item.id * 5432} id={item.id} className="slide__bottom-item">
                                    <img 
                                        id={item.id} 
                                        onClick={(e) => setMovement(Number(e.target.id))} 
                                        src={item.img} alt="slide-image" 
                                        className={item.id === movement ? 'slide__bottom-image slide-active' : 'slide__bottom-image' }
                                    />    
                                </div> 
                            ))
                        }
                    </div>
                    <div className="slide__right">
                        {
                            slide.map((item) => (
                                <div style={styleTwo} key={item.id * 213} id={item.id} className="slide__item">
                                    <img 
                                        id={item.id} 
                                        onClick={(e) => setMovement(Number(e.target.id))} 
                                        src={item.img} alt="slide-image" 
                                        className={item.id === movement ? 'slide__item-image slide-active' : 'slide__item-image' } 
                                    />    
                                </div> 
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Specific;
