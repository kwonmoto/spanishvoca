import db from '../../firebase';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearInputOption, setInputOption } from '../../redux/State/InputOption/reducer';
import { setStateOption } from '../../redux/State/StateOption/reducer';

const UploadIcon = ({ type }) => {
	// redux dispatch
	const dispatch = useDispatch();
	// navigate
	const navigate = useNavigate();

	const stateOption = useSelector(state => state.stateOptionReducer);
	const inputOption = useSelector(state => state.inputOptionReducer);
	const category = useSelector(state => state.categoryReducer).map(row => row.name);

	const uploadData = () => {
		if (type === 'voca') {
			const wordCollection = collection(db, 'Word');
			addDoc(wordCollection, {
				word: inputOption.word,
				translate: inputOption.translate,
				example: inputOption.example,
				category: stateOption.category,
				log: new Date(),
			});
			dispatch(clearInputOption());
		} else if (type === 'vocaEdit') {
			const vocaRef = doc(db, 'Word', inputOption.id);
			updateDoc(vocaRef, {
				word: inputOption.word,
				translate: inputOption.translate,
				example: inputOption.example,
				category: stateOption.category,
			});
			dispatch(clearInputOption());
		} else if (type === 'grammar') {
			const grammarCollection = collection(db, 'Grammar');
			addDoc(grammarCollection, {
				sentence: inputOption.sentence,
				translate: inputOption.translate,
				category: stateOption.grammarCategory,
				log: new Date(),
			});
			dispatch(clearInputOption());
		} else if (type === 'grammarEdit') {
			const grammarRef = doc(db, 'Grammar', inputOption.id);
			updateDoc(grammarRef, {
				sentence: inputOption.sentence,
				translate: inputOption.translate,
				category: stateOption.category,
			});
			dispatch(clearInputOption());
		} else if (type === 'category') {
			const categoryCollection = collection(db, 'WordCategory');
			addDoc(categoryCollection, {
				name: inputOption.newCategory,
				nan: 2,
			});
			dispatch(setInputOption('newCategory', ''));
			dispatch(setInputOption('originalCategory', ''));
		} else if (type === 'categoryEdit') {
			const categoryRef = doc(db, 'WordCategory', inputOption.id);
			updateDoc(categoryRef, {
				name: inputOption.newCategory,
			});
			dispatch(setInputOption('newCategory', ''));
			dispatch(setInputOption('originalCategory', ''));
		} else if (type === 'grammarCategory') {
			const categoryCollection = collection(db, 'GrammarCategory');
			addDoc(categoryCollection, {
				name: inputOption.newCategory,
				nan: 2,
			});
			dispatch(setInputOption('newCategory', ''));
			dispatch(setInputOption('originalCategory', ''));
		} else if (type === 'grammarCategoryEdit') {
			const categoryRef = doc(db, 'GrammarCategory', inputOption.id);
			updateDoc(categoryRef, {
				name: inputOption.newCategory,
			});
			dispatch(setInputOption('newCategory', ''));
			dispatch(setInputOption('originalCategory', ''));
		}
		dispatch(setStateOption('category', 'all'));
		navigate(-1);
	};

	const uploadCondition = () => {
		switch (true) {
			case type === 'voca' || type === 'vocaEdit':
				return inputOption.word !== '' && inputOption.translate !== '';
			case type === 'grammar' || type === 'grammarEdit':
				return inputOption.sentence !== '' && inputOption.translate !== '';
			case type === 'category' || type === 'grammarCategory':
				return category.indexOf(inputOption.newCategory) === -1 && inputOption.newCategory !== '';
			default:
				return (
					category.indexOf(inputOption.newCategory) === -1 &&
					inputOption.newCategory !== '' &&
					inputOption.originalCategory !== inputOption.newCategory
				);
		}
	};

	return (
		<div className="icon">
			{uploadCondition() && (
				<div onClick={uploadData}>
					<h4 style={{ margin: 'auto' }}>저장</h4>
				</div>
			)}
		</div>
	);
};

export default UploadIcon;
