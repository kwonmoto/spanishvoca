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

export type InputOptionKey =
	| 'word'
	| 'sentence'
	| 'translate'
	| 'example'
	| 'originalCategory'
	| 'newCategory'
	| 'id'
	| 'type';

type InputOptionAction = ReturnType<typeof setInputOption> | ReturnType<typeof clearInputOption>;

interface InputOption {
	word?: string;
	translate: string;
	example: string;
	sentence?: string;
	originalCategory: string;
	newCategory: string;
	id: string;
	type: string;
}

const inputOption: InputOption = {
	word: '',
	translate: '',
	example: '',
	sentence: '',
	originalCategory: '',
	newCategory: '',
	id: '',
	type: '',
};

const inputOptionReducer = (state: InputOption = inputOption, action: InputOptionAction) => {
	switch (action.type) {
		case SET_WORD_INPUT:
			return { ...state, [action.key]: action.payload };
		case CLEAR_WORD_INPUT:
			return inputOption;
		default:
			return state;
	}
};

export default inputOptionReducer;
