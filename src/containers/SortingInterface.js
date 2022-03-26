import { connect } from 'react-redux';
import { setSort } from '../actions';
import SortingInterface from '../components/SortingInterface';

export default connect(null, { setSort })(SortingInterface);