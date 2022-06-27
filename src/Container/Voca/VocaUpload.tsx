/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputTextForm from '../../Component/InputForm/InputTextForm';
import SelectCategory from '../../Component/Voca/Upload/SelectCategory';

import { setStateOption } from '../../redux/State/StateOption/reducer';
import WarningMessage from '../../Component/WarningMessage';
import { RootState } from '../../redux';
import React from 'react';

const VocaUpload = () => {
	// redux dispatch
	const dispatch = useDispatch();

	// word reducer
	const word = useSelector((state: RootState) => state.wordReducer).map(row =>
		row.word.toLowerCase(),
	);
	const inputOption = useSelector((state: RootState) => state.inputOptionReducer);

	const condition = word.indexOf(inputOption.word.toLowerCase()) !== -1;
	const isNanCondition = inputOption.word === '' || inputOption.translate === '';

	// 초기 세팅 함수
	const changeState = () => {
		dispatch(setStateOption('page', 'vocaUpload'));
	};

	// 마운트 시 한 번만 실행
	useEffect(() => {
		changeState();
	}, []);

	return (
		<div className="content-container">
			<InputTextForm title="단어" optionKey="word" />
			<InputTextForm title="해석" optionKey="translate" />
			<InputTextForm title="예문" optionKey="example" />
			<SelectCategory />
			<WarningMessage message="단어와 해석을 입력해주세요." condition={isNanCondition} />
			<WarningMessage
				message="중복된 단어가 있습니다. 그래도 등록하시겠습니까?"
				condition={condition}
			/>
		</div>
	);
};

export default VocaUpload;
