import { useSelector } from 'react-redux';
import SelectGrammarCategory from '../Component/Grammar/Main/SelectGrammarCategory';
import SelectCategory from '../Component/Voca/Main/SelectCategory';
import '../Css/Menu.scss';
import GoBackIcon from '../Component/Icon/GoBackIcon';
import MenuIcon from '../Component/Icon/MenuIcon';
import SearchIcon from '../Component/Icon/SearchIcon';
import UploadIcon from '../Component/Icon/UploadIcon';
import GoBackUploadIcon from '../Component/Icon/GoBackUploadIcon';
import SelectCategoryIcon from '../Component/Icon/SelectCategoryIcon';
import TitleIcon from '../Component/Icon/TitleIcon';
import GameStartIcon from '../Component/Icon/GameStartIcon';
import GoNavigateIcon from '../Component/Icon/GoNavigateIcon';
import GoHomeIcon from '../Component/Icon/GoHomeIcon';

const TopNav = () => {
	const stateOption = useSelector(state => state.stateOptionReducer);

	const vocaMain = (
		<>
			<MenuIcon />
			<SelectCategory />
			<SearchIcon />
		</>
	);

	const vocaUpload = (
		<>
			<GoBackUploadIcon type="voca" />
			<TitleIcon title="단어 추가" />
			<UploadIcon type="voca" />
		</>
	);

	const vocaEdit = (
		<>
			<GoBackUploadIcon type="voca" />
			<TitleIcon title="단어 수정" />
			<UploadIcon type="vocaEdit" />
		</>
	);

	const categoryMain = (
		<>
			<GoBackIcon />
			<TitleIcon title="그룹 선택" />
			<SelectCategoryIcon type="category" />
		</>
	);

	const categoryUpload = (
		<>
			<GoBackIcon />
			<TitleIcon title="새로운 그룹" />
			<UploadIcon type="category" />
		</>
	);

	const categoryEdit = (
		<>
			<GoBackIcon />
			<TitleIcon title="단어 카테고리 수정" />
			<div className="icon" />
		</>
	);

	const categoryEditUpload = (
		<>
			<GoBackIcon />
			<TitleIcon title="단어 카테고리 수정" />
			<UploadIcon type="categoryEdit" />
		</>
	);

	const grammarMain = (
		<>
			<MenuIcon />
			<SelectGrammarCategory />
			<SearchIcon />
		</>
	);

	const grammarUpload = (
		<>
			<GoBackUploadIcon type="grammar" />
			<TitleIcon title="문장 추가" />
			<UploadIcon type="grammar" />
		</>
	);

	const grammarEdit = (
		<>
			<GoBackUploadIcon type="voca" />
			<TitleIcon title="문법 수정" />
			<UploadIcon type="grammarEdit" />
		</>
	);

	const grammarCategoryMain = (
		<>
			<GoBackIcon />
			<TitleIcon title="그룹 선택" />
			<SelectCategoryIcon type="grammarCategory" />
		</>
	);

	const grammarCategoryUpload = (
		<>
			<GoBackIcon />
			<TitleIcon title="새로운 그룹" />
			<UploadIcon type="grammarCategory" />
		</>
	);

	const grammarCategoryEdit = (
		<>
			<GoBackIcon />
			<TitleIcon title="문법 카테고리 수정" />
			<div className="icon" />
		</>
	);

	const grammarCategoryEditUpload = (
		<>
			<GoBackIcon />
			<TitleIcon title="문법 카테고리 수정" />
			<UploadIcon type="grammarCategoryEdit" />
		</>
	);

	const credit = (
		<>
			<GoBackIcon />
			<TitleIcon title="" />
			<div className="icon" />
		</>
	);

	const gameMain = (
		<>
			<GoHomeIcon />
			<TitleIcon title="게임 카테고리 설정" />
			<GameStartIcon />
		</>
	);

	const gamePlay = (
		<>
			<GoBackIcon />
			<TitleIcon title="게임 플레이" />
			<div className="icon" />
		</>
	);

	const gameResult = (
		<>
			<div className="icon" />
			<TitleIcon title="게임 결과" />
			<GoNavigateIcon />
		</>
	);

	const topNav = () => {
		switch (stateOption.page) {
			case 'vocaMain':
				return vocaMain;
			case 'vocaUpload':
				return vocaUpload;
			case 'vocaEdit':
				return vocaEdit;
			case 'categoryMain':
				return categoryMain;
			case 'categoryUpload':
				return categoryUpload;
			case 'grammarEdit':
				return grammarEdit;
			case 'categoryEdit':
				return categoryEdit;
			case 'categoryEditUpload':
				return categoryEditUpload;
			case 'grammarMain':
				return grammarMain;
			case 'grammarUpload':
				return grammarUpload;
			case 'grammarCategoryMain':
				return grammarCategoryMain;
			case 'grammarCategoryUpload':
				return grammarCategoryUpload;
			case 'grammarCategoryEdit':
				return grammarCategoryEdit;
			case 'grammarCategoryEditUpload':
				return grammarCategoryEditUpload;
			case 'gameMain':
				return gameMain;
			case 'gamePlay':
				return gamePlay;
			case 'gameResult':
				return gameResult;
			case 'credit':
				return credit;
			default:
				return <div />;
		}
	};

	return <div className="top-nav-wrapper">{topNav()}</div>;
};

export default TopNav;
