import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div id='logo'>
                <img src="./kasa_red.png" alt="logo" />
            </div>
            <div id='nav'>
                <ul>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/About">
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </div>
        </header>
    );
};

export default Header;