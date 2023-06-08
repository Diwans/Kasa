import React from 'react';
import '../styles/menu.scss'

const Menu = () => {
    return (
        <section id='menu'>
            <div className='option'>Fiabilité</div>
            <div className='option'>Respect</div>
            <div className='option'>Service</div>
            <div className='option'>Sécurité</div>
        </section>
    );
};

export default Menu;