const GET_GRAMMAR = 'GET_GRAMMAR' as const;

interface GameStat {
	answer: number;
	try: number;
}

export interface GrammarRow {
	id: string;
	category?: string;
	translate?: string;
	sentence?: string;
	gameStat: GameStat;
	example?: string;
	log?: Date;
}

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
