import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseDahsboardPage } from '../../components/ExpenseDahsboardPage';

test('Should render Expense Dahsboard Page', () => {
    const wrapper = shallow(<ExpenseDahsboardPage />);
    expect(wrapper).toMatchSnapshot();
});