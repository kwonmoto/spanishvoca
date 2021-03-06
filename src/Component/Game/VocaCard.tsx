import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { GameRow } from '../../redux/State/GameArray/reducer';

interface Props {
	row: GameRow;
}

const VocaCard = () => {
	const gameArray = useSelector((state: RootState) => state.gameArrayReducer);

	return (
		<div className="CardList">
			{gameArray.map(row => {
				return <Card key={row.id} row={row} />;
			})}
		</div>
	);
};

const Card: React.FC<Props> = ({ row }) => {
	return (
		<div className={row.correct ? 'result-correct' : 'result-incorrect'}>
			<h5>{row.categoryName}</h5>
			<h2>{row.word}</h2>
			<h3>{row.translate}</h3>
			<h3>{row.example}</h3>
		</div>
	);
};

export default VocaCard;
