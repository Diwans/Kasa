import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import '../styles/body.scss'
import '../styles/page.scss'
import '../styles/error.scss'

const Error = () => {
    return (
        <div>
            <div className='page'>
                <Header/>
                <div className='flex'>
                    <div className='error'>404</div><br/>
                    <p className='oups'>Oups! La page que vous demandez n'existe pas.</p>
                    <NavLink to="/" className='return'>
                        <p>Retourner sur la page d'accueil</p>
                    </NavLink>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Error;