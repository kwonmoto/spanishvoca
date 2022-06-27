import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CategoryRow } from '../../redux/Data/Category/reducer';
import { GrammarRow } from '../../redux/Data/Grammar/reducer';
import { WordRow } from '../../redux/Data/Word/reducer';
import { setInputOption } from '../../redux/State/InputOption/reducer';
import { setStateOption } from '../../redux/State/StateOption/reducer';

interface Props {
	type: 'Word' | 'Grammar' | 'Category' | 'GrammarCategory';
	row: WordRow | GrammarRow | CategoryRow;
}

const EditIcon: React.FC<Props> = ({ type, row }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const categoryEdit = () => {
		if ('name' in row) {
			dispatch(setInputOption('newCategory', row.name));
			dispatch(setInputOption('originalCategory', row.name));
			dispatch(setInputOption('id', row.id));
			type === 'Category'
				? navigate('/category/editupload')
				: navigate('/grammarcategory/editupload');
		}
	};

	const objectEdit = () => {
		if (type === 'Word' && 'word' in row) {
			dispatch(setInputOption('word', row.word));
			dispatch(setInputOption('example', row.example));
			dispatch(setStateOption('category', row.category));
			dispatch(setInputOption('translate', row.translate));
		} else if ('sentence' in row) {
			dispatch(setInputOption('sentence', row.sentence));
			dispatch(setStateOption('grammarCategory', row.category));
			dispatch(setInputOption('translate', row.translate));
		}
		dispatch(setInputOption('id', row.id));
		type === 'Word' ? navigate('/voca/edit') : navigate('/grammar/edit');
	};

	const onClick = () => {
		switch (true) {
			case type === 'Category' || type === 'GrammarCategory':
				return categoryEdit();
			default:
				return objectEdit();
		}
	};
	return (
		<div className="icon">
			<FontAwesomeIcon icon={faEdit} onClick={onClick} />
		</div>
	);
};

export default EditIcon;
