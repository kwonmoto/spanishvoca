import { useDispatch, useSelector } from 'react-redux';
import { setStateOption } from '../../redux/State/StateOption/reducer';

const SelectSort = () => {
	// redux dispatch
	const dispatch = useDispatch();

	// sort
	const sort = useSelector(state => state.stateOptionReducer).sort;

	const handleSelect = e => {
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
				<option key="random" value="random">
					랜덤
				</option>
			</select>
			<p>▼</p>
		</div>
	);
};

export default SelectSort;
