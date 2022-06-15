import { useSelector } from 'react-redux';

const VocaCard = () => {
	const gameArray = useSelector(state => state.gameArrayReducer);

	return (
		<div className="CardList">
			{gameArray.map(row => {
				return <Card key={row.id} row={row} />;
			})}
		</div>
	);
};

const Card = ({ row }) => {
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
