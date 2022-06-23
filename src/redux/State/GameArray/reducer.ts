const SET_GAME_ARRAY = 'SET_GAME_ARRAY' as const;
const SET_GAME_ARRAY_KEY = 'SET_GAME_ARRAY_KEY' as const;
const CLEAR_GAME_ARRAY = 'CLEAR_GAME_ARRAY' as const;

export const setGameArray = (payload: string | boolean) => ({
	type: SET_GAME_ARRAY,
	payload,
});

export const setGameArrayKey = (id: string, key: string, payload: string | boolean) => ({
	type: SET_GAME_ARRAY_KEY,
	id,
	key,
	payload,
});

export const clearGameArray = () => ({
	type: CLEAR_GAME_ARRAY,
});

type GameArrayAction =
	| ReturnType<typeof setGameArray>
	| ReturnType<typeof setGameArrayKey>
	| ReturnType<typeof clearGameArray>;

type GameStat = {
	answer: number;
	try: number;
};

// type TimeStamp = {
// 	answer: number;
// 	try: number;
// };

type GameRow = {
	id: string;
	category: string;
	translate: string;
	word: string;
	gameStat: GameStat;
	example: string;
	gameNum: number;
	// log: TimeStamp;
	correct: boolean;
};

type GameArray = GameRow[];

const gameArray: GameArray = [];

const gameArrayReducer = (state: GameArray = gameArray, action: GameArrayAction) => {
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
