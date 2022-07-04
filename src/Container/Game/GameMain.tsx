/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SelectCategory from '../../Component/Game/SelectCategory';
import { clearGameArray } from '../../redux/State/GameArray/reducer';
import { setStateOption } from '../../redux/State/StateOption/reducer';

const GameMain = () => {
	// redux dispatch
	const dispatch = useDispatch();

	// 초기 세팅 함수
	const changeState = () => {
		dispatch(setStateOption('page', 'gameMain'));
		dispatch(setStateOption('gameNum', 0));
		dispatch(clearGameArray());
	};

	// 마운트 시 한 번만 실행
	useEffect(changeState, []);

	return (
		<div className="content-container" style={{ marginTop: '30px' }}>
			<SelectCategory />
			<div
				style={{
					background: 'rgb(243, 243, 243)',
					margin: '30px 50px',
					padding: '10px',
					borderRadius: '20px',
				}}
			>
				<h3>단어 게임 기본 출제 비율</h3>
				<p>미출제 문제를 우선 출제</p>
				<p>미출제 문제가 10문제 이하일 경우</p>
				<p>정답률 50% 이하/이상인 문제를 반반 비율로 출제</p>
			</div>
		</div>
	);
};

export default GameMain;
