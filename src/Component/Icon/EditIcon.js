import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setInputOption } from '../../redux/State/InputOption/reducer';
import { setStateOption } from '../../redux/State/StateOption/reducer';

const EditIcon = ({ type, row }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const categoryEdit = () => {
		dispatch(setInputOption('newCategory', row.name));
		dispatch(setInputOption('originalCategory', row.name));
		dispatch(setInputOption('id', row.id));
		type === 'Category'
			? navigate('/category/editupload')
			: navigate('/grammarcategory/editupload');
	};

	const objectEdit = () => {
		if (type === 'Word') {
			dispatch(setInputOption('word', row.word));
			dispatch(setInputOption('example', row.example));
		} else dispatch(setInputOption('sentence', row.sentence));
		dispatch(setInputOption('translate', row.translate));
		dispatch(setStateOption('category', row.category));
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
	return <FontAwesomeIcon icon={faEdit} className="icon" onClick={onClick} />;
};

export default EditIcon;
