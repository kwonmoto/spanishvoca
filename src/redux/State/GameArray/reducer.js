const SET_GAME_ARRAY = 'SET_GAME_ARRAY';
const SET_GAME_ARRAY_KEY = 'SET_GAME_ARRAY_KEY';
const CLEAR_GAME_ARRAY = 'CLEAR_GAME_ARRAY';

export const setGameArray = payload => ({
	type: SET_GAME_ARRAY,
	payload,
});

export const setGameArrayKey = (id, key, payload) => ({
	type: SET_GAME_ARRAY_KEY,
	id,
	key,
	payload,
});

export const clearGameArray = () => ({
	type: CLEAR_GAME_ARRAY,
});

const gameArray = [];

const gameArrayReducer = (state = gameArray, action) => {
	switch (action.type) {
		case SET_GAME_ARRAY:
			return action.payload;
		case SET_GAME_ARRAY_KEY:
			return state.map(row =>
				row.id === action.id ? { ...row, [action.key]: action.payload } : row,
			);
		case CLEAR_GAME_ARRAY:
			return gameArray;
		default:
			return state;
	}
};

export default gameArrayReducer;
