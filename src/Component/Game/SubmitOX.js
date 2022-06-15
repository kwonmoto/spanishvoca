import { faO, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setGameArrayKey } from '../../redux/State/GameArray/reducer';
import { setStateOption } from '../../redux/State/StateOption/reducer';

const SubmitOX = ({ answer }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const stateOption = useSelector(state => state.stateOptionReducer);
	const gameArray = useSelector(state => state.gameArrayReducer);

	const displayWord = gameArray[stateOption.gameNum];

	const changeCorrect = right => {
		dispatch(setGameArrayKey(displayWord.id, 'correct', right));
		answer.setShowAnswer(false);
		if (stateOption.gameNum + 1 !== gameArray.length) {
			dispatch(setStateOption('gameNum', stateOption.gameNum + 1));
		} else {
			navigate('/game/result');
		}
	};

	return (
		<div className="submitOX">
			<div className="btn" onClick={() => changeCorrect(true)}>
				<FontAwesomeIcon icon={faO} size="2x" />
			</div>
			<div className="btn" onClick={() => changeCorrect(false)}>
				<FontAwesomeIcon icon={faX} size="2x" />
			</div>
		</div>
	);
};

export default SubmitOX;
