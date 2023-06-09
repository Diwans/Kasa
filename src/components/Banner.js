import React from 'react';
import '../styles/banner.scss'

const Banner = ({img, txt}) => {
    return (
        <div id='banner'>
            <img src={img}  alt="" />
            <div className='overlay'></div>
            <div className='bannerTxt'>{txt}</div>
        </div>
    );
};

export default Banner;