import '../../Css/Input.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setInputOption } from '../../redux/State/InputOption/reducer';

const InputTextForm = ({ title, optionKey }) => {
	const dispatch = useDispatch();

	const inputOption = useSelector(state => state.inputOptionReducer);

	const changeOption = e => dispatch(setInputOption(optionKey, e.target.value));

	return (
		<div className="container">
			<input
				type="text"
				onChange={changeOption}
				value={inputOption[optionKey] || ''}
				placeholder={title}
			/>
			<hr />
		</div>
	);
};

export default InputTextForm;
