/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PlusBtn from '../../Component/Btn/PlusBtn';
import GrammarCategoryList from '../../Component/GrammarCategory/GrammarCategoryList';
import SearchForm from '../../Component/InputForm/SearchForm';
import { setStateOption } from '../../redux/State/StateOption/reducer';

const GrammarCategoryMain = () => {
	// redux dispatch
	const dispatch = useDispatch();

	// 초기 세팅 함수
	const changeState = () => {
		dispatch(setStateOption('page', 'grammarCategoryMain'));
		dispatch(setStateOption('searchToggle', true));
	};

	// 마운트 시 한 번만 실행
	useEffect(changeState, []);

	return (
		<div className="content-container">
			<SearchForm type="category" />
			<GrammarCategoryList />
			<PlusBtn link="/grammarcategory/upload" />
		</div>
	);
};

export default GrammarCategoryMain;
