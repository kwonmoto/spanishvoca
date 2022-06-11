import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../Css/FloatingBtn.scss';

const ShuffleBtn = () => {
	return (
		<div className="FloatingBtn-first">
			<FontAwesomeIcon icon={faShuffle} size="2x" />
		</div>
	);
};

export default ShuffleBtn;
