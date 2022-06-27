import React from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EditCategory from '../Component/OffCanvas/EditCategory';
import SelectSort from '../Component/OffCanvas/SelectSort';
import { setStateOption } from '../redux/State/StateOption/reducer';
import { RootState } from '../redux';

const OffCanvasMenu = () => {
	// navigate
	const navigate = useNavigate();

	// redux dispatch
	const dispatch = useDispatch();

	// offCanvasToggle
	const offCanvasToggle = useSelector(
		(state: RootState) => state.stateOptionReducer,
	).offCanvasToggle;

	// onHide function
	const offCanvasClose = () => dispatch(setStateOption('offCanvasToggle', false));

	// goToCredit function
	const goToCredit = () => {
		dispatch(setStateOption('offCanvasToggle', false));
		navigate('/credit');
	};

	return (
		<div>
			{offCanvasToggle && (
				<div className="offcanvas">
					<FontAwesomeIcon
						className="close-btn"
						icon={faClose}
						size="2x"
						onClick={offCanvasClose}
					/>
					<SelectSort />
					<EditCategory />
					<div className="credit" onClick={goToCredit}>
						<h3>Credit</h3>
					</div>
				</div>
			)}
		</div>
	);
};

export default OffCanvasMenu;
