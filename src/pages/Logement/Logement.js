import { useParams, Navigate } from "react-router-dom";
import data from '../../assets/data/data.json';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import Collapse from '../../components/Collapse/Collapse';
import Rating from '../../components/Rating/Rating';
import '../../styles/page.scss';
import '../../styles/body.scss';
import './logement.scss'

const Logement = () => {

	const idLogement = useParams('id').id;
	const dataLogement = data.find(data => data.id === idLogement);
	
	if (!dataLogement) {
		return <Navigate replace={false} to="/404"/>
	  };

	const title = dataLogement.title;
	const rating = dataLogement.rating;
	const description  = dataLogement.description;
	const equipments = dataLogement.equipments;
	const location = dataLogement.location;
	const tags = dataLogement.tags;
	const hostName = dataLogement.host.name.split(' ');
	const hostPicture = dataLogement.host.picture;
	const pictures = dataLogement.pictures;

    return (
		<div>
        	<div className='page'>
				<Header/>
				<Carousel pictures={pictures}/>
				<div className='infoContainer'>
					<div id='info'>
						<h2 className='title'>{title}</h2>
						<p className='city'>{location}</p>
						<div id='tags'>{tags.map((tags,index)=>{
							return(
								<div className='tags' key={index}>{tags}</div>
							)
						})}</div>
					</div>
				
					<div id='hostAndRating'>
						<div id='host'>
							<p className='hostName'>{hostName[0]}<br/>{hostName[1]}</p>
							<img className='hostPdp' src={hostPicture} alt="" />
						</div>

						<div id='rating'>
							< Rating note={rating}/>
						</div>
					</div>
				</div>

				<div id='collapseLogement'>
					<Collapse key={0} categorie="Description" description={description}/>
					<span id='space'></span>
					<Collapse key={1} categorie="Équipements" description={equipments.map((equipments,index)=>{
						return(
								<p key={index}>{equipments}</p>
				
						)
					})}/>
				</div>

        	</div>
			<Footer/>
		</div>
    );
};

export default Logement;