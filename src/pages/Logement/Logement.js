import React from 'react';
import { useParams } from "react-router-dom";
import { ReactComponent as Star } from '../../assets/img/star.svg';
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
						<h2 className='title'>{title}</h2>
						<p className='city'>{location}</p>
						<div id='tags'>{tags.map(tags=>{
							return(
								<div className='tags'>{tags}</div>
							)
						})}</div>
					</div>
				
					<div id='hostAndRating'>
						<div id='host'>
							<p className='hostName'>{hostName}</p>
							<img className='hostPdp' src={hostPicture} alt="" />
						</div>

						<div id='rating'>
							<Star className='star color' /> <Star className='star color'/> <Star className='star color'/> <Star className='star color'/> <Star className='star color' />
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