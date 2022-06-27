import { CategoryArray } from '../Category/reducer';

const GET_GRAMMAR_CATEGORY = 'GET_GRAMMAR_CATEGORY' as const;

export const getGrammarCategoryList = (payload: CategoryArray) => ({
	type: GET_GRAMMAR_CATEGORY,
	payload,
});

type GrammarCategoryAction = ReturnType<typeof getGrammarCategoryList>;

const categoryList: CategoryArray = [];

const grammarCategoryReducer = (
	state: CategoryArray = categoryList,
	action: GrammarCategoryAction,
) => {
	switch (action.type) {
		case GET_GRAMMAR_CATEGORY:
			return action.payload;
		default:
			return state;
	}
};

export default grammarCategoryReducer;
