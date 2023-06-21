import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../../styles/page.scss';
import '../../styles/body.scss';
import './NotFound.scss'

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