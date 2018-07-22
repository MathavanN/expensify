import uuid from 'uuid';

//Add-Expense
export const addExpense = (
    { 
        description = '', 
        note = '', 
        amount= 0, 
        createdDate = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdDate
    }
});

//Remove-Expense
export const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//Edit-Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});