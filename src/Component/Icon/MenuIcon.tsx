import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { setStateOption } from '../../redux/State/StateOption/reducer';

const MenuIcon = () => {
	// redux dispatch
	const dispatch = useDispatch();

	const stateOption = useSelector((state: RootState) => state.stateOptionReducer);

	const openMenu = () => dispatch(setStateOption('offCanvasToggle', !stateOption.offCanvasToggle));
	return (
		<div className="icon" onClick={openMenu}>
			<FontAwesomeIcon icon={faBars} size="1x" />
		</div>
	);
};

export default MenuIcon;
