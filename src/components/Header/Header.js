import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import logo from'../../assets/img/logo.png'

const Header = () => {
    return (
        <header>
            <div id='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div id='nav'>
                <ul>
                <NavLink key={'accueil'} to="/" className='navigation'>
                        <li >Accueil</li>
                    </NavLink>
                    <NavLink key={'about'} to="/about" className='navigation'>
                        <li >A Propos</li>
                    </NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header;