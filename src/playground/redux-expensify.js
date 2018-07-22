import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';










store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({description: 'New laptop', note: 'Dell/HP Laptop price', amount: 2000, createdDate: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', note: 'New Coffee', amount: 2, createdDate: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 5000}));

// store.dispatch(setTextFilter('coffee'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
//  store.dispatch(sortByDate());

//  store.dispatch(setStartDate(0));
//  store.dispatch(setEndDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: "rendomId",
        description: "March Rent",
        note: "This is some explanation",
        amount: 1700,
        createdDate: 0
    }],
    filters: {
        text: '',
        sortBy: '', //amount or date
        startDate: undefined,
        endDate: undefined
    }
};

// const user = {
//     name: 'Jen',
//     age: 24
// };

// console.log(
//     {
//         ...user,
//         location: "singapore",
//         age: 29,
//         name: "Mathavan"
//     }
// );