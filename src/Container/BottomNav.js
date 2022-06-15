import { faBook, faSpellCheck, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Css/Menu.scss';

const BottomNav = () => {
	const stateOption = useSelector(state => state.stateOptionReducer);

	const condition =
		stateOption.page === 'vocaMain' ||
		stateOption.page === 'grammarMain' ||
		stateOption.page === 'gameMain';

	const className = page => (stateOption.page === page ? 'active' : 'inactive');

	return (
		<div>
			{condition && (
				<div className="bottom-nav-wrapper">
					<div>
						<Link to="/voca" className="link">
							<FontAwesomeIcon icon={faBook} className={className('vocaMain')} />
						</Link>
					</div>
					<div>
						<Link to="/grammar" className="link">
							<FontAwesomeIcon icon={faSpellCheck} className={className('grammarMain')} />
						</Link>
					</div>
					<div>
						<Link to="/game" className="link">
							<FontAwesomeIcon icon={faGamepad} className={className('gameMain')} />
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default BottomNav;
