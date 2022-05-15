import React, { useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState(`2022`);

    const yearChangedHandler = (year) => {
        setFilteredYear(year);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    console.log(filteredExpenses)
    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter
                    selected={filteredYear}
                    onYearChanged={yearChangedHandler}
                />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;