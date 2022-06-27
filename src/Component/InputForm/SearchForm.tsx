/* eslint-disable react-hooks/exhaustive-deps */
import '../../Css/Input.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStateOption } from '../../redux/State/StateOption/reducer';
import { useEffect } from 'react';
import { RootState } from '../../redux';

interface Props {
	type: string;
}

const SearchForm: React.FC<Props> = ({ type }) => {
	const dispatch = useDispatch();

	const stateOption = useSelector((state: RootState) => state.stateOptionReducer);

	const changeOption = (e: React.ChangeEvent<HTMLInputElement>) =>
		dispatch(setStateOption('search', e.target.value));

	const placeholder = () => {
		switch (type) {
			case 'category':
				return '카테고리 이름을 입력하세요.';
			case 'grammar':
				return '문장 또는 해석을 입력하세요.';
			case 'voca':
				return '단어 또는 해석을 입력하세요.';
			default:
				return '';
		}
	};

	// 초기 세팅 함수
	const changeState = () => {
		dispatch(setStateOption('search', ''));
		dispatch(setStateOption('searchToggle', false));
	};

	// 마운트 시 한 번만 실행
	useEffect(() => {
		changeState();
	}, []);

	return (
		<div>
			{stateOption.searchToggle && (
				<div className="search-container">
					<input
						type="search"
						onChange={changeOption}
						value={stateOption.search || ''}
						placeholder={placeholder()}
					/>
					<hr />
				</div>
			)}
		</div>
	);
};

export default SearchForm;
