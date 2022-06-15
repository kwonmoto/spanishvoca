import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setGameArray } from '../../redux/State/GameArray/reducer';

const GameStartIcon = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const wordList = useSelector(state => state.wordReducer);
	const stateOption = useSelector(state => state.stateOptionReducer);

	const gameArray = () => {
		const filterWord =
			stateOption.category === 'all'
				? wordList
				: wordList.filter(row => row.category === stateOption.category);

		const zeroTryArray = arr => {
			return arr.filter(row => row.gameStat.try === 0).sort((a, b) => Math.random() - 0.5);
		};

		const sortArray = arr => {
			return arr
				.filter(row => row.gameStat.try !== 0)
				.sort((a, b) => {
					const aRate = a.gameStat.answer / a.gameStat.try;
					const bRate = b.gameStat.answer / b.gameStat.try;

					if (aRate === bRate) {
						return Math.random() - 0.5;
					} else return aRate - bRate;
				});
		};

		const zeroLength = zeroTryArray(filterWord).length;
		const sortLength = sortArray(filterWord).length;

		const returnArray = () => {
			const returnZeroLength = () => {
				if (zeroLength < 6) return zeroLength;
				else if (sortLength > 6) return 5;
				else return 10 - sortLength;
			};
			const returnSortLength = () => {
				if (sortLength < 6) return sortLength;
				else if (zeroLength > 6) return 5;
				else return 10 - zeroLength;
			};
			return [
				...zeroTryArray(filterWord).slice(0, returnZeroLength()),
				...sortArray(filterWord).slice(0, returnSortLength()),
			];
		};

		return returnArray().map((row, i) => ({ ...row, gameNum: i, correct: false }));
	};

	const gameStart = () => {
		dispatch(setGameArray(gameArray()));
		navigate('/game/play');
	};

	return (
		<div className="icon" onClick={gameStart}>
			<h4 style={{ margin: 'auto' }}>시작</h4>
		</div>
	);
};

export default GameStartIcon;
