import React from 'react';
import data from '../assets/data/data.json';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/page.scss';
import '../styles/body.scss';

const Logement = () => {
    const [caroussel, setCaroussel] = useState([]);

	const idLogement = useParams('id').id;
	const dataLogement = data.filter(data => data.id === idLogement);
	
	useEffect(() => {
		const dataLogement = data.filter(data => data.id === idLogement);
		setCaroussel(dataLogement[0].pictures);
	}, [idLogement]);

	const name = dataLogement[0].host.name; 
	const rating = dataLogement[0].rating;
	const description  = dataLogement[0].description;
	const equipments = dataLogement[0].equipments;
    return (
		<div>
        	<div className='page'>
				<Header/>
        	</div>
			<Footer/>
		</div>
    );
};

export default Logement;