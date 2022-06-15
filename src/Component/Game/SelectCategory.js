/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../Css/Input.scss';
import { setStateOption } from '../../redux/State/StateOption/reducer';

const SelectCategory = () => {
	// redux dispatch
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const stateOption = useSelector(state => state.stateOptionReducer);
	const category = useSelector(state => state.categoryReducer);

	const goToCategoryMain = () => {
		navigate('/category');
		dispatch(setStateOption('categorySelect', stateOption.category));
		dispatch(setStateOption('categoryAll', true));
	};

	const displayCategoryName =
		stateOption.category === 'all'
			? '모든 목록'
			: category.find(row => row.id === stateOption.category).name;

	return (
		<div className="category-select" onClick={goToCategoryMain}>
			{'▶ ' + displayCategoryName}
		</div>
	);
};

export default SelectCategory;
