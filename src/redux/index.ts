import { combineReducers } from 'redux';
import stateOptionReducer from './State/StateOption/reducer';
import wordReducer from './Data/Word/reducer';
import inputOptionReducer from './State/InputOption/reducer';
import categoryReducer from './Data/Category/reducer';
import grammarReducer from './Data/Grammar/reducer';
import grammarCategoryReducer from './Data/GrammarCategory/reducer';
import gameArrayReducer from './State/GameArray/reducer';

const rootReducer = combineReducers({
	stateOptionReducer,
	inputOptionReducer,
	wordReducer,
	categoryReducer,
	grammarReducer,
	grammarCategoryReducer,
	gameArrayReducer,
});

export default rootReducer;
