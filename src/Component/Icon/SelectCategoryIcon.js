import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setStateOption } from '../../redux/State/StateOption/reducer';

const SelectCategoryIcon = ({ type }) => {
	// redux dispatch
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const stateOption = useSelector(state => state.stateOptionReducer);

	const selectCategory = () => {
		if (type === 'category') {
			dispatch(setStateOption('category', stateOption.categorySelect));
		} else {
			dispatch(setStateOption('grammarCategory', stateOption.grammarCategorySelect));
		}
		navigate(-1);
	};

	return (
		<div className="icon" onClick={selectCategory}>
			<h4 style={{ margin: 'auto' }}>완료</h4>
		</div>
	);
};

export default SelectCategoryIcon;
