import React from 'react';
import logo from'../../assets/img/kasa_white.png';
import './footer.scss'

const Footer = () => {
    return (
        <footer id='footer'>
            <img src={logo} alt="logo" />
            <div id='credits'>© 2020 Kasa. All rights reserved</div>
        </footer>
    );
};

export default Footer;