const GET_CATEGORY = 'GET_CATEGORY' as const;

type CategoryRow = {
	id: string;
	name: string;
	nan: 1 | 2;
};

type CategoryArray = CategoryRow[];

export const getCategoryList = (payload: CategoryArray) => ({ type: GET_CATEGORY, payload });

type CategoryAction = ReturnType<typeof getCategoryList>;

const categoryList: CategoryArray = [];

const categoryReducer = (state: CategoryArray = categoryList, action: CategoryAction) => {
	switch (action.type) {
		case GET_CATEGORY:
			return action.payload;
		default:
			return state;
	}
};

export default categoryReducer;
