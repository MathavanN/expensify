import getExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toEqual(expenses[0].amount);
});

test('Should correctly add up multiple expenses', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toEqual(114195);
});