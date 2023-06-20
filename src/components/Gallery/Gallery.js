import React from 'react';
import Cards from '../Cards/Cards';
import data from '../../assets/data/data.json';
import './gallery.scss'

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