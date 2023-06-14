import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.scss'

const Header = () => {
    return (
        <header>
            <div id='logo'>
                <img src="./logo.png" alt="logo" />
            </div>
            <div id='nav'>
                <ul>
                <NavLink to="/" className='navigation'>
                        <li >Accueil</li>
                    </NavLink>
                    <NavLink to="/about" className='navigation'>
                        <li >A Propos</li>
                    </NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header;