import React, { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

interface Props {
	answer: { showAnswer: boolean; setShowAnswer: Dispatch<SetStateAction<boolean>> };
}

const GameCard: React.FC<Props> = ({ answer }) => {
	const stateOption = useSelector((state: RootState) => state.stateOptionReducer);
	const gameArray = useSelector((state: RootState) => state.gameArrayReducer);

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
