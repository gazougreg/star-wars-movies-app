import filterReducer from '../../reducers/filterReducer';

describe('filterReducer', () => {
    it('should have initial state', () => {
        expect(filterReducer( undefined, {})).toEqual({
            type: 'noFilter',
            input: '',
        });
    });

    it('should set type of filter and input, when SET_MOVIES_FILTER is FILTER_BY_INPUT', () => {
        expect(filterReducer({}, { type: 'filters/setMoviesFilter', filter: {
            type: 'filterByInput', input: 'new',
            }})).toEqual({
            type: 'filterByInput',
            input: 'new',
        });
    });

});
