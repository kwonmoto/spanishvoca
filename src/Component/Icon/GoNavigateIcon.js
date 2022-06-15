import { doc, increment, setDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import db from '../../firebase';

const GoNavigateIcon = () => {
	const navigate = useNavigate();
	const goNavi = () => {
		gameArray.forEach(async row => {
			await setDoc(
				doc(db, 'Word', row.id),
				{ gameStat: { answer: row.correct ? increment(1) : increment(0), try: increment(1) } },
				{ merge: true },
			);
		});
		navigate('/game');
	};

	const gameArray = useSelector(state => state.gameArrayReducer);

	return (
		<div className="icon" onClick={goNavi}>
			<h4 style={{ margin: 'auto' }}>완료</h4>
		</div>
	);
};

export default GoNavigateIcon;
