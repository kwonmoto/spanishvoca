import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../../Css/Main.scss';
import { logFormat, sortGrammar } from '../../../Methods';
import { RootState } from '../../../redux';
import { GrammarRow } from '../../../redux/Data/Grammar/reducer';
import DeleteIcon from '../../Icon/DeleteIcon';
import EditIcon from '../../Icon/EditIcon';

interface GrammarCardRow extends GrammarRow {
	categoryName: string;
}

interface Props {
	row: GrammarCardRow;
}

const GrammarCard = () => {
	const stateOption = useSelector((state: RootState) => state.stateOptionReducer);
	const grammar = useSelector((state: RootState) => state.grammarReducer);
	const grammarCategory = useSelector((state: RootState) => state.grammarCategoryReducer);

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
		return sortGrammar(filterList(), stateOption.sort);
	};

	const rowIncludeCategoryName = (row: GrammarRow) => ({
		...row,
		categoryName: categoryList.find(obj => obj.id === row.category).name,
	});

	return (
		<>
			{grammarList().map((row: GrammarRow) => {
				return <Card key={row.id} row={rowIncludeCategoryName(row)} />;
			})}
		</>
	);
};

const Card: React.FC<Props> = ({ row }) => {
	const [show, setShow] = useState(false);

	const onClick = () => setShow(!show);

	return (
		<div className="Card" onClick={onClick}>
			<div className="control">
				<EditIcon type="Grammar" row={row} />
				<DeleteIcon type="Grammar" row={row} />
			</div>
			<p className="log-grammar">{logFormat(row.log)}</p>
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
