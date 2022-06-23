const GET_GRAMMAR = 'GET_GRAMMAR' as const;

type GameStat = {
	answer: number;
	try: number;
};

type GrammarRow = {
	id: string;
	category: string;
	translate: string;
	sentence: string;
	gameStat: GameStat;
	example: string;
};

type GrammarArray = GrammarRow[];

export const getGrammarList = (payload: GrammarArray) => ({ type: GET_GRAMMAR, payload });

type WordAction = ReturnType<typeof getGrammarList>;

const grammarList: GrammarArray = [];

const grammarReducer = (state: GrammarArray = grammarList, action: WordAction) => {
	switch (action.type) {
		case GET_GRAMMAR:
			return action.payload;
		default:
			return state;
	}
};

export default grammarReducer;
