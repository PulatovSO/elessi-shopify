import React from 'react';
import './Partners.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import partner1 from '../../assets/images/partner1.webp';
import partner2 from '../../assets/images/partner2.webp';
import partner3 from '../../assets/images/partner3.webp';
import partner4 from '../../assets/images/partner4.webp';
import partner5 from '../../assets/images/partner5.webp';
import partner6 from '../../assets/images/partner6.webp';

const Partners = () => {

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
              breakpoint: 1025,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                infinite: true
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  autoplay: true,
                  infinite: true
                }
            },
            {
                breakpoint: 480,
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
        <div className="partners">
            <div className='container'>
                <Slider {...settings} className="partners__list">
                    <div className="partners__item">
                        <img className='partners__image' src={partner1} alt="partner" />
                    </div>
                    <div className="partners__item">
                        <img className='partners__image' src={partner2} alt="partner" />
                    </div>
                    <div className="partners__item">
                        <img className='partners__image' src={partner3} alt="partner" />
                    </div>
                    <div className="partners__item">
                        <img className='partners__image' src={partner4} alt="partner" />
                    </div>
                    <div className="partners__item">
                        <img className='partners__image' src={partner5} alt="partner" />
                    </div>
                    <div className="partners__item">
                        <img className='partners__image' src={partner6} alt="partner" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Partners;
