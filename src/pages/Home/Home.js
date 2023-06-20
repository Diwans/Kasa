import React from 'react';
import Header from '../../components/Header/Header';
import Banner from'../../components/Banner/Banner';
import Gallery from'../../components/Gallery/Gallery';
import Footer from '../../components/Footer/Footer';
import imgBannerHome from '../../assets/img/imgBanner.jpg';
import '../../styles/page.scss';
import '../../styles/body.scss'

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