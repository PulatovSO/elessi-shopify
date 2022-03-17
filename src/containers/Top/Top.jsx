import React, { useRef, useEffect, useState } from 'react';
import './Top.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Category from '../../components/Category/Category';
import category1 from '../../assets/images/category1.webp';
import category2 from '../../assets/images/category2.webp';
import category3 from '../../assets/images/category3.webp';
import category4 from '../../assets/images/category4.webp';
import category5 from '../../assets/images/category5.webp';
import category6 from '../../assets/images/category6.webp';
import category7 from '../../assets/images/category7.webp';


const Top = () => {

    const settings = {
        dots: false,
        fade: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        className: "slides",
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                infinite: true
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  autoplay: true,
                  infinite: true
                }
            }
        ]
    };

    return (
        <div className='top'>
            <div className="container">
                <h2 className="top__header">top categories</h2>
                <div className="top__list-wrap">
                    <Slider {...settings} className="top__list">
                        <Category category={category1} title={'Milk & creams'} />
                        <Category category={category2} title={'fruits'} />             
                        <Category category={category3} title={'vegetables'} />             
                        <Category category={category4} title={'nut gifts'} />             
                        <Category category={category5} title={'butter & eggs'} />             
                        <Category category={category6} title={'fresh meats'} />             
                        <Category category={category7} title={'trees'} />             
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Top;
