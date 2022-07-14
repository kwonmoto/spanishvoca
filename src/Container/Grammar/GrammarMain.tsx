/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStateOption } from '../../redux/State/StateOption/reducer';
import PlusBtn from '../../Component/Btn/PlusBtn';
import ShuffleBtn from '../../Component/Btn/ShuffleBtn';
import SearchForm from '../../Component/InputForm/SearchForm';
import GrammarCard from '../../Component/Grammar/Main/GrammarCard';

const GrammarMain = () => {
	// redux dispatch
	const dispatch = useDispatch();

	// 초기 세팅 함수
	const changeState = () => {
		dispatch(setStateOption('sort', 'latest'));
		dispatch(setStateOption('page', 'grammarMain'));
		dispatch(setStateOption('nowIndex', 10));
	};

	// 마운트 시 한 번만 실행
	useEffect(changeState, []);

	return (
		<div className="content-container">
			<SearchForm type="grammar" />
			<GrammarCard />
			<PlusBtn link="/grammar/upload" />
			<ShuffleBtn />
		</div>
	);
};

export default GrammarMain;
