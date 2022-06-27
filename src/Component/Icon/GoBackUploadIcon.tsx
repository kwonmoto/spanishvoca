import React from 'react';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux';
import { clearInputOption } from '../../redux/State/InputOption/reducer';
import { setStateOption } from '../../redux/State/StateOption/reducer';

interface Props {
	type: string;
}

const GoBackUploadIcon: React.FC<Props> = ({ type }) => {
	// redux dispatch
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const stateOption = useSelector((state: RootState) => state.stateOptionReducer);

	const uploadGoBack = () => {
		if (type === 'voca') {
			!stateOption.categoryAll && stateOption.categorySelect === 'nan'
				? dispatch(setStateOption('category', 'all'))
				: dispatch(setStateOption('category', stateOption.categorySelect));
		} else if (type === 'grammar') {
			!stateOption.categoryAll && stateOption.grammarCategorySelect === 'nan'
				? dispatch(setStateOption('grammarCategory', 'all'))
				: dispatch(setStateOption('grammarCategory', stateOption.grammarCategorySelect));
		}
		dispatch(clearInputOption());
		navigate(-1);
	};

	return (
		<div className="icon" onClick={uploadGoBack}>
			<FontAwesomeIcon icon={faAngleLeft} size="1x" />
		</div>
	);
};

export default GoBackUploadIcon;
