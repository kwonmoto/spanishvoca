import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../../Css/Main.scss';
import { logFormat, sortType } from '../../../Methods';
import DeleteIcon from '../../Icon/DeleteIcon';
import EditIcon from '../../Icon/EditIcon';

const VocaCard = () => {
	const stateOption = useSelector(state => state.stateOptionReducer);
	const word = useSelector(state => state.wordReducer);
	const category = useSelector(state => state.categoryReducer);

	const categoryList = [{ id: 'all', name: '모든 목록' }, ...category];

	const wordList = () => {
		const filterList = () => {
			switch (true) {
				case stateOption.category !== 'all' && stateOption.search === '':
					return word.filter(row => row.category === stateOption.category);
				case stateOption.category === 'all' && stateOption.search !== '':
					return word.filter(
						row =>
							row.word.toLowerCase().indexOf(stateOption.search.toLowerCase()) !== -1 ||
							row.translate.toLowerCase().indexOf(stateOption.search.toLowerCase()) !== -1,
					);
				case stateOption.category !== 'all' && stateOption.search !== '':
					return word.filter(
						row =>
							row.category === stateOption.category &&
							(row.word.toLowerCase().indexOf(stateOption.search.toLowerCase()) !== -1 ||
								row.translate.toLowerCase().indexOf(stateOption.search.toLowerCase()) !== -1),
					);
				default:
					return word;
			}
		};
		return sortType(filterList(), stateOption.sort);
	};

	const rowIncludeCategoryName = row => ({
		...row,
		categoryName: categoryList.find(obj => obj.id === row.category).name,
	});

	return (
		<div className="CardList">
			{wordList().map(row => {
				return <Card key={row.id} row={rowIncludeCategoryName(row)} />;
			})}
		</div>
	);
};

const Card = ({ row }) => {
	const [show, setShow] = useState(false);

	const onClick = () => setShow(!show);

	const correctRate =
		row.gameStat.try === 0
			? '0%'
			: ((row.gameStat.answer / row.gameStat.try) * 100).toFixed(1) + '%';

	return (
		<div className="Card" onClick={onClick}>
			<div className="control">
				{row.gameStat.try !== 0 && <p className="log">{correctRate}</p>}
				{row.gameStat.try !== 0 && (
					<p className="log">{row.gameStat.answer + '/' + row.gameStat.try}</p>
				)}
				<p className="log">{logFormat(row.log.toDate())}</p>
				<EditIcon type="Word" row={row} />
				<DeleteIcon type="Word" row={row} />
			</div>
			<h5>{row.categoryName}</h5>
			<h2>{row.word}</h2>
			{show && (
				<>
					<h2>{row.translate}</h2>
					<h3>{row.example}</h3>
				</>
			)}
		</div>
	);
};

export default VocaCard;
