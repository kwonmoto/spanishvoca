const GET_WORD = 'GET_WORD' as const;

interface GameStat {
	answer: number;
	try: number;
}

export interface WordRow {
	id: string;
	category?: string;
	translate?: string;
	word?: string;
	gameStat: GameStat;
	example?: string;
	log?: Date;
}

type WordArray = WordRow[];

export const getWordList = (payload: WordArray) => ({ type: GET_WORD, payload });

type WordAction = ReturnType<typeof getWordList>;

const wordList: WordArray = [];

const wordReducer = (state: WordArray = wordList, action: WordAction) => {
	switch (action.type) {
		case GET_WORD:
			return action.payload;
		default:
			return state;
	}
};

export default wordReducer;
