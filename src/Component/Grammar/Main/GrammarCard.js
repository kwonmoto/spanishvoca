import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../../Css/Main.scss';
import { logFormat, sortType } from '../../../Methods';
import DeleteIcon from '../../Icon/DeleteIcon';
import EditIcon from '../../Icon/EditIcon';

const GrammarCard = () => {
	const stateOption = useSelector(state => state.stateOptionReducer);
	const grammar = useSelector(state => state.grammarReducer);
	const grammarCategory = useSelector(state => state.grammarCategoryReducer);

	const categoryList = [{ id: 'all', name: '모든 목록' }, ...grammarCategory];

	const grammarList = () => {
		const filterList = () => {
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
		return sortType(filterList(), stateOption.sort);
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
			<p className="log-grammar">{logFormat(row.log.toDate())}</p>
			<h3>{row.sentence}</h3>
			{show && (
				<>
					<h3>{row.translate}</h3>
					<h5>{row.categoryName}</h5>
				</>
			)}
		</div>
	);
};

export default GrammarCard;
