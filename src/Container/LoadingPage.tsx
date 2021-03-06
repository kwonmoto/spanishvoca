import React from 'react';
import logo from '../Image/loadinglogo.png';

const LoadingPage = () => {
	return (
		<div className="outer">
			<img className="inner" src={logo} alt="logo" />
			<h4>Now Loading...</h4>
		</div>
	);
};

export default LoadingPage;
