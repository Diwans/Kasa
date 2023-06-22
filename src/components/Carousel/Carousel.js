import React from 'react';

const Carousel = ({photo}) => {
    return (
        <div id='carousel'>
            <img src={photo} alt="" />
        </div>
    );
};

export default Carousel;