import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', {description: "New Description", note: "New Noteee"});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'New Description', 
            note: 'New Noteee'
        }
    })
});

test('Should setup add expense action object', ()=> {
    const expenseData = { 
        description: 'Buy iPhone 8', 
        note: 'Buy Gold color phone', 
        amount: 18700, 
        createdDate: 1000
    };
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            //id: uuid(),
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdDate: 0
        }
    });
});