import React from 'react';
import '../styles/menu.scss'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Menu = () => {
    return (
        <section id='menu'>
            <div className='option'>Fiabilité<FontAwesomeIcon icon={faChevronUp} /></div>
            <div className='option'>Respect<FontAwesomeIcon icon={faChevronUp} /></div>
            <div className='option'>Service<FontAwesomeIcon icon={faChevronUp} /></div>
            <div className='option'>Sécurité<FontAwesomeIcon icon={faChevronUp} /></div>
        </section>
    );
};

export default Menu;