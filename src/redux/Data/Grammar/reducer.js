const GET_GRAMMAR = 'GET_GRAMMAR';

export const getGrammarList = payload => ({ type: GET_GRAMMAR, payload });

const grammarList = [];

const grammarReducer = (state = grammarList, action) => {
	switch (action.type) {
		case GET_GRAMMAR:
			return action.payload;
		default:
			return state;
	}
};

export default grammarReducer;
