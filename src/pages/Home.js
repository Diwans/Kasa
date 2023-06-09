import React from 'react';
import Header from '../components/Header';
import Banner from'../components/Banner';
import Gallery from'../components/Gallery';
import Footer from '../components/Footer';
import '../styles/page.scss';
import '../styles/body.scss';
import imgBannerHome from '../assets/img/imgBanner.jpg'

const Home = () => {
    return (
        <div>
            <div className='page'>
                <Header />
                <Banner txt={"Chez vous, partout et ailleurs"} img={imgBannerHome} />
                <Gallery />
            </div>
            <Footer />
        </div>
    );
};

export default Home;