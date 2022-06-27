import '../../Css/Main.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setStateOption } from '../../redux/State/StateOption/reducer';
import { RootState } from '../../redux';

interface Props {
	row: { id: string; name: string; nan: number };
}

const GrammarCategoryList = () => {
	const stateOption = useSelector((state: RootState) => state.stateOptionReducer);
	const category = useSelector((state: RootState) => state.grammarCategoryReducer);

	const categoryList = () => {
		switch (true) {
			case stateOption.search !== '':
				return category.filter(row => row.name.indexOf(stateOption.search) !== -1);
			case stateOption.categoryAll && stateOption.search === '':
				return [{ id: 'all', name: '모든 목록', nan: 1 }, ...category];
			default:
				return category;
		}
	};

	return (
		<>
			{categoryList().map(row => {
				return <List key={row.id} row={row} />;
			})}
		</>
	);
};

const List: React.FC<Props> = ({ row }) => {
	const dispatch = useDispatch();

	const stateOption = useSelector((state: RootState) => state.stateOptionReducer);

	const changeCategory = () =>
		stateOption.grammarCategorySelect !== row.id
			? dispatch(setStateOption('grammarCategorySelect', row.id))
			: dispatch(setStateOption('grammarCategorySelect', ''));

	const checkBox =
		stateOption.grammarCategorySelect === row.id ? (
			<FontAwesomeIcon icon={faSquareCheck} />
		) : (
			<FontAwesomeIcon icon={faSquare} />
		);

	return (
		<div className="List" onClick={changeCategory}>
			<div className="checkbox">{checkBox}</div>
			<div className="name">{row.name}</div>
		</div>
	);
};

export default GrammarCategoryList;
