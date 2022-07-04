/* eslint-disable react-hooks/exhaustive-deps */
import '../../Css/Game.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStateOption } from '../../redux/State/StateOption/reducer';
import VocaCard from '../../Component/Game/VocaCard';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { RootState } from '../../redux';

const GameResult = () => {
	// redux dispatch
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const gameArray = useSelector((state: RootState) => state.gameArrayReducer);

	// 초기 세팅 함수
	const changeState = () => {
		gameArray.length === 0 && navigate('/game');
		dispatch(setStateOption('page', 'gameResult'));
	};

	// 마운트 시 한 번만 실행
	useEffect(changeState, []);

	return (
		<div className="content-container">
			<VocaCard />
		</div>
	);
};

export default GameResult;
