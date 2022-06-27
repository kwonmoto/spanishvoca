import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CategoryRow } from '../../redux/Data/Category/reducer';
import { GrammarRow } from '../../redux/Data/Grammar/reducer';
import { WordRow } from '../../redux/Data/Word/reducer';
import { setInputOption } from '../../redux/State/InputOption/reducer';
import { setStateOption } from '../../redux/State/StateOption/reducer';

interface Props {
	type: 'Word' | 'Grammar' | 'WordCategory' | 'GrammarCategory';
	row: WordRow | GrammarRow | CategoryRow;
}

const DeleteIcon: React.FC<Props> = ({ type, row }) => {
	const dispatch = useDispatch();

	const deleteData = () => {
		dispatch(setInputOption('type', type));
		dispatch(setInputOption('id', row.id));
		dispatch(setStateOption('offCanvasDelete', true));
	};

	return (
		<div className="icon">
			<FontAwesomeIcon icon={faTrash} onClick={deleteData} />
		</div>
	);
};

export default DeleteIcon;
