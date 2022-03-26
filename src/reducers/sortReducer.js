import { SET_MOVIES_SORT } from '../constants/actions';
import { NO_SORT } from '../constants/sorts';

const sortReducer = ( state =  NO_SORT, { type = '', sort = NO_SORT} = {}) => {
    switch(type) {
        case SET_MOVIES_SORT:
            return sort;
        default:
            return state;
    }
};

export default sortReducer;