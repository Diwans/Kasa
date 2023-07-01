import React, { useState } from 'react';
import ArrowLeft  from '../../assets/img/arrow.svg';
import ArrowRight from '../../assets/img/arrow.svg';
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
            
            {PicturesLength > 1 && (<img  src={ArrowLeft} onClick={prev} className="left-arrow"/>)}

            {PicturesLength > 1 && ( <img  src={ArrowRight} onClick={next} className="right-arrow"/>)}
            
            {PicturesLength > 1 && ( <span className='counter'>{currentPicture + 1 } / {PicturesLength}</span>)}
            
        </div>
    )
};

export default Carousel;