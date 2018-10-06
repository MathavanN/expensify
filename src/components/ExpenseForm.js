import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
            createdDate: props.expense ? moment(props.expense.createdDate) : moment(),
            note: props.expense ? props.expense.note : "",
            calendarFocused: false,
            error: ""
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    OnDateChange = (createdDate) => {
        if (createdDate) {
            this.setState(() => ({ createdDate }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: "Please provide description and amount." }));
        }
        else {
            this.setState(() => ({ error: "" }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdDate: this.state.createdDate.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    className="text-input"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input
                    type="text"
                    className="text-input"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                    date={this.state.createdDate}
                    onDateChange={this.OnDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false} //show previous date as well
                />
                <textarea
                    className="textarea"
                    placeholder="Add note for your expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                />
                <div>
                    <button className="button">Save Expense</button>
                </div>
            </form>
        )
    }
}