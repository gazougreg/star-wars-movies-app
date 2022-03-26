import { createSelector } from 'reselect';
import { getReleaseYear } from '../utilities/getReleaseYear';
import { getFilteredMovies}  from './getFilteredMovies';
import { NO_SORT, SORT_BY_EPISODE, SORT_BY_YEAR } from '../constants/sorts';

const filteredMovies = (state) => getFilteredMovies(state);
const getSort = (state) => state.sort;

export const getSortedMovies = createSelector(
    [getSort, filteredMovies],
    (sort = NO_SORT, movies = []) => {
        switch(sort) {
            case NO_SORT:
                return movies;
            case SORT_BY_EPISODE:
                return [...movies].sort((a, b) => a.episodeId - b.episodeId);
            case SORT_BY_YEAR:
                return [...movies].sort((a, b) => getReleaseYear(a.releaseDate)
                    - getReleaseYear(b.releaseDate));
            default:
                throw new Error(`There is no ${sort} option`);
        }
    });