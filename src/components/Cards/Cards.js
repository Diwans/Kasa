import React from 'react';
import { NavLink } from 'react-router-dom';
import './card.scss'


const Cards = ({cover, title, id}) => {
    return (
        <NavLink to={`/logement/${id}`} className='card' >
            <p className='titleLocation'>{title}</p>
            <img src={cover}/>
        </NavLink>
    );
};

export default Cards;