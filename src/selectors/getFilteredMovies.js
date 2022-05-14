import { createSelector } from 'reselect';
import { NO_FILTER, FILTER_BY_INPUT } from '../constants/filters';

const getFilter = (state) => state.filter;
const getMovies = (state) => (state.movies ? state.movies.listOfMovies : []);

export const getFilteredMovies = createSelector(
    [getFilter, getMovies],
    ({ type = NO_FILTER, input = '' }, movies) => {
        switch(type) {
           case NO_FILTER:
               return movies;
           case FILTER_BY_INPUT:
               return movies.filter((movie) => movie.title.toLowerCase().includes(input.toLowerCase()));
           default:
               throw new Error(`No ${type} filter`);
       }
    });



