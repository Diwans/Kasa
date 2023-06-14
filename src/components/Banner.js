import React from 'react';
import '../styles/banner.scss'

const Banner = ({img, txt}) => {
    return (
        <div id='banner'>
            <div className='overlay'></div>
            <img src={img}  alt="" />
            <div className='bannerTxt'>{txt}</div>
        </div>
    );
};

export default Banner;