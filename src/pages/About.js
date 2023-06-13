import React from 'react';
import Header from '../components/Header';
import '../styles/page.scss';
import Banner from '../components/Banner';
import Menu from '../components/Menu';
import '../styles/body.scss'
import Footer from '../components/Footer';
import imgBannerAbout from '../assets/img/img-banner-about.jpg'

const About = () => {
    return (
        <div>
            <div className='page'>
                <Header />
                <Banner img={imgBannerAbout} /> 
                <Menu categorie={"Fiabilité"}/>
                <Menu categorie={"Respect"}/>
                <Menu categorie={"Service"}/>
                <Menu categorie={"Sécurité"}/>
            </div>
            <Footer />
        </div>
    );
};

export default About;