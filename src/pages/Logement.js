import React from 'react';
import data from '../assets/data/data.json';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import '../styles/page.scss';
import '../styles/body.scss';
import '../styles/logement.scss';

const Logement = () => {

	const idLogement = useParams('id').id;
	const dataLogement = data.filter(data => data.id === idLogement);
	
	const [carousel, setCarousel] = useState([]);
	
	useEffect(() => {
		const dataLogement = data.filter(data => data.id === idLogement);
		setCarousel(dataLogement[0].pictures.slice(1,2,3,4));
	}, []);

	const title = dataLogement[0].title;
	const rating = dataLogement[0].rating;
	const description  = dataLogement[0].description;
	const equipments = dataLogement[0].equipments;
	const location = dataLogement[0].location;
	const tags = dataLogement[0].tags;
	const hostName = dataLogement[0].host.name;
	const hostPicture = dataLogement[0].host.picture

    return (
		<div>
        	<div className='page'>
				<Header/>
				<Carousel/>
				<div className='infoContainer'>
					<div id='info'>
						<h2>{title}</h2>
						<p>{location}</p>
						<div id='tags'>{tags}</div>
					</div>
				
					<div id='hostAndRating'>
						<div id='host'>
							<p>{hostName}</p>
							<img src={hostPicture} alt="" />
						</div>

						<div id='rating'>
							{rating}
						</div>
					</div>
				</div>

				<div id='collapseLogement'>
					<Collapse categorie="Description" description={description}/>
					<Collapse categorie="Équpiements" description={equipments}/>
				</div>

        	</div>
			<Footer/>
		</div>
    );
};

export default Logement;