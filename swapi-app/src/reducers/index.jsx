
import { combineReducers } from 'redux';
import swapiReducer from './swapiReducer.jsx';

const rootReducer = combineReducers({
    swapi: swapiReducer,
});

export default rootReducer;
