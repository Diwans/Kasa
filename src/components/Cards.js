import React from 'react';
import '../styles/card.scss'
import { NavLink } from 'react-router-dom';

const Cards = ({cover, title, id}) => {
    return (
        <NavLink to={`/logement/${id}`} className='card' >
            <p className='titleLocation'>{title}</p>
            <img src={cover}/>
        </NavLink>
    );
};

export default Cards;