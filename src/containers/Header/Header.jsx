import React from 'react';
import './Header.css';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Headermiddle from '../../components/HeaderMiddle/HeaderMiddle';
import Nav from '../../components/Nav/Nav';

const Header = () => {
    return (
        <header className='header'>
            <HeaderTop />
            <Headermiddle />
            <Nav />
        </header>
    );
}

export default Header;
