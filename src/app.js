import 'react-dates/initialize';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouters';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses.js';
import {setTextFilter} from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase.js';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', note: 'April month water bill to pay.', amount: 10000, createdDate: 1532190496403}));
store.dispatch(addExpense({description: 'Gas bill', note: 'Monthly gas bill to pay.', amount: 70, createdDate: 1532190496402}));
store.dispatch(addExpense({description: 'rent bill', note: 'Monthly rent bill to pay.', amount: 1095, createdDate:1532190496401}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app')); 
