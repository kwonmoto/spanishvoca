import '../../Css/Main.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import EditIcon from '../Icon/EditIcon';
import DeleteIcon from '../Icon/DeleteIcon';
import { RootState } from '../../redux';
import { CategoryRow } from '../../redux/Data/Category/reducer';

interface Props {
	row: CategoryRow;
}

const CategoryEditList = () => {
	const stateOption = useSelector((state: RootState) => state.stateOptionReducer);
	const category = useSelector((state: RootState) => state.categoryReducer).filter(
		row => row.name !== '카테고리 미지정',
	);

	const categoryList = () => {
		if (stateOption.search !== '') {
			return category.filter(row => row.name.indexOf(stateOption.search) !== -1);
		} else return category;
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
	return (
		<div className="List">
			<div className="name">{row.name}</div>
			<DeleteIcon type="WordCategory" row={row} />
			<EditIcon type="Category" row={row} />
		</div>
	);
};

export default CategoryEditList;
