import { createSelector } from 'reselect';
import { getYear } from '../utilities/getYear';
import { getFilteredMovies}  from './getFilteredMovies';
import { NO_SORT, SORT_BY_EPISODE, SORT_BY_YEAR } from '../constants/sorts';

const filteredMovies = (state) => getFilteredMovies(state);
const getSort = (state) => state.sort;

export const getSortedAndFilteredMovies = createSelector(
    [getSort, filteredMovies],
    (sort = NO_SORT, movies = []) => {
        switch(sort) {
            case NO_SORT:
                return movies;
            case SORT_BY_EPISODE:
                return [...movies].sort((a, b) => a.episodeId - b.episodeId);
            case SORT_BY_YEAR:
                return [...movies].sort((a, b) => getYear(a.releaseDate)
                    - getYear(b.releaseDate));
            default:
                throw new Error(`There is no ${sort} option`);
        }
    });