import { connect } from 'react-redux';
import { getSortedMovies } from '../selectors/getSortedMovies';
import { setSelectedMovie } from '../actions';
import MoviesSideBar from '../components/MoviesSideBar';

const mapStateToProps = (state) => {
    return {
        sortedList: getSortedMovies(state),
    };
};

export default connect(mapStateToProps, { setSelectedMovie })(MoviesSideBar);