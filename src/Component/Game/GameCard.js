import { useSelector } from 'react-redux';

const GameCard = ({ answer }) => {
	const stateOption = useSelector(state => state.stateOptionReducer);
	const gameArray = useSelector(state => state.gameArrayReducer);

	const displayWord = gameArray[stateOption.gameNum] ?? { word: '', translate: '' };

	const changeShowAnswer = () => answer.setShowAnswer(!answer.showAnswer);

	return (
		<div className="game-card" onClick={changeShowAnswer}>
			<p>{stateOption.gameNum + 1 + ' / ' + gameArray.length}</p>
			<h1>{displayWord.word}</h1>
			{answer.showAnswer && <h1>{displayWord.translate}</h1>}
		</div>
	);
};

export default GameCard;
