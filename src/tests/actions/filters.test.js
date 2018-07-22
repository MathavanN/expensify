import moment from 'moment';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters';

test("should generate set Satrt Date action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test("Should generate set End Date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test("Should generate set sort by date action object", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test("Should generate set sort by amount action object", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test("Should generate set text filter action object", () => {
    const action = setTextFilter('iPhone 8');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'iPhone 8'
    });
});

test("Should generate set text filter action with default object", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});