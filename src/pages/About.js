import React from 'react';
import Header from '../components/Header';
import '../styles/page.scss';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import '../styles/body.scss'
import Footer from '../components/Footer';
import imgBannerAbout from '../assets/img/img-banner-about.jpg'

const About = () => {
    return (
        <div>
            <div className='page'>
                <Header />
                <Banner img={imgBannerAbout} /> 
                <Collapse categorie={"Fiabilité"} description={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}/>
                <Collapse categorie={"Respect"} description={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entrainera une exclusion de notre plateforme."}/>
                <Collapse categorie={"Service"} description={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entrainera une exclusion de notre plateforme."}/>
                <Collapse categorie={"Sécurité"} description={"La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi a l'hote qu'au locataire, cela permet a nos équipes de verifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes."}/>
            </div>
            <Footer />
        </div>
    );
};

export default About;