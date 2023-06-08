import React from 'react';
import Header from '../components/Header';
import Banner from'../components/Banner';
import Gallery from'../components/Gallery';
import Footer from '../components/Footer';
import '../styles/page.scss'
import '../styles/body.scss'

const Home = () => {
    return (
        <div>
            <div className='page'>
                <Header />
                <Banner />
                <Gallery />
            </div>
            <Footer />
        </div>
    );
};

export default Home;