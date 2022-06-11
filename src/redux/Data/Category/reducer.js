const GET_CATEGORY = 'GET_CATEGORY';

export const getCategoryList = payload => ({ type: GET_CATEGORY, payload });

const categoryList = [];

const categoryReducer = (state = categoryList, action) => {
	switch (action.type) {
		case GET_CATEGORY:
			return action.payload;
		default:
			return state;
	}
};

export default categoryReducer;
