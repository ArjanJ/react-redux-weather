import { combineReducers } from 'redux';
import weather from './weather';
import location from './location';

const rootReducer = combineReducers({
	weather,
	location
});

export default rootReducer;
