/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PlusBtn from '../../Component/Btn/PlusBtn';
import GrammarCategoryEditList from '../../Component/GrammarCategory/GrammarCategoryEditList';
import SearchForm from '../../Component/InputForm/SearchForm';
import { setStateOption } from '../../redux/State/StateOption/reducer';

const GrammarCategoryEdit = () => {
	// redux dispatch
	const dispatch = useDispatch();

	// 초기 세팅 함수
	const changeState = () => {
		dispatch(setStateOption('page', 'grammarCategoryEdit'));
		dispatch(setStateOption('searchToggle', true));
	};

	// 마운트 시 한 번만 실행
	useEffect(() => {
		changeState();
	}, []);

	return (
		<div>
			<SearchForm type="category" />
			<GrammarCategoryEditList />
			<PlusBtn link="/grammarcategory/upload" />
		</div>
	);
};

export default GrammarCategoryEdit;
