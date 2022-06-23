const SET_STATE = 'SET_STATE' as const;
const CLEAR_STATE = 'CLEAR_STATE' as const;

export const setStateOption = (key: string, payload: string | boolean) => ({
	type: SET_STATE,
	key,
	payload,
});

export const clearStateOption = () => ({
	type: CLEAR_STATE,
});

type StateOptionAction = ReturnType<typeof setStateOption> | ReturnType<typeof clearStateOption>;

type StateOption = {
	category: string;
	grammarCategory: string;
	page: string;
	search: string;
	sort: string;
	categorySelect: string;
	grammarCategorySelect: string;
	searchToggle: boolean;
	categoryAll: boolean;
	offCanvasToggle: boolean;
	loading: boolean;
	deleteModal: boolean;
};

const stateOption: StateOption = {
	category: 'all',
	grammarCategory: 'all',
	page: '',
	search: '',
	sort: 'newest',
	categorySelect: 'all',
	grammarCategorySelect: 'all',
	searchToggle: false,
	categoryAll: true,
	offCanvasToggle: false,
	loading: true,
	deleteModal: false,
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
