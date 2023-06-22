import React from 'react';
import star from '../../assets/img/star.svg'
import emptyStar from '../../assets/img/grey_star.svg'

const Rating = ({note}) => {
    const stars = [1, 2, 3, 4, 5];
	return (
		<div>
			{stars.map((starNumber) =>
				note >= starNumber ? ( <img key={starNumber.toString()} className="star" src={star} alt="rating star"/>) : ( <img key={starNumber.toString()} className="star" src={emptyStar} alt="empty rating star"/>)
			)}
		</div>
	);
};

export default Rating;