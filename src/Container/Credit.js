/* eslint-disable react-hooks/exhaustive-deps */
import MotoMimoticon from '../Image/MotoMimoticon.png';
import Envelope from '../Image/email.png';
import Github from '../Image/github.png';
import Instagram from '../Image/instagram.png';
import { useDispatch } from 'react-redux';
import { setStateOption } from '../redux/State/StateOption/reducer';
import { useEffect } from 'react';

const Credit = () => {
	// redux dispatch
	const dispatch = useDispatch();

	// 초기 세팅 함수
	const changeState = () => {
		dispatch(setStateOption('page', 'credit'));
	};

	// 마운트 시 한 번만 실행
	useEffect(() => {
		changeState();
	}, []);

	return (
		<div className="credit-page">
			<img src={MotoMimoticon} alt="profile" />
			<h3>Kwon HyukJun</h3>
			<div className="row">
				<a href="mailto:spadekwon@gmail.com">
					<img src={Envelope} alt="envelope" />
				</a>
				<a href="https://github.com/kwonmoto" target="_blank" rel="noreferrer">
					<img src={Github} alt="github" />
				</a>
				<a href="https://instagram.com/kwonmoto" target="_blank" rel="noreferrer">
					<img src={Instagram} alt="instagram" />
				</a>
			</div>
			<p>Build: 2022.06.15</p>
		</div>
	);
};

export default Credit;
