import { SET_MOVIES_FILTER } from '../constants/actions';
import { NO_FILTER } from '../constants/filters';

const initialState = {
    type: NO_FILTER,
    input: '',
};

const filterReducer = (state = initialState, { type = '', filter = initialState } ) => {
    switch (type) {
        case SET_MOVIES_FILTER:
            return filter;
        default:
            return state;
    }
};
export default filterReducer;