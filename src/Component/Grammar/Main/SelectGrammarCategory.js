/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../../Css/Main.scss';
import { setStateOption } from '../../../redux/State/StateOption/reducer';

const SelectGrammarCategory = () => {
	// redux dispatch
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const stateOption = useSelector(state => state.stateOptionReducer);
	const category = useSelector(state => state.grammarCategoryReducer);

	const goToCategoryMain = () => {
		navigate('/grammarcategory');
		dispatch(setStateOption('grammarCategorySelect', stateOption.grammarCategory));
		dispatch(setStateOption('categoryAll', true));
	};

	const displayCategoryName =
		stateOption.grammarCategory === 'all' ||
		category.find(row => row.id === stateOption.grammarCategory) === undefined
			? '모든 목록'
			: category.find(row => row.id === stateOption.grammarCategory).name;

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

export default SelectGrammarCategory;
