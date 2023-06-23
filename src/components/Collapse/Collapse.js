import React from 'react';
import './collapse.scss'
import { useState } from 'react';
import { ReactComponent as Arrow } from '../../assets/img/arrow.svg';


const Collapse = ({categorie, description}) => {

    const [btnState, setBtnSate] = useState(true);
    
    function handleclick(){
        setBtnSate(!btnState)
        };
    
        let toggleClassCheck = btnState ? 'hide' : null;

    const [ rotate, setRotate ] = useState(true);
    const styleArrow = {
        transform: rotate ? 'rotate(0)' : 'rotate(-180deg)'
    };
    
    function rotateArrow(){
        setRotate(!rotate)
    };
        
     return (
        <div className='collapse'>
            <div className='option'>
                <div className='optionTitle'>{categorie}</div>
                <div onClick={handleclick}>
                    <div onClick={rotateArrow}><Arrow className="arrow" style={styleArrow} /></div>
                </div>
            </div> 
            <div className={`description ${toggleClassCheck}`}><div className='divDes'>{description}</div></div>
        </div>
    );
};

export default Collapse;