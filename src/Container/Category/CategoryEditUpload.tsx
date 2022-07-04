/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputTextForm from '../../Component/InputForm/InputTextForm';
import { setStateOption } from '../../redux/State/StateOption/reducer';
import WarningMessage from '../../Component/WarningMessage';
import { RootState } from '../../redux';

const CategoryEditUpload = () => {
	// redux dispatch
	const dispatch = useDispatch();

	const category = useSelector((state: RootState) => state.categoryReducer).map(row => row.name);
	const inputOption = useSelector((state: RootState) => state.inputOptionReducer);

	// 초기 세팅 함수
	const changeState = () => {
		dispatch(setStateOption('page', 'categoryEditUpload'));
	};

	const condition =
		category
			.filter(row => row !== inputOption.originalCategory)
			.indexOf(inputOption.newCategory) !== -1;
	const isSameCondition = inputOption.originalCategory === inputOption.newCategory;
	const isNanCondition = inputOption.newCategory === '';

	// 마운트 시 한 번만 실행
	useEffect(changeState, []);

	return (
		<div className="content-container">
			<InputTextForm title="카테고리 이름을 입력해주세요." optionKey="newCategory" />
			<WarningMessage message="중복된 카테고리가 있습니다." condition={condition} />
			<WarningMessage message="동일한 이름으로 수정할 수 없습니다." condition={isSameCondition} />
			<WarningMessage message="이름을 입력해주세요." condition={isNanCondition} />
		</div>
	);
};

export default CategoryEditUpload;
