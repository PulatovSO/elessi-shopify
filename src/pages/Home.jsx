import React from 'react';
import Header from '../containers/Header/Header';
import Showcase from '../containers/Showcase/Showcase';
import Info from '../components/Info/Info';
import Top from '../containers/Top/Top';
import Specific from '../containers/Specific/Specific';
import Best from '../containers/Best/Best';
import Table from '../containers/Table/Table';
import Partners from '../containers/Partners/Partners';
import Footer from '../containers/Footer/Footer';
import Cards from '../containers/Cards/Cards';

const Home = () => {
    return (
        <>
            <Header />
            <Showcase />
            <Info />
            <Top />
            <Specific />
            <Best />
            <Cards />
            <Table />
            <Partners />
            <Footer />
        </>
    );
}

export default Home;
