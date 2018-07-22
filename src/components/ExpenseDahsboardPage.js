import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

export const ExpenseDahsboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList/>
    </div>
);

export default ExpenseDahsboardPage;