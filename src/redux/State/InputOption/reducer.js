const SET_WORD_INPUT = 'SET_WORD_INPUT';
const CLEAR_WORD_INPUT = 'CLEAR_WORD_INPUT';

export const setInputOption = (key, payload) => ({
	type: SET_WORD_INPUT,
	key,
	payload,
});

export const clearInputOption = () => ({
	type: CLEAR_WORD_INPUT,
});

const wordInputOption = {
	word: '',
	translate: '',
	example: '',
	sentence: '',
	newCategory: '',
	id: '',
	type: '',
};

const inputOptionReducer = (state = wordInputOption, action) => {
	switch (action.type) {
		case SET_WORD_INPUT:
			return { ...state, [action.key]: action.payload };
		case CLEAR_WORD_INPUT:
			return wordInputOption;
		default:
			return state;
	}
};

export default inputOptionReducer;
