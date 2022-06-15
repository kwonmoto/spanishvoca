import '../../Css/Main.scss';
import { useDispatch, useSelector } from 'react-redux';
import { faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setStateOption } from '../../redux/State/StateOption/reducer';

const CategoryList = () => {
	const stateOption = useSelector(state => state.stateOptionReducer);
	const category = useSelector(state => state.categoryReducer);

	const categoryList = () => {
		switch (true) {
			case stateOption.search !== '':
				return category.filter(row => row.name.indexOf(stateOption.search) !== -1);
			case stateOption.categoryAll && stateOption.search === '':
				return [{ id: 'all', name: '모든 목록' }, ...category];
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

const List = ({ row }) => {
	const dispatch = useDispatch();

	const wordList = useSelector(state => state.wordReducer);
	const stateOption = useSelector(state => state.stateOptionReducer);

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
