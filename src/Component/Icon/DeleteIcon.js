import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { setInputOption } from '../../redux/State/InputOption/reducer';
import { setStateOption } from '../../redux/State/StateOption/reducer';

const DeleteIcon = ({ type, row }) => {
	const dispatch = useDispatch();

	const deleteData = () => {
		dispatch(setInputOption('type', type));
		dispatch(setInputOption('id', row.id));
		dispatch(setStateOption('offCanvasDelete', true));
	};

	return <FontAwesomeIcon icon={faTrash} className="icon" onClick={deleteData} />;
};

export default DeleteIcon;
