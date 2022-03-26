import filterReducer from '../../reducers/filterReducer';
import {NO_FILTER} from "../../constants/filters";

jest.mock('../../constants/filters', () => ({ NO_FILTER: 'noFilter' }));
jest.mock('../../constants/filters', () => ({ FILTER_BY_INPUT: 'filterByInput' }));
jest.mock('../../constants/actions', () => ({ SET_MOVIES_FILTER: 'filters/setMoviesFilter' }));

describe('filterReducer', () => {
    it('should have initial state', () => {
        expect(filterReducer( undefined, {})).toEqual({
            type: NO_FILTER,
            input: '',
        });
    });

    it('should set type of filter and input, when SET_MOVIES_FILTER is FILTER_BY_INPUT', () => {
        expect(filterReducer({}, {type: 'filters/setMoviesFilter', filter: {
            type: 'filterByInput', input: 'new',
            }})).toEqual({
            type: 'filterByInput',
            input: 'new',
        });
    });

});
