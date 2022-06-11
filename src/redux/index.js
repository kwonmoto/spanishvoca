import { combineReducers } from 'redux';
import stateOptionReducer from './State/StateOption/reducer';
import wordReducer from './Data/Word/reducer';
import inputOptionReducer from './State/InputOption/reducer';
import categoryReducer from './Data/Category/reducer';
import grammarReducer from './Data/Grammar/reducer';
import grammarCategoryReducer from './Data/GrammarCategory/reducer';

const rootReducer = combineReducers({
	stateOptionReducer,
	inputOptionReducer,
	wordReducer,
	categoryReducer,
	grammarReducer,
	grammarCategoryReducer,
});

export default rootReducer;
