import React from 'react';
import '../styles/gallery.scss';
import Cards from './Cards';
import data from '../assets/data/data.json'

const Gallery = () => {
    return (
        <div id='gallery'>
            <div className='container'>
                {data.map(data =>{
                    return(
                        <Cards key={data.id} id={data.id} title={data.title} cover={data.cover}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Gallery;