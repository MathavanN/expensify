import moment from 'moment';
import filterReducers from '../../reducers/filters';

test('Should setup default filter values', () => {
    const state = filterReducers(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should setup sort by amount', () => {
    const state = filterReducers(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('Should setup sort by date', () => {

    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const state = filterReducers(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('Should setup sort by text', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const text = "This is my filter"
    const state = filterReducers(currentState, { type: 'SET_TEXT_FILTER', text });
    expect(state.text).toBe(text);
});

test('Should setup start Date filter', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const startDate = moment(0);
    const state = filterReducers(currentState, { type: 'SET_START_DATE', startDate });
    expect(state.startDate).toEqual(startDate);
});

test('Should setup end Date filter', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const endDate = moment(0);
    const state = filterReducers(currentState, { type: 'SET_END_DATE', endDate });
    expect(state.endDate).toEqual(endDate);
});