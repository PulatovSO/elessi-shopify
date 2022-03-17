import React from 'react';
import './Showcase.css';
// import { motion } from 'framer-;
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Showcase = () => {

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        className: "slides"
      };

    return (
        <div className='showcase pages'>
        <Slider {...settings}>
          <div>
            <div className="page page-one">
                <span className='showcase__store'>elessi store</span>
                <h2 className="showcase__title">fresh hand-picked <br /> vegetables everyday!</h2>
                <button className="showcase__btn dark-btn">shop now</button>
            </div>
          </div>
          <div>
            <div className="page page-two">
                <span className='showcase__store light'>elessi store</span>
                <h2 className="showcase__title light">fresh vegtables <br /> sale up to 30% off</h2>
                <button className="showcase__btn">shop now</button>
            </div>
          </div>
          <div>
            <div className="page page-three">
                <span className='showcase__store'>elessi store</span>
                <h2 className="showcase__title">fresh lemon <br /> discount up to 40% off</h2>
                <button className="showcase__btn dark-btn">shop now</button>
            </div>
          </div>
        </Slider>
        </div>
    );
}

export default Showcase;
