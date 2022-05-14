import { connect } from 'react-redux';
import { fetchMovies } from '../actions';
import App from '../components/App/App';

export default connect(null, { fetchMovies })(App);