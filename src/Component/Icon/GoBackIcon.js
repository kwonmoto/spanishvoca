import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const GoBackIcon = () => {
	// navigate
	const navigate = useNavigate();

	const goBack = () => navigate(-1);

	return (
		<div className="icon" onClick={goBack}>
			<FontAwesomeIcon icon={faAngleLeft} size="1x" />
		</div>
	);
};

export default GoBackIcon;
