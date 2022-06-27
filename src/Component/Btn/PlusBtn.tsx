import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../Css/FloatingBtn.scss';

interface Props {
	link: string;
}

const PlusBtn: React.FC<Props> = ({ link }) => {
	return (
		<Link to={link} className="FloatingBtn-second">
			<FontAwesomeIcon icon={faPlus} size="2x" />
		</Link>
	);
};

export default PlusBtn;
