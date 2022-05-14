import starWarsApi from '../api/starWarsApi';
import * as actions from '../constants/actions';
import { getFormattedList } from '../utilities/getFormattedList';

export const receiveMovies = (movies) => {
    return { type: actions.RECEIVE_MOVIES, movies }
};

export const fetchMovies = () => async (dispatch) => {
    try {
        const response = await starWarsApi.fetchMovies();
        const formattedMovieList = response.data ?
            getFormattedList( { moviesData: response.data.results }) :
            [];
        return dispatch(receiveMovies(formattedMovieList));
    } catch (error) {
        console.error(error);
    }
};

export const setFilter = (filter) => ({ type: actions.SET_MOVIES_FILTER, filter });

export const setSelectedMovie = (id) => ({ type: actions.SET_MOVIE_ID, id });

export const setSort = (sort) => ({ type: actions.SET_MOVIES_SORT, sort });
