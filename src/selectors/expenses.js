import moment from 'moment';
//Get Visible expenses
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdDateMoment = moment(expense.createdDate);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdDateMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdDateMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdDate < b.createdDate ? 1 : -1;
        }

        if(sortBy === 'amount')
        {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};