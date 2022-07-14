/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../../Css/Main.scss';
import { logFormat, sortWord } from '../../../Methods';
import { RootState } from '../../../redux';
import { WordRow } from '../../../redux/Data/Word/reducer';
import DeleteIcon from '../../Icon/DeleteIcon';
import EditIcon from '../../Icon/EditIcon';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setStateOption } from '../../../redux/State/StateOption/reducer';

interface WordCardRow extends WordRow {
	categoryName: string;
}
interface Props {
	last: boolean;
	row: WordCardRow;
}

const VocaCard = () => {
	const stateOption = useSelector((state: RootState) => state.stateOptionReducer);
	const word = useSelector((state: RootState) => state.wordReducer);
	const category = useSelector((state: RootState) => state.categoryReducer);

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
		return sortWord(filterList(), stateOption.sort).slice(0, stateOption.nowIndex);
	};

	const rowIncludeCategoryName = (row: WordRow) => ({
		...row,
		categoryName: categoryList.find(obj => obj.id === row.category).name,
	});

	return (
		<div className="CardList">
			{wordList().map((row: WordRow, i: Number) => {
				return (
					<Card
						key={row.id}
						last={i === stateOption.nowIndex - 1}
						row={rowIncludeCategoryName(row)}
					/>
				);
			})}
		</div>
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

	const correctRate =
		row.gameStat.try === 0
			? '0%'
			: ((row.gameStat.answer / row.gameStat.try) * 100).toFixed(1) + '%';

	return (
		<div className="Card" onClick={onClick} ref={isLast}>
			<div className="control">
				{row.gameStat.try !== 0 && <p className="log">{correctRate}</p>}
				{row.gameStat.try !== 0 && (
					<p className="log">{row.gameStat.answer + '/' + row.gameStat.try}</p>
				)}
				<p className="log">{logFormat(row.log)}</p>
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
