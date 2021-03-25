import React from 'react';
import './home.scss';

import Header from '../../components/header';
import About from '../../components/about';
import Products from '../../components/products';
import Services from '../../components/services';
import Contacts from '../../components/contacts';
import Upcommings from '../../components/upcommings';
import Footer from '../../components/footer';

function Home() {

    return (
        <div className='home'>
            <Header />
            <About />
            <Services />
            <Products />
            <Contacts />
            <Upcommings />
            <Footer />
        </div>
    )
}

export default Home
