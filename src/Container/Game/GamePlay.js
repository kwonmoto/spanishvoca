/* eslint-disable react-hooks/exhaustive-deps */
import '../../Css/Game.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameCard from '../../Component/Game/GameCard';
import { setStateOption } from '../../redux/State/StateOption/reducer';
import SubmitOX from '../../Component/Game/SubmitOX';
import { useNavigate } from 'react-router-dom';

const GamePlay = () => {
	// redux dispatch
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [showAnswer, setShowAnswer] = useState(false);

	const answer = { showAnswer: showAnswer, setShowAnswer: setShowAnswer };

	const gameArray = useSelector(state => state.gameArrayReducer);

	// 초기 세팅 함수
	const changeState = () => {
		dispatch(setStateOption('page', 'gamePlay'));
	};

	// 마운트 시 한 번만 실행
	useEffect(() => {
		gameArray.length === 0 && navigate('/game');
		changeState();
	}, []);

	return (
		<div className="content-container">
			<GameCard answer={answer} />
			<SubmitOX answer={answer} />
		</div>
	);
};

export default GamePlay;
