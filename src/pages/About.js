import React from 'react';
import Header from '../components/Header';
import '../styles/page.scss';
import BannerAbout from '../components/BannerAbout';
import Menu from '../components/Menu';
import '../styles/body.scss'
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <div className='page'>
                <Header />
                <BannerAbout /> 
                <Menu />
            </div>
            <Footer />
        </div>
    );
};

export default About;