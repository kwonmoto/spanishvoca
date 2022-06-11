/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../../Css/Input.scss';
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
		dispatch(setStateOption('categoryAll', false));
	};

	const displayCategoryName =
		stateOption.grammarCategory === 'all'
			? '모든 목록'
			: category.find(row => row.id === stateOption.grammarCategory).name;

	useEffect(() => {
		stateOption.grammarCategory === 'all' && dispatch(setStateOption('grammarCategory', 'nan'));
	}, []);

	return (
		<div className="category-select" onClick={goToCategoryMain}>
			{'▶ ' + displayCategoryName}
		</div>
	);
};

export default SelectGrammarCategory;
