import { connect } from 'react-redux';
import { getSortedAndFilteredMovies } from '../selectors/getSortedAndFilteredMovies';
import { setSelectedMovie } from '../actions';
import MoviesSideBar from '../components/MoviesSideBar/MovieSideBar';

const mapStateToProps = (state) => {
    return {
        sortedList: getSortedAndFilteredMovies(state),
    };
};

export default connect(mapStateToProps, { setSelectedMovie })(MoviesSideBar);