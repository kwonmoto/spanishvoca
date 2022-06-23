const GET_GRAMMAR_CATEGORY = 'GET_GRAMMAR_CATEGORY' as const;

type GrammarCategoryRow = {
	id: string;
	name: string;
	nan: 1 | 2;
};

type GrammarCategoryArray = GrammarCategoryRow[];

export const getGrammarCategoryList = (payload: GrammarCategoryArray) => ({
	type: GET_GRAMMAR_CATEGORY,
	payload,
});

type GrammarCategoryAction = ReturnType<typeof getGrammarCategoryList>;

const categoryList: GrammarCategoryArray = [];

const grammarCategoryReducer = (
	state: GrammarCategoryArray = categoryList,
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
