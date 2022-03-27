import { connect } from 'react-redux';
import MoviePreview from '../components/MoviePreview';

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.movies.listOfMovies.find(movie => movie.id === state.movies.selectedMovieId) || null,
    };
};

export default connect(mapStateToProps,null)(MoviePreview);