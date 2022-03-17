import React from 'react';
import './FooterBody.css';
import payment1 from '../../assets/images/payment1.svg';
import payment2 from '../../assets/images/payment2.svg';
import payment3 from '../../assets/images/payment3.svg';
import payment4 from '../../assets/images/payment4.svg';
import payment5 from '../../assets/images/payment5.svg';
import payment6 from '../../assets/images/payment6.svg';

const FooterBody = () => {
    return (
        <div className='footer__body row'>
            <ul className="footer__col col-lg-3 col-sm-6 col-xs-12">
                <li className="footer__item">Calista Wise 7292 Dictum Av.</li>
                <li className="footer__item">Antonio, Italy.</li>
                <li className="footer__item">(+01)-800-3456-88</li>
                <li className="footer__item">Nasathemes@Gmail.Com</li>
                <li className="footer__item">Elessi.Nasatheme.Com</li>
            </ul>
            <ul className="footer__col col-lg-3 col-sm-6 col-xs-12">
                <li className="footer__item">
                    <a href="#">
                        Delivery Information
                    </a>
                </li>
                <li className="footer__item">
                    <a href="#">
                        Privacy Policy
                    </a>
                </li>
                <li className="footer__item">
                    <a href="#">
                        Terms & Condition
                    </a>
                </li>
                <li className="footer__item">
                    <a href="#">
                        Search Terms
                    </a>
                </li>
                <li className="footer__item">
                    <a href="#">
                        Order & Return
                    </a>
                </li>
            </ul>
            <ul className="footer__col col-lg-3 col-sm-6 col-xs-12">
                <li className="footer__item">
                    <a href="#">Customer Service</a>
                </li>
                <li className="footer__item">
                    <a href="#">Privacy Policy</a>
                </li>
                <li className="footer__item">
                    <a href="#">Terms & Condition</a>
                </li>
                <li className="footer__item">
                    <a href="#">Best Seller</a>
                </li>
                <li className="footer__item">
                    <a href="#">Manufactures</a>
                </li>
            </ul>
            <ul className="footer__col fcol4 col-lg-3 col-sm-6 col-xs-12">
                <li className="footer__item">Monday - Friday <span>08:00 - 20:00</span></li>
                <li className="footer__item">Saturday <span>09:00 - 21:00</span></li>
                <li className="footer__item">Saturday <span>13:00 - 22:00</span></li>
                <li className="footer__item">
                    <ul className='footer__inner-list'>
                        <li>
                            <a href="#"><img src={payment1} alt="payment" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={payment2} alt="payment" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={payment3} alt="payment" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={payment4} alt="payment" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={payment5} alt="payment" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={payment6} alt="payment" /></a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default FooterBody;
