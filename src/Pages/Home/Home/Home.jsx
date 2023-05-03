import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Chef from '../Chef/Chef';
import Menu from '../Menu/Menu';

const Home = () => {
    return (
        <>
           <Banner></Banner>
           <About></About>
           <Menu></Menu>
           <Chef></Chef>
        </>
    );
};

export default Home;