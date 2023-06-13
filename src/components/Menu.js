import React from 'react';
import '../styles/menu.scss'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Menu = ({categorie, txt}) => {
    return (
        <div className='menu'>
            <div className='option'>{categorie}<FontAwesomeIcon icon={faChevronUp} /></div>
        </div>
    );
};

export default Menu;