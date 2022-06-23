const SET_WORD_INPUT = 'SET_WORD_INPUT' as const;
const CLEAR_WORD_INPUT = 'CLEAR_WORD_INPUT' as const;

export const setInputOption = (key: string, payload: string) => ({
	type: SET_WORD_INPUT,
	key,
	payload,
});

export const clearInputOption = () => ({
	type: CLEAR_WORD_INPUT,
});

type WordInputOptionAction =
	| ReturnType<typeof setInputOption>
	| ReturnType<typeof clearInputOption>;

type WordInputOption = {
	word: string;
	translate: string;
	example: string;
	sentence: string;
	newCategory: string;
	id: string;
	type: string;
};

const wordInputOption: WordInputOption = {
	word: '',
	translate: '',
	example: '',
	sentence: '',
	newCategory: '',
	id: '',
	type: '',
};

const inputOptionReducer = (
	state: WordInputOption = wordInputOption,
	action: WordInputOptionAction,
) => {
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
