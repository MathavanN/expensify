import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
    const expense = { 
        id: '4',
        description : 'Apple Watch', 
        note : 'Series 3', 
        amount: 99500000, 
        createdDate : moment(0).add(5, 'days').valueOf()
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('Should edit an expense', () => {
    const updates = { 
        description : 'Apple Watchh', 
        note : 'Series 32', 
        amount: 99500000, 
        createdDate : moment(0).add(6, 'days').valueOf()
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state[2]).toEqual({...updates, id: expenses[2].id});
});

test('Should not edit an expense if expense not found', () => {
    const updates = { 
        description : 'Apple Watchh', 
        note : 'Series 32', 
        amount: 99500000, 
        createdDate : moment(0).add(6, 'days').valueOf()
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});