import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../../Css/Main.scss';
import DeleteIcon from '../../Icon/DeleteIcon';
import EditIcon from '../../Icon/EditIcon';

const GrammarCard = () => {
	const stateOption = useSelector(state => state.stateOptionReducer);
	const grammar = useSelector(state => state.grammarReducer);
	const grammarCategory = useSelector(state => state.grammarCategoryReducer);

	const categoryList = [{ id: 'all', name: '모든 목록' }, ...grammarCategory];

	const grammarList = () => {
		switch (true) {
			case stateOption.grammarCategory !== 'all' && stateOption.search === '':
				return grammar.filter(row => row.category === stateOption.grammarCategory);
			case stateOption.grammarCategory === 'all' && stateOption.search !== '':
				return grammar.filter(
					row =>
						row.sentence.toLowerCase().indexOf(stateOption.search.toLowerCase()) !== -1 ||
						row.translate.toLowerCase().indexOf(stateOption.search.toLowerCase()) !== -1,
				);
			case stateOption.grammarCategory !== 'all' && stateOption.search !== '':
				return grammar.filter(
					row =>
						row.category === stateOption.grammarCategory &&
						(row.sentence.toLowerCase().indexOf(stateOption.search.toLowerCase()) !== -1 ||
							row.translate.toLowerCase().indexOf(stateOption.search.toLowerCase()) !== -1),
				);
			default:
				return grammar;
		}
	};

	const rowIncludeCategoryName = row => ({
		...row,
		categoryName: categoryList.find(obj => obj.id === row.category).name,
	});

	return (
		<>
			{grammarList().map(row => {
				return <Card key={row.id} row={rowIncludeCategoryName(row)} />;
			})}
		</>
	);
};

const Card = ({ row }) => {
	const [show, setShow] = useState(false);

	const onClick = () => setShow(!show);

	return (
		<div className="Card" onClick={onClick}>
			<div className="control">
				<EditIcon type="Grammar" row={row} />
				<DeleteIcon type="Grammar" row={row} />
			</div>
			<h2>{row.sentence}</h2>
			{show && (
				<>
					<h2>{row.translate}</h2>
					<h5>{row.categoryName}</h5>
				</>
			)}
		</div>
	);
};

export default GrammarCard;
