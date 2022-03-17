import React from 'react';
import './Info.css';

const Info = () => {
    return (
        <div className='info'>
            <div className="container">
                <ul className="info__cards row">
                    <li className="info__card col-md-3 col-sm-6 col-xs-12">
                        <i className='info__icon bx bxs-plane-alt'></i>
                        <h3 className="info__title">Free Shipping</h3>
                        <p className="info__paragraph">Free Shipping for all US order</p>
                    </li>
                    <li className="info__card col-md-3 col-sm-6 col-xs-12">
                        <i className='info__icon bx bx-support'></i>
                        <h3 className="info__title">Support 24/7</h3>
                        <p className="info__paragraph">We support 24h a day</p>
                    </li>
                    <li className="info__card col-md-3 col-sm-6 col-xs-12">
                        <i className='info__icon bx bx-refresh'></i>
                        <h3 className="info__title">100% Money Back</h3>
                        <p className="info__paragraph">You have 30 days to Return</p>
                    </li>
                    <li className="info__card col-md-3 col-sm-6 col-xs-12">
                        <i className='info__icon bx bx-gift' ></i>
                        <h3 className="info__title">Payment Secure</h3>
                        <p className="info__paragraph">We ensure secure payment</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Info;
