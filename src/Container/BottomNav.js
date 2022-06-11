import { faBook, faSpellCheck, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Css/Menu.scss';

const BottomNav = () => {
	const [activeNav, setActiveNav] = useState(1);

	const stateOption = useSelector(state => state.stateOptionReducer);

	const condition = stateOption.page === 'vocaMain' || stateOption.page === 'grammarMain';

	return (
		<div>
			{condition && (
				<div className="bottom-nav-wrapper">
					<div>
						<Link to="/voca" className="link" onClick={() => setActiveNav(1)}>
							<FontAwesomeIcon icon={faBook} className={activeNav === 1 ? 'active' : 'inactive'} />
						</Link>
					</div>
					<div>
						<Link to="/grammar" className="link" onClick={() => setActiveNav(2)}>
							<FontAwesomeIcon
								icon={faSpellCheck}
								className={activeNav === 2 ? 'active' : 'inactive'}
							/>
						</Link>
					</div>
					{/* <div>
						<Link to="/game" className="link" onClick={() => setActiveNav(3)}>
							<FontAwesomeIcon
								icon={faGamepad}
								className={activeNav === 3 ? 'active' : 'inactive'}
							/>
						</Link>
					</div> */}
				</div>
			)}
		</div>
	);
};

export default BottomNav;
