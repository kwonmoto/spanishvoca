/* eslint-disable react-hooks/exhaustive-deps */
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
	useEffect(() => {
		changeState();
	}, []);

	return (
		<div className="content-container" style={{ marginTop: '30px' }}>
			<SelectCategory />
		</div>
	);
};

export default GameMain;
