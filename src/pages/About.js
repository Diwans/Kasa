import React from 'react';
import Header from '../components/Header';
import '../styles/page.scss';
import BannerAbout from '../components/BannerAbout';
import Menu from '../components/Menu';

const About = () => {
    return (
        <div className='page'>
            <Header />
            <BannerAbout />
            <Menu />
        </div>
    );
};

export default About;