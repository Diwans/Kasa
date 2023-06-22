import React, { useState } from 'react';
import { ReactComponent as ArrowLeft } from '../../assets/img/arrow.svg';
import { ReactComponent as ArrowRight } from '../../assets/img/arrow.svg';
import './carousel.scss'

const Carousel = ({pictures}) => {
    
    const [currentPicture, setCurrent] = useState(0);
    const PicturesLength = pictures.length;

    const prev = () =>{
        setCurrent(currentPicture === 0 ? PicturesLength -1 : currentPicture - 1)
    };

    const next = () =>{
        setCurrent(currentPicture === PicturesLength -1 ? 0 : currentPicture + 1);
    }

    return (
        <div className='carousel'>
            <img src={pictures[currentPicture]} className="carouselImg" alt="" />
            <ArrowLeft onClick={prev} className="left-arrow"/>
            <ArrowRight onClick={next} className="right-arrow"/>
        </div>
    )
};

export default Carousel;