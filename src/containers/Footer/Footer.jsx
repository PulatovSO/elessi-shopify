import React from 'react';
import './Footer.css';
import FooterTop from '../../components/FooterTop/FooterTop';
import FooterBody from '../../components/FooterBody/FooterBody';
import FooterBottom from '../../components/FooterBottom/FooterBottom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__inner">
                <div className='container'>
                    <FooterTop />
                    <FooterBody />
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
}

export default Footer;
