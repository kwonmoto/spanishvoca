/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../Css/Input.scss';
import { RootState } from '../../redux';
import { setStateOption } from '../../redux/State/StateOption/reducer';

const SelectCategory = () => {
	// redux dispatch
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const stateOption = useSelector((state: RootState) => state.stateOptionReducer);
	const category = useSelector((state: RootState) => state.categoryReducer);

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
