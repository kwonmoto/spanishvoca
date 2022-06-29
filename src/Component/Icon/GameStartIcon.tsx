import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux';
import { WordRow } from '../../redux/Data/Word/reducer';
import { setGameArray } from '../../redux/State/GameArray/reducer';

const GameStartIcon = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const wordList = useSelector((state: RootState) => state.wordReducer);
	const stateOption = useSelector((state: RootState) => state.stateOptionReducer);

	const gameArray = () => {
		const filterWord =
			stateOption.category === 'all'
				? wordList
				: wordList.filter(row => row.category === stateOption.category);

		const zeroTryArray = (arr: WordRow[]) => {
			return arr.filter(row => row.gameStat.try === 0).sort(() => Math.random() - 0.5);
		};

		const belowFiftyArray = (arr: WordRow[]) => {
			return arr
				.filter(row => row.gameStat.try !== 0 && row.gameStat.answer / row.gameStat.try <= 0.5)
				.sort((a, b) => {
					const aRate = a.gameStat.answer / a.gameStat.try;
					const bRate = b.gameStat.answer / b.gameStat.try;

					if (aRate === bRate) {
						return Math.random() - 0.5;
					} else return aRate - bRate;
				});
		};

		const moreFiftyArray = (arr: WordRow[]) => {
			return arr
				.filter(row => row.gameStat.try !== 0 && row.gameStat.answer / row.gameStat.try > 0.5)
				.sort(() => Math.random() - 0.5);
		};

		const zeroLength = zeroTryArray(filterWord).length;
		const belowFiftyLength = belowFiftyArray(filterWord).length;
		const moreFiftyLength = moreFiftyArray(filterWord).length;

		const returnArray = () => {
			const returnZeroLength = () => {
				return Math.min(10, zeroLength);
			};
			const returnBelowFiftyLength = () => {
				const remainLength = 10 - returnZeroLength();
				const defaultLength = Math.floor(remainLength / 2) + (remainLength % 2);
				if (belowFiftyLength <= defaultLength) return belowFiftyLength;
				else if (moreFiftyLength >= defaultLength) return defaultLength;
				else return remainLength - moreFiftyLength;
			};
			const returnMoreFifyLength = () => {
				const remainLength = 10 - returnZeroLength();
				const defaultLength = Math.floor(remainLength / 2);
				if (moreFiftyLength <= defaultLength) return belowFiftyLength;
				else if (belowFiftyLength >= defaultLength) return defaultLength;
				else return remainLength - belowFiftyLength;
			};
			return [
				...zeroTryArray(filterWord).slice(0, returnZeroLength()),
				...belowFiftyArray(filterWord).slice(0, returnBelowFiftyLength()),
				...moreFiftyArray(filterWord).slice(0, returnMoreFifyLength()),
			].sort(() => Math.random() - 0.5);
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
