/* eslint-disable react-hooks/exhaustive-deps */
import './Css/App.css';
import db from './firebase';
import VocaMain from './Container/Voca/VocaMain';
import { Route, Routes, useLocation } from 'react-router-dom';
import BottomNav from './Container/BottomNav';
import VocaUpload from './Container/Voca/VocaUpload';
import TopNav from './Container/TopNav';
import CategoryMain from './Container/Category/CategoryMain';
import CategoryUpload from './Container/Category/CategoryUpload';
import GrammarMain from './Container/Grammar/GrammarMain';
import GrammarCategoryMain from './Container/GrammarCategory/GrammarCategoryMain';
import GrammarUpload from './Container/Grammar/GrammarUpload';
import { useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryList } from './redux/Data/Category/reducer';
import { getGrammarCategoryList } from './redux/Data/GrammarCategory/reducer';
import { getWordList } from './redux/Data/Word/reducer';
import { getGrammarList } from './redux/Data/Grammar/reducer';
import { setStateOption } from './redux/State/StateOption/reducer';
import GrammarCategoryUpload from './Container/GrammarCategory/GrammarCategoryUpload';
import Credit from './Container/Credit';
import OffCanvasMenu from './Container/OffCanvasMenu';
import GrammarCategoryEdit from './Container/GrammarCategory/GrammarCategoryEdit';
import GrammarCategoryEditUpload from './Container/GrammarCategory/GrammarCategoryEditUpload';
import CategoryEdit from './Container/Category/CategoryEdit';
import CategoryEditUpload from './Container/Category/CategoryEditUpload';
import OffCanvasDelete from './Container/OffCanvasDelete';
import VocaEdit from './Container/Voca/VocaEdit';
import GrammarEdit from './Container/Grammar/GrammarEdit';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LoadingPage from './Container/LoadingPage';

function App() {
	const dispatch = useDispatch();
	const location = useLocation();

	const loading = useSelector(state => state.stateOptionReducer).loading;

	useEffect(() => {
		const wordCollection = query(collection(db, 'Word'), orderBy('log', 'desc'));
		onSnapshot(wordCollection, snapshot => {
			dispatch(getWordList(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))));
		});
		const wordCategoryCollection = query(
			collection(db, 'WordCategory'),
			orderBy('nan', 'asc'),
			orderBy('name', 'asc'),
		);
		onSnapshot(wordCategoryCollection, snapshot => {
			dispatch(getCategoryList(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))));
		});
		const grammarCollection = query(collection(db, 'Grammar'), orderBy('log', 'desc'));
		onSnapshot(grammarCollection, snapshot => {
			dispatch(getGrammarList(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))));
		});
		const grammarCategoryCollection = query(
			collection(db, 'GrammarCategory'),
			orderBy('nan', 'asc'),
			orderBy('name', 'asc'),
		);
		onSnapshot(grammarCategoryCollection, snapshot => {
			dispatch(getGrammarCategoryList(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))));
		});
	}, []);

	useEffect(() => {
		loading && setTimeout(() => dispatch(setStateOption('loading', false)), 1000);
	}, [loading]);
	return (
		<div>
			{loading ? (
				<LoadingPage />
			) : (
				<div className="App">
					<OffCanvasMenu />
					<OffCanvasDelete />
					<TopNav />
					<BottomNav />
					<TransitionGroup className="transitions-wrapper">
						<CSSTransition key={location.pathname} classNames="right" timeout={300}>
							<Routes location={location}>
								<Route path="/" element={<VocaMain />} />
								<Route path="/voca" element={<VocaMain />} />
								<Route path="/voca/upload" element={<VocaUpload />} />
								<Route path="/voca/edit" element={<VocaEdit />} />
								<Route path="/category" element={<CategoryMain />} />
								<Route path="/category/upload" element={<CategoryUpload />} />
								<Route path="/category/edit" element={<CategoryEdit />} />
								<Route path="/category/editupload" element={<CategoryEditUpload />} />
								<Route path="/grammar" element={<GrammarMain />} />
								<Route path="/grammar/upload" element={<GrammarUpload />} />
								<Route path="/grammar/edit" element={<GrammarEdit />} />
								<Route path="/grammarcategory" element={<GrammarCategoryMain />} />
								<Route path="/grammarcategory/upload" element={<GrammarCategoryUpload />} />
								<Route path="/grammarcategory/edit" element={<GrammarCategoryEdit />} />
								<Route path="/grammarcategory/editupload" element={<GrammarCategoryEditUpload />} />
								<Route path="/game" element={<VocaMain />} />
								<Route path="/game/play" element={<VocaMain />} />
								<Route path="/credit" element={<Credit />} />
							</Routes>
						</CSSTransition>
					</TransitionGroup>
				</div>
			)}
		</div>
	);
}

export default App;
