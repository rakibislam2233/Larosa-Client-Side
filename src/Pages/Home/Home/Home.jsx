import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Chef from '../Chef/Chef';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <>
           <Banner></Banner>
           <About></About>
           <Menu></Menu>
           <Chef></Chef>
           <Contact></Contact>
        </>
    );
};

export default Home;