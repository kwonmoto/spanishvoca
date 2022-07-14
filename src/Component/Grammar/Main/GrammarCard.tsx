/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import '../../../Css/Main.scss';
import { logFormat, sortGrammar } from '../../../Methods';
import { RootState } from '../../../redux';
import { GrammarRow } from '../../../redux/Data/Grammar/reducer';
import { setStateOption } from '../../../redux/State/StateOption/reducer';
import DeleteIcon from '../../Icon/DeleteIcon';
import EditIcon from '../../Icon/EditIcon';

interface GrammarCardRow extends GrammarRow {
	categoryName: string;
}

interface Props {
	last: boolean;
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
		return sortGrammar(filterList(), stateOption.sort).slice(0, stateOption.nowIndex);
	};

	const rowIncludeCategoryName = (row: GrammarRow) => ({
		...row,
		categoryName: categoryList.find(obj => obj.id === row.category).name,
	});

	return (
		<>
			{grammarList().map((row: GrammarRow, i: Number) => {
				return (
					<Card
						key={row.id}
						last={i === stateOption.nowIndex - 1}
						row={rowIncludeCategoryName(row)}
					/>
				);
			})}
		</>
	);
};

const Card: React.FC<Props> = ({ row, last }) => {
	const stateOption = useSelector((state: RootState) => state.stateOptionReducer);
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);

	const [ref, inView] = useInView();

	useEffect(() => {
		// 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
		if (inView) {
			dispatch(setStateOption('nowIndex', stateOption.nowIndex + 10));
		}
	}, [inView]);

	const isLast = last ? ref : () => {};

	const onClick = () => setShow(!show);

	return (
		<div className="Card" onClick={onClick} ref={isLast}>
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
