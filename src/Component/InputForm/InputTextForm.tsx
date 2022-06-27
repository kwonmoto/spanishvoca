import '../../Css/Input.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputOptionKey, setInputOption } from '../../redux/State/InputOption/reducer';
import { RootState } from '../../redux';

interface Props {
	title: string;
	optionKey: InputOptionKey;
}

const InputTextForm: React.FC<Props> = ({ title, optionKey }) => {
	const dispatch = useDispatch();

	const inputOption = useSelector((state: RootState) => state.inputOptionReducer);

	const changeOption = (e: React.ChangeEvent<HTMLInputElement>) =>
		dispatch(setInputOption(optionKey, e.target.value));

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
