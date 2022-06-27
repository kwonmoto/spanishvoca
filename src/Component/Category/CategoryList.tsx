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

const CategoryList = () => {
	const stateOption = useSelector((state: RootState) => state.stateOptionReducer);
	const category = useSelector((state: RootState) => state.categoryReducer);

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
		<div className="CardList">
			{categoryList().map(row => {
				return <List key={row.id} row={row} />;
			})}
		</div>
	);
};

const List: React.FC<Props> = ({ row }) => {
	const dispatch = useDispatch();

	const wordList = useSelector((state: RootState) => state.wordReducer);
	const stateOption = useSelector((state: RootState) => state.stateOptionReducer);

	const changeCategory = () =>
		stateOption.categorySelect !== row.id
			? dispatch(setStateOption('categorySelect', row.id))
			: dispatch(setStateOption('categorySelect', ''));

	const checkBox =
		stateOption.categorySelect === row.id ? (
			<FontAwesomeIcon icon={faSquareCheck} />
		) : (
			<FontAwesomeIcon icon={faSquare} />
		);

	const words =
		' (' +
		(row.id === 'all' ? wordList : wordList.filter(obj => obj.category === row.id)).length +
		')';

	return (
		<div className="List" onClick={changeCategory}>
			<div className="checkbox">{checkBox}</div>
			<div className="name">{row.name + words}</div>
		</div>
	);
};

export default CategoryList;
