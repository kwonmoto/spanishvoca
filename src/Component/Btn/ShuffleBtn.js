import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import '../../Css/FloatingBtn.scss';
import { setStateOption } from '../../redux/State/StateOption/reducer';

const ShuffleBtn = () => {
	const dispatch = useDispatch();

	const changeState = () => dispatch(setStateOption('sort', 'random'));

	return (
		<div className="FloatingBtn-first" onClick={changeState}>
			<FontAwesomeIcon icon={faShuffle} size="2x" />
		</div>
	);
};

export default ShuffleBtn;
