import React from 'react';
import { useParams } from "react-router-dom";
import data from '../../assets/data/data.json';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import Collapse from '../../components/Collapse/Collapse';
import '../../styles/page.scss';
import '../../styles/body.scss';
import './logement.scss'

const Logement = () => {

	const idLogement = useParams('id').id;
	const dataLogement = data.filter(data => data.id === idLogement);
	

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
						<div id='tags'>{tags.map(tags=>tags)}</div>
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