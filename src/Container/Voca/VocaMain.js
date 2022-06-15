/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStateOption } from '../../redux/State/StateOption/reducer';
import PlusBtn from '../../Component/Btn/PlusBtn';
import ShuffleBtn from '../../Component/Btn/ShuffleBtn';
import VocaCard from '../../Component/Voca/Main/VocaCard';
import SearchForm from '../../Component/InputForm/SearchForm';

const VocaMain = () => {
	// redux dispatch
	const dispatch = useDispatch();

	// 초기 세팅 함수
	const changeState = () => {
		dispatch(setStateOption('sort', 'latest'));
		dispatch(setStateOption('page', 'vocaMain'));
		dispatch(setStateOption('category', 'all'));
	};

	// 마운트 시 한 번만 실행
	useEffect(() => {
		changeState();
	}, []);

	return (
		<div className="content-container">
			<SearchForm type="voca" />
			<VocaCard />
			<PlusBtn link="/voca/upload" />
			<ShuffleBtn />
		</div>
	);
};

export default VocaMain;
