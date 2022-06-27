/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../../Css/Main.scss';
import { RootState } from '../../../redux';
import { setStateOption } from '../../../redux/State/StateOption/reducer';

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
		stateOption.category === 'all' ||
		category.find(row => row.id === stateOption.category) === undefined
			? '모든 목록'
			: category.find(row => row.id === stateOption.category).name;

	useEffect(() => {
		category.find(row => row.id === stateOption.category) === undefined &&
			dispatch(setStateOption('category', 'all'));
	}, []);

	return (
		<div className="center" onClick={goToCategoryMain}>
			<strong>{displayCategoryName + ' ▼'}</strong>
		</div>
	);
};

export default SelectCategory;
