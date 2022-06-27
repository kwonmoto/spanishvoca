import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const GoHomeIcon = () => {
	// navigate
	const navigate = useNavigate();

	const goHome = () => navigate('/');

	return (
		<div className="icon" onClick={goHome}>
			<FontAwesomeIcon icon={faHome} size="1x" />
		</div>
	);
};

export default GoHomeIcon;
