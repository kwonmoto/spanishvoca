const SET_STATE = 'SET_STATE' as const;
const CLEAR_STATE = 'CLEAR_STATE' as const;

export const setStateOption = (key: string, payload: string | number | boolean) => ({
	type: SET_STATE,
	key,
	payload,
});

export const clearStateOption = () => ({
	type: CLEAR_STATE,
});

type StateOptionAction = ReturnType<typeof setStateOption> | ReturnType<typeof clearStateOption>;

export type SortType = 'latest' | 'oldest' | 'abc' | 'zyx' | 'statAsc' | 'statDesc' | 'random';

export type Page =
	| 'vocaMain'
	| 'vocaUpload'
	| 'vocaEdit'
	| 'categoryMain'
	| 'categoryUpload'
	| 'grammarEdit'
	| 'categoryEdit'
	| 'categoryEditUpload'
	| 'grammarMain'
	| 'grammarUpload'
	| 'grammarCategoryMain'
	| 'grammarCategoryUpload'
	| 'grammarCategoryEdit'
	| 'grammarCategoryEditUpload'
	| 'gameMain'
	| 'gamePlay'
	| 'gameResult'
	| 'credit'
	| '';

interface StateOption {
	category: string;
	grammarCategory: string;
	page: Page;
	search: string;
	sort: SortType;
	categorySelect: string;
	grammarCategorySelect: string;
	searchToggle: boolean;
	categoryAll: boolean;
	offCanvasToggle: boolean;
	offCanvasDelete: boolean;
	loading: boolean;
	deleteModal: boolean;
	gameNum: number;
}

const stateOption: StateOption = {
	category: 'all',
	grammarCategory: 'all',
	page: '',
	search: '',
	sort: 'latest',
	categorySelect: 'all',
	grammarCategorySelect: 'all',
	searchToggle: false,
	categoryAll: true,
	offCanvasToggle: false,
	offCanvasDelete: false,
	loading: true,
	deleteModal: false,
	gameNum: 0,
};

const stateOptionReducer = (state: StateOption = stateOption, action: StateOptionAction) => {
	switch (action.type) {
		case SET_STATE:
			return { ...state, [action.key]: action.payload };
		case CLEAR_STATE:
			return stateOption;
		default:
			return state;
	}
};

export default stateOptionReducer;
