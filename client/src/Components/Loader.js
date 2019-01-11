import React from 'react';
import image from '../images/loading.gif'

const Loader = () => {
	return(
		<div className="overlay">
  		<img src={image} alt="loader" />
  	</div>
	)
}

export default Loader