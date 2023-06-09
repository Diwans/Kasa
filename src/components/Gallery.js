import React from 'react';
import '../styles/gallery.scss';
import Cards from './Cards';

const Gallery = () => {
    return (
        <div id='gallery'>
            <div className='container'><Cards/><Cards/><Cards/></div>
            <div className='container'><Cards/><Cards/><Cards/></div>
        </div>
    );
};

export default Gallery;