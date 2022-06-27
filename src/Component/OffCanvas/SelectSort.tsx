import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { setStateOption } from '../../redux/State/StateOption/reducer';

const SelectSort = () => {
	// redux dispatch
	const dispatch = useDispatch();

	// sort
	const page = useSelector((state: RootState) => state.stateOptionReducer).page;
	const sort = useSelector((state: RootState) => state.stateOptionReducer).sort;

	const handleSelect = (e: { target: { value: string } }) => {
		dispatch(setStateOption('sort', e.target.value));
	};

	return (
		<div className="menu">
			<h2>Sort :</h2>
			<select onChange={handleSelect} value={sort}>
				<option key="latest" value="latest">
					최신 순
				</option>
				<option key="oldest" value="oldest">
					오래된 순
				</option>
				<option key="abc" value="abc">
					단어 오름차순
				</option>
				<option key="zyx" value="zyx">
					단어 내림차순
				</option>
				{page === 'vocaMain' && (
					<>
						<option key="statAsc" value="statAsc">
							정답률 오름차순
						</option>
						<option key="statDesc" value="statDesc">
							정답률 내림차순
						</option>
					</>
				)}
				<option key="random" value="random">
					랜덤
				</option>
			</select>
			<p>▼</p>
		</div>
	);
};

export default SelectSort;
