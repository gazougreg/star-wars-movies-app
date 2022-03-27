import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import moviesReducer from './moviesReducer';
import sortReducer from './sortReducer';

const rootReducer = combineReducers({
    filter: filterReducer,
    movies: moviesReducer,
    sort: sortReducer,
});

export default rootReducer;