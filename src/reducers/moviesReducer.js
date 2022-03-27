import { REQUEST_MOVIES, RECEIVE_MOVIES, SET_MOVIE_ID } from '../constants/actions';

const initialState = {
    listOfMovies: [],
    selectedMovieId: 0,
    isLoading: false,
};

const moviesReducer = (state = initialState, { type = '', movies = [], id = 0 }) => {
    switch(type) {
        case REQUEST_MOVIES:
            return {
                ...state,
                isLoading: true,
            };
        case RECEIVE_MOVIES:
            return {
                ...state,
                listOfMovies: movies,
                isLoading: false,
            };
        case SET_MOVIE_ID:
            return {
                ...state,
                selectedMovieId: id,
            };
        default:
            return state;
    }
};

export default moviesReducer;