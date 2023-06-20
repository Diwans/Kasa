import React from 'react';
import './collapse.scss'
import { useState } from 'react';
import { ReactComponent as Arrow } from '../../assets/img/arrow.svg';


const Menu = ({categorie, description}) => {

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
            <div className='option'>{categorie} 
                <div onClick={handleclick}>
                    <div onClick={rotateArrow}><Arrow className="arrow" style={styleArrow} /></div>
                </div>
            </div> 
            <div className={`description ${toggleClassCheck}`}>{description}</div>
        </div>
    );
};

export default Menu;