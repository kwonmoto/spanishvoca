import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';
import { RootState } from '../redux';
import { GrammarRow } from '../redux/Data/Grammar/reducer';
import { WordRow } from '../redux/Data/Word/reducer';
import { clearInputOption } from '../redux/State/InputOption/reducer';
import { setStateOption } from '../redux/State/StateOption/reducer';

const OffCanvasDelete = () => {
	// redux dispatch
	const dispatch = useDispatch();

	// word list
	const word = useSelector((state: RootState) => state.wordReducer);
	// grammar list
	const grammar = useSelector((state: RootState) => state.grammarReducer);
	// offCanvasDelete
	const offCanvasDelete = useSelector(
		(state: RootState) => state.stateOptionReducer,
	).offCanvasDelete;
	// page type
	const type = useSelector((state: RootState) => state.inputOptionReducer).type;
	// 삭제 대상 카테고리 id
	const deleteID = useSelector((state: RootState) => state.inputOptionReducer).id;

	// onHide function
	const offCanvasClose = () => dispatch(setStateOption('offCanvasDelete', false));

	// delete Data function
	const deleteData = async () => {
		// category Delete function
		const deleteObject = async () => {
			await deleteDoc(doc(db, type, deleteID));
			dispatch(setStateOption('offCanvasDelete', false));
			dispatch(clearInputOption());
		};

		// category Delete function
		const deleteCategory = async () => {
			const list = type === 'WordCategory' ? word : grammar;
			const collection = type === 'WordCategory' ? 'Word' : 'Grammar';
			const deleteList: (WordRow | GrammarRow)[] = (list as any[]).filter(
				(row: WordRow | GrammarRow) => row.category === deleteID,
			);
			deleteList.map(async row => await deleteDoc(doc(db, collection, row.id)));
			await deleteDoc(doc(db, type, deleteID));
			dispatch(setStateOption('offCanvasDelete', false));
			dispatch(clearInputOption());
		};

		switch (true) {
			case type === 'voca' || type === 'grammar':
				return deleteObject();
			default:
				return deleteCategory();
		}
	};

	return (
		<div>
			{offCanvasDelete && (
				<div className="offcanvas">
					<FontAwesomeIcon
						className="close-btn"
						icon={faClose}
						size="2x"
						onClick={offCanvasClose}
					/>
					<div className="menu">
						<h2>삭제하시겠습니까?</h2>
					</div>
					{(type === 'WordCategory' || type === 'GrammarCategory') && (
						<div className="menu" style={{ color: 'red' }}>
							<h5>
								카테고리 삭제 시<br />
								해당 카테고리에 속해 있는 단어도 모두 삭제됩니다.
							</h5>
						</div>
					)}
					<div className="menu">
						<h3 onClick={offCanvasClose} style={{ cursor: 'pointer', marginRight: '50px' }}>
							취소
						</h3>
						<h3 onClick={deleteData} style={{ cursor: 'pointer', color: 'red' }}>
							삭제
						</h3>
					</div>
				</div>
			)}
		</div>
	);
};

export default OffCanvasDelete;
