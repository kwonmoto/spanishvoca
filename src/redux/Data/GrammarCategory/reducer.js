const GET_GRAMMAR_CATEGORY = 'GET_GRAMMAR_CATEGORY';

export const getGrammarCategoryList = payload => ({ type: GET_GRAMMAR_CATEGORY, payload });

const categoryList = [];

const grammarCategoryReducer = (state = categoryList, action) => {
	switch (action.type) {
		case GET_GRAMMAR_CATEGORY:
			return action.payload;
		default:
			return state;
	}
};

export default grammarCategoryReducer;
