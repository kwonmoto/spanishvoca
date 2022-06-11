const SET_STATE = 'SET_STATE';
const CLEAR_STATE = 'CLEAR_STATE';

export const setStateOption = (key, payload) => ({
	type: SET_STATE,
	key,
	payload,
});

export const clearStateOption = () => ({
	type: CLEAR_STATE,
});

const stateOption = {
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

const stateOptionReducer = (state = stateOption, action) => {
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
