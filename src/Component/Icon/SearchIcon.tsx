import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { setStateOption } from '../../redux/State/StateOption/reducer';

const SearchIcon = () => {
	// redux dispatch
	const dispatch = useDispatch();

	const stateOption = useSelector((state: RootState) => state.stateOptionReducer);

	const searchToggle = () => {
		dispatch(setStateOption('searchToggle', !stateOption.searchToggle));
	};

	return (
		<div className="icon" onClick={searchToggle}>
			<FontAwesomeIcon icon={faSearch} size="1x" />
		</div>
	);
};

export default SearchIcon;
