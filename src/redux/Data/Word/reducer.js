const GET_WORD = 'GET_WORD';

export const getWordList = payload => ({ type: GET_WORD, payload });

const wordList = [];

const wordReducer = (state = wordList, action) => {
	switch (action.type) {
		case GET_WORD:
			return action.payload;
		default:
			return state;
	}
};

export default wordReducer;
